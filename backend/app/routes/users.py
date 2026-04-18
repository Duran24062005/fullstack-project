from fastapi import APIRouter

users_router = APIRouter()


@users_router.get("/all")
async def get_all_users():
    """
    Get all users
    Returns: List of user objects
    """
    return []


@users_router.get("/{user_id}")
async def get_user_by_id(user_id: int):
    """
    Get user by ID
    Prams: user_id
    Returns: User object
    """
    return {
        "status": "success",
        "message": f"User with ID {user_id} fetched successfully"
    }

@users_router.put("/{user_id}")
async def update_user(user_id: int):
    """
    Update user by ID
    Prams: user_id
    Returns: User object
    """
    return {
        "status": "success",
        "message": f"User with ID {user_id} updated successfully"
    }

@users_router.delete("/{user_id}")
async def delete_user(user_id: int):
    """
    Delete user by ID
    Prams: user_id
    Returns: User object
    """
    return {
        "status": "success",
        "message": f"User with ID {user_id} deleted successfully"
    }

@users_router.get("/search/{query}")
async def search_users(query: str):
    """
    Search users by query
    Prams: query
    Returns: List of user objects
    """
    return {
        "status": "success",
        "message": f"User with query {query} fetched successfully"
    }

@users_router.get("/search/{query}/limit/{limit}")
async def search_users_with_limit(query: str, limit: int):
    """
    Search users by query with limit
    Prams: query, limit
    Returns: List of user objects
    """
    return {
        "status": "success",
        "message": f"User with query {query} and limit {limit} fetched successfully"
    }
