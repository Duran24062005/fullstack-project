from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(
    title="Portfolio API V4",
    version="1.0.0",
    description="Backend migrated to FastAPI"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {
        "status": "success",
        "message": "Portfolio API V4",
        "version": "1.0.0",
        "endpoints": {
            "blogs": "/api/blogs",
            "projects": "/api/projects"
        }
    }

@app.get("/hola")
async def hola():
    return [
        {
            "status": "Succesfully",
            "code": 200
        }
    ]

# User registration route (migrated from users.router.js)
@app.post("/users/register")
async def register_user():
    return "Hola"

@app.get("/users/")
async def get_users():
    return []

if __name__ == "__main__":
    import uvicorn
    port = int(os.getenv("PORT", 3000))
    uvicorn.run(app, host="0.0.0.0", port=port)
