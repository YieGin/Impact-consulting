import Link from 'next/link';
import React, { ReactNode } from 'react';

interface SectionProps {
  title: string;
  children: ReactNode;
}

interface ListItemProps {
  children: ReactNode;
}

interface InfoTypeProps {
  title: string;
  description: string;
}

const Privacy: React.FC = () => {
  return (
    <div className='lg:px-60 xs:px-5 py-20 dark:bg-[#181c20] bg-[#F5F5F5] flex flex-col gap-y-10'>
      <div>
        <h1 className='font-bold text-[#2F4F4F] dark:text-white md:text-[26px]'>Privacy Statement</h1>
        <div className='font-Roboto mt-2 md:text-[17px] lg:text-[15px] xl:text-[16px] xs:text-[14px] text-[#222] dark:text-[#eee] leading-7'>
          Welcome to Impact consulting, a nonprofit organization dedicated to supporting children in Africa. Our commitment extends not only to the cause we
          serve but also to protecting the privacy and security of our website visitors and donors. This Privacy Policy outlines how we collect, use, protect,
          and share information gathered through our website, including the
          <div className='flex flex-wrap'>
            <Link className='text-teal-600 underline mr-1' href={'/donate'}>Donate</Link>, 
            <Link className='text-teal-600 underline mx-1' href={'/volunteer'}>Volunteer</Link>,
            <Link className='text-teal-600 underline mx-1' href={'/services'}>Services</Link>,
            <Link className='text-teal-600 underline mx-1' href={'/certificates'}>Certificates</Link>,
            <Link className='text-teal-600 underline mx-1' href={'/testimonials'}>Testimonials</Link>,
            <Link className='text-teal-600 underline mx-1' href={'/blog'}>Blog</Link>,
            <Link className='text-teal-600 underline mx-1' href={'/contact'}>Contact</Link>,
            <Link className='text-teal-600 underline ml-1' href={'/help'}>How to help</Link>.
          </div>
        </div>
      </div>
      <Section title="Information We Collect">
        <p className='font-bold dark:text-[#fff] mb-2'>
          We collect information in two categories:
        </p>
        <InfoType 
          title="Non-Personally Identifiable Information:"
          description="This includes information that does not directly identify you but provides insights into your usage patterns and preferences on our website,
          such as IP address, browser type, and pages visited."
        />
        <InfoType 
          title="Personally Identifiable Information (PII):"
          description="This includes any information that can be used to identify you personally, such as your name, email address, postal address, phone number,
          and payment information. We collect PII when you make a donation, sign up to volunteer, subscribe to our blog, or contact us for further information."
        />
      </Section>

      <Section title="How We Use Your Information">
        <p className='font-bold dark:text-[#fff]'>Your information is used to:</p>
        <ul className='list-disc ml-7 dark:text-[#c2c2c2]'>
          <ListItem>Process donations and provide receipts</ListItem>
          <ListItem>Respond to your inquiries and requests</ListItem>
          <ListItem>Send updates and information about our services and how your support is making a difference</ListItem>
          <ListItem>Improve our website and services</ListItem>
          <ListItem>Comply with legal obligations and protect against fraudulent activities.</ListItem>
        </ul>
      </Section>

      <Section title="Service Providers:">
        <p className=' dark:text-[#c2c2c2]'>
          We may share your information with companies that provide services on our behalf, such as payment processing, email delivery, and website hosting,
          under strict confidentiality agreements.
        </p>
        <InfoType 
          title="Legal Requirements:"
          description="If required by law, we may disclose your information in response to subpoenas, court orders, or other legal processes."
        />
      </Section>

      <Section title="Data Security">
        <p className='dark:text-[#c2c2c2]'>
          We implement a variety of security measures to maintain the safety of your personal information. However,
          no internet transmission is ever completely secure or error-free. While we strive to protect your information, we cannot guarantee its absolute security.
        </p>
      </Section>

      <Section title="Children’s Privacy">
        <p className='dark:text-[#c2c2c2]'>
          Protecting the privacy of young children is especially important. For that reason, we do not knowingly collect or maintain information
          on our website from persons under 16 years of age, and no part of our website is structured to attract anyone under 16.
        </p>
      </Section>

      <Section title="Your Choices and Rights">
        <p className='font-bold dark:text-[#fff]'>You have the right to:</p>
        <ul className='list-disc ml-7 dark:text-[#c2c2c2]'>
          <ListItem>Know what personal data we hold about you;</ListItem>
          <ListItem>Request corrections, deletions, or additions to your personal data;</ListItem>
          <ListItem>Opt-out of receiving communications from us.</ListItem>
        </ul>
        <p className='dark:text-[#c2c2c2]'>To exercise these rights, please contact us at <Link className='underline text-teal-600' href='/contact'>contact page</Link></p>
      </Section>

      <Section title="Changes to This Privacy Policy">
        <p className='dark:text-[#c2c2c2]'>
          We may update this Privacy Policy periodically to reflect changes to our information practices.
          We encourage you to review this page for the latest information on our privacy practices.
        </p>
      </Section>

      <Section title="Contact Us">
        <p className='dark:text-[#c2c2c2]'>
          If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at 
          <Link className='underline text-teal-600 ml-1' href='/contact'>contact page</Link>.
        </p>
      </Section>

      <p className='mt-5 dark:text-[#c2c2c2]'>
        Thank you for supporting
        <span className='text-teal-600 mx-1'>Impact consulting</span>
        and the children in Africa. Your trust and support mean everything to us.
      </p>
    </div>
  );
};

// Reusable component for sections
const Section: React.FC<SectionProps> = ({ title, children }) => (
  <div className='flex flex-col'>
    <h1 className='font-bold text-[#2F4F4F] dark:text-white md:text-[20px]'>{title}</h1>
    {children}
  </div>
);

// Reusable component for list items
const ListItem: React.FC<ListItemProps> = ({ children }) => (
  <li>{children}</li>
);

// Reusable component for information types
const InfoType: React.FC<InfoTypeProps> = ({ title, description }) => (
  <p className='dark:text-[#c2c2c2] my-1'>
    <span className='font-bold dark:text-[#fff]'>{title}</span>
    {description}
  </p>
);

export default Privacy;
