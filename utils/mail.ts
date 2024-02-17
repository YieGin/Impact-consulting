import nodemailer from 'nodemailer';
import { getEmailTemplate } from './emailTemplate';

export async function sendMail({
  from,
  name,
  subject,
  body,
}: {
  from: string;
  name: string;
  subject: string;
  body: string;
}) {
  console.log('SMTP_EMAIL:', process.env.SMTP_EMAIL);
  console.log('SMTP_PASSWORD:', process.env.SMTP_PASSWORD);
  console.log('Sending email with the following parameters:');
  console.log({ from, name, subject, body });

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  try {
    const testResult = await transport.verify();
    console.log('Connection to SMTP server verified:', testResult);
  } catch (err) {
    console.error('Error verifying SMTP server connection:', err);
    return;
  }

  try {
    const emailHTML = getEmailTemplate({ from, name, body });
    const sendResult = await transport.sendMail({
      from: from,
      to: process.env.SMTP_EMAIL,
      replyTo: from,
      subject: subject,
      html: emailHTML
    });
    console.log('Email sent successfully:', sendResult);
  } catch (err) {
    console.error('Error sending email:', err);
  }
}