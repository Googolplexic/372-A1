import { useState } from "react";
import type { SyntheticEvent } from "react";

interface NoteEditorProps {
  onSave: (title: string, body: string) => void
}

export default function NoteEditor({ onSave }: NoteEditorProps) {

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSave(title, body)
    setTitle("");
    setBody("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="note-editor">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title..."
        />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Body..."
        />
        <button type="submit">Save Note</button>
      </form>
    </>
  );
}