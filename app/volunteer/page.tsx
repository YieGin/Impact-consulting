'use client'
import { AboutUsImg, Image10, Image12, Image5, Image8 } from '@/public/images';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiSolidDonateHeart } from 'react-icons/bi';
import { HiBuildingOffice } from 'react-icons/hi2';
import { IoIosArrowForward } from 'react-icons/io';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import Touch from '../help/Touch';
import { Faq, Involved } from '@/components/common/LandingPage';
import { motion } from 'framer-motion';
import AnimatedLettersWhite from '../blog/AnimatedLetters';
import AnimatedLetters from '../services/AnimatedLetters';
import AnimatedLettersTitle from '../blog/AnimatedLettersTitle';

type SectionProps = {
  buttonText1?: string;
  buttonText2?: string;
  link1?: any;
  link2?: any;
  title?: string;
  description?: string;
};

const ButtonGroup:React.FC<SectionProps> = ({ buttonText1, link1 }) => (
  <Link href={link1} className='w-[120px] h-[50px] flex items-center justify-center text-[18px] text-white bg-[#000] transition duration-300 ease-in-out gap-x-2'>
    <BiSolidDonateHeart />
    <p className='font-bold text-[18px] text-[#fff]'>{buttonText1}</p>
  </Link>
);

const TextSection:React.FC<SectionProps> = ({ title, description }) => (
  <div>
    <h1 className='font-bold text-[#11142D] dark:text-white md:text-[20px] lg:text-[26px]'>{title}</h1>
    <p className='font-semibold xs:text-[13px] sm:text-[14px] text-[#464B70] dark:text-[#c5c5c5] lg:w-[90%]'>{description}</p>
  </div>
);

const DonateList = [
  {
    title: 'Choose Your Volunteer Role and Schedule',
    description: 'We offer a variety of volunteer opportunities to fit your skills and interests. Whether you want to teach, mentor, or provide administrative support, we have a role for you.',
    button: 'Donate',
    href: 'donate',
    Image: Image10
  },
  {
    title: 'Complete Our Volunteer Training Program',
    description: 'To ensure the safety and well-being of our volunteers and the children we serve, we require all volunteers to complete our comprehensive training program.',
    button: 'Volunteer',
    href: 'volunteer',
    Image: Image8
  },
  {
    title: 'Start Making a Difference in Africa Today',
    description: "Once you've completed the training program, you'll be ready to start your volunteer journey and make a lasting impact on the lives of children in Africa.",
    button: 'Share',
    href: 'share',
    Image: Image12
  }
]

const getCardVariants = (index: number) => ({
  offscreen: { opacity: 0, y: 50 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.3, duration: 0.5 }
  }
});

