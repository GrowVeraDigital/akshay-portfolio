"use client";

import { useEffect, useRef, useState } from "react";
import { createInquiryMailto, createInquiryWhatsAppUrl } from "@/lib/inquiryEmail";
import "./ContactModal.scss";

const serviceOptions = [
  "Social Media Reels",
  "Commercial Video Editing",
  "Brand & Graphic Design",
  "Motion Graphics & VFX",
  "Generative AI Video",
  "Full Creative Retainer",
];

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [closeCount, setCloseCount] = useState(0);

  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(serviceOptions[0]);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const timerRef = useRef(null);

  // 1. Initial trigger: Open modal 2 seconds after user arrives
  useEffect(() => {
    const initialTimer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(initialTimer);
  }, []);
  // 2. Handle Modal Close with Dynamic In-Memory Intervals (5m -> 15m -> 30m infinite)
  const handleClose = () => {
    setIsOpen(false);
    setSubmitted(false);
    setError("");
    // Interval Sequence (in milliseconds):
    // 1st close -> 5 min (300,000 ms)
    // 2nd close -> 15 min (900,000 ms)
    // 3rd+ close -> 30 min (1,800,000 ms) repeating infinitely
    let delayMs;
    if (closeCount === 0) {
      delayMs = 5 * 60 * 1000; // 5 minutes
    } else if (closeCount === 1) {
      delayMs = 15 * 60 * 1000; // 15 minutes
    } else {
      delayMs = 30 * 60 * 1000; // 30 minutes infinite
    }

    setCloseCount((prev) => prev + 1);

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      setIsOpen(true);
    }, delayMs);
  };

  // Keyboard Escape listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeCount]);

  // Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in all required fields.");
      return;
    }
    setError("");
    window.location.href = createInquiryMailto({ name, email, service, message });
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div className="contact-modal-overlay" onClick={handleClose}>
      <div
        className="contact-modal-card"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className="modal-ambient-glow" />

        {/* Close Button */}
        <button
          type="button"
          className="modal-close-btn"
          onClick={handleClose}
          aria-label="Close popup"
        >
          ✕
        </button>

        {/* Header */}
        <div className="modal-header">
          <span className="modal-eyebrow">⚡ LET&apos;S WORK TOGETHER</span>
          <h2 className="modal-title">
            Have a project? <span>Let&apos;s talk.</span>
          </h2>
          <p className="modal-desc">
            Tell me about your video editing, brand identity, or reels vision.
            I&apos;ll get back to you with ideas, scope &amp; timeline.
          </p>
        </div>

        {/* Form Body */}
        {submitted ? (
          <div className="modal-success-box">
            <div className="success-icon">✓</div>
            <h3>Complete Your Inquiry</h3>
            <p>
              Send the prepared draft from your email app to complete your inquiry.
              If it did not open, check your default email app settings.
            </p>
            <button
              type="button"
              className="modal-done-btn"
              onClick={() => setSubmitted(false)}
            >
              Back to Form
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="modal-form">
            <div className="modal-input-row">
              <div className="modal-input-group">
                <label htmlFor="modal-name">Your Name *</label>
                <input
                  id="modal-name"
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="modal-input-group">
                <label htmlFor="modal-email">Your Email *</label>
                <input
                  id="modal-email"
                  type="email"
                  required
                  placeholder="e.g. alex@brand.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="modal-input-group">
              <label htmlFor="modal-service">Service Interested In</label>
              <select
                id="modal-service"
                value={service}
                onChange={(e) => setService(e.target.value)}
              >
                {serviceOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div className="modal-input-group">
              <label htmlFor="modal-message">Project Brief *</label>
              <textarea
                id="modal-message"
                required
                rows={3}
                placeholder="Briefly describe your project goals, references, or timeline..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            {error && (
              <div className="modal-error-banner">
                <span>⚠</span> {error}
              </div>
            )}

            <div className="modal-actions-row">
              <button
                type="submit"
                className="modal-submit-btn"
              >
                <span>Send Inquiry ↗</span>
              </button>

              <a
                href={createInquiryWhatsAppUrl({ name, email, service, message })}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-whatsapp-link"
              >
                <span>Chat on WhatsApp</span>
                <span className="wa-icon">↗</span>
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
