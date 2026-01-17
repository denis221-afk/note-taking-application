import Sidebar from "./Sidebar";
import Header from "./Header";

export default function AppLayout({ children }) {
  return (
    <div className="h-screen flex w-full bg-gray-50 text-gray-900">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 overflow-hidden">{children}</main>
      </div>
    </div>
  );
}
