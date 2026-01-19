import NotesList from "../../components/notes/NotesList";
import NoteDetails from "../../components/notes/NoteDetails";
import { useSelector } from "react-redux";
import { useNotes } from "../../hooks/useNote";
import { useState, useEffect } from "react";
import NotesErrorBoundary from "../../components/errorBoundary/ErrorBoundary";
export default function NotesPage() {
  const userId = useSelector((state) => state.auth.user.uid);
  const { notes, isLoading, isFetching } = useNotes(userId);
  const [isEdit, setEdit] = useState(false);
  const [activeNoteId, setActiveNoteId] = useState(null);

  useEffect(() => {
    if (!activeNoteId && notes?.length > 0) {
      setActiveNoteId(notes[0].id);
    }
  }, [notes, activeNoteId]);
  function createNoteStatus(isStatus = true) {
    setEdit(isStatus);
  }

  const activeNote = notes?.find((n) => n.id === activeNoteId);
  return (
    <div className="flex h-full">
      <NotesErrorBoundary>
        <NotesList
          createNoteStatus={createNoteStatus}
          activeNoteId={activeNoteId}
          setActiveNote={setActiveNoteId}
          notes={notes}
          isLoading={isLoading}
          isFetching={isFetching}
        />
      </NotesErrorBoundary>
      <NotesErrorBoundary>
        <NoteDetails
          isEdit={isEdit}
          note={activeNote}
          createNoteStatus={createNoteStatus}
        />
      </NotesErrorBoundary>
    </div>
  );
}
