import Link from "next/link";
import SSE from "./components/SSE";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <header>
          <nav>
            <Link href="/">Go home</Link>
          </nav>
        </header>
        <SSE />
        {children}
      </body>
    </html>
  );
}
