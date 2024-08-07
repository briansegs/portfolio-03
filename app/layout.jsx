import "./globals.css";

// Section components
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { Toaster } from "@/components/ui/toaster";

export const metadata = {
  title: "Brian Segers Portfolio",
  description: "Front-end web development portfolio for Brian Segers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative font-secondary">
        <Toaster />
        <Nav className="padding-x absolute z-10 w-full py-8" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
