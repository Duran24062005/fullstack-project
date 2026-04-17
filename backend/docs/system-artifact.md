# System Artifact: Backend Architecture

## Technology Stack
- **Language**: Python 3.x
- **Framework**: FastAPI
- **Web Server**: Uvicorn
- **Environment Management**: .env files with `python-dotenv`

## Directory Structure
- `app/`: Contains the main application code.
- `prds/`: Product Requirement Documents.
- `docs/`: System documentation and artifacts.

## Running the Backend
1. Install dependencies: `pip install -r requirements.txt`
2. Run the application: `uvicorn app.main:app --reload --port 3000`
