import NotesList from "../../components/notes/NotesList";
import NoteDetails from "../../components/notes/NoteDetails";
import { useSelector } from "react-redux";
import { useNotes } from "../../hooks/useNote";
import { useState, useEffect } from "react";
import { useFilterByTag } from "../../hooks/useFilterByTag";
import { useFilterByTerm } from "../../hooks/useFilterByTerm";
import NotesErrorBoundary from "../../components/errorBoundary/ErrorBoundary";
export default function NotesPage({
  isCurrentTeg,
  setIsCurrentTeg,
  thisValueTremSearch,
}) {
  const userId = useSelector((state) => state.auth.user.uid);
  const { notes, isLoading, isFetching } = useNotes(userId);
  const [filteredNotes, setFilteredNotes] = useState(notes);
  const [activeNoteId, setActiveNoteId] = useState(null);
  const [mode, setMode] = useState("view"); // "view" або "edit" "create"

  useEffect(() => {
    if (notes?.length > 0) {
      setFilteredNotes(
        thisValueTremSearch.length > 0
          ? useFilterByTerm(notes, thisValueTremSearch)
          : useFilterByTag(notes, isCurrentTeg),
      );
      setActiveNoteId(notes[0].id);
    }
  }, [notes, isCurrentTeg, thisValueTremSearch]);

  const activeNote = notes?.find((n) => n.id === activeNoteId);
  return (
    <div className="flex h-full">
      <NotesErrorBoundary>
        <NotesList
          setMode={setMode}
          activeNoteId={activeNoteId}
          setActiveNote={setActiveNoteId}
          notes={filteredNotes}
          isLoading={isLoading}
          isFetching={isFetching}
        />
      </NotesErrorBoundary>
      <NotesErrorBoundary>
        <NoteDetails
          note={activeNote}
          mode={mode}
          setMode={setMode}
          setIsCurrentTeg={setIsCurrentTeg}
        />
      </NotesErrorBoundary>
    </div>
  );
}
