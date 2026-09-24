"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "@/common/Reveal/Reveal";
import "./WhatIDoBest.scss";

// 5 skills from reference photo (Video Shooting explicitly excluded)
const skillsData = [
  {
    id: "video-editing",
    title: "Video Editing",
    percentage: 90,
    tags: ["Cutting & Pacing", "Color Grading", "Sound FX"],
    desc: "Precision narrative cuts, color correction, and immersive sound design built to capture and retain attention.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="m22 8-6 4 6 4V8Z" />
        <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
      </svg>
    ),
  },
  {
    id: "reel-creation",
    title: "Reel Creation",
    percentage: 85,
    tags: ["Retention Hooks", "Trending Audio", "Fast Cuts"],
    desc: "Short-form vertical video engineered for maximum watch time, viral algorithm reach and rapid trend adoption.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M7 3v18" />
        <path d="M3 7.5h4" />
        <path d="M3 12h18" />
        <path d="M3 16.5h4" />
        <path d="M17 3v18" />
        <path d="M17 7.5h4" />
        <path d="M17 16.5h4" />
      </svg>
    ),
  },
  {
    id: "content-creation",
    title: "Content Creation",
    percentage: 88,
    tags: ["Ideation", "Script Flow", "Visual Story"],
    desc: "End-to-end creative ideation, transforming raw concepts into structured, captivating digital narratives.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
        <path d="m15 5 4 4" />
      </svg>
    ),
  },
  {
    id: "social-media",
    title: "Social Media",
    percentage: 82,
    tags: ["Growth Strategy", "Algorithms", "Audience Reach"],
    desc: "Platform-native creative direction tailored for Instagram, YouTube & LinkedIn audience growth.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
        <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
      </svg>
    ),
  },
  {
    id: "digital-creativity",
    title: "Digital Creativity",
    percentage: 87,
    tags: ["Motion Graphics", "VFX Accents", "Aesthetics"],
    desc: "Blending modern graphic design, kinetic motion, dynamic typography & VFX for brand-defining assets.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
];

export default function WhatIDoBest() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="what-i-do-best" ref={sectionRef} className="section projects what-i-do-best-section">
      <div className="section-label">02 / SKILLS</div>

      <div className="best-head-wrap">
        <Reveal className="section-heading">
          <p className="eyebrow">SKILLS</p>
          <h2>
            What I <span>Do Best</span>
          </h2>
        </Reveal>
        <Reveal className="best-subtext-wrap">
          <p>
            Key core strengths developed through real-world commercial editing,
            viral short-form reels, and brand storytelling.
          </p>
        </Reveal>
      </div>

      <div className="best-cards-grid">
        {skillsData.map((item, index) => (
          <Reveal
            key={item.id}
            className={`best-skill-card ${index >= 3 ? "card-wide" : "card-standard"}`}
          >
            <div className="ambient-hover-glow" />

            {/* Top row: Icon & Percentage Badge */}
            <div className="card-top-row">
              <div className="icon-badge-box">{item.icon}</div>
              <div className="percent-pill-badge">
                <span className="percent-number">{item.percentage}%</span>
                <span className="live-glow-dot" />
              </div>
            </div>

            {/* Title & Desc */}
            <div className="card-info-box">
              <h3 className="skill-heading">{item.title}</h3>
              <p className="skill-summary">{item.desc}</p>
            </div>

            {/* Micro Tags */}
            <div className="skill-pills-row">
              {item.tags.map((tag) => (
                <span key={tag} className="tag-pill-item">
                  {tag}
                </span>
              ))}
            </div>

            {/* Animated Progress Bar */}
            <div className="progress-outer-wrap">
              <div className="progress-bg-track">
                <div
                  className="progress-fill-bar"
                  style={{
                    width: inView ? `${item.percentage}%` : "0%",
                  }}
                >
                  <span className="flare-bullet" />
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
