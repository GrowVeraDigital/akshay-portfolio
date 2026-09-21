import "./globals.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Akshay Chheta — Graphic Designer & Video Editor",
  description:
    "Akshay Chheta — Graphic Designer & Video Editor portfolio.",
};

export const viewport = {
  width: 1280,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
