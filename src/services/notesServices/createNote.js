import { addDoc, collection } from "firebase/firestore";
import { db } from "../../database/firebase";

export const createNote = async (userId, data) => {
  const note = {
    ...data,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };

  const docRef = await addDoc(collection(db, "users", userId, "notes"), note);

  return { id: docRef.id, ...note }; // важливо для optimistic update
};
