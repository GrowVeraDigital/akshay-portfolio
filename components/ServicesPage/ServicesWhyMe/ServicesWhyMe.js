"use client";

import Reveal from "@/common/Reveal/Reveal";
import "./ServicesWhyMe.scss";

const comparisons = [
  {
    feature: "Turnaround Speed",
    akshay: "24–48 hours for short-form reels; 3–5 days for commercial edits.",
    agency: "2–3 weeks bogged down in bureaucracy and multi-tier approvals.",
  },
  {
    feature: "Direct Communication",
    akshay: "Direct 1-on-1 access via private WhatsApp or Slack channel. Zero middlemen.",
    agency: "Junior account managers relaying messages back and forth with lag.",
  },
  {
    feature: "Retention-Engineered Editing",
    akshay: "Obsessed with first 3-second hooks, dynamic sound FX, and viewer retention.",
    agency: "Generic templates with low audience holding power.",
  },
  {
    feature: "Pricing Transparency",
    akshay: "Clear, upfront project pricing or predictable monthly retainers.",
    agency: "Inflated hourly rates with unexpected overheads and hidden revision fees.",
  },
  {
    feature: "Software & AI Tech Stack",
    akshay: "Premiere, After Effects, DaVinci Resolve + latest Gen-AI pipelines.",
    agency: "Legacy pipelines slow to adopt modern short-form viral trends.",
  },
];

export default function ServicesWhyMe() {
  return (
    <section className="services-whyme-section section projects">
      <div className="section-label">03 / WHY CHOOSE ME</div>

      <div className="whyme-head-row">
        <Reveal className="section-heading">
          <p className="eyebrow">THE COMPETITIVE EDGE</p>
          <h2>
            Why brands partner with
            <br />
            <span>Akshay over agencies.</span>
          </h2>
        </Reveal>
        <Reveal className="whyme-sub-copy">
          <p>
            You get agency-tier visual firepower with the speed, agility, and dedicated
            care of a specialized creative collaborator.
          </p>
        </Reveal>
      </div>

      <Reveal className="whyme-table-container">
        <div className="table-header-row">
          <div className="col-feature">FEATURE / ASPECT</div>
          <div className="col-akshay">WITH AKSHAY CHHETA</div>
          <div className="col-agency">TRADITIONAL AGENCIES</div>
        </div>

        <div className="table-body">
          {comparisons.map((row) => (
            <div key={row.feature} className="table-body-row">
              <div className="col-feature">
                <span className="feature-text">{row.feature}</span>
              </div>
              <div className="col-akshay">
                <span className="akshay-badge">✓ AKSHAY</span>
                <p>{row.akshay}</p>
              </div>
              <div className="col-agency">
                <span className="agency-badge">✕ AGENCIES</span>
                <p>{row.agency}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
