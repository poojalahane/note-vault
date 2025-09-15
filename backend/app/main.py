from fastapi import FastAPI
from app.db.mongo import connect_db, close_db

app = FastAPI()

@app.on_event("startup")
async def startup_event():
    await connect_db()

@app.on_event("shutdown")
async def shutdown_event():
    await close_db()


# from fastapi import FastAPI

# app = FastAPI()

# @app.get("/")
# def read_root():
#     return {"message": "Hello World"}



# from fastapi import FastAPI
# from app.api import auth, notes
# from app.db.mongo import connect_db, close_db

# app = FastAPI(
#     title="Notes App",
#     description="FastAPI + MongoDB Notes Taking App",
#     version="1.0.0",
# )

# # Event handlers for database
# @app.on_event("startup")
# async def startup_db_client():
#     await connect_db()

# @app.on_event("shutdown")
# async def shutdown_db_client():
#     await close_db()

# # Include routers
# app.include_router(auth.router, prefix="/auth", tags=["Authentication"])
# app.include_router(notes.router, prefix="/notes", tags=["Notes"])
