export default function SearchInput({ setThisValueTremSearch }) {
  return (
    <input
      onChange={(e) => setThisValueTremSearch(e.target.value)}
      type="text"
      placeholder="Search by title, content, or tags..."
      className="w-64 px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}
