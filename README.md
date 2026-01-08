📝 Note-taking App (JavaScript)

A simple Note-taking web application built with React and Firebase.
Supports authentication, CRUD notes, and real-time updates.

🚀 Features

Authentication: Register and Login with Email/Password

Notes CRUD: Create, Read, Update, Delete notes

Realtime Updates: Notes update automatically for the logged-in user

User-based access: Each user sees only their own notes

Search notes by title or content

🛠 Tech Stack

Frontend: React, React Hooks, Tailwind CSS

Backend / Database: Firebase (Auth + Firestore)

Forms: react-hook-form

Validation: zod

State / Async: React Query

Notifications / UX: sonner / react-hot-toast

Icons: lucide-react

⚡ Installation

Clone the repo

git clone https://github.com/yourusername/note-taking-app.git
cd note-taking-app


Install dependencies

npm install


Create .env file in the root:

VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id


Run the app

npm run dev

🔧 Firebase Setup

Go to Firebase Console
 → Create Project

Enable Authentication → Email/Password

Enable Firestore Database → Production Mode

Set Security Rules:

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /notes/{noteId} {
      allow read, write: if request.auth != null
        && request.auth.uid == resource.data.userId;
    }
  }
}



💡 Highlights

React Query for async fetching and cache

Custom hooks for clean architecture (useNotes)

Firestore security rules enforce user-based access

Forms with react-hook-form + zod for validation

Notifications with sonner for better UX

📌 Next Features

Pin / Archive Notes

Dark Mode

Deploy to Firebase Hosting / Vercel

Optional: Add unit tests with Vitest + React Testing Library

📌 Demo

Add link to live demo if deployed (Firebase Hosting / Vercel)

📜 License

MIT © [Your Name]