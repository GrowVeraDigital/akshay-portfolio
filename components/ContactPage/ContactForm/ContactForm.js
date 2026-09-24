"use client";

import { useState, useEffect } from "react";
import Reveal from "@/common/Reveal/Reveal";
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
  const [loading, setLoading] = useState(false);
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

  const handleSubmit = async (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }

    console.log("🚀 Contact Form submit initiated...", {
      name,
      email,
      phone,
      selectedType,
      message,
    });

    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!email.trim()) {
      setError("Please enter your email.");
      return;
    }
    if (!message.trim()) {
      setError("Please enter your project description.");
      return;
    }

    setLoading(true);
    setError("");
    setSubmitted(false);

    try {
      console.log("📡 Sending POST request to /api/contact...");
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone ? phone.trim() : "",
          service: selectedType,
          message: message.trim(),
        }),
      });

      const result = await res.json();
      console.log("📥 API response:", res.status, result);

      if (!res.ok) {
        throw new Error(result.error || "Failed to submit inquiry.");
      }

      setSubmitted(true);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setSelectedType(projectTypes[0]);

      setTimeout(() => setSubmitted(false), 7000);
    } catch (err) {
      console.error("❌ Submission error:", err);
      setError(
        err.message ||
          "Failed to send message. Please try again or reach out directly via email."
      );
    } finally {
      setLoading(false);
    }
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
              disabled={loading}
              onClick={handleSubmit}
            >
              <span>{loading ? "Sending Inquiry..." : "Send Project Inquiry ↗"}</span>
            </button>

            {submitted && (
              <div className="form-success-banner">
                <span>✓</span> Thank you! Your inquiry has been sent successfully. I will get back to you shortly.
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
              href="https://wa.me/919513000000"
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
