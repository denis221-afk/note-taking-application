export function useFilterByTerm(notes, searchTerm) {
  if (!searchTerm) return notes;

  const term = searchTerm.toLowerCase();
  return notes.filter((note) => {
    const titleMatch = note.title.toLowerCase().includes(term);
    const contentMatch = note.content.toLowerCase().includes(term);
    const tagsMatch = note.tags.some((tag) => tag.toLowerCase().includes(term));
    return titleMatch || contentMatch || tagsMatch;
  });
}
