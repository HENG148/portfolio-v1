import nodemailer from "nodemailer";

interface NotifyPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Sends a notification email to yourself when someone fills the contact form.
 * Only runs if SMTP env vars are defined — completely optional.
 */
export async function sendNotification(payload: NotifyPayload): Promise<void> {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, NOTIFY_EMAIL } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !NOTIFY_EMAIL) {
    console.info("[notify] SMTP not configured — skipping email notification.");
    return;
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT ?? 587),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  await transporter.sendMail({
    from: `"Portfolio Contact" <${SMTP_USER}>`,
    to: NOTIFY_EMAIL,
    subject: `[Portfolio] ${payload.subject} — from ${payload.name}`,
    html: `
      <h2>New message from your portfolio</h2>
      <p><strong>Name:</strong> ${payload.name}</p>
      <p><strong>Email:</strong> ${payload.email}</p>
      <p><strong>Subject:</strong> ${payload.subject}</p>
      <hr/>
      <p>${payload.message.replace(/\n/g, "<br/>")}</p>
    `,
  });
}