"use client";

import { useState } from "react";
import Reveal from "@/common/Reveal/Reveal";
import "./ServicesFaq.scss";

const faqs = [
  {
    q: "How does the file transfer and raw footage workflow operate?",
    a: "You can securely upload raw footage, audio stems, and brand assets to Google Drive, Dropbox, or Frame.io. I provide dedicated cloud project folders for seamless asset organization.",
  },
  {
    q: "What is your typical turnaround time per project?",
    a: "Short-form vertical reels and ads are typically delivered within 24–48 hours. Long-form YouTube edits, podcasts, and commercial videos take approximately 3–5 business days depending on complexity.",
  },
  {
    q: "How many revision rounds are included in each commission?",
    a: "Every project comes standard with 2 structured revision rounds to polish timing, music, grading, and text callouts. My priority is ensuring 100% alignment with your vision.",
  },
  {
    q: "Do you offer ongoing monthly retainer partnerships?",
    a: "Yes! For creators, brands, and agencies that require consistent monthly deliverables (15–30 videos or brand design sets), dedicated monthly retainers offer priority queue turnaround and dedicated communication channels.",
  },
  {
    q: "Are music tracks and sound effects commercially cleared?",
    a: "Yes. I source high-end audio and music from commercially licensed libraries, ensuring your videos can be monetized on YouTube, Meta, TikTok, and TV ads without copyright strikes.",
  },
  {
    q: "How do we initiate a project and discuss custom scope?",
    a: "Simply click the 'Book Project' button or visit the dedicated Contact page to submit your inquiry. I will review your requirements and respond within 24 hours with timeline and strategic scope.",
  },
];

export default function ServicesFaq() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="services-faq-section section projects">
      <div className="section-label">04 / FREQUENTLY ASKED QUESTIONS</div>

      <div className="faq-head-row">
        <Reveal className="section-heading">
          <p className="eyebrow">CLEAR ANSWERS</p>
          <h2>
            Common questions about
            <br />
            <span>collaboration &amp; process.</span>
          </h2>
        </Reveal>
        <Reveal className="faq-sub-copy">
          <p>
            Have a custom requirement or question not listed here?
            Feel free to reach out directly anytime.
          </p>
        </Reveal>
      </div>

      <div className="services-faq-list">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <Reveal key={faq.q} className={`faq-card-item ${isOpen ? "open" : ""}`}>
              <button
                type="button"
                className="faq-question-btn"
                onClick={() => toggleFaq(idx)}
              >
                <span className="faq-q-text">{faq.q}</span>
                <span className="faq-toggle-icon">{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen && (
                <div className="faq-answer-pane">
                  <p>{faq.a}</p>
                </div>
              )}
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
