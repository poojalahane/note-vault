from fastapi import APIRouter, Depends, HTTPException
from app.models.schemas import NoteCreate, NoteUpdate, NoteOut
from app.db.mongo import db
from app.core.security import get_current_user
from datetime import datetime
import uuid

router = APIRouter()

@router.post("/", response_model=NoteOut)
async def create_note(note: NoteCreate, user: dict = Depends(get_current_user)):
    note_dict = note.dict()
    note_dict["note_id"] = str(uuid.uuid4())
    note_dict["user_id"] = user["user_id"]
    note_dict["created_on"] = datetime.utcnow()
    note_dict["last_update"] = datetime.utcnow()

    await db["notes"].insert_one(note_dict)
    return NoteOut(**note_dict)

@router.get("/", response_model=list[NoteOut])
async def get_notes(user: dict = Depends(get_current_user)):
    notes = await db["notes"].find({"user_id": user["user_id"]}).to_list(100)
    return [NoteOut(**note) for note in notes]

@router.put("/{note_id}", response_model=NoteOut)
async def update_note(note_id: str, note: NoteUpdate, user: dict = Depends(get_current_user)):
    note_data = note.dict(exclude_unset=True)
    note_data["last_update"] = datetime.utcnow()

    result = await db["notes"].find_one_and_update(
        {"note_id": note_id, "user_id": user["user_id"]},
        {"$set": note_data},
        return_document=True
    )

    if not result:
        raise HTTPException(status_code=404, detail="Note not found")
    return NoteOut(**result)

@router.delete("/{note_id}")
async def delete_note(note_id: str, user: dict = Depends(get_current_user)):
    result = await db["notes"].delete_one({"note_id": note_id, "user_id": user["user_id"]})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Note not found")
    return {"msg": "Note deleted"}
