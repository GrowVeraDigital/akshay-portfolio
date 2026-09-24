"use client";

import Reveal from "@/common/Reveal/Reveal";
import "./ServicesProcess.scss";

const steps = [
  {
    num: "01",
    phase: "DISCOVERY & BRIEF",
    title: "Strategic Alignment & Moodboard",
    desc: "We discuss your campaign objectives, target audience, brand guidelines, and visual references. You share raw assets and vision briefs via Google Drive or Frame.io.",
  },
  {
    num: "02",
    phase: "ASSEMBLY & PACING",
    title: "Rapid Cut & Visual Narrative",
    desc: "I craft the initial narrative spine, establishing dynamic rhythm, compelling hooks in the first 3 seconds, and synchronizing initial music transitions.",
  },
  {
    num: "03",
    phase: "POLISH & SOUND DESIGN",
    title: "Motion, Grade & Sound Sculpting",
    desc: "Adding layered commercial sound effects, cinematic color grading, kinetic typography, and graphic overlays. We review together and refine across 2 revision cycles.",
  },
  {
    num: "04",
    phase: "DELIVERY & ASSETS",
    title: "Master 4K Export & Archival",
    desc: "Final master files delivered in platform-native resolutions (9:16 vertical for Reels, 16:9 for YouTube/Commercials) optimized for maximum algorithmic bitrate.",
  },
];

export default function ServicesProcess() {
  return (
    <section className="services-process-section section projects">
      <div className="section-label">02 / WORKFLOW SYSTEM</div>

      <div className="process-head-row">
        <Reveal className="section-heading">
          <p className="eyebrow">HOW WE WORK</p>
          <h2>
            A structured workflow
            <br />
            built for <span>speed and quality.</span>
          </h2>
        </Reveal>
        <Reveal className="process-sub-copy">
          <p>
            No bloated agency timelines or chaotic email threads. A streamlined,
            transparent 4-step creative pipeline that delivers on time, every time.
          </p>
        </Reveal>
      </div>

      <div className="process-steps-grid">
        {steps.map((step) => (
          <Reveal key={step.num} className="process-step-card">
            <div className="step-top-line">
              <span className="step-num-huge">{step.num}</span>
              <span className="step-phase-pill">{step.phase}</span>
            </div>

            <h3 className="step-title">{step.title}</h3>
            <p className="step-desc">{step.desc}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
