import Reveal from "@/components/Reveal/Reveal";

export default function About() {
  return (
    <section id="about" className="section projects">
      <div className="section-label">01 / ABOUT</div>
      <div className="about-grid">
        <Reveal className="section-heading">
          <p className="eyebrow">A LITTLE ABOUT ME</p>
          <h2>
            Creative mind.
            <br />
            <span>Visual storyteller.</span>
          </h2>
        </Reveal>
        <Reveal className="about-copy">
          <p>
            I&apos;m <strong>Akshay Chheta</strong>, a Graphic Designer &amp;
            Video Editor focused on branding, reels, ads, promotional content and
            motion graphics.
          </p>
          <p>
            I enjoy turning ideas into clean, engaging visuals and creating
            digital content that feels purposeful, modern and memorable.
          </p>
          <div className="info-row">
            <div>
              <span>Based in</span>
              <strong>Surat, India</strong>
            </div>
            <div>
              <span>Experience</span>
              <strong>Rejoicehub LLP</strong>
            </div>
            <div>
              <span>Languages</span>
              <strong>Gujarati · Hindi · English</strong>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
