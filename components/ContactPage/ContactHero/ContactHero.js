import Link from "next/link";
import Reveal from "@/common/Reveal/Reveal";
import "./ContactHero.scss";

export default function ContactHero() {
  return (
    <section className="contact-hero-section section">
      <div className="contact-breadcrumbs">
        <Link href="/">Home</Link>
        <span>/</span>
        <span className="current">Contact Me</span>
      </div>

      <Reveal className="contact-hero-content">
        <div className="contact-status-pill">
          <span className="status-dot"></span>
          Accepting New Projects &amp; Collaborations
        </div>

        <h1 className="contact-hero-title">
          Let&apos;s build
          <br />
          something <span>iconic.</span>
        </h1>

        <p className="contact-hero-desc">
          Have an upcoming video project, social media campaign, motion graphic need,
          or brand identity challenge? Drop me a message below or reach out directly.
          I usually reply within <strong>12 to 24 hours</strong>.
        </p>

        <div className="contact-quick-pills">
          <div className="quick-pill">
            <span className="pill-icon">📍</span>
            <span>Surat, India · IST (UTC+5:30)</span>
          </div>
          <div className="quick-pill">
            <span className="pill-icon">⚡</span>
            <span>Fast 12-24h Response</span>
          </div>
          <div className="quick-pill">
            <span className="pill-icon">💼</span>
            <span>Freelance &amp; Agency Ready</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
