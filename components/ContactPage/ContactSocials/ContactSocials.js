import Reveal from "@/common/Reveal/Reveal";
import "./ContactSocials.scss";

const platforms = [
  {
    name: "Email Inbox",
    handle: "akshaypatel9513@gmail.com",
    url: "mailto:akshaypatel9513@gmail.com",
    badge: "Direct",
    icon: "✉️",
  },
  {
    name: "WhatsApp Direct",
    handle: "+91 95130 00000",
    url: "https://wa.me/919513000000",
    badge: "Fastest",
    icon: "💬",
  },
  {
    name: "LinkedIn",
    handle: "Akshay Chheta",
    url: "https://linkedin.com",
    badge: "Professional",
    icon: "💼",
  },
  {
    name: "Behance",
    handle: "akshaychheta",
    url: "https://behance.net",
    badge: "Portfolio",
    icon: "🎨",
  },
  {
    name: "Instagram",
    handle: "@akshay.creates",
    url: "https://instagram.com",
    badge: "Reels",
    icon: "📸",
  },
  {
    name: "Download Resume",
    handle: "Akshay-Chheta-CV.pdf",
    url: "/assets/Akshay-Chheta-Resume.pdf",
    badge: "PDF",
    icon: "📄",
    targetBlank: true,
  },
];

export default function ContactSocials() {
  return (
    <section className="contact-socials-section section projects">
      <div className="section-label">03 / CONNECT</div>

      <Reveal className="section-heading">
        <p className="eyebrow">ACROSS THE WEB</p>
        <h2>
          Connect &amp; <span>follow along.</span>
        </h2>
      </Reveal>

      <div className="socials-grid">
        {platforms.map((p) => (
          <Reveal key={p.name} className="social-card-item">
            <a
              href={p.url}
              target={p.targetBlank || p.url.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="social-card-link"
            >
              <div className="social-top">
                <span className="social-icon">{p.icon}</span>
                <span className="social-badge">{p.badge}</span>
              </div>
              <h3 className="social-name">{p.name}</h3>
              <p className="social-handle">{p.handle}</p>
              <span className="social-arrow">↗</span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
