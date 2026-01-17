const tags = [
  "Cooking",
  "Dev",
  "Fitness",
  "Health",
  "Personal",
  "React",
  "Recipes",
  "Shopping",
  "Travel",
  "TypeScript",
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r px-4 py-6 flex flex-col gap-6">
      <div className="text-xl font-semibold flex items-center gap-2">
        📝 Notes
      </div>

      <nav className="flex flex-col gap-2">
        <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-50 text-blue-600">
          All Notes
        </button>
        <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100">
          Archived Notes
        </button>
      </nav>

      <div>
        <p className="text-sm font-semibold text-gray-500 mb-3">Tags</p>
        <ul className="flex flex-col gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer text-sm"
            >
              #{tag}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
