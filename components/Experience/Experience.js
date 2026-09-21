import Reveal from "@/components/Reveal/Reveal";

export default function Experience() {
  return (
    <section className="section projects">
      <div className="section-labelnew">04 / EXPERIENCE</div>
      <div className="experience-grid">
        <Reveal className="section-heading">
          <p className="eyebrow">WORK EXPERIENCE</p>
          <h2>
            Creating with
            <br />
            <span>purpose.</span>
          </h2>
        </Reveal>
        <Reveal className="experience-card">
          <div className="experience-top">
            <span>PROFESSIONAL EXPERIENCE</span>
            <span>01</span>
          </div>
          <h3>Rejoicehub LLP</h3>
          <p className="role">Graphic Designer &amp; Video Editor</p>
          <ul>
            <li>Designed high-converting social media creatives.</li>
            <li>Edited promotional ads, reels and brand campaigns.</li>
            <li>Developed motion graphics content.</li>
            <li>Collaborated with marketing teams for campaign execution.</li>
            <li>Created branding materials and digital assets.</li>
            <li>Managed multiple creative projects under deadlines.</li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
