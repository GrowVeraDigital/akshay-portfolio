import "./Marquee.scss";

export default function Marquee() {
  const items = (
    <>
      <span>GRAPHIC DESIGN</span><b>✦</b>
      <span>VIDEO EDITING</span><b>✦</b>
      <span>MOTION GRAPHICS</span><b>✦</b>
      <span>BRANDING</span><b>✦</b>
      <span>REELS &amp; ADS</span><b>✦</b>
    </>
  );

  return (
    <section className="marquee">
      <div className="marquee-track">
        <div className="marquee-group">{items}</div>
        <div className="marquee-group" aria-hidden="true">{items}</div>
        <div className="marquee-group" aria-hidden="true">{items}</div>
        <div className="marquee-group" aria-hidden="true">{items}</div>
      </div>
    </section>
  );
}
