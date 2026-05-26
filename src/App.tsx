import { useEffect, useState } from 'react'
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

  const selectedNote = notes.find(n => n.id === selectedNoteId);

  function handleDeleteNote(id: number): void {
    setNotes(notes.filter((note) => {
      return note.id != id;
    }));
  }


  return (
    <div className="container">
      <h1>My Notes</h1>
      <div className="two-column">
        <div className="column">
          <NoteEditor onSave={handleSaveNote} />
        </div>
        <div className="column">
          <NoteList
            notes={notes}
            onDelete={handleDeleteNote}
            onSelectNote={(noteId) => setSelectedNoteId(noteId)} />
        </div>
      </div>

      {selectedNote && (
        <div className="modal-backdrop">
          <div className="modal-content">
            <h2>{selectedNote.title}</h2>
            <p>{selectedNote.body}</p>
            <small>{new Date(selectedNote.createdAt).toLocaleString()}</small>

            <button
              onClick={() => setSelectedNoteId(null)}>
              Close
            </button>
            <button
              onClick={() => {
                handleDeleteNote(selectedNote.id);
                setSelectedNoteId(null);
              }}>
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
