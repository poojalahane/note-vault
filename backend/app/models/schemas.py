from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime

# USER
class UserCreate(BaseModel):
    user_name: str
    user_email: EmailStr
    password: str

class UserLogin(BaseModel):
    user_email: EmailStr
    password: str

class UserOut(BaseModel):
    user_id: str
    user_name: str
    user_email: EmailStr
    create_on: datetime
    last_update: datetime

# NOTES
class NoteCreate(BaseModel):
    note_title: str
    note_content: str

class NoteUpdate(BaseModel):
    note_title: Optional[str] = None
    note_content: Optional[str] = None

class NoteOut(BaseModel):
    note_id: str
    note_title: str
    note_content: str
    user_id: str
    created_on: datetime
    last_update: datetime
