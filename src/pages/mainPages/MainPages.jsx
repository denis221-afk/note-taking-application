import NotesList from "../../components/notes/NotesList";
import NoteDetails from "../../components/notes/NoteDetails";
import { useState } from "react";
export default function NotesPage() {
  const [isEdit, setEdit] = useState(false);
  function createNote() {
    setEdit(true);
  }

  return (
    <div className="flex h-full">
      <NotesList createNote={createNote}  />
      <NoteDetails isEdit={isEdit}  />
    </div>
  );
}
