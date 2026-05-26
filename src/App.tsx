import { useEffect, useState } from 'react'
import './App.css'
import type { Note } from './types';

function App() {
  const [notes, setNotes] = useState<Note[]>(() => {
    const notesString = localStorage.getItem("notes");

    if (notesString) {
      return JSON.parse(notesString);
    }
    return [];
  });
  const [selectedNoteId, setSelectedNoteId] = useState<number | null>(null);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <>
      {JSON.stringify(notes)}
    </>
  )
}

export default App
