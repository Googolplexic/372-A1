import type { Note } from "./types";

interface NoteListProps {
  notes: Note[],
  onDelete: (noteId: number) => void,
  onSelectNote: (noteId: number) => void
}

export default function NoteList({ notes, onDelete, onSelectNote }: NoteListProps) {


  return (
    <>
      {notes.map((note: Note) => (
        <div key={note.id} style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
          <h2 onClick={() => onSelectNote(note.id)} key={note.id}>{note.title}</h2>
          <button onClick={() => onDelete(note.id)}>Delete</button>
        </div >
      ))}
    </>
  );
}