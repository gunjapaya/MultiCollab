# Real-Time Collaboration Platform

A Notion-style team workspace with real-time document editing, commenting, and task management.

## Features
- Real-time multi-user editing
- Commenting system
- Task assignments
- Version history
- User authentication and roles

## Tech Stack
- Frontend: React + Next.js
- Backend: Node.js + Express
- Database: PostgreSQL
- Real-time: Socket.io
- Caching: Redis

## Setup Instructions
1. Clone the repo: `git clone <repo-url>`
2. Install dependencies: `npm install` in both `/frontend` and `/backend`
3. Setup environment variables using `.env.example`
4. Seed the database: `node backend/seed.js`
5. Start backend: `npm run dev` in `/backend`
6. Start frontend: `npm run dev` in `/frontend`
7. Open `http://localhost:3000`

## Setup Instructions On IDE
1️⃣ Install Dependencies
Open two terminals: one for backend, one for frontend.
Backend
cd collab-app/backend
npm install
Frontend
cd collab-app/frontend
npm install
2️⃣ Set Up Environment Variables
Create a .env file in the backend folder (you can copy .env.example):
DATABASE_URL=postgresql://user:password@localhost:5432/collabdb
REDIS_URL=redis://localhost:6379
JWT_SECRET=your_jwt_secret
NEXT_PUBLIC_BACKEND_URL=http://localhost:5000
DATABASE_URL: Replace with your PostgreSQL user/password/db.
REDIS_URL: Replace if using a different Redis setup.
JWT_SECRET: Any secret string for authentication.
Make sure PostgreSQL and Redis are running locally.
3️⃣ Seed the Database
Run the seed script to add demo users, documents, comments, and tasks:
cd collab-app/backend
node seed.js
You should see:
Database seeded
4️⃣ Start the Backend
cd collab-app/backend
npm run dev
Server runs on http://localhost:5000
Socket.io will also start for real-time editing.
5️⃣ Start the Frontend
cd collab-app/frontend
npm run dev
Frontend runs on http://localhost:3000
It will connect to your backend using NEXT_PUBLIC_BACKEND_URL.
6️⃣ Test the App
Open http://localhost:3000
 in your browser.
Login with seeded users:
Alice: alice@example.com / password
Bob: bob@example.com / password
Navigate to dashboard → click a document → start editing.
Add comments and tasks to see live updates.
Open another browser or tab to see real-time collaboration in action.

## Notes
- Secrets have been removed for submission
- Demo data included in `/backend/seed.js`
