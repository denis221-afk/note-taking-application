import { db } from "../../database/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export const createNote = async (userId, note) => {
  const notesRef = collection(db, "users", userId, "notes");

  await addDoc(notesRef, {
    title: note.title,
    content: note.content,
    tags: note.tags || [],
    archived: false,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
};
