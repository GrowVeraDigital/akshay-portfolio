"use client";

import { useState, useEffect } from "react";
import Reveal from "@/common/Reveal/Reveal";
import { createInquiryMailto } from "@/lib/inquiryEmail";
import "./ContactForm.scss";

const projectTypes = [
  "Social Media Reels",
  "Promotional Video Ads",
  "Motion Graphics",
  "Graphic & Brand Design",
  "YouTube / Long-Form",
  "Full Creative Package",
];

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedType, setSelectedType] = useState("Social Media Reels");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  // Live IST Time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setCurrentTime(now.toLocaleTimeString("en-US", options) + " IST");
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("akshaypatel9513@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in all required fields.");
      return;
    }
    setError("");
    window.location.href = createInquiryMailto({ name, email, phone, service: selectedType, message });
    setSubmitted(true);
  };

  return (
    <section className="contact-form-section section projects">
      <div className="section-label">01 / GET IN TOUCH</div>

      <div className="contact-grid-wrap">
        {/* Left Form */}
        <Reveal className="contact-form-panel">
          <div className="form-header">
            <h2 className="form-title">Send a Project Inquiry</h2>
            <p className="form-subtitle">
              Fill in the details below and I&apos;ll get back to you with ideas, scope &amp; timeline.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="inquiry-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="client-name">Your Name *</label>
                <input
                  id="client-name"
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="client-email">Your Email *</label>
                <input
                  id="client-email"
                  type="email"
                  required
                  placeholder="e.g. alex@brand.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="client-phone">Phone / WhatsApp (Optional)</label>
              <input
                id="client-phone"
                type="tel"
                placeholder="e.g. +91 98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            {/* Service Chips */}
            <div className="form-group">
              <label>Service Category</label>
              <div className="chips-grid">
                {projectTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    className={`chip-btn ${selectedType === type ? "active" : ""}`}
                    onClick={() => setSelectedType(type)}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>


            {/* Message Details */}
            <div className="form-group">
              <label htmlFor="client-message">Project Description *</label>
              <textarea
                id="client-message"
                required
                rows={5}
                placeholder="Tell me about your brand, goals, target audience, reference links or vision..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <button
              type="submit"
              className="submit-inquiry-btn"
            >
              <span>Send Project Inquiry ↗</span>
            </button>

            {submitted && (
              <div className="form-success-banner">
                <span>✓</span> Send the prepared draft from your email app to complete your inquiry. If it did not open, check your default email app settings. Your details are kept here so you can try again.
              </div>
            )}

            {error && (
              <div className="form-error-banner">
                <span>⚠</span> {error}
              </div>
            )}
          </form>
        </Reveal>

        {/* Right Info Cards */}
        <Reveal className="contact-info-panel">
          {/* Email Quick Card */}
          <div className="direct-card email-card">
            <div className="card-top-icon">✉️</div>
            <span className="direct-label">DIRECT EMAIL</span>
            <a
              href="mailto:akshaypatel9513@gmail.com"
              className="direct-email-text"
            >
              akshaypatel9513@gmail.com
            </a>
            <button
              type="button"
              className="copy-btn"
              onClick={handleCopyEmail}
            >
              {copied ? "✓ Copied to Clipboard!" : "Copy Email Address"}
            </button>
          </div>

          {/* WhatsApp Direct Card */}
          <div className="direct-card whatsapp-card">
            <div className="card-top-icon">💬</div>
            <span className="direct-label">WHATSAPP / QUICK CHAT</span>
            <h3 className="direct-title">Instant Message</h3>
            <p className="direct-desc">
              Prefer chatting directly on WhatsApp? Send a ping with your project brief.
            </p>
            <a
              href="https://wa.me/918734839513?text=Hi%20Akshay,%20I'm%20reaching%20out%20from%20your%20portfolio."
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              Chat on WhatsApp <span>↗</span>
            </a>
          </div>

          {/* Time & Location Card */}
          <div className="direct-card time-card">
            <div className="card-top-icon">🌍</div>
            <span className="direct-label">LOCATION &amp; TIMEZONE</span>
            <h3 className="direct-title">Surat, Gujarat, India</h3>
            <div className="live-clock">
              <span className="live-pulse"></span>
              <span className="clock-text">{currentTime || "Loading local time..."}</span>
            </div>
            <p className="direct-desc">
              Working with clients across US, UK, UAE &amp; India seamlessly via remote collaboration.
            </p>
          </div>

          {/* Working Hours */}
          <div className="direct-card hours-card">
            <div className="card-top-icon">⏱️</div>
            <span className="direct-label">TYPICAL RESPONSE HOURS</span>
            <div className="hours-row">
              <span>Mon – Sat:</span>
              <strong>10:00 AM – 8:00 PM IST</strong>
            </div>
            <div className="hours-row">
              <span>Sunday:</span>
              <strong>Creative R&amp;D (Emergency only)</strong>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
