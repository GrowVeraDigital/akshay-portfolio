import Reveal from "@/common/Reveal/Reveal";
import "./AboutValues.scss";

const values = [
  {
    num: "01",
    tag: "AUDIO-VISUAL SYNC",
    title: "Rhythm & Sonic Harmony",
    desc: "Video editing is fundamentally musical. Every cut, transition, and speed ramp is mathematically locked to audio beats, sub-bass drops, and subtle Foley sound design to create an immersive, hypnotic flow.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M2 10v4" />
        <path d="M6 6v12" />
        <path d="M10 3v18" />
        <path d="M14 8v8" />
        <path d="M18 5v14" />
        <path d="M22 10v4" />
      </svg>
    ),
  },
  {
    num: "02",
    tag: "BRAND EQUITY",
    title: "Bespoke Aesthetic Rigor",
    desc: "Zero generic templates. From custom typography lockups to custom color luts, every element is designed to reflect the authentic soul and premium positioning of your brand.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    num: "03",
    tag: "RETENTION PSYCHOLOGY",
    title: "Hook & Pacing Engineering",
    desc: "Social algorithms demand immediate attention. I design thumb-stopping 3-second visual hooks, kinetic typography, and seamless loop structures that skyrocket average view duration.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    num: "04",
    tag: "SPEED & INNOVATION",
    title: "Modern & AI-Powered Pipeline",
    desc: "Leveraging cutting-edge AI generative tools, smart tracking, automated workflows, and cloud collaboration to deliver commercial-grade visuals with rapid turnaround times.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2v4" />
        <path d="M12 18v4" />
        <path d="M4.93 4.93l2.83 2.83" />
        <path d="M16.24 16.24l2.83 2.83" />
        <path d="M2 12h4" />
        <path d="M18 12h4" />
        <path d="M4.93 19.07l2.83-2.83" />
        <path d="M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
];

export default function AboutValues() {
  return (
    <section className="about-values-section section projects">
      <div className="section-label">02 / PHILOSOPHY</div>

      <Reveal className="section-heading">
        <p className="eyebrow">HOW I THINK &amp; CREATE</p>
        <h2>
          Craft with <span>purpose.</span>
          <br />
          Edit with <span>rhythm.</span>
        </h2>
      </Reveal>

      <div className="values-grid">
        {values.map((v) => (
          <Reveal key={v.num} className="value-card">
            <div className="value-card-glow"></div>
            <div className="value-top">
              <div className="value-icon-box">{v.icon}</div>
              <span className="value-num">{v.num}</span>
            </div>
            <span className="value-tag">{v.tag}</span>
            <h3 className="value-title">{v.title}</h3>
            <p className="value-desc">{v.desc}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
