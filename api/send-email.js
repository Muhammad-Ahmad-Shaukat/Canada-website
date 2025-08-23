const nodemailer = require("nodemailer");

function escapeHtml(unsafe = "") {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", process.env.CORS_ORIGIN || "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method Not Allowed" });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    const { name, email, message, phoneNumber, companyName, inqueryType } = body || {};

    if (!name || !email || !message || !phoneNumber || !companyName) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL,
        pass: process.env.PASSWORD, 
      },
    });

    const html = `
      <div style="font-family:system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;">
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <div style="white-space:pre-wrap">${escapeHtml(message)}</div>
        <p><strong>Phone Number:</strong> ${escapeHtml(phoneNumber)}</p>
        <p><strong>Company Name:</strong> ${escapeHtml(companyName)}</p>
        <p><strong>Inquery Type:</strong> ${escapeHtml(inqueryType)}</p>
      </div>
    `;

    const info = await transporter.sendMail({
      from: `"${name}" <${process.env.GMAIL}>`,
      to: "tricode.org@gmail.com",
      replyTo: email,                                   
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html,
    });

    return res.status(200).json({ success: true, id: info.messageId });
  } catch (err) {
    return res.status(500).json({ success: false, message: "Email failed", error: err?.message });
  }
};
