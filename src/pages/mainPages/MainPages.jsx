import NotesList from "../../components/notes/NotesList";
import NoteDetails from "../../components/notes/NoteDetails";
import { useState } from "react";
export default function NotesPage() {
  const [isEdit, setEdit] = useState(false);
  const [version, setVersion] = useState(0);
  function createNote() {
    setEdit(true);
  }
  function saveNotes() {
    setVersion((v) => v + 1);
    setEdit(false);
  }
  return (
    <div className="flex h-full">
      <NotesList createNote={createNote} version={version} />
      <NoteDetails isEdit={isEdit} saveNotes={saveNotes} />
    </div>
  );
}
