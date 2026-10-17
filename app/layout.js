import "./globals.scss";
import Script from "next/script";
import Header from "@/common/Header/Header";
import Footer from "@/common/Footer/Footer";
import BackToTop from "@/common/BackToTop/BackToTop";

export const metadata = {
  metadataBase: new URL("https://growveradigital.github.io"),
  title: "Akshay Chheta — Graphic Designer & Video Editor",
  description:
    "Akshay Chheta — Graphic Designer & Video Editor portfolio.",
  openGraph: {
    type: "website",
    siteName: "Growvera Digital",
    title: "Akshay Chheta — Graphic Designer & Video Editor",
    description: "Creative visuals, brand design, video editing and motion graphics.",
    images: [{ url: "/social-preview.jpg", width: 1200, height: 630, alt: "Growvera Digital — Design that connects. Visuals that move." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshay Chheta — Graphic Designer & Video Editor",
    description: "Creative visuals, brand design, video editing and motion graphics.",
    images: ["/social-preview.jpg"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
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
      {/* Extensions may inject attributes on body before React hydrates. */}
      <body suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
