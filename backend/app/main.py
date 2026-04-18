from fastapi import FastAPI
from .middlewares.cors import app_cors
from .routes.auth import auth_router
from .routes.users import users_router
from pydantic import BaseModel
import os
from dotenv import load_dotenv
from sqlalchemy.orm import Session
from .database import get_db, engine, Base

# Create tables if they don't exist (useful for development, but Alembic is preferred)
Base.metadata.create_all(bind=engine)

load_dotenv()

app = FastAPI(
    title="StockFlow Fullstack Project API",
    version="1.0.0",
    description="Fullstack Project API"
)

app_cors(app)

@app.get("/")
async def root():
    return {
        "status": "success",
        "message": "Fullstack Project API",
        "version": "1.0.0"
    }

app.include_router(auth_router, prefix="/api/auth", tags=["Auth"])
app.include_router(users_router, prefix="/api/users", tags=["Users"])

if __name__ == "__main__":
    import uvicorn
    port = int(os.getenv("PORT", 8000))
    uvicorn.run(app, host="0.0.0.0", port=port)