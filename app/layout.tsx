import Sidebar from "./components/Sidebar";
import "../styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex">
        <Sidebar />
        <main className="ml-64 w-full p-6">{children}</main>
      </body>
    </html>
  );
}
