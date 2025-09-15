Notes Taking App — Frontend
Tech Stack

Next.js (React framework)

Redux Toolkit (state management)

React Query + Axios (data fetching)

Tailwind CSS (styling)

Framer Motion (optional animations)

Installation

# go to frontend directory

cd frontend

# install dependencies

npm install

# run development server

npm run dev

# open http://localhost:3000 in your browser

Environment Variables

Create .env.local in frontend/:

NEXT_PUBLIC_API_URL=http://localhost:8000/api
Features Implemented

User Sign In / Sign Up forms

Home page displaying notes list

Add / View / Edit / Delete Notes (connected to backend API)

State managed with Redux Toolkit

Data fetching & caching with React Query

Responsive, custom UI built without pre-made libraries

Tailwind CSS for styling

SEO meta tags support (using <Head> in Next.js pages)

Optional animations (Framer Motion)

Next Steps

Connect with backend API endpoints (FastAPI / Django / Flask)

Add rich text editor for note content (if whitelisted)

Add performance optimizations (dynamic imports, code splitting)
