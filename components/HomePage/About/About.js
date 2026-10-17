import Link from "next/link";
import Reveal from "@/common/Reveal/Reveal";
import "./About.scss";

export default function About() {
  return (
    <section id="about" className="section projects">
      <div className="section-label">01 / ABOUT</div>
      <div className="about-grid">
        <Reveal className="section-heading about-heading">
          <p className="eyebrow">A LITTLE ABOUT ME</p>
          <h2 aria-label="Creative mind. Visual storyteller.">
            <span className="about-heading-word" aria-hidden="true">Creative</span>{" "}
            <span className="about-heading-word" style={{ "--word-delay": "120ms" }} aria-hidden="true">mind.</span>
            <br />
            <span aria-hidden="true">
              <span className="about-heading-word" style={{ "--word-delay": "240ms" }}>Visual</span>{" "}
              <span className="about-heading-word" style={{ "--word-delay": "360ms" }}>storyteller.</span>
            </span>
          </h2>
        </Reveal>
        <Reveal className="about-copy">
          <p>
            I&apos;m <strong>Akshay Chheta</strong>, a Graphic Designer &amp;
            Video Editor focused on branding, reels, ads, promotional content and
            motion graphics.
          </p>
          <p>
            I enjoy turning ideas into clean, engaging visuals and creating
            digital content that feels purposeful, modern and memorable.
          </p>
          <div className="info-row">
            <div>
              <span>Based in</span>
              <strong>Surat, India</strong>
            </div>
            <div>
              <span>Experience</span>
              <strong>Rejoicehub LLP</strong>
            </div>
            <div>
              <span>Languages</span>
              <strong>Gujarati · Hindi · English</strong>
            </div>
          </div>
          <div style={{ marginTop: "32px" }}>
            <Link href="/about" className="btn btn-ghost">
              Read Full Story &amp; Vision <span>→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
