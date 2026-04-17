# FastAPI Backend

This is the backend of the fullstack project, migrated from Express to FastAPI.

## Structure

```
backend
   |_____app
   |          |____main.py
   |_____prds
   |          |____001-authentication.md
   |_____docs
   |          | 
   |          |____system-artifact.md
   |
   |____requirements.txt
   |
   |____README.md
```

## Getting Started

1. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

2. **Run the development server:**
   ```bash
   uvicorn app.main:app --reload --port 3000
   ```

3. **API Documentation:**
   Once running, visit `http://localhost:3000/docs` for the interactive Swagger UI.
