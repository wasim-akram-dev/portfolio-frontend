import Background from "@/components/shared/Background";
import Navbar from "@/components/shared/NavBar";
import { ThemeProvider } from "@/components/theme-providers";

export default function CommonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <ThemeProvider>
        <Navbar />
        <div className="bg-white relative dark:text-white min-h-screen h-full w-full dark:bg-gray-950 transition-colors duration-500">
          {children}
          <Background />
        </div>
      </ThemeProvider>
    </div>
  );
}
