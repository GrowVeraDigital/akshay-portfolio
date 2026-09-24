import CursorGlow from "@/common/CursorGlow/CursorGlow";
import ContactHero from "@/components/ContactPage/ContactHero/ContactHero";
import ContactForm from "@/components/ContactPage/ContactForm/ContactForm";
import ContactFaq from "@/components/ContactPage/ContactFaq/ContactFaq";
import ContactSocials from "@/components/ContactPage/ContactSocials/ContactSocials";

export const metadata = {
  title: "Contact — Akshay Chheta | Graphic Designer & Video Editor",
  description:
    "Get in touch with Akshay Chheta for commercial video editing, social media reels, promotional ads, motion graphics, and brand identity design.",
};

export default function ContactPage() {
  return (
    <>
      <CursorGlow />
      <main className="contact-page-main">
        <ContactHero />
        <ContactForm />
        <ContactFaq />
        <ContactSocials />
      </main>
    </>
  );
}
