import AdminHeader from "@/components/AdminHeader";
import BottomBar from "@/components/BottomBar";
import Sidebar from "@/components/Sidebar";
import { Metadata } from "next";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin dashboard layout for managing the application",
  keywords: ["admin", "dashboard", "management"],
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-x-hidden">
        <AdminHeader />
        <main className="flex-1 px-4 max-sm:py-10 sm:p-12 scroll-auto bg-gray-100">
          {children}
        </main>
        <BottomBar />
      </div>
      <ToastContainer />
    </div>
  );
}
