"use client";

import { useEffect, useState } from "react";
import "./BackToTop.scss";

export default function BackToTop() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;

      if (totalHeight > 0) {
        const progress = Math.min(
          100,
          Math.max(0, (currentScroll / totalHeight) * 100)
        );
        setScrollProgress(progress);
      }

      if (currentScroll > 320) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // SVG Circle Dimensions (radius = 24)
  const radius = 24;
  const circumference = 2 * Math.PI * radius; // ~150.8
  const strokeDashoffset = circumference - (circumference * scrollProgress) / 100;

  return (
    <button
      type="button"
      className={`heavy-back-to-top ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Back to top"
      title="Back to top"
    >
      {/* Outer Glow Halo */}
      <span className="halo-glow" />

      {/* SVG Progress Ring */}
      <svg className="progress-ring" width="58" height="58">
        <circle
          className="ring-bg"
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth="3"
          fill="transparent"
          r={radius}
          cx="29"
          cy="29"
        />
        <circle
          className="ring-progress"
          stroke="var(--lime)"
          strokeWidth="3.2"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="transparent"
          r={radius}
          cx="29"
          cy="29"
        />
      </svg>

      {/* Center Arrow Icon & Content */}
      <div className="center-content">
        <svg
          className="arrow-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      </div>

      {/* Hover Floating Tooltip */}
      <div className={`hover-tooltip ${isHovered ? "show" : ""}`}>
        <span className="tooltip-text">
          {Math.round(scrollProgress)}% • TOP
        </span>
      </div>
    </button>
  );
}
