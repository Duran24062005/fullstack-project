from app.repositories.user_repository import UserRepository
from app.routes.auth import logout_user
from app.services.auth_service import AuthService


def build_auth_service(db):
    return AuthService(UserRepository(db))


def test_register_user(db):
    auth_service = build_auth_service(db)

    data = auth_service.register(
        {
            "username": "testuser",
            "email": "testuser@example.com",
            "password": "testpassword",
            "role": "customer",
        }
    )

    assert data["status"] == "success"
    assert data["user"].username == "testuser"


def test_register_duplicate_email(db):
    auth_service = build_auth_service(db)

    auth_service.register(
        {
            "username": "user1",
            "email": "duplicate@example.com",
            "password": "password123",
        }
    )
    data = auth_service.register(
        {
            "username": "user2",
            "email": "duplicate@example.com",
            "password": "password456",
        }
    )

    assert data["status"] == "error"
    assert data["message"] == "Email already registered"


def test_login_success(db):
    auth_service = build_auth_service(db)

    auth_service.register(
        {
            "username": "loginuser",
            "email": "login@example.com",
            "password": "correctpassword",
        }
    )
    data = auth_service.login(
        {
            "email": "login@example.com",
            "password": "correctpassword",
        }
    )

    assert data["status"] == "success"
    assert "access_token" in data
    assert data["token_type"] == "bearer"
    assert data["user"]["email"] == "login@example.com"


def test_login_invalid_credentials(db):
    auth_service = build_auth_service(db)

    auth_service.register(
        {
            "username": "failuser",
            "email": "fail@example.com",
            "password": "correctpassword",
        }
    )
    data = auth_service.login(
        {
            "email": "fail@example.com",
            "password": "wrongpassword",
        }
    )

    assert data["status"] == "error"
    assert data["message"] == "Invalid credentials"


def test_logout_acknowledges_client_session_teardown(db):
    auth_service = build_auth_service(db)

    data = logout_user(authorization=None, auth_service=auth_service)

    assert data["status"] == "success"
    assert data["message"] == "Logout acknowledged. Client session cleared successfully."
    assert data["revocation_applied"] is False
    assert data["access_token_received"] is False


def test_logout_accepts_bearer_token_without_revocation(db):
    auth_service = build_auth_service(db)

    data = logout_user(authorization="Bearer mock-token", auth_service=auth_service)

    assert data["status"] == "success"
    assert data["access_token_received"] is True
