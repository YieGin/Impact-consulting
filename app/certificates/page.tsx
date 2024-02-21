import { AboutUsImg } from '@/public/images';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { BiSolidDonateHeart } from 'react-icons/bi';
import { MdCastForEducation } from 'react-icons/md'
import { RiMentalHealthFill } from 'react-icons/ri'
import Faq from '../faq/page';
import { Involved } from '@/components/common/LandingPage';
import AnimatedLettersWhite from '../blog/AnimatedLetters';
import AnimatedLetters from '../services/AnimatedLetters';

type SectionProps = {
  buttonText1?: string;
  link1?: any;
};

const ButtonGroup:React.FC<SectionProps> = ({ buttonText1, link1 }) => (
  <Link href={link1} className='w-[120px] h-[50px] flex items-center justify-center text-[18px] text-white bg-[#000] dark:text-black dark:bg-[#f3f3f3] transition duration-300 ease-in-out gap-x-2'>
    <p className='font-bold text-[18px]'>{buttonText1}</p>
  </Link>
);

const Certificates = () => {

  const courseSections = [
    {
      header: 'UPPSALA UNIVERSITET',
      introText: `My journey through the MA in Holocaust and Genocide Studies was deeply transformative, blending rigorous academic learning with an emotional
                exploration of the human condition. It went beyond mere facts, engaging with the complex social psychology of victims and perpetrators to reveal
                how group violence shapes individuals and societies. This blend of knowledge and emotional insight was a revelation, offering a 
                nuanced understanding of the mechanisms behind societal conflict and the potential for resolution. The course was an intellectual and
                emotional adventure, providing a profound perspective on the dark aspects of human nature and the power of empathy in understanding and
                addressing the roots of violence.`,
      pdfSrc: '/Diploma.pdf',
      pdfTitle: 'Diploma PDF',
      position:'left'
    },
    {
      header: 'Project/Programme Planning (PPP) - (English)',
      introText: `I learned essential skills and methods for effective project management, emphasizing a results-based approach to project planning.
                I gained expertise in analyzing situations using various tools to lay the groundwork for project design. This preparation equipped
                me with the ability to apply the logical framework method, enabling me to structure and summarize a project's crucial elements
                for successful management. Armed with these skills, I can now contribute to the planning, execution, and oversight of projects,
                ensuring they are well-designed, efficiently run, and achieve their intended outcomes.`,
      pdfSrc: '/Certificate_Red_Cross_Project_Planning.pdf',
      pdfTitle: 'Certificate_Red_Cross_Project_Planning PDF',
      position:'right'
    },
    {
      header: 'The World of Red Cross and Red Crescent (WORC) - (English)',
      introText: `Dive into the heart of humanitarian action with this comprehensive online course on The World of Red Cross and Red Crescent.
                  This course offers an in-depth look at the principles, mission, and operations of the largest humanitarian network in the world.
                  Spanning two key modules, the first focuses on the history and principles that guide the Red Cross and Red Crescent Movement, exploring its founding, evolution, and the core values that drive its global mission.
                  The second module delves into humanitarian action, where participants will learn about disaster response, health and care in communities, and the importance of volunteerism and international cooperation in saving lives and restoring dignity.
                  Completing this course will equip you with a deep understanding of the Movement's global impact and how you can contribute
                  to its noble cause, culminating in a certificate of completion.`,
      pdfSrc: '/certificate_the_World_Of_Red_Cross_and_Red_Crescent.pdf',
      pdfTitle: 'certificate_the_World_Of_Red_Cross_and_Red_Crescent PDF',
      position:'left'
    },
    {
      header: 'red cross',
      introText: `Working at the Red Cross in Sweden offered me an eye-opening glimpse into the vast, compassionate network that powers this
                  global organization. I was astounded to learn that over 16 million volunteers worldwide are the backbone of the Red Cross,
                  driving programs that directly respond to challenges encountered in the field. The dedication of these individuals,
                  who extend the reach of mobile units to remote villages and sometimes risk their own lives to save others, like aiding women in labor
                  in inaccessible areas, was deeply inspiring. Equally shocking was the realization of the immense financial resources required
                  to sustain such efforts—and the sobering fact that despite the substantial funds allocated, resources are perpetually stretched thin.
                  Within the Monitoring and Evaluation, Accountability, and Assurance department, I gained insights into the critical importance of
                  oversight and the relentless pursuit of efficiency to ensure that every contribution makes a meaningful impact.`,
      pdfSrc: '/certificate_the_World_Of_Red_Cross_and_Red_Crescent.pdf',
      pdfTitle: 'certificate_the_World_Of_Red_Cross_and_Red_Crescent PDF',
      position:'right'
    },
  ];

  return (
    <div className='font-Cairo dark:bg-[#181c20] bg-[#F5F5F5]'>
      <div className='w-full md:h-[700px] xs:h-[500px]'>
        <Image className='w-full md:h-[700px] xs:h-[500px] object-cover absolute filter brightness-50' width={1000} height={30} src={AboutUsImg} alt='Hero Image' />
        <div className='gap-y-5 flex flex-col xs:px-5 z-20 relative h-full justify-center'>
          <div className='flex flex-col'>
            <p className='font-bold text-[20px] text-[#F5F5F5] dark:text-white'>Empower</p>
            <AnimatedLettersWhite text='Achievements and Learning' />
          </div>
          <div className='flex gap-x-5'>
            <Link href={'/services'} className='button-learn px-4 py-2 text-[20px] text-white dark:text-white'>Learn More</Link>
          </div>
        </div>
      </div>
      
      <div className='dark:bg-[#11161b]'>
        {courseSections.map((section, index) => (
          <div key={index} className={`${section.position === "right" ? "xl:flex-row xs:flex-col" : "xl:flex-row-reverse xs:flex-col"} flex gap-x-20 items-center xs:py-5 xs:px-5 md:px-20 md:py-10 xl:py-20`}>
            <div className='xl:w-1/2'>
              <AnimatedLetters text={section.header} />
              <p className='font-semibold text-[16px] text-[#464B70] dark:text-[#c5c5c5] lg:w-[90%]' dangerouslySetInnerHTML={{ __html: section.introText }}></p>
              <div className='flex gap-x-5 items-center mt-5'>
                <ButtonGroup buttonText1="Services" link1={'/services'} />
                <Link href={'/contact'} className='w-[120px] h-[50px] flex items-center justify-center border-2 border-[#666666] cursor-pointer text-[#000] dark:text-[#eee] hover:bg-[#000] hover:text-white font-semibold'>
                  Get in touch
                </Link>
                </div>
            </div>
            <div className='xs:w-full xl:w-1/2'>
              <iframe
                className="mt-5 mb-1 w-full h-[450px] shadow-lg rounded-lg overflow-auto"
                src={section.pdfSrc}
                title={section.pdfTitle}
                frameBorder="0"
              >
                This browser does not support PDFs. Please download the PDF to view it
              </iframe>
            </div>
          </div>
        ))}
      </div>
      <Involved />
  </div>
  )
}

export default Certificates
