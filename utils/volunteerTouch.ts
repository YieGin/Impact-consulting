import nodemailer from 'nodemailer';
import { getVolunteerTemplate } from './volunteerTemplate';

export async function sendVolunteer({
  from,
  firstName,
  lastName,
  phoneNumber,
  selectedProduct,
  subject,
}: {
  from: string;
  firstName: string;
  lastName: string;
  phoneNumber: number;
  subject: string;
  selectedProduct: string;
}) {
  console.log('SMTP_EMAIL:', process.env.SMTP_EMAIL);
  console.log('SMTP_PASSWORD:', process.env.SMTP_PASSWORD);
  console.log('Sending email with the following parameters:');
  console.log({ from, firstName, lastName, phoneNumber, selectedProduct, subject });

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
    const volunteerHTML = getVolunteerTemplate({ from, firstName, lastName, phoneNumber, selectedProduct });
    const sendResult = await transport.sendMail({
      from: from,
      to: process.env.SMTP_EMAIL,
      replyTo: from,
      subject: subject,
      html: volunteerHTML
    });
    console.log('Email sent successfully:', sendResult);
  } catch (err) {
    console.error('Error sending email:', err);
  }
}