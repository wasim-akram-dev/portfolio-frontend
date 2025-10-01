import Background from "@/components/shared/Background";
import Navbar from "@/components/shared/NavBar";
import { ThemeProvider } from "@/components/theme-providers";
import { Toaster } from "react-hot-toast";

export default function CommonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <ThemeProvider>
        <Navbar />
        <div className="bg-white relative dark:text-white min-h-screen h-full w-full dark:bg-[#010313] transition-colors duration-500">
          {children}
          <Toaster />
          <Background />
        </div>
      </ThemeProvider>
    </div>
  );
}
