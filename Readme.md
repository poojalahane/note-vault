📝 Quick Notes App

A simple and responsive Notes App built with Next.js, Tailwind CSS.
It allows users to sign up, sign in, add, and manage notes.

⚡ Features

Sign Up / Sign In

Add Notes with title and content

Edit Notes inlin

Delete Notes easily

Responsive and professional UI built with Tailwind CSS

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

🚀 Getting Started
1️⃣ Clone the repository
git clone https://github.com/poojalahane/note-vault.git
cd quick-notes
cd frontend

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

![alt text](<Screenshot 2025-09-15 171402.png>)
![alt text](<Screenshot 2025-09-15 171509.png>)
![alt text](<Screenshot 2025-09-15 171614.png>)
