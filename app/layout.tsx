import Sidebar from "./components/Sidebar";
import Providers from "./providers";
import { Toaster } from "react-hot-toast";
import "../styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex">
        <Providers>
          <Sidebar />
          <main className="ml-64 w-full p-6">{children}</main>
          <Toaster position="top-right" />
        </Providers>
      </body>
    </html>
  );
}
