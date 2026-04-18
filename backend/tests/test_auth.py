import pytest

def test_register_user(client):
    response = client.post(
        "/api/auth/register",
        json={
            "username": "testuser",
            "email": "testuser@example.com",
            "password": "testpassword",
            "role": "customer"
        }
    )
    assert response.status_code == 201
    data = response.json()
    assert data["status"] == "success"
    assert data["user"]["username"] == "testuser"

def test_register_duplicate_email(client):
    # Register first user
    client.post(
        "/api/auth/register",
        json={
            "username": "user1",
            "email": "duplicate@example.com",
            "password": "password123"
        }
    )
    # Register second user with same email
    response = client.post(
        "/api/auth/register",
        json={
            "username": "user2",
            "email": "duplicate@example.com",
            "password": "password456"
        }
    )
    assert response.status_code == 400
    assert response.json()["detail"] == "Email already registered"

def test_login_success(client):
    # Register user
    client.post(
        "/api/auth/register",
        json={
            "username": "loginuser",
            "email": "login@example.com",
            "password": "correctpassword"
        }
    )
    # Login
    response = client.post(
        "/api/auth/login",
        json={
            "email": "login@example.com",
            "password": "correctpassword"
        }
    )
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "success"
    assert "access_token" in data
    assert data["token_type"] == "bearer"

def test_login_invalid_credentials(client):
    # Register user
    client.post(
        "/api/auth/register",
        json={
            "username": "failuser",
            "email": "fail@example.com",
            "password": "correctpassword"
        }
    )
    # Login with wrong password
    response = client.post(
        "/api/auth/login",
        json={
            "email": "fail@example.com",
            "password": "wrongpassword"
        }
    )
    assert response.status_code == 401
    assert response.json()["detail"] == "Invalid credentials"
