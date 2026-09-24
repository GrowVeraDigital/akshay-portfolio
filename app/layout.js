import "./globals.scss";
import Script from "next/script";
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
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-PEWYPEG2P4"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-PEWYPEG2P4');
            `,
          }}
        />
      </head>
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
