
import { assetPath } from "@/lib/assetPath";
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
            href={assetPath("/assets/Akshay-Chheta-Resume.pdf")}
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
          src={assetPath("/assets/projects/hero-laptop-character.webp")}
          alt="Friendly cartoon creative holding a silver MacBook"
          width={765}
          height={1360}
          className="hero-character"
        />
        {/* Left Side Floating Icons */}
        <div className="skill-icon icon-ps float-a" title="Adobe Photoshop">
          <img src={assetPath("/assets/icons/photoshop.webp")} alt="Adobe Photoshop" />
        </div>
        <div className="skill-icon icon-higgsfield float-f" title="Higgsfield AI">
          <img src={assetPath("/assets/icons/higgsfield.png")} alt="Higgsfield AI" />
        </div>
        <div className="skill-icon icon-ae float-c" title="Adobe After Effects">
          <img src={assetPath("/assets/icons/aftereffects.webp")} alt="Adobe After Effects" />
        </div>

        {/* Right Side Floating Icons */}
        <div className="skill-icon icon-ai float-b" title="Adobe Illustrator">
          <img src={assetPath("/assets/icons/illustrator.webp")} alt="Adobe Illustrator" />
        </div>
        <div className="skill-icon icon-canva float-e" title="Canva">
          <img src={assetPath("/assets/icons/canva.png")} alt="Canva" />
        </div>
        <div className="skill-icon icon-pr float-d" title="Adobe Premiere Pro">
          <img src={assetPath("/assets/icons/premiere.webp")} alt="Adobe Premiere Pro" />
        </div>
      </Reveal>
    </section>
  );
}
