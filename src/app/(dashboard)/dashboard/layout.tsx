// "use client";
import Sidebar from "@/components/shared/Sidebar";
// import { AuthProvider, useAuth } from "@/context/AuthContext";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const { user, loading } = useAuth();
  // const router = useRouter();

  // useEffect(() => {
  //   if (!loading && !user) {
  //     router.replace("/login");
  //   }
  // }, [loading, user, router]);

  // if (loading) return <p className="p-4">Loading...</p>;
  // if (!user) return null;

  return (
    <main className="min-h-dvh flex gap-4">
      <Sidebar />
      {children}
      {/* <AuthProvider>
        <Sidebar />
        {children}
      </AuthProvider> */}
    </main>
  );
}