const Volunteer = () => {
  return (
    <div className='dark:bg-[#181c20] bg-[#F5F5F5] font-Roboto'>
      <div className='w-full md:h-[700px] xs:h-[500px]'>
        <Image className='w-full md:h-[700px] xs:h-[500px] object-cover absolute filter brightness-50' width={1000} height={30} src={AboutUsImg} alt='Hero Image' />
        <div className='gap-y-5 flex flex-col items-center justify-center text-center py-10 lg:px-20 md:px-10 xs:px-5 z-20 relative'>
          <div className='flex flex-col items-center justify-center text-center'>
            <p className='font-bold text-[20px] text-[#F5F5F5] dark:text-white'>Join</p>
            <AnimatedLettersWhite text='Make a Difference' />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <p className='lg:text-[18px] xs:text-[14px] text-[#F5F5F5] dark:text-[#d3d3d3] lg:w-1/2'>
              Become a volunteer and help improve the lives of children in Africa. Your time and dedication can make a lasting impact.
            </p>
            <div className='flex gap-x-5 items-center mt-5'>
              <ButtonGroup buttonText1="Donate" link1="/donate" />
              <Link href="/contact" className='w-[120px] h-[50px] flex items-center justify-center border-2 border-[#666666] cursor-pointer text-[#fff] dark:text-[#eee] hover:bg-[#000] hover:text-white font-semibold'>
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='flex gap-x-20 gap-y-5 xs:flex-wrap lg:flex-nowrap lg:px-20 md:px-10 xs:px-5 xs:pt-10 md:pt-20 pb-10 bg-white dark:bg-[#11161b]'>
        <div className='lg:w-1/2'>
          <p className='font-bold text-[20px] text-[#11142D] dark:text-white'>Empower</p>
          <AnimatedLetters text='Make a Difference in Africa&lsquo;s Future' />
          <p className='font-semibold md:text-[16px] xs:text-[13px] text-[#464B70] dark:text-[#c5c5c5] xs:pb-5 md:my-5'>
            Volunteering with our organization not only benefits the children in Africa who need help, but also provides personal fulfillment
            and contributes to the betterment of the community. Join us in making a positive impact today!
          </p>
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
            <ButtonGroup buttonText1="Donate" link1={'/donate'} />
            <Link href={'/contact'} className='w-[120px] h-[50px] flex items-center justify-center border-2 border-[#666666] cursor-pointer text-[#000] dark:text-[#eee] hover:bg-[#000] hover:text-white font-semibold'>
              Get in touch
            </Link>
          </div>
        </div>
        <div className='lg:w-1/2 xs:w-full flex flex-col'>
          <Image className='w-full h-[600px] object-cover' src={Image12} alt='Volunteer Future' width={500} height={500} />
          <h1 className='font-bold md:text-[20px] xs:text-[13px] text-[#222] dark:text-[#fff] my-5 text-center font-Cairo'>
            this pic is taken to thank me for my services <span className='text-teal-600 font-bold font-Roboto'>original</span>
          </h1>
        </div>
      </div>
      <div className='flex gap-x-20 xs:flex-wrap lg:flex-nowrap lg:px-20 md:px-10 xs:px-5 xs:mt-10 md:mt-20'>
        <div className='lg:w-1/2'>
          <h1 className='font-bold text-[#2F4F4F] dark:text-white xs:text-[18px] lg:text-[36px] md:text-[26px] xl:w-[80%]'>
            Join Our Volunteer Program and Make a Difference in Africa
          </h1>
        </div>
        <div className='lg:w-1/2'>
          <p className='font-semibold font-sans md:text-[17px] xs:text-[14px] text-[#11142D] dark:text-[#eee] my-5'>
            Becoming a volunteer is easy! Simply fill out our online application, attend a brief orientation session, and start making a positive impact
            in the lives of children in Africa.
          </p>
        </div>
      </div>
      <div className='flex xs:flex-wrap xl:flex-nowrap xl:gap-x-10 xs:gap-x-5 lg:px-20 md:px-10'>
        {DonateList.map((item, index) => (
          <motion.div 
            variants={getCardVariants(index)}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: index * 0.2 }}
            key={index}  
          className='shadow-md relative xs:w-full lg:w-[350px] xl:w-[570px] flex flex-col p-5 gap-y-5 md:mt-10 dark:border-[1px] dark:border-[#666] h-full'>
            <Image className='w-full h-[300px] object-cover' width={4000} height={3000} src={item.Image} alt={`event image ${index}`} />
            <div className='flex flex-col gap-y-5 pb-5'>
              <AnimatedLettersTitle text={item.title} />
              <p className='font-semibold font-sans xl:text-[17px] md:text-[14px] xs:text-[14px] text-[#11142D] dark:text-[#eee]'>{item.description}</p>
            </div>
            <Link href={'/contact'} className='flex gap-x-2 items-center text-[#11142D] w-max cursor-pointer hover:text-teal-500 dark:hover:text-teal-500 dark:text-[#eee]'>
              <p className='font-bold text-[18px] font-Roboto'>Get in touch</p>
              <IoIosArrowForward className='font-bold text-[18px]' />
            </Link>
          </motion.div>
        ))}
      </div>
      <div className='flex xs:flex-wrap-reverse xl:flex-nowrap gap-x-10 mt-20 lg:px-20 md:px-10 xs:px-5 bg-white dark:bg-[#11161b]'>
        <div className='lg:w-1/2 xl:py-20 lg:py-0 xs:pt-10'>
          <p className='font-bold text-[20px] text-[#11142D] dark:text-white'>Join</p>
          <AnimatedLetters text='Get Involved' />
          <p className='font-medium font-sans md:text-[20px] text-[#11142D] dark:text-white'>Interested in volunteering? Fill out the form.</p>
          <div className='flex flex-col gap-y-3 mt-10 font-sans'>
            <div className='flex items-center gap-x-2'>
              <MdEmail className='text-[#222] md:text-[25px] dark:text-[#fff]' />
              <div>
                <p className='font-bold md:text-[20px] text-[#11142D] dark:text-[#eee]'>Email</p>
                <p className='font-semibold md:text-[20px] text-[#303030] dark:text-[#eee] underline underline-offset-2'>hello@email.com</p>
              </div>
            </div>
            <div className='flex items-center gap-x-2'>
              <MdLocalPhone className='text-[#222] dark:text-[#fff] md:text-[25px]' />
              <div>
                <p className='font-bold md:text-[20px] text-[#11142D] dark:text-[#eee]'>Phone</p>
                <p className='font-semibold md:text-[20px] text-[#303030] dark:text-[#eee] underline underline-offset-2'>+1 (555) 000-0000</p>
              </div>
            </div>
            <div className='flex items-center gap-x-2'>
              <HiBuildingOffice className='text-[#222] dark:text-[#fff] md:text-[25px]' />
              <div>
                <p className='font-bold md:text-[20px] text-[#11142D] dark:text-[#eee]'>Office</p>
                <p className='font-semibold md:text-[20px] text-[#303030] dark:text-[#eee] underline underline-offset-2'>123 Sample St, Sydney NSW 2000 AU</p>
              </div>
            </div>
          </div>
        </div>
        <Touch />
      </div>
      <Faq />
      <div className='w-full h-[500px] font-Cairo'>
        <Image className='w-full h-[500px] object-cover absolute filter brightness-50' width={1000} height={30} src={Image5} alt='Hero Image' />
        <div className='gap-y-5 flex flex-col justify-center h-full py-10 lg:px-20 md:px-10 xs:px-5 z-20 relative'>
          <div>
            <p className='font-bold text-[20px] text-[#F5F5F5] dark:text-white'>Empower</p>
            <h1 className='font-bold text-[#fff] dark:text-white lg:text-[46px] md:text-[26px]'>Make a Difference Today</h1>
          </div>
          <div>
            <p className='lg:text-[18px] xs:text-[14px] text-[#F5F5F5] dark:text-[#d3d3d3]'>
              Join our volunteer program and help improve the lives of children in Africa.
            </p>
            <div className='flex gap-x-5 items-center mt-5'>
            <Link href={''} className='w-[120px] h-[50px] flex items-center justify-center text-[18px] text-white bg-[#000] transition duration-300 ease-in-out gap-x-2'>
              <BiSolidDonateHeart />
              <p className='font-bold text-[20px] text-[#fff]'>Donate</p>
            </Link>
              <Link href={'/contact'} className='w-[120px] h-[50px] flex items-center justify-center border-2 border-[#fff  ] cursor-pointer text-[#fff] dark:text-[#eee] hover:bg-[#000] hover:text-white font-semibold'>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Involved />
    </div>
  )
}

export default Volunteer
