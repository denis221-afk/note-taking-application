import NotesList from "../../components/notes/NotesList";
import NoteDetails from "../../components/notes/NoteDetails";
import { useSelector } from "react-redux";
import { useNotes } from "../../hooks/useNote";
import { useState, useEffect } from "react";
import NotesErrorBoundary from "../../components/errorBoundary/ErrorBoundary";
export default function NotesPage() {
  const userId = useSelector((state) => state.auth.user.uid);
  const { notes, isLoading, isFetching } = useNotes(userId);
  const [activeNoteId, setActiveNoteId] = useState(null);

  const [mode, setMode] = useState("view"); // "view" або "edit" "create"

  useEffect(() => {
    if (notes?.length > 0) {
      setActiveNoteId(notes[0].id);
    }
  }, [notes]);

  const activeNote = notes?.find((n) => n.id === activeNoteId);
  return (
    <div className="flex h-full">
      <NotesErrorBoundary>
        <NotesList
          setMode={setMode}
          activeNoteId={activeNoteId}
          setActiveNote={setActiveNoteId}
          notes={notes}
          isLoading={isLoading}
          isFetching={isFetching}
        />
      </NotesErrorBoundary>
      <NotesErrorBoundary>
        <NoteDetails note={activeNote} mode={mode} setMode={setMode} />
      </NotesErrorBoundary>
    </div>
  );
}
