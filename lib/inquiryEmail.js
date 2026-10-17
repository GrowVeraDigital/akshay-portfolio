function createInquiryBody({ name, email, phone = "", service, message }) {
  return [
    "Hi Akshay,",
    "",
    "I'd like to discuss a project. Here are my details:",
    "",
    `Name: ${name.trim() || "Not provided"}`,
    `Email: ${email.trim() || "Not provided"}`,
    `Phone / WhatsApp: ${phone.trim() || "Not provided"}`,
    `Service: ${service}`,
    "",
    "Project description:",
    message.trim() || "Not provided",
  ].join("\r\n");
}

export function createInquiryMailto(details) {
  const subject = `Project Inquiry: ${details.service} - ${details.name.trim()}`;
  const body = createInquiryBody(details);

  return `mailto:akshaypatel9513@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function createInquiryWhatsAppUrl(details) {
  return `https://wa.me/918734839513?text=${encodeURIComponent(createInquiryBody(details))}`;
}
