import Sidebar from "./Sidebar";
import Header from "./Header";
import NotesErrorBoundary from "../errorBoundary/ErrorBoundary";
export default function AppLayout({ children }) {
  return (
    <div className="h-screen flex w-full bg-gray-50 text-gray-900">
      <NotesErrorBoundary>
        <Sidebar />
      </NotesErrorBoundary>
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 overflow-hidden">{children}</main>
      </div>
    </div>
  );
}
