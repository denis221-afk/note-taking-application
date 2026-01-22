import React from "react";
import NoteActions from "../notes/NoteAction";
import Button from "../ui/Button";
const ViewNote = ({ note, setMode }) => {
  if (!note) {
    return <section className="flex-1 p-8 text-gray-400">Chose Note</section>;
  }

  const { title, content, tags, updatedAt } = note;
  return (
    <>
      <section className="flex-1 p-8 overflow-y-auto">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-2xl font-semibold mb-2">{title}</h1>

            <div className="text-sm text-gray-500 mb-3">
              🕒{new Date(updatedAt).toLocaleString()}
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {tags?.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <NoteActions />
        </div>

        <p className="whitespace-pre-wrap text-sm">{content}</p>

        <div className="flex gap-3 mt-10">
          <Button variant="primary" saveNote={() => setMode("edit")}>
            Edit
          </Button>
          <Button variant="secondary">Cancel</Button>
        </div>
      </section>
    </>
  );
};

export default ViewNote;
