import "./globals.scss";
import Header from "@/common/Header/Header";
import Footer from "@/common/Footer/Footer";
import BackToTop from "@/common/BackToTop/BackToTop";
import ContactModal from "@/common/ContactModal/ContactModal";

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
        <BackToTop />
        <ContactModal />
      </body>
    </html>
  );
}
