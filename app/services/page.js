import CursorGlow from "@/common/CursorGlow/CursorGlow";
import ServicesHero from "@/components/ServicesPage/ServicesHero/ServicesHero";
import ServicesGrid from "@/components/ServicesPage/ServicesGrid/ServicesGrid";
import ServicesProcess from "@/components/ServicesPage/ServicesProcess/ServicesProcess";
import ServicesWhyMe from "@/components/ServicesPage/ServicesWhyMe/ServicesWhyMe";
import ServicesFaq from "@/components/ServicesPage/ServicesFaq/ServicesFaq";
import ServicesCta from "@/components/ServicesPage/ServicesCta/ServicesCta";

export const metadata = {
  title: "Services — Akshay Chheta | Video Editor & Graphic Designer",
  description:
    "Explore high-impact creative services by Akshay Chheta: Commercial video editing, viral short-form reels, motion graphics, brand identity systems, and AI visuals.",
};

export default function ServicesPage() {
  return (
    <>
      <CursorGlow />
      <main className="services-page-main">
        <ServicesHero />
        <ServicesGrid />
        <ServicesProcess />
        <ServicesWhyMe />
        <ServicesFaq />
        <ServicesCta />
      </main>
    </>
  );
}
