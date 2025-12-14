import Logo from "@/components/logo.js";
import Nav from "@/components/listNavs";
import "./globals.css";

export const metadata = {
  title: "Kings of Dreams",
  description: "Strona hodowli Kings of Dreams",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <Logo />
        </header>
        <main className="container">
          <nav className="sidebar">
            <Nav />
          </nav>
          <section className="content">{children}</section>
        </main>
      </body>
    </html>
  );
}
