"use client";

import { useEffect, useState } from "react";
import { assetPath } from "@/lib/assetPath";
import Reveal from "@/common/Reveal/Reveal";
import "./Hero.scss";

export default function Hero() {
  const headline = "Visuals that move.Designs that connect.";
  const [typed, setTyped] = useState(0);
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer;
    let count = 0;
    const tick = () => {
      if (motion.matches) return;
      count = count < headline.length ? count + 1 : 0;
      setTyped(count);
      timer = setTimeout(tick, count === headline.length ? 4500 : 85);
    };
    const restart = () => {
      clearTimeout(timer);
      count = 0;
      setTyped(motion.matches ? headline.length : 0);
      if (!motion.matches) timer = setTimeout(tick, 450);
    };
    restart();
    motion.addEventListener("change", restart);
    return () => { clearTimeout(timer); motion.removeEventListener("change", restart); };
  }, [headline]);
  let letter = 0;
  const typeText = (text) => [...text].map((char) => {
    const index = letter++;
    return <span key={index} className={`typed-letter${index < typed ? " visible" : ""}${index === typed - 1 && typed < headline.length ? " typing-caret" : ""}`}>{char}</span>;
  });
  return (
    <section id="home" className="hero section">
      <Reveal className="hero-copy">
        <p className="eyebrow">GRAPHIC DESIGNER &amp; VIDEO EDITOR</p>
        <h1 aria-label="Visuals that move. Designs that connect.">
          <span className="typing-white" aria-hidden="true">{typeText("Visuals that ")}</span><span aria-hidden="true">{typeText("move.")}</span>
          <br />
          <span className="typing-white" aria-hidden="true">{typeText("Designs that ")}</span><span aria-hidden="true">{typeText("connect.")}</span>
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
        <div className={`hero-character${typed > 0 && typed < headline.length ? " is-typing" : ""}`}>
        <img
          src={assetPath("/assets/projects/hero-laptop-character.webp")}
          alt="Friendly cartoon creative holding a silver MacBook"
          width={765}
          height={1360}
          className="character-base"
        />
        <img src={assetPath("/assets/projects/hero-typing-frame.webp")} className="character-typing-hand" alt="" aria-hidden="true" width={765} height={1360} />
        </div>
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
