import CursorGlow from "@/components/CursorGlow/CursorGlow";
import Hero from "@/components/Hero/Hero";
import Marquee from "@/components/Marquee/Marquee";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
import Services from "@/components/Services/Services";
import Experience from "@/components/Experience/Experience";
import Skills from "@/components/Skills/Skills";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <>
      <CursorGlow />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Services />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
