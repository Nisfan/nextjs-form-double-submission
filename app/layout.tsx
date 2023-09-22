import Link from "next/link";

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
        {children}
      </body>
    </html>
  );
}
