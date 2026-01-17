import NoteActions from "../notes/NoteAction";
import Tag from "../ui/Tag";
import Button from "../ui/Button";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNotes } from "../../hooks/useNote";

export default function NoteDetails({ isEdit }) {
  const [noteDate, setData] = useState({
    title: "",
    content: "",
    tags: [],
  });

  const userId = useSelector((state) => state.auth.user.uid);
  const { notes, createNote } = useNotes(userId);
  async function saveNote() {
    createNote.mutate(noteDate);
    setData({
      title: "",
      content: "",
      tags: [],
    });
  }
  return (
    <>
      {isEdit ? (
        <Edit noteDate={noteDate} setData={setData} saveNote={saveNote} />
      ) : (
        <View />
      )}
    </>
  );
}

const View = () => {
  return (
    <section className="flex-1 p-8 overflow-y-auto">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">
            React Performance Optimization
          </h2>

          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
            <span>🏷️ Dev, React</span>
            <span>🕒 29 Oct 2024</span>
          </div>

          <div className="flex gap-2">
            <Tag label="Dev" />
            <Tag label="React" />
          </div>
        </div>

        <NoteActions />
      </div>

      <article className="prose max-w-none text-gray-700">
        <p>
          <strong>Key performance optimization techniques:</strong>
        </p>
        <ol>
          <li>Code Splitting</li>
          <li>Memoization</li>
          <li>Virtual Lists</li>
        </ol>
        <p>
          <strong>TODO:</strong> Benchmark app
        </p>
      </article>

      <div className="flex gap-3 mt-10">
        <Button variant="primary">Save Note</Button>
        <Button variant="secondary">Cancel</Button>
      </div>
    </section>
  );
};

const Edit = (props) => {
  const { title, content, tags } = props.noteDate;
  return (
    <div className="flex-1 h-full flex-col bg-white">
      {/* Header */}
      <div className="flex items-start justify-between  px-4 py-3">
        <div className="flex-1">
          {/* Title */}
          <input
            type="text"
            placeholder="Назва нотатки"
            className="w-full text-lg font-semibold outline-none placeholder-gray-400 mb-2"
            value={title || ""}
            onChange={(e) => {
              props.setData((prev) => ({ ...prev, title: e.target.value }));
            }}
          />

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">
              Dev
            </span>
            <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">
              React
            </span>
            <input
              type="text"
              placeholder="+ Add tag"
              className="text-xs px-2 py-1 outline-none bg-transparent placeholder-gray-400"
              value={tags || ""}
              onChange={(e) => {
                props.setData((prev) => ({
                  ...prev,
                  tags: e.target.value.split(",").map((tag) => tag.trim()),
                }));
              }}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-4">
        <textarea
          placeholder="Почніть писати нотатку..."
          className="h-full w-full resize-none text-sm outline-none placeholder-gray-400"
          value={content || ""}
          onChange={(e) => {
            props.setData((prev) => ({ ...prev, content: e.target.value }));
          }}
        />
      </div>
      <div className="flex gap-3 mt-10">
        <Button variant="primary" saveNote={props.saveNote}>
          Save Note
        </Button>
        <Button variant="secondary">Cancel</Button>
      </div>

      {/* Footer */}
      <div className="flex mt-6 items-center justify-between border-t px-4 py-2 text-xs text-gray-400">
        <span>Оновлено: 12.01.2026</span>
        <span>Редагування</span>
      </div>
    </div>
  );
};
