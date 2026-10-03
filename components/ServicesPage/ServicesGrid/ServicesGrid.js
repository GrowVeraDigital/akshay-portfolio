"use client";

import Link from "next/link";
import Reveal from "@/common/Reveal/Reveal";
import "./ServicesGrid.scss";

const detailedServices = [
  {
    num: "01",
    id: "short-form",
    title: "High-Retention Reels & Shorts",
    subtitle: "Algorithm-optimized vertical videos designed to capture immediate attention and drive viral growth.",
    badge: "MOST POPULAR",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M7 3v18" />
        <path d="M3 7.5h4" />
        <path d="M3 12h18" />
        <path d="M3 16.5h4" />
        <path d="M17 3v18" />
      </svg>
    ),
    deliverables: [
      "3-Second Hook Optimization & Visual Flow",
      "Dynamic Kinetic Captions & Subtitles",
      "Trending Audio Sync & Sound Design",
      "Fast-Paced B-Roll, Zoom & Graphic Cuts",
      "Color Grading for Punchy Mobile Contrast",
    ],
    tools: ["After Effects", "Premiere Pro", "CapCut"],
    idealFor: "Instagram Creators, Personal Brands, E-Commerce & Startups",
    turnaround: "24–48 Hours",
  },
  {
    num: "02",
    id: "commercial-editing",
    title: "Commercial & Long-Form Video Editing",
    subtitle: "Story-driven, cinematic video editing that communicates brand message with authority and elegance.",
    badge: "CORE MASTERY",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="m22 8-6 4 6 4V8Z" />
        <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
      </svg>
    ),
    deliverables: [
      "Full Narrative Pacing & Story Structuring",
      "Cinematic Multi-Camera Assembly",
      "Commercial Soundscape & Layered Audio Mix",
      "Advanced Color Correction & Film Look Grade",
      "YouTube Chapters, Custom Thumbnail Assets",
    ],
    tools: ["Premiere Pro", "DaVinci Resolve", "After Effects"],
    idealFor: "YouTube Creators, Corporate Brands, Podcasts & Product Launch Films",
    turnaround: "3–5 Days",
  },
  {
    num: "03",
    id: "graphic-design",
    title: "Brand Identity & Graphic Design",
    subtitle: "Distinguished visual aesthetics and high-converting marketing creatives that command brand respect.",
    badge: "CREATIVE SUITE",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
    deliverables: [
      "Social Media Ad Creatives & Carousel Posts",
      "High-CTR YouTube Thumbnails",
      "Brand Identity Guidelines & Typography Systems",
      "Marketing Banners, Posters & Promotional Assets",
      "Exported in WebP, PNG & Vector Formats",
    ],
    tools: ["Photoshop", "Illustrator", "Canva Pro"],
    idealFor: "Businesses, D2C Brands, Agencies & Digital Marketers",
    turnaround: "2–4 Days",
  },
  {
    num: "04",
    id: "motion-graphics",
    title: "Motion Graphics & 2D Animation",
    subtitle: "Smooth, rhythmic vector and graphic animations that explain complex ideas in seconds.",
    badge: "HIGH ENGAGEMENT",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    deliverables: [
      "Custom Logo Reveals & Brand Stings",
      "Animated Lower Thirds & Title Cards",
      "Infographic Visualizations & UI Callouts",
      "Seamless Transition Packages & Overlays",
      "Transparent Alpha Channel Exports (ProRes 4444)",
    ],
    tools: ["After Effects", "Illustrator"],
    idealFor: "Tech Companies, SaaS Products, Commercials & YouTube Channels",
    turnaround: "3–5 Days",
  },
  {
    num: "05",
    id: "ai-video",
    title: "Generative AI Video & Concept Art",
    subtitle: "Leveraging cutting-edge AI pipelines to generate surreal imagery, cinematic b-roll, and futuristic video ads.",
    badge: "NEXT-GEN",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" />
        <path d="m10 15 5-3-5-3v6Z" />
      </svg>
    ),
    deliverables: [
      "AI Prompt Engineering & Concept Generation",
      "Runway & Kling Video Synthesis",
      "Photorealistic Upscaling to 4K",
      "Motion Interpolation & Audio Atmosphere",
      "AI + Human Editing Hybrid Delivery",
    ],
    tools: ["Runway Gen-3", "Midjourney", "Kling AI", "Higgsfield", "Grok"],
    idealFor: "Forward-thinking Brands, Music Videos & Experimental Visuals",
    turnaround: "2–4 Days",
  },
  {
    num: "06",
    id: "monthly-retainer",
    title: "Full-Stack Creative Retainer",
    subtitle: "A dedicated monthly creative partnership providing consistent, high-volume video and graphic outputs.",
    badge: "BEST VALUE",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 5 18.5V20" />
        <circle cx="9.5" cy="8" r="3" />
        <path d="M19 20v-1.5a3.5 3.5 0 0 0-2.5-3.36" />
        <path d="M14.5 5.13a3 3 0 0 1 0 5.74" />
      </svg>
    ),
    deliverables: [
      "15–30 High-Impact Videos & Creatives per Month",
      "Priority Turnaround Queue (24h turnarounds)",
      "Direct Private Slack or WhatsApp Channel",
      "Unlimited Structured Revision Rounds",
      "Regular Strategic Creative Reviews",
    ],
    tools: ["Full Creative Arsenal"],
    idealFor: "Fast-Growing Creators, Agencies & Direct-to-Consumer Brands",
    turnaround: "Dedicated Monthly Slot",
  },
];

export default function ServicesGrid() {
  return (
    <section className="services-grid-section section projects">
      <div className="section-label">01 / DETAILED SERVICE CATALOG</div>

      <div className="services-catalog-head">
        <Reveal className="section-heading">
          <p className="eyebrow">SERVICES ARCHITECTURE</p>
          <h2>
            Specialized solutions for
            <br />
            every <span>creative demand.</span>
          </h2>
        </Reveal>
        <Reveal className="services-catalog-sub">
          <p>
            Choose a standalone service for your upcoming campaign or combine multiple
            disciplines into a unified creative package.
          </p>
        </Reveal>
      </div>

      <div className="services-cards-grid">
        {detailedServices.map((service) => (
          <Reveal key={service.id} className="service-deep-card">
            {/* Ambient hover light */}
            <div className="service-card-ambient" />

            {/* Top row: Number, Badge, and Icon */}
            <div className="service-card-header">
              <div className="service-num-wrap">
                <span className="service-num-text">{service.num}</span>
                <span className="service-badge-pill">{service.badge}</span>
              </div>
              <div className="service-icon-box">{service.icon}</div>
            </div>

            {/* Title & Subtitle */}
            <h3 className="service-card-title">{service.title}</h3>
            <p className="service-card-desc">{service.subtitle}</p>

            {/* Deliverables List */}
            <div className="service-deliverables-block">
              <span className="deliverables-title">WHAT&apos;S INCLUDED:</span>
              <ul className="deliverables-list">
                {service.deliverables.map((item) => (
                  <li key={item}>
                    <span className="check-icon">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Meta Foot: Tools & Turnaround */}
            <div className="service-meta-footer">
              <div className="meta-left">
                <span className="meta-title">STACK</span>
                <div className="tools-pills-row">
                  {service.tools.map((t) => (
                    <span key={t} className="tool-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="meta-right">
                <span className="meta-title">TIMELINE</span>
                <span className="turnaround-val">{service.turnaround}</span>
              </div>
            </div>

            {/* Action CTA Link */}
            <Link href="/contact" className="service-inquire-btn">
              <span>Book This Service</span>
              <span className="arrow-sym">→</span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
