import Reveal from "@/common/Reveal/Reveal";
import "./AboutStory.scss";

export default function AboutStory() {
  return (
    <section className="about-story-section section projects">
      <div className="section-label">01 / THE STORY &amp; VISION</div>

      <div className="about-story-grid">
        <Reveal className="about-story-left">
          <p className="eyebrow">MY CREATIVE JOURNEY</p>
          <h2 className="story-heading">
            From static frames
            <br />
            to <span>moving stories.</span>
          </h2>

          <div className="story-narrative">
            <p>
              My design journey started with a deep fascination for visual balance, typography,
              and color psychology. Early on, I realized that good design is never just about
              making something &ldquo;look pretty&rdquo; — it is about clarity, communication, and
              eliciting an instantaneous human emotion.
            </p>
            <p>
              As digital consumption accelerated towards video, I naturally gravitated toward
              <strong> motion graphics and video editing</strong>. Adding the dimensions of rhythm,
              sound design, and kinetic typography allowed me to elevate storytelling into
              something visceral and impossible to scroll past.
            </p>
            <p>
              Today, at <strong>Rejoicehub LLP</strong>, I engineer visual identities and
              commercial video content that help modern brands command attention in crowded digital
              feeds. Whether it&apos;s a 15-second high-energy viral reel, a conversion-focused
              product ad, or comprehensive brand guidelines, I bring obsessive precision to every frame.
            </p>
          </div>

          <div className="quote-callout">
            <div className="quote-mark">&ldquo;</div>
            <p>
              A great visual hooks the eye for a second; a great story keeps the heart engaged forever.
            </p>
          </div>
        </Reveal>

        <Reveal className="about-story-right">
          <div className="profile-matrix-card">
            <h3 className="matrix-title">Profile Overview</h3>

            <div className="matrix-items">
              <div className="matrix-item">
                <span className="label">Location</span>
                <span className="value">Surat, Gujarat, India 🇮🇳</span>
              </div>
              <div className="matrix-item">
                <span className="label">Current Role</span>
                <span className="value">Graphic Designer &amp; Video Editor</span>
              </div>
              <div className="matrix-item">
                <span className="label">Company</span>
                <span className="value">Rejoicehub LLP</span>
              </div>
              <div className="matrix-item">
                <span className="label">Languages</span>
                <span className="value">Gujarati · Hindi · English</span>
              </div>
              <div className="matrix-item">
                <span className="label">Core Specialization</span>
                <span className="value">Motion Graphics, Reels, Video Ads, Brand Visuals</span>
              </div>
              <div className="matrix-item">
                <span className="label">Collaboration</span>
                <span className="value highlight">Remote &amp; On-Site Worldwide</span>
              </div>
            </div>

            <div className="curated-tags">
              <span className="tag">#VideoEditing</span>
              <span className="tag">#GraphicDesign</span>
              <span className="tag">#MotionGraphics</span>
              <span className="tag">#SocialMediaAds</span>
              <span className="tag">#BrandIdentity</span>
              <span className="tag">#ReelsDirection</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
