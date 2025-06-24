import nodemailer from 'nodemailer';

// Create transporter
const createTransporter = () => {
  return nodemailer.createTransporter({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

// Send email function
export const sendEmail = async (options) => {
  const transporter = createTransporter();

  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.EMAIL_FROM}>`,
    to: options.to,
    subject: options.subject,
    html: options.html,
    text: options.text,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);
    return info;
  } catch (error) {
    console.error('Email error:', error);
    throw error;
  }
};

// Send contact confirmation email
export const sendContactConfirmation = async (contactData) => {
  const { name, email, subject } = contactData;

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333;">Thank you for contacting me!</h2>
      <p>Hi ${name},</p>
      <p>I've received your message regarding "${subject}" and will get back to you as soon as possible.</p>
      <p>Best regards,<br>Chandu Makavana</p>
      <hr style="border: 1px solid #eee; margin: 20px 0;">
      <p style="font-size: 12px; color: #666;">
        This is an automated confirmation email. Please do not reply to this email.
      </p>
    </div>
  `;

  await sendEmail({
    to: email,
    subject: 'Thank you for contacting me - Chandu Makavana',
    html,
  });
};