import nodemailer from "nodemailer";

export default async function sendEmail({ subject, text, html, replyTo }) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS ? process.env.EMAIL_PASS.replace(/\s+/g, "") : "",
    },
  });

  return await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.CONTACT_RECIPIENT_EMAIL || process.env.EMAIL_USER,
    replyTo,
    subject,
    text,
    html,
  });
}

export { sendEmail };
