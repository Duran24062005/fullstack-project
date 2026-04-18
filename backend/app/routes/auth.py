from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from ..database import get_db
from ..schemas.user import UserCreate, UserLogin
from ..repositories.user_repository import UserRepository
from ..services.auth_service import AuthService

auth_router = APIRouter()

def get_auth_service(db: Session = Depends(get_db)):
    user_repo = UserRepository(db)
    return AuthService(user_repo)

@auth_router.post("/register", status_code=status.HTTP_201_CREATED)
async def register_user(user: UserCreate, auth_service: AuthService = Depends(get_auth_service)):
    result = await auth_service.register(user.model_dump())
    if result["status"] == "error":
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=result["message"])
    return result

@auth_router.post("/login")
async def login_user(credentials: UserLogin, auth_service: AuthService = Depends(get_auth_service)):
    result = await auth_service.login(credentials.model_dump())
    if result["status"] == "error":
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail=result["message"])
    return result

@auth_router.post("/logout")
async def logout_user():
    return {
        "status": "success",
        "message": "User logged out successfully"
    }

@auth_router.get("/me")
async def get_me():
    # This will be updated later with JWT dependency
    return {
        "status": "success",
        "message": "User me successfully"
    }
