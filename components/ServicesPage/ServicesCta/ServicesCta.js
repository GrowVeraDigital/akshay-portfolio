"use client";

import Link from "next/link";
import Reveal from "@/common/Reveal/Reveal";
import "./ServicesCta.scss";

export default function ServicesCta() {
  return (
    <section className="services-cta-section section projects">
      <Reveal className="services-cta-banner">
        <div className="cta-ambient-glow" />

        <div className="cta-content-wrap">
          <span className="cta-eyebrow">READY TO COLLABORATE?</span>
          <h2 className="cta-heading">
            Let&apos;s build visuals that
            <br />
            <span>dominate attention.</span>
          </h2>
          <p className="cta-sub">
            Whether you need a single viral reel, a high-converting commercial ad,
            or an end-to-end creative monthly retainer — let&apos;s discuss your vision.
          </p>

          <div className="cta-buttons-group">
            <Link href="/contact" className="cta-primary-btn">
              <span>Start a Project Inquiry</span>
              <span className="arrow">→</span>
            </Link>

            <a
              href="https://wa.me/918734839513?text=Hi%20Akshay,%20I'd%20like%20to%20discuss%20a%20project%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="cta-secondary-btn"
            >
              <span>Chat on WhatsApp</span>
              <span className="arrow">↗</span>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
