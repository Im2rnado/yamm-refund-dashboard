import Sidebar from "./components/Sidebar";
import Providers from './providers'
import "../styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex">
        <Providers>
          <Sidebar />
          <main className="ml-64 w-full p-6">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
