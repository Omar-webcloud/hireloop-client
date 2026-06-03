import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <>
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-6 w-full">{children}</main>
    </>
  );
}
