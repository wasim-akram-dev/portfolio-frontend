"use client";
import { useAuth } from "@/context/AuthContext";

const DashboardHomePage = () => {
  const { user, loading } = useAuth();
  if (loading) return <p className="p-4">Loading...</p>;
  console.log(user);
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-6 w-full">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="text-4xl font-bold text-gray-800 mb-4">
        Welcome! Manage your blogs and projects here.
      </p>
      <p className="text-lg text-gray-600 italic text-center">{user?.email}</p>
    </div>
  );
};

export default DashboardHomePage;
