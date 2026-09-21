import CursorGlow from "@/common/CursorGlow/CursorGlow";
import Hero from "@/components/HomePage/Hero/Hero";
import Marquee from "@/components/HomePage/Marquee/Marquee";
import About from "@/components/HomePage/About/About";
import Projects from "@/components/HomePage/Projects/Projects";
import Services from "@/components/HomePage/Services/Services";
import Experience from "@/components/HomePage/Experience/Experience";
import Skills from "@/components/HomePage/Skills/Skills";
import Contact from "@/components/HomePage/Contact/Contact";

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
