import nodemailer from "nodemailer";

function escapeHtml(unsafe = "") {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message, phoneNumber, companyName, inqueryType } = body;

    if (!name || !email || !message || !phoneNumber || !companyName) {
      return Response.json({ success: false, message: "Missing required fields" }, { status: 400 });
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
      <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;">
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

    return Response.json({ success: true, id: info.messageId }, { status: 200 });
  } catch (error) {
    return Response.json({ success: false, message: "Email failed", error: process.env.message }, { status: 500 });
  }
}
