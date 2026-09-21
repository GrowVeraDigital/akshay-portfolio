import Reveal from "@/common/Reveal/Reveal";
import "./AboutTimeline.scss";

const milestones = [
  {
    year: "2021",
    phase: "FOUNDATIONS",
    role: "Graphic Designer & Visual Explorer",
    desc: "Began mastering Adobe Photoshop and Illustrator. Focused intensely on layout design, typography principles, digital poster creation, and vector illustrations.",
    skills: ["Adobe Photoshop", "Adobe Illustrator", "Layout Design", "Vector Art"],
  },
  {
    year: "2022",
    phase: "MOTION LEAP",
    role: "Motion Designer & Video Editor",
    desc: "Expanded deeply into dynamic video production with Premiere Pro and After Effects. Mastered keyframe animations, audio synchronization, speed ramping, and short-form video pacing.",
    skills: ["Premiere Pro", "After Effects", "Kinetic Typography", "Audio Sync"],
  },
  {
    year: "2023 — Present",
    phase: "COMMERCIAL PRODUCTION",
    role: "Graphic Designer & Video Editor at Rejoicehub LLP",
    desc: "Spearheading high-impact social media creatives, conversion-focused promotional ads, reels, and digital marketing materials. Managing projects end-to-end under tight deadlines.",
    skills: ["Commercial Ads", "Viral Reels", "Brand Guidelines", "Rejoicehub LLP"],
  },
  {
    year: "Beyond",
    phase: "FUTURE HORIZONS",
    role: "Next-Gen Creative Direction & 3D",
    desc: "Expanding into advanced AI-augmented workflows, 3D motion design integration, and cinematic brand storytelling for global brands.",
    skills: ["AI Pipelines", "3D Motion", "Cinematic Grading", "Creative Direction"],
  },
];

export default function AboutTimeline() {
  return (
    <section className="about-timeline-section section projects">
      <div className="section-label">03 / MILESTONES</div>

      <div className="timeline-layout">
        <Reveal className="timeline-header">
          <p className="eyebrow">CAREER &amp; CRAFT EVOLUTION</p>
          <h2>
            The journey of
            <br />
            <span>continuous evolution.</span>
          </h2>
          <p className="timeline-subtext">
            From humble beginnings experimenting with pixels to directing commercial motion campaigns.
            Every milestone represents hundreds of hours behind the monitor sharpening the craft.
          </p>
        </Reveal>

        <div className="timeline-flow">
          {milestones.map((item, index) => (
            <Reveal key={item.year} className="timeline-node">
              <div className="timeline-marker">
                <span className="marker-dot"></span>
                <span className="marker-line"></span>
              </div>
              <div className="timeline-content">
                <div className="timeline-top">
                  <span className="timeline-year">{item.year}</span>
                  <span className="timeline-phase">{item.phase}</span>
                </div>
                <h3 className="timeline-role">{item.role}</h3>
                <p className="timeline-desc">{item.desc}</p>
                <div className="timeline-skills">
                  {item.skills.map((s) => (
                    <span key={s} className="skill-chip">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
