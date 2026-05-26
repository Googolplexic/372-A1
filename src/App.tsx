import { useEffect, useState } from 'react'
import './App.css'
import type { Note } from './types';
import NoteEditor from './NoteEditor';
import NoteList from './NoteList';

function App() {
  const [notes, setNotes] = useState<Note[]>(() => {
    const notesString = localStorage.getItem("notes");

    if (notesString) {
      return JSON.parse(notesString);
    }
    return [];
  });
  const [selectedNoteId, setSelectedNoteId] = useState<number | null>(null);

  const handleSaveNote = (title: string, body: string) => {
    const newId = notes.length > 0 ? Math.max(...notes.map(n => n.id)) + 1 : 1;
    const newNote: Note = {
      id: newId,
      title: title,
      body: body,
      createdAt: Date.now(),
    };

    setNotes([...notes, newNote]);
  };

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function handleDeleteNote(id: number): void {
    setNotes(notes.filter((note) => {
      return note.id != id;
    }));
  }

  return (
    <>
      <NoteEditor onSave={handleSaveNote} />
      <NoteList notes={[]} onDelete={handleDeleteNote}
        onSelectNote={function (noteId: number): void {
          throw new Error('Function not implemented.');
        }} />
    </>
  )
}

export default App
