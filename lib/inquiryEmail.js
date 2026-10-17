export function createInquiryMailto({ name, email, phone = "", service, message }) {
  const subject = `Project Inquiry: ${service} - ${name.trim()}`;
  const body = [
    "Hi Akshay,",
    "",
    "I'd like to discuss a project. Here are my details:",
    "",
    `Name: ${name.trim()}`,
    `Email: ${email.trim()}`,
    `Phone / WhatsApp: ${phone.trim() || "Not provided"}`,
    `Service: ${service}`,
    "",
    "Project description:",
    message.trim(),
  ].join("\r\n");

  return `mailto:akshaypatel9513@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
