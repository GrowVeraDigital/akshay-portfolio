
import { assetPath } from "@/lib/assetPath";
import Reveal from "@/common/Reveal/Reveal";
import "./Skills.scss";

const skillCards = [
  {
    num: "01",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="2" y="5" width="15" height="14" rx="2" />
        <path d="M17 9.5l5-3v11l-5-3" />
      </svg>
    ),
    eyebrow: "VIDEO EDITING",
    desc: "Cutting, pacing and grading footage into reels, promos and short films.",
    tools: [
      { icon: assetPath("/assets/icons/premiere.webp"), name: "Premiere Pro" },
      { icon: assetPath("/assets/icons/aftereffects.webp"), name: "After Effects" },
      { icon: assetPath("/assets/icons/capcut.jpg"), name: "CapCut" },
    ],
  },
  {
    num: "02",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
    eyebrow: "GRAPHIC DESIGN",
    desc: "Building clean, brand-ready visuals for ads and social creatives.",
    tools: [
      { icon: assetPath("/assets/icons/photoshop.webp"), name: "Photoshop" },
      { icon: assetPath("/assets/icons/illustrator.webp"), name: "Illustrator" },
      { icon: assetPath("/assets/icons/canva.png"), name: "Canva" },
    ],
  },
  {
    num: "03",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="12" cy="12" r="0.8" fill="currentColor" />
      </svg>
    ),
    eyebrow: "CORE EXPERTISE",
    desc: "Where most of my work lives — from concept to final delivery.",
    list: ["Ads", "Brand Visuals", "Motion Graphics", "Promos", "Reels", "Short Films"],
  },
  {
    num: "04",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M17 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 5 18.5V20" />
        <circle cx="9.5" cy="8" r="3" />
        <path d="M19 20v-1.5a3.5 3.5 0 0 0-2.5-3.36" />
        <path d="M14.5 5.13a3 3 0 0 1 0 5.74" />
      </svg>
    ),
    eyebrow: "SOFT SKILLS",
    desc: "The habits that keep client work sharp and on schedule.",
    list: ["Creative Thinking", "Time Management", "Attention to Detail", "Communication"],
  },
];

export default function Skills() {
  return (
    <section className="section projects skills-section">
      <div className="section-labelnew">06 / TOOLS &amp; STACK</div>
      <div className="skills-grid-new">
        {skillCards.map((card) => (
          <Reveal key={card.num} className="skill-card">
            <span className="skill-num">{card.num}</span>
            <div className="skill-card-top">
              <div className="skill-icon-badge">{card.icon}</div>
              <div>
                <p className="eyebrow">{card.eyebrow}</p>
                <p className="skill-desc">{card.desc}</p>
              </div>
            </div>
            {card.tools && (
              <div className="tool-row">
                {card.tools.map((tool) => (
                  <span key={tool.name} className="tool-pill">
                    <img src={tool.icon} alt="" />
                    {tool.name}
                  </span>
                ))}
              </div>
            )}
            {card.list && (
              <ul className="dot-list">
                {card.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
