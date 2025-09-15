from fastapi import APIRouter, HTTPException, Depends
from app.models.schemas import UserCreate, UserLogin, UserOut
from app.db.mongo import db
from app.core.security import get_password_hash, verify_password, create_access_token
from datetime import datetime
import uuid

router = APIRouter()

@router.post("/signup", response_model=UserOut)
async def signup(user: UserCreate):
    existing_user = await db["users"].find_one({"user_email": user.user_email})
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")

    user_dict = user.dict()
    user_dict["user_id"] = str(uuid.uuid4())
    user_dict["password"] = get_password_hash(user.password)
    user_dict["create_on"] = datetime.utcnow()
    user_dict["last_update"] = datetime.utcnow()

    await db["users"].insert_one(user_dict)
    return UserOut(**user_dict)

@router.post("/login")
async def login(user: UserLogin):
    db_user = await db["users"].find_one({"user_email": user.user_email})
    if not db_user or not verify_password(user.password, db_user["password"]):
        raise HTTPException(status_code=401, detail="Invalid email or password")

    token = create_access_token({"sub": db_user["user_id"]})
    return {"access_token": token, "token_type": "bearer"}
