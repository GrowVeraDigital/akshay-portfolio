import Link from "next/link";
import Reveal from "@/common/Reveal/Reveal";
import "./Services.scss";

const services = [
  { num: "01", title: "Graphic Design", desc: "Social media creatives, branding materials and digital assets." },
  { num: "02", title: "Video Editing", desc: "Reels, promotional ads, client videos and short-form content." },
  { num: "03", title: "Motion Graphics", desc: "Motion-driven visuals and engaging animated content." },
  { num: "04", title: "Brand Visuals", desc: "Consistent creative direction and visual assets for campaigns." },
  { num: "05", title: "AI video Creation", desc: "Creative AI visuals, cinematic storytelling and engaging content." },
];

export default function Services() {
  return (
    <section id="services" className="section projects">
      <div className="section-labelnew">04 / SERVICES</div>
      <div className="services-grid">
        <Reveal className="section-heading">
          <p className="eyebrow">WHAT I DO</p>
          <h2>
            Creative services
            <br />
            for <span>digital brands.</span>
          </h2>
          <div style={{ marginTop: "28px" }}>
            <Link href="/services" className="btn btn-ghost">
              Explore All Services &amp; Packages <span>→</span>
            </Link>
          </div>
        </Reveal>
        <div className="service-list">
          {services.map((s) => (
            <Reveal key={s.num} className="service">
              <span>{s.num}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <b>↗</b>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
