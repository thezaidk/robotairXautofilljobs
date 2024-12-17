# RobotAir Backend & Frontend

A full-stack application combining a FastAPI backend and a React Vite frontend. The backend provides API and WebSocket to get live robot status, while the frontend delivers a user-friendly dashboard interface.

## How to Run Locally

### Using Docker

1. **Ensure Docker and Docker Compose are installed.**
2. **Clone the repository:**
   ```bash
   git clone
   cd 
   ```
3. **Run the services:**
   ```bash
   docker-compose up -d
   ```
4. **Access the application:**
   - Backend: [http://localhost:8000](http://localhost:8000)
   - Frontend: [http://localhost:5173](http://localhost:5173)

### Running Manually

#### Backend
1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```
2. **Create and activate a virtual environment:**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```
4. **Run the backend server:**
   ```bash
   uvicorn app.main:app --host 0.0.0.0 --port 8000
   ```

#### Frontend
1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```

The backend will be available at [http://localhost:8000](http://localhost:8000), and the frontend at [http://localhost:5173](http://localhost:5173).

