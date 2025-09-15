📝 Quick Notes App

A simple and responsive Notes App built with Next.js, Tailwind CSS, and LocalStorage.
It allows users to sign up, sign in, add, and manage notes directly in the browser without a backend.

⚡ Features

Sign Up / Sign In using LocalStorage (no backend required)

Add Notes with title and content

Edit Notes inline

Delete Notes easily

Responsive and professional UI built with Tailwind CSS

Data persists using LocalStorage

🛠️ Tech Stack

Next.js – Frontend framework

React.js – UI components

Tailwind CSS – Styling

LocalStorage – Storing notes and authentication

📂 Project Structure
quick-notes/
│
├── app/
│ ├── page.jsx # Home page (Notes UI)
│ ├── sign-in/page.jsx # Sign In page
│ ├── sign-up/page.jsx # Sign Up page
│ ├── components/
│ │ └── NoteCard.jsx # Note card component
│ └── hooks/
│ └── useNotes.js # Custom hook for notes logic
│
├── public/ # Images, icons (if any)
├── styles/
│ └── globals.css # Tailwind CSS global styles
├── package.json
└── README.md

🚀 Getting Started
1️⃣ Clone the repository
git clone https://github.com/your-username/quick-notes.git
cd quick-notes

2️⃣ Install dependencies

Make sure you have Node.js (>=18) installed.

npm install

3️⃣ Run the development server
npm run dev

Open http://localhost:3000
to view the app.

🔑 Authentication

Users sign up with email and password, stored in LocalStorage.

On sign in, credentials are validated against stored data.

After login, users can add, edit, and delete notes.

Notes are tied to the logged-in session in LocalStorage.
