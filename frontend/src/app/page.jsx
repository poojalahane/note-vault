"use client";
import { useState, useEffect } from "react";
import { useNotes } from "../hooks/useNotes";
import { useRouter } from "next/navigation";
import NoteCard from "../components/NoteCard";

export default function Home() {
  const router = useRouter();
  const { notes, loading, error, createNote } = useNotes();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (!loggedIn) {
      router.push("/sign-in");
    }
  }, [router]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  const handleAddNote = (e) => {
    e.preventDefault();
    if (!title.trim() && !content.trim()) return;
    createNote({ title, content });
    setTitle("");
    setContent("");
    setShowForm(false);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 text-center">
        📒 My Notes
      </h1>

      <div className="flex justify-center mb-6">
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition"
        >
          {showForm ? "✖ Close" : "➕ Add Note"}
        </button>
      </div>

      {showForm && (
        <div className="flex justify-center mb-10">
          <form
            onSubmit={handleAddNote}
            className="w-full max-w-lg p-6 rounded-xl bg-white shadow-lg border border-gray-200"
          >
            <h2 className="text-xl font-semibold mb-4 text-gray-800 text-center">
              Add a New Note
            </h2>

            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter note title..."
              className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your note content..."
              rows={4}
              className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition"
            >
              ✅ Save Note
            </button>
          </form>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {notes?.map((note) => (
          <NoteCard key={note._id || note.note_id} note={note} />
        ))}
      </div>
    </div>
  );
}
