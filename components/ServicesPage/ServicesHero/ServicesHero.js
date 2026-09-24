"use client";

import Link from "next/link";
import Reveal from "@/common/Reveal/Reveal";
import "./ServicesHero.scss";

export default function ServicesHero() {
  return (
    <section className="services-hero-section section projects">
      {/* Breadcrumbs */}
      <div className="services-breadcrumbs">
        <Link href="/">HOME</Link>
        <span>/</span>
        <span className="current">SERVICES</span>
      </div>

      {/* Main Title */}
      <Reveal>
        <h1 className="services-hero-title">
          Services designed for
          <br />
          <span>retention, scale &amp; authority.</span>
        </h1>
      </Reveal>

      {/* Description */}
      <Reveal>
        <p className="services-hero-desc">
          From viral short-form reels and commercial video editing to comprehensive brand identities,
          motion graphics, and creative AI visuals. Built for high-growth brands and creators who
          demand pixel-perfect execution.
        </p>
      </Reveal>

      {/* Metric Highlights Bar */}
      <Reveal className="services-stats-bar">
        <div className="stat-item">
          <span className="stat-number">100M+</span>
          <span className="stat-label">Organic Views Driven</span>
        </div>
        <div className="stat-divider" />
        <div className="stat-item">
          <span className="stat-number">200+</span>
          <span className="stat-label">Videos &amp; Creatives Delivered</span>
        </div>
        <div className="stat-divider" />
        <div className="stat-item">
          <span className="stat-number">48-72h</span>
          <span className="stat-label">Average First Cut Turnaround</span>
        </div>
        <div className="stat-divider" />
        <div className="stat-item">
          <span className="stat-number">100%</span>
          <span className="stat-label">Client Satisfaction Rate</span>
        </div>
      </Reveal>
    </section>
  );
}
