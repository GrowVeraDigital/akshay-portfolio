import Reveal from "@/common/Reveal/Reveal";
import "./AboutTools.scss";

const softwareStack = [
  {
    name: "Adobe Premiere Pro",
    category: "Primary NLE",
    icon: "/assets/icons/premiere.webp",
    level: "95%",
    desc: "Long-form cutting, commercial editing, multi-cam pacing, sound design sync, and color grading pipelines.",
    tags: ["Pacing", "Speed Ramps", "Sound Mix", "LUTs"],
  },
  {
    name: "Adobe After Effects",
    category: "Motion & VFX",
    icon: "/assets/icons/aftereffects.webp",
    level: "90%",
    desc: "Kinetic typography, 2D animation, motion graphics for ads, logo reveals, and visual effects compositing.",
    tags: ["Kinetic Type", "Graph Editor", "Tracking", "Transitions"],
  },
  {
    name: "Adobe Photoshop",
    category: "Raster & Imaging",
    icon: "/assets/icons/photoshop.webp",
    level: "95%",
    desc: "High-CTR YouTube/Reel thumbnail design, complex photo manipulation, poster art, and digital ad visuals.",
    tags: ["Thumbnails", "Compositing", "Retouching", "Color Balance"],
  },
  {
    name: "Adobe Illustrator",
    category: "Vector Graphics",
    icon: "/assets/icons/illustrator.webp",
    level: "88%",
    desc: "Scalable vector logos, brand identities, custom iconography, illustrations, and print-ready digital assets.",
    tags: ["Vector Art", "Logos", "Branding", "Iconography"],
  },
  {
    name: "CapCut Pro",
    category: "Short-Form Velocity",
    icon: "/assets/icons/capcut.jpg",
    level: "92%",
    desc: "Rapid turnaround reels, dynamic automated captions, trending audio sync, and mobile-optimized formats.",
    tags: ["Dynamic Captions", "Fast Turnaround", "Sound FX", "Hooks"],
  },
  {
    name: "Canva Pro",
    category: "Rapid Collateral",
    icon: "/assets/icons/canva.png",
    level: "90%",
    desc: "Quick social media templates, client presentation decks, and rapid marketing collateral prototyping.",
    tags: ["Presentations", "Templates", "Social Posts", "Prototypes"],
  },
];

const specializedSkills = [
  "Audio Foley & Sound Design",
  "Color Grading & Cinematic LUTs",
  "Hook & Retention Psychology",
  "Kinetic Typography Animation",
  "Multi-Format Aspect Ratio Mastering (9:16, 16:9, 1:1, 4:5)",
  "Commercial Ad Storyboarding",
  "Visual Hierarchy & Contrast Tuning",
  "Brand Identity Design Systems",
];

export default function AboutTools() {
  return (
    <section className="about-tools-section section projects">
      <div className="section-label">04 / ARSENAL</div>

      <Reveal className="section-heading">
        <p className="eyebrow">SOFTWARE &amp; CRAFT MATRIX</p>
        <h2>
          Tools of precision.
          <br />
          <span>Boundless execution.</span>
        </h2>
      </Reveal>

      <div className="tools-grid">
        {softwareStack.map((tool) => (
          <Reveal key={tool.name} className="tool-card">
            <div className="tool-card-top">
              <div className="tool-card-identity">
                <div className="tool-icon-wrapper">
                  <img src={tool.icon} alt={tool.name} />
                </div>
                <div>
                  <span className="tool-category">{tool.category}</span>
                  <h3 className="tool-name">{tool.name}</h3>
                </div>
              </div>
              <span className="tool-level-badge">{tool.level}</span>
            </div>

            <div className="tool-level-bar">
              <div
                className="tool-level-fill"
                style={{ width: tool.level }}
              ></div>
            </div>

            <p className="tool-card-desc">{tool.desc}</p>

            <div className="tool-tags">
              {tool.tags.map((t) => (
                <span key={t} className="tool-tag-item">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="specialized-disciplines">
        <h4 className="disciplines-title">Specialized Disciplines &amp; Techniques</h4>
        <div className="disciplines-chips">
          {specializedSkills.map((skill) => (
            <span key={skill} className="discipline-chip">
              <span className="chip-bullet">✦</span>
              {skill}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
