import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getUserNotes } from "../services/notesServices/getNotes";
import { createNote } from "../services/notesServices/createNote";


export const useNotes = (userId) => {


  const queryClient = useQueryClient();

  // 1️⃣ отримання нотаток
  const {
    data: notes = [],
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["notes", userId],
    queryFn: () => getUserNotes(userId),
    enabled: !!userId,
  });

  // 2️⃣ створення нотатки
  const createNoteMutation = useMutation({
    mutationFn: (data) => createNote(userId, data),
    onSuccess: () => queryClient.invalidateQueries(["notes", userId]),
  });

  return { notes, isLoading, isFetching, createNote: createNoteMutation };
};
