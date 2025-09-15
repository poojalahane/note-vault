"use client";
import { useState } from "react";
import { useNotes } from "../hooks/useNotes";

export default function NoteCard({ note }) {
  const { updateNote, deleteNote } = useNotes();
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const handleSave = () => {
    updateNote(note._id, { title, content });
    setIsEditing(false);
  };

  return (
    <div className="bg-white shadow-md rounded-xl border border-gray-200 p-5 hover:shadow-lg transition">
      {isEditing ? (
        <>
          <input
            type="text"
            className="w-full p-3 mb-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
          />
          <textarea
            className="w-full p-3 mb-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter content"
            rows={4}
          />
          <div className="flex gap-3 justify-end">
            <button
              onClick={handleSave}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-lg transition"
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <h3 className="font-semibold text-xl text-gray-900">{note.title}</h3>
          <p className="text-gray-600 mt-2">{note.content}</p>
          <div className="mt-4 flex gap-3 justify-end">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition"
            >
              Edit
            </button>
            <button
              onClick={() => deleteNote(note._id)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}
