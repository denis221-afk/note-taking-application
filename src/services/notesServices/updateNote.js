// services/notesServices/updateNote.js
import { doc, updateDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../database/firebase"; // твій експорт Firestore

/**
 * Оновлює існуючу нотатку
 * @param {string} userId - ID користувача
 * @param {object} noteData - { id, title, content, tags }
 */
export const updateNote = async (userId, noteData) => {
  if (!noteData.id) {
    throw new Error("Cannot update note without id");
  }

  const noteRef = doc(db, "users", userId, "notes", noteData.id);

  // видаляємо id з даних, щоб не зберігати його всередині документа
  const { id, ...data } = noteData;

  await updateDoc(noteRef, {
    ...data,
    updatedAt: serverTimestamp(), // оновлюємо дату
  });

  return { id, ...data }; // можна повернути для optimistic update
};
