import Link from "next/link";
import Reveal from "@/common/Reveal/Reveal";
import "./Contact.scss";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <Reveal className="contact-box">
        <p className="eyebrow">LET&apos;S WORK TOGETHER</p>
        <h2>
          Have an idea?
          <br />
          <span>Let&apos;s make it visual.</span>
        </h2>
        <a className="contact-email" href="mailto:akshaypatel9513@gmail.com">
          akshaypatel9513@gmail.com <span>↗</span>
        </a>
        <div className="contact-details">
          <span>
            <h3>+91 87348 39513</h3>
          </span>
          <span>
            <h3>Surat, India</h3>
          </span>
        </div>
        <div style={{ marginTop: "32px" }}>
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "#111",
              color: "var(--lime)",
              padding: "13px 26px",
              borderRadius: "4px",
              fontWeight: 700,
              fontSize: "14px",
              transition: "transform 0.2s ease",
            }}
          >
            Open Dedicated Contact Page <span>→</span>
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
