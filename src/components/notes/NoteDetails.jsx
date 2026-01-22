import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNotes } from "../../hooks/useNote";
import ViewNote from "./ViewNote";
import { EditNote } from "./EditNote";

export default function NoteDetails({ note, mode, setMode, setIsCurrentTeg }) {
  const userId = useSelector((state) => state.auth.user.uid);
  const { createNote, updateNote } = useNotes(userId);
  const [noteDate, setData] = useState(null);

  useEffect(() => {
    if (mode === "create") {
      // CREATE MODE
      setData({
        title: "",
        content: "",
        tags: [],
      });
      return;
    }

    if (note && mode === "view" && mode !== "edit") {
      // EDIT MODE
      setData({
        title: note.title || "",
        content: note.content || "",
        tags: note.tags || [],
      });
      setIsCurrentTeg(null);
    }
  }, [note, mode]);

  async function saveNote() {
    if (mode === "create") {
      createNote.mutate(noteDate, {
        onError: (error) => {
          console.error("Error creating note:", error);
        },
        onSuccess: () => {
          setData({
            title: "",
            content: "",
            tags: [],
          });
          setMode("view");
        },
      });
    }
    if (mode === "edit") {
      updateNote.mutate(
        { id: note.id, ...noteDate },
        {
          onError: (error) => {
            console.error("Error updating note:", error);
          },
          onSuccess: () => {
            setMode("view");
          },
        },
      );
    }
  }
  return (
    <>
      {mode === "create" || mode === "edit" ? (
        <EditNote noteData={noteDate} setData={setData} saveNote={saveNote} />
      ) : (
        <ViewNote note={note} setMode={setMode} />
      )}
    </>
  );
}
