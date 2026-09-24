import Reveal from "@/common/Reveal/Reveal";
import "./ContactFaq.scss";

const faqs = [
  {
    num: "01",
    question: "What is your typical project turnaround time?",
    answer:
      "For short-form reels, promos, and social ads, turnaround is typically 24 to 48 hours. Comprehensive brand campaigns, motion graphics, and full identity kits usually take 4 to 8 business days.",
  },
  {
    num: "02",
    question: "What video formats & aspect ratios do you deliver?",
    answer:
      "I deliver ultra-high-bitrate 4K or 1080p exports tailored for every platform: 9:16 (Instagram Reels / TikTok / YouTube Shorts), 16:9 (YouTube / Websites), 1:1 (Square Feed), and 4:5 (Portrait Feed).",
  },
  {
    num: "03",
    question: "How do project reviews & revisions work?",
    answer:
      "Every project includes structured rounds of revision. You can leave timestamped notes on frames so adjustments are executed with pin-point precision, ensuring zero back-and-forth confusion.",
  },
  {
    num: "04",
    question: "Do you work with international & remote clients?",
    answer:
      "Yes, regularly! I collaborate with brands, creators, and agencies across the US, UK, Canada, UAE, and India seamlessly using cloud review links, WhatsApp, and asynchronous communication.",
  },
];

export default function ContactFaq() {
  return (
    <section className="contact-faq-section section projects">
      <div className="section-label">02 / FAQ</div>

      <Reveal className="section-heading">
        <p className="eyebrow">WHAT TO EXPECT</p>
        <h2>
          Frequently asked
          <br />
          <span>questions.</span>
        </h2>
      </Reveal>

      <div className="faq-grid">
        {faqs.map((faq) => (
          <Reveal key={faq.num} className="faq-card">
            <div className="faq-top">
              <span className="faq-num">{faq.num}</span>
              <h3 className="faq-question">{faq.question}</h3>
            </div>
            <p className="faq-answer">{faq.answer}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
