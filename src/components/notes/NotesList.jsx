import { useLoading } from "../../hooks/useContext";
import Loading from "../loading/Loading";
import NoteCard from "./NoteCard";

export default function NotesList({
  activeNoteId,
  notes,
  setActiveNote,
  isLoading,
  isFetching,
  setMode,
}) {
  if (!notes) {
    // Штучна помилка для тесту Error Boundary
    throw new Error("Notes not found!");
  }
  const notesArr = notes
    .sort((a, b) => b.updatedAt - a.updatedAt)
    .map((note, index) => {
      const { title, tags, id } = note;

      return (
        <NoteCard
          key={id}
          title={title}
          tags={tags}
          active={id === activeNoteId}
          index={id}
          setActiveNote={setActiveNote}
          setMode={setMode}
        />
      );
    });

  return (
    <section className="w-90 relative h-full border-r bg-white p-4 flex flex-col gap-4 overflow-y-auto">
      {isLoading || isFetching ? <Loading /> : null}
      <button
        className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700"
        onClick={() => setMode("create")}
      >
        + Create New Note
      </button>

      <div className="flex flex-col gap-3">{notesArr}</div>
    </section>
  );
}
