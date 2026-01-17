import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../../database/firebase";

export const getUserNotes = async (userId) => {
  const notesRef = collection(db, "users", userId, "notes");
  const q = query(notesRef, orderBy("updatedAt", "desc"));
  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};
