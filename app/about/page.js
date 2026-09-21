import CursorGlow from "@/common/CursorGlow/CursorGlow";
import AboutHero from "@/components/AboutUsPage/AboutHero/AboutHero";
import AboutStats from "@/components/AboutUsPage/AboutStats/AboutStats";
import AboutStory from "@/components/AboutUsPage/AboutStory/AboutStory";
import AboutValues from "@/components/AboutUsPage/AboutValues/AboutValues";
import AboutTimeline from "@/components/AboutUsPage/AboutTimeline/AboutTimeline";
import AboutTools from "@/components/AboutUsPage/AboutTools/AboutTools";
import AboutProcess from "@/components/AboutUsPage/AboutProcess/AboutProcess";
import AboutCta from "@/components/AboutUsPage/AboutCta/AboutCta";

export const metadata = {
  title: "About — Akshay Chheta | Graphic Designer & Video Editor",
  description:
    "Discover Akshay Chheta's journey, creative philosophy, software arsenal, and structured workflow for crafting high-impact video ads, viral reels, and brand visuals.",
};

export default function AboutPage() {
  return (
    <>
      <CursorGlow />
      <main className="about-page-main">
        <AboutHero />
        <AboutStats />
        <AboutStory />
        <AboutValues />
        <AboutTimeline />
        <AboutTools />
        <AboutProcess />
        <AboutCta />
      </main>
    </>
  );
}
