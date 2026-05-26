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
        <div
          key={note.id}
          className="note-card"
          onClick={() => onSelectNote(note.id)}>
          <h2>{note.title}</h2>
          <button
            className="danger"
            onClick={(e) => {
              e.stopPropagation();
              onDelete(note.id);
            }}>
            Delete
          </button>
        </div>
      ))}
    </>
  );
}