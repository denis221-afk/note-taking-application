import Tag from "../ui/Tag";

export default function NoteCard({ active, title, tags }) {
  const elem = tags.map((tag) => {
    return <Tag label={tag} />;
  });
  return (
    <div
      className={`p-4 rounded-xl border cursor-pointer transition
      ${active ? "border-blue-500 bg-blue-50" : "hover:bg-gray-50"}`}
    >
      <h3 className="font-semibold mb-2">{title}</h3>

      <div className="flex flex-wrap gap-2 mb-2">{elem}</div>

      <p className="text-xs text-gray-500">29 Oct 2024</p>
    </div>
  );
}
