import NoteCard from "./NoteCard";

import { useSelector } from "react-redux";
import { getUserNotes } from "../../services/notesServices/getNotes";

import { useEffect, useState } from "react";

export default function NotesList({ version, createNote }) {
  const userId = useSelector((state) => state.auth.user.uid);
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    if (!userId) return;

    getUserNotes(userId).then((note) => setNotes(note));
  }, [version]);

  const notesArr = notes.map((note, id) => {
    const { title, tags } = note;
    return <NoteCard key={id} title={title} tags={tags} />;
  });

  return (
    <section className="w-[360px] border-r bg-white p-4 flex flex-col gap-4 overflow-y-auto">
      <button
        className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700"
        onClick={() => createNote()}
      >
        + Create New Note
      </button>

      <div className="flex flex-col gap-3">{notesArr}</div>
    </section>
  );
}
