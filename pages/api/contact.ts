import nodemailer from "nodemailer";
import { validateBotProtectionFromRequest } from "../../utils/bot-protection";

export default async (req, res) => {
  const {
    senderMail,
    name,
    content,
    recipientMail,
    honeypot,
    companyName,
    middleName,
    secondaryEmail,
  } = req.body;

  // Bot Protection: Check honeypot fields
  if (honeypot || companyName || middleName || secondaryEmail) {
    res.status(400).json({
      success: false,
      error: "Invalid submission",
    });
    return;
  }

  // Bot Protection: Validate CAPTCHA, honeypot, and timing
  const botCheck = validateBotProtectionFromRequest(req);
  if (!botCheck.isValid) {
    res.status(400).json({
      success: false,
      error: botCheck.error || "Invalid submission",
    });
    return;
  }

  // Check if fields are all filled
  if (
    senderMail === "" ||
    name === "" ||
    content === "" ||
    recipientMail === ""
  ) {
    res.status(403).send("");
    return;
  }

  const mailerRes = await mailer({
    senderMail,
    name,
    text: content,
    recipientMail,
  });

  res.send(mailerRes);
};

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const mailer = ({ senderMail, name, text, recipientMail }) => {
  const from =
    name && senderMail ? `${name} <${senderMail}>` : `${name || senderMail}`;
  const message = {
    from: process.env.NEXT_PUBLIC_RECIPIENT_MAIL,
    to: `${recipientMail}`,
    subject: `New message from ${from}`,
    text,
    replyTo: from,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info),
    );
  });
};
