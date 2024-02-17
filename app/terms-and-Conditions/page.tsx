import Link from 'next/link';

interface SectionProps {
  title: string;
  children: any;
}

interface ListItemProps {
  children: any;
}

const TermsAndConditions: React.FC = () => {
  return (
    <div className='lg:px-60 xs:px-5 py-20 dark:bg-[#181c20] bg-[#F5F5F5] flex flex-col gap-y-10'>
      <div>
        <h1 className='font-bold text-[#2F4F4F] dark:text-white md:text-[26px]'>Privacy Statement</h1>
        <div className='font-Roboto mt-2 md:text-[17px] lg:text-[15px] xl:text-[16px] xs:text-[14px] text-[#222] dark:text-[#eee] leading-7'>
          a nonprofit organization dedicated to supporting children in Africa through various services including
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

      <Section title="Acceptance of Terms">
        <p className='dark:text-[#c2c2c2] mb-2'>
          By accessing or using our website, you agree to be bound by these Terms and Conditions and our Privacy Policy.
          If you disagree with any part of the terms, you do not have permission to access our website.
        </p>
      </Section>

      <Section title="Use License">
        <p className='dark:text-[#c2c2c2]'>
          Permission is granted to temporarily download one copy of the materials (information or software) on Impact consulting website for personal,
          non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license, you may not:
        </p>
        <ul className='list-disc ml-7 dark:text-[#c2c2c2]'>
          <ListItem>Modify or copy the materials;</ListItem>
          <ListItem>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</ListItem>
          <ListItem>Send updates and information about our services and how your support is making a difference</ListItem>
          <ListItem>Attempt to decompile or reverse engineer any software contained on Impact consulting website</ListItem>
          <ListItem>Transfer the materials to another person or mirror the materials on any other server.</ListItem>
          <ListItem>
            This license shall automatically terminate if you violate any of these restrictions and may be terminated by Impact consulting
            at any time. Upon terminating your viewing of these materials or upon the termination of this license,
            you must destroy any downloaded materials in your possession whether in electronic or printed format.
          </ListItem>
        </ul>
      </Section>

      <Section title="Disclaimer">
        <p className=' dark:text-[#c2c2c2]'>
          The materials on Impact consulting website are provided on an as is basis.
          Impact consulting makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including,
          without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual
          property or other violation of rights.
        </p>
      </Section>

      <Section title="Limitations">
        <p className='dark:text-[#c2c2c2]'>
          In no event shall Impact consulting or its suppliers be liable for any damages
          (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability
          to use the materials on Impact consulting website, even if Impact consulting or a Impact consulting authorized
          representative has been notified orally or in writing of the possibility of such damage.
        </p>
      </Section>

      <Section title="Accuracy of Materials">
        <p className='dark:text-[#c2c2c2]'>
          The materials appearing on Impact consulting website could include technical, typographical, or photographic errors.
          Impact consulting does not warrant that any of the materials on its website are accurate, complete, or current.
          Impact consulting may make changes to the materials contained on its website at any time without notice. However,
          Impact consulting does not make any commitment to update the materials.
        </p>
      </Section>

      <Section title="Modifications">
        <p className='dark:text-[#c2c2c2]'>
          Impact consulting may revise these Terms and Conditions for its website at any time without notice. By using this website,
          you are agreeing to be bound by the then-current version of these Terms and Conditions.
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

export default TermsAndConditions;
