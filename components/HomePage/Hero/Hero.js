import Reveal from "@/common/Reveal/Reveal";
import "./Hero.scss";

export default function Hero() {
  return (
    <section id="home" className="hero section">
      <Reveal className="hero-copy">
        <p className="eyebrow">GRAPHIC DESIGNER &amp; VIDEO EDITOR</p>
        <h1>
          Visuals that <span>move.</span>
          <br />
          Designs that <span>connect.</span>
        </h1>
        <p className="hero-text">
          I create high-impact social media creatives, promotional videos, reels,
          branding visuals and motion graphics that help brands stand out.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View My Work <span>↗</span>
          </a>
          <a
            href="/assets/Akshay-Chheta-Resume.pdf"
            className="btn btn-ghost"
            target="_blank"
          >
            View Resume
          </a>
        </div>
      </Reveal>

      <Reveal className="hero-visual">
        <div className="lime-orb"></div>
        <div className="visual-ring"></div>
        <img
          src="/assets/projects/character.webp"
          alt="Akshay Chheta illustration"
          className="hero-character"
        />
        <div className="skill-icon icon-ps float-a" title="Adobe Photoshop">
          <img src="/assets/icons/photoshop.webp" alt="Adobe Photoshop" />
        </div>
        <div className="skill-icon icon-ai float-b" title="Adobe Illustrator">
          <img src="/assets/icons/illustrator.webp" alt="Adobe Illustrator" />
        </div>
        <div className="skill-icon icon-ae float-c" title="Adobe After Effects">
          <img src="/assets/icons/aftereffects.webp" alt="Adobe After Effects" />
        </div>
        <div className="skill-icon icon-pr float-d" title="Adobe Premiere Pro">
          <img src="/assets/icons/premiere.webp" alt="Adobe Premiere Pro" />
        </div>
      </Reveal>
    </section>
  );
}
