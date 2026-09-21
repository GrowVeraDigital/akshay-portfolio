import Reveal from "@/common/Reveal/Reveal";
import "./AboutStats.scss";

const stats = [
  {
    value: "3+",
    unit: "Years",
    title: "Creative Experience",
    desc: "Crafting impactful social media content, brand kits, motion graphics, and ads.",
  },
  {
    value: "100+",
    unit: "Delivered",
    title: "Projects Completed",
    desc: "Reels, brand campaigns, promotional videos, and graphic design assets.",
  },
  {
    value: "5M+",
    unit: "Views",
    title: "Audience Reach",
    desc: "Combined digital reach across client reels, viral shorts, and video ad campaigns.",
  },
  {
    value: "100%",
    unit: "Commitment",
    title: "On-Time Delivery",
    desc: "Relentless focus on deadlines, polished quality, and client satisfaction.",
  },
];

export default function AboutStats() {
  return (
    <section className="about-stats-section section">
      <div className="about-stats-grid">
        {stats.map((stat, i) => (
          <Reveal key={stat.title} className="stat-card">
            <div className="stat-glow"></div>
            <div className="stat-header">
              <span className="stat-num">{stat.value}</span>
              <span className="stat-unit">{stat.unit}</span>
            </div>
            <h3 className="stat-title">{stat.title}</h3>
            <p className="stat-desc">{stat.desc}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
