import Reveal from "@/common/Reveal/Reveal";
import "./AboutProcess.scss";

const workflowSteps = [
  {
    step: "01",
    phase: "BRIEFING & ALIGNMENT",
    title: "Discovery & Creative Deconstruction",
    desc: "Understanding target audience psychology, campaign objectives, brand guidelines, reference visual benchmarks, and technical aspect ratio needs.",
    bulletPoints: ["Audience Analysis", "Moodboard Assembly", "Deliverables Scope", "Asset Audit"],
  },
  {
    step: "02",
    phase: "IDEATION & HOOKS",
    title: "Concept & Narrative Blueprint",
    desc: "Designing the crucial 3-second visual hook, drafting storyboard beats, choosing typography, and selecting complementary audio tracks and tempo.",
    bulletPoints: ["Hook Psychology", "Visual Storyboard", "Typography Curation", "Audio Direction"],
  },
  {
    step: "03",
    phase: "CRAFT & POST-PRODUCTION",
    title: "Cutting, Motion & Sound Design",
    desc: "The core production phase: precision trimming, kinetic typography, dynamic transitions, multi-layered Foley sound effects, and cinematic color grading.",
    bulletPoints: ["Timeline Editing", "Motion Graphics", "Sound Landscape", "Color Grading"],
  },
  {
    step: "04",
    phase: "POLISH & EXPORTS",
    title: "Review & Multi-Platform Handover",
    desc: "Refining details through feedback rounds, ensuring crisp contrast on mobile screens, and exporting ultra-sharp master files for Instagram, YouTube, and Ads.",
    bulletPoints: ["Iterative Polish", "9:16 & 16:9 Exports", "High-Bitrate Masters", "Final Handover"],
  },
];

export default function AboutProcess() {
  return (
    <section className="about-process-section section projects">
      <div className="section-label">05 / WORKFLOW</div>

      <Reveal className="section-heading">
        <p className="eyebrow">THE CREATIVE PIPELINE</p>
        <h2>
          Structured process.
          <br />
          <span>Predictable excellence.</span>
        </h2>
      </Reveal>

      <div className="process-grid">
        {workflowSteps.map((item) => (
          <Reveal key={item.step} className="process-card">
            <div className="process-step-header">
              <span className="process-step-num">{item.step}</span>
              <span className="process-phase">{item.phase}</span>
            </div>
            <h3 className="process-title">{item.title}</h3>
            <p className="process-desc">{item.desc}</p>
            <ul className="process-bullets">
              {item.bulletPoints.map((pt) => (
                <li key={pt}>
                  <span className="bullet-check">✓</span>
                  {pt}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
