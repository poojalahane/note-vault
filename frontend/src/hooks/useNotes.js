"use client";
import { useState, useEffect } from "react";

// LocalStorage key
const NOTES_KEY = "notes_data";

export function useNotes() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load notes from localStorage on mount
  useEffect(() => {
    try {
      setLoading(true);
      const storedNotes = JSON.parse(localStorage.getItem(NOTES_KEY)) || [];
      setNotes(storedNotes);
    } catch (err) {
      setError("Failed to load notes");
    } finally {
      setLoading(false);
    }
  }, []);

  // Save notes to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
  }, [notes]);

  // Create note
  const createNote = (note) => {
    try {
      const newNote = {
        _id: Date.now().toString(), // unique id
        title: note.title || "Untitled",
        content: note.content || "",
        created_on: new Date().toISOString(),
        last_update: new Date().toISOString(),
      };
      setNotes((prev) => [...prev, newNote]);
    } catch (err) {
      setError("Failed to create note");
    }
  };

  // Update note
  const updateNote = (id, updatedNote) => {
    try {
      setNotes((prev) =>
        prev.map((note) =>
          note._id === id
            ? { ...note, ...updatedNote, last_update: new Date().toISOString() }
            : note
        )
      );
    } catch (err) {
      setError("Failed to update note");
    }
  };

  // Delete note
  const deleteNote = (id) => {
    try {
      setNotes((prev) => prev.filter((note) => note._id !== id));
    } catch (err) {
      setError("Failed to delete note");
    }
  };

  return { notes, loading, error, createNote, updateNote, deleteNote };
}

// "use client";
// import { useState, useEffect } from "react";
// import api from "../api/axiosClient";

// export function useNotes() {
//   const [notes, setNotes] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch notes
//   useEffect(() => {
//     const fetchNotes = async () => {
//       try {
//         setLoading(true);
//         const res = await api.get("/notes");
//         setNotes(res.data);
//       } catch (err) {
//         setError(err.message || "Failed to fetch notes");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchNotes();
//   }, []);

//   // Create note
//   const createNote = async (note) => {
//     try {
//       const res = await api.post("/notes", note);
//       setNotes((prev) => [...prev, res.data]);
//     } catch (err) {
//       setError(err.message || "Failed to create note");
//     }
//   };

//   // Update note
//   const updateNote = async (id, updatedNote) => {
//     try {
//       const res = await api.put(`/notes/${id}`, updatedNote);
//       setNotes((prev) =>
//         prev.map((note) => (note._id === id ? res.data : note))
//       );
//     } catch (err) {
//       setError(err.message || "Failed to update note");
//     }
//   };

//   // Delete note
//   const deleteNote = async (id) => {
//     try {
//       await api.delete(`/notes/${id}`);
//       setNotes((prev) => prev.filter((note) => note._id !== id));
//     } catch (err) {
//       setError(err.message || "Failed to delete note");
//     }
//   };

//   return { notes, loading, error, createNote, updateNote, deleteNote };
// }
