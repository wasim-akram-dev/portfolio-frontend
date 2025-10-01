export default function CommonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="bg-white relative dark:text-white min-h-screen h-full w-full dark:bg-[#010313] transition-colors duration-500">
        {children}
      </div>
    </div>
  );
}
