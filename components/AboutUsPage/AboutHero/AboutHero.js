import Link from "next/link";
import Reveal from "@/common/Reveal/Reveal";
import "./AboutHero.scss";

export default function AboutHero() {
  return (
    <section className="about-hero-section section">
      <div className="about-breadcrumbs">
        <Link href="/">Home</Link>
        <span>/</span>
        <span className="current">About Me</span>
      </div>

      <div className="about-hero-grid">
        <Reveal className="about-hero-copy">
          <div className="about-status-pill">
            <span className="status-dot"></span>
            Available for Freelance &amp; Full-Time
          </div>

          <h1 className="about-hero-title">
            Visual Architect.
            <br />
            Story Crafter.
            <br />
            <span>Motion Explorer.</span>
          </h1>

          <p className="about-hero-desc">
            I&apos;m <strong>Akshay Chheta</strong> — a multidisciplinary Graphic Designer
            and Video Editor based in Surat, India. Bridging psychological storytelling,
            clean brand aesthetics, and kinetic motion to create digital content that
            captivates audiences and ignites real growth.
          </p>

          <div className="about-hero-actions">
            <Link href="/#projects" className="btn btn-primary">
              Explore Work <span>↗</span>
            </Link>
            <a
              href="/assets/Akshay-Chheta-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              Download Resume
            </a>
          </div>
        </Reveal>

        <Reveal className="about-hero-visual">
          <div className="about-hero-card">
            <div className="card-glow-orb"></div>
            <div className="card-ambient-ring"></div>

            <img
              src="/assets/projects/character.webp"
              alt="Akshay Chheta"
              className="about-character-img"
            />

            <div className="hero-badge badge-top-right">
              <span className="badge-icon">📍</span>
              <div>
                <span className="badge-sub">Based in</span>
                <strong>Surat, India</strong>
              </div>
            </div>

            <div className="hero-badge badge-bottom-left">
              <span className="badge-icon">⚡</span>
              <div>
                <span className="badge-sub">Specialization</span>
                <strong>Motion &amp; Branding</strong>
              </div>
            </div>

            <div className="floating-app-icon icon-1" title="Adobe Photoshop">
              <img src="/assets/icons/photoshop.webp" alt="Photoshop" />
            </div>
            <div className="floating-app-icon icon-2" title="Adobe Illustrator">
              <img src="/assets/icons/illustrator.webp" alt="Illustrator" />
            </div>
            <div className="floating-app-icon icon-3" title="Adobe Premiere Pro">
              <img src="/assets/icons/premiere.webp" alt="Premiere Pro" />
            </div>
            <div className="floating-app-icon icon-4" title="Adobe After Effects">
              <img src="/assets/icons/aftereffects.webp" alt="After Effects" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
