export const useFilterByTag = (notes, isCurrentTeg) => {
  console.log("useFilterByTag called with isCurrentTeg:", isCurrentTeg);
  if (isCurrentTeg === null) {
    return notes;
  }
  return notes.filter((note) => note.tags.includes(isCurrentTeg));
};
