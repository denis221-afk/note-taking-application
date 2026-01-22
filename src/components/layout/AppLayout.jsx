import Sidebar from "./Sidebar";
import Header from "./Header";
import NotesErrorBoundary from "../errorBoundary/ErrorBoundary";
import MainPages from "../../pages/mainPages/MainPages";
import { useState } from "react";
export default function AppLayout() {
  const [isCurrentTeg, setIsCurrentTeg] = useState(null);
  const [thisValueTremSearch, setThisValueTremSearch] = useState("");

  return (
    <div className="h-screen flex w-full bg-gray-50 text-gray-900">
      <NotesErrorBoundary>
        <Sidebar setIsCurrentTeg={setIsCurrentTeg} />
      </NotesErrorBoundary>
      <div className="flex flex-col flex-1">
        <Header setThisValueTremSearch={setThisValueTremSearch} />
        <main className="flex-1 overflow-hidden">
          <MainPages
            isCurrentTeg={isCurrentTeg}
            setIsCurrentTeg={setIsCurrentTeg}
            thisValueTremSearch={thisValueTremSearch}
          />
        </main>
      </div>
    </div>
  );
}
