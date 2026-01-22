import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../database/firebase";

export const createNote = async (userId, data) => {
  const note = {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  };

  const docRef = await addDoc(collection(db, "users", userId, "notes"), note);

  return { id: docRef.id, ...note }; // важливо для optimistic update
};
