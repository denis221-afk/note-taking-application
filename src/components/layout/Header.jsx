import SearchInput from "../ui/Search";

export default function Header() {
  return (
    <header className="h-16 bg-white border-b px-6 flex items-center justify-between">
      <h1 className="text-lg font-semibold">All Notes</h1>
      <div className="flex items-center gap-4">
        <SearchInput />
        <button className="p-2 rounded-lg hover:bg-gray-100">⚙️</button>
      </div>
    </header>
  );
}
