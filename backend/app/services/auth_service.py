from ..repositories.user_repository import UserRepository
from ..models.user import UserRole
from ..core.security import get_password_hash, verify_password, create_access_token

class AuthService:
    def __init__(self, user_repository: UserRepository):
        self.user_repository = user_repository

    async def register(self, user_data: dict):
        # Business Logic: Check if user exists
        existing_user = self.user_repository.get_user_by_email(user_data["email"])
        if existing_user:
            return {"status": "error", "message": "Email already registered"}
        
        existing_username = self.user_repository.get_user_by_username(user_data["username"])
        if existing_username:
            return {"status": "error", "message": "Username already taken"}

        # Logic: Real password hash
        user_data["hashed_password"] = get_password_hash(user_data["password"])
        del user_data["password"]

        # Default role if not provided
        if "role" not in user_data:
            user_data["role"] = UserRole.CUSTOMER

        new_user = self.user_repository.create_user(user_data)
        return {"status": "success", "message": "User registered successfully", "user": new_user}

    async def login(self, credentials: dict):
        user = self.user_repository.get_user_by_email(credentials["email"])
        if not user:
            return {"status": "error", "message": "Invalid credentials"}
        
        # Logic: Verify real password hash
        if not verify_password(credentials["password"], user.hashed_password):
            return {"status": "error", "message": "Invalid credentials"}
        
        # Generate token
        access_token = create_access_token(subject=user.email)
        
        return {
            "status": "success", 
            "message": "Login successful", 
            "access_token": access_token, 
            "token_type": "bearer",
            "user": {
                "id": user.id,
                "username": user.username,
                "email": user.email,
                "role": user.role
            }
        }
