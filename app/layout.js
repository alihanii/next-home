import "./globals.css";
import Footer from "./ui/Footer";
import Header from "./ui/Header";
<link rel="icon" href="/favicon.ico" sizes="any" />;

export const metadata = { title: "PrimeCRM" };
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex items-center justify-center flex-col ">
        <main className="container">
          <Header /> {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
