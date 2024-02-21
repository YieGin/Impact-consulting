'use client'
import { Faq, Involved } from '@/components/common/LandingPage';
import { AboutUsImg, Diana, Image19, Image20, Image21, Image22, Image23, Image24 } from '@/public/images';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { motion } from 'framer-motion';
import AnimatedLettersWhite from '../blog/AnimatedLetters'
import AnimatedLetters from '../services/AnimatedLetters';

type SectionProps = {
  buttonText1?: string;
  buttonText2?: string;
  link1?: any;
  link2?: any;
  title?: string;
  position?: string;
  description?: string;
};

interface AnimatedLettersProps {
  text: string;
}

const sections = [
  {
    title: "Becoming a Nonprofit Development Consultan",
    description: "You're passionate about your cause, and I'm here to amplify that passion. Think of me as a partner who brings a toolbox of specialized services designed to make your work easier and more impactful. From clear-cut strategies to streamlined operations, I'm all about taking the heavy lifting off your shoulders. Why? So you can focus on what you do best: creating real, lasting change in your community. Let's turn your vision into powerful actions that resonate far and wide. Back in 2018, I took a step that changed my life. I started working with nonprofit organizations, helping them write grant proposals, find donors, plan their fundraising, and set up ways to measure their success. But it was more than just the tasks that drew me in; it was the people and their causes that truly grabbed my heart. Since then, I haven't looked back. There's something special about working side by side with groups that are out there every day, solving real-world problems. Helping these grassroots heroes grow and reach new heights has become my passion. They're not just changing the world; they're inspiring me to be a part of that change in the most meaningful way.",
    imgSrc: Diana,
    imgAlt: "Supporting Image",
    linkText: "Get in Touch",
    linkHref: "/contact",
    position: "right",
  },
];

const TextSection:React.FC<SectionProps> = ({ title, description }) => (
  <div>
    <h1 className='font-bold text-[#11142D] dark:text-white md:text-[20px] lg:text-[26px]'>{title}</h1>
    <p className='font-Roboto xs:text-[14px] md:text-[16px] text-[#222] dark:text-[#eee] lg:w-[90%]'>{description}</p>
  </div>
);

const About = () => {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
  };
  const fadeInVariantLeft = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
  };

  return (
    <div className='dark:bg-[#181c20] bg-[#F5F5F5] font-Roboto'>
      <div className='w-full md:h-[700px] xs:h-[500px]'>
        <Image className='w-full md:h-[700px] xs:h-[500px] object-cover absolute filter brightness-50' width={1000} height={30} src={AboutUsImg} alt='Hero Image' />
        <div className='gap-y-5 flex flex-col xs:px-5 z-20 relative h-full justify-center'>
          <div className='flex flex-col'>
            <p className='font-bold text-[20px] text-[#F5F5F5] dark:text-white'>Empower</p>
            <AnimatedLettersWhite text='Transforming Lives Together' />
          </div>
          <div className='flex gap-x-5'>
            <Link href={'/services'} className='button-learn px-4 py-2 text-[20px] text-white dark:text-white'>Learn More</Link>
          </div>
        </div>
      </div>

      <h1 className='font-bold text-[#2F4F4F] dark:text-white sm:text-[25px] xs:text-[20px] lg:text-[46px] md:text-[26px] text-center xs:mt-10 lg:mt-32 mb-5'>Strategic Impact & Analytics</h1>
      <div className='flex flex-col gap-y-20 pb-10'>
        {sections.map((section, index) => (
          <div 
            key={index}
            className={`flex ${section.position === "right" ? "flex-row" : "flex-row-reverse"} gap-x-10 gap-y-5 overflow-hidden xs:flex-wrap-reverse lg:flex-nowrap lg:px-10 xl:px-20 md:px-10 xs:px-2`}
            >
            <motion.div
              variants={fadeInVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className='lg:w-1/2'
            >
              <p className='font-bold md:text-[20px] xs:text-[16px] text-[#11142D] dark:text-white'>Empower</p>
              <AnimatedLetters text={section.title} />
              <p className='font-Roboto xs:text-[14px] md:text-[16px] text-[#222] dark:text-[#eee] md:my-5 xs:mb-3'>{section.description}</p>
              <div className='flex flex-col gap-y-5'>
                <TextSection
                  title="My Promise"
                  description="I promise to deliver the same level of professionalis, dedication, and quality in my pro bono work as i do in my paid engagements. Your mission is important, and I'm here to help you achieve it"
                />
                <TextSection
                  title="Get in Touch"
                  description="If your organization could benefit from my services, or if you have any questions about my pro bono program, please don't hesitate to contact me. Let's work together t ocreate a brighter future for your community."
                />
              </div>
              <div className='flex gap-x-5 items-center mt-5'>

                <Link href={section.linkHref} className='w-[120px] h-[50px] flex items-center justify-center border-2 border-[#666666] cursor-pointer text-[#000] dark:text-[#eee] hover:bg-[#000] hover:text-white font-semibold'>
                  {section.linkText}
                </Link>
              </div>
            </motion.div>
            <motion.div 
              variants={fadeInVariantLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className='lg:w-1/2 xs:w-full flex flex-col'>
              <Image className='w-full h-[500px] object-cover' src={section.imgSrc} alt={section.imgAlt} width={3000} height={3000} />
            </motion.div>
          </div>
        ))}
      </div>      
      <Faq />
      <Involved />
    </div>
  );
}

export default About
