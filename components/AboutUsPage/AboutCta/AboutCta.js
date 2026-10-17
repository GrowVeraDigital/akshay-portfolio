
import { assetPath } from "@/lib/assetPath";
import Link from "next/link";
import Reveal from "@/common/Reveal/Reveal";
import "./AboutCta.scss";

export default function AboutCta() {
  return (
    <section className="about-cta-section section projects">
      <Reveal className="about-cta-box">
        <p className="cta-eyebrow">LET&apos;S BUILD SOMETHING EXTRAORDINARY</p>
        <h2 className="cta-heading">
          Ready to elevate your <span>visual impact?</span>
        </h2>
        <p className="cta-desc">
          Whether you need thumb-stopping commercial video ads, viral reels, motion graphics,
          or a complete brand identity revamp — I&apos;m ready to craft visuals that move people.
        </p>

        <a className="cta-email-link" href="mailto:akshaypatel9513@gmail.com">
          akshaypatel9513@gmail.com
        </a>

        <div className="cta-button-group">
          <a
            href="mailto:akshaypatel9513@gmail.com"
            className="cta-btn cta-btn-dark"
          >
            Start a Conversation <span>↗</span>
          </a>
          <Link href="/#projects" className="cta-btn cta-btn-outline">
            Browse All Projects
          </Link>
          <a
            href={assetPath("/assets/Akshay-Chheta-Resume.pdf")}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn cta-btn-outline"
          >
            Download Resume
          </a>
        </div>
      </Reveal>
    </section>
  );
}
