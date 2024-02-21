'use client'
import { AboutUsImg, Image12, Image2, Image5 } from '@/public/images'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { LiaStarSolid } from 'react-icons/lia'
import Faq from '../faq/page'
import { Involved } from '@/components/common/LandingPage'
import { motion } from 'framer-motion';
import AnimatedLettersWhite from '../blog/AnimatedLetters'
import AnimatedLetters from '../services/AnimatedLetters'

type SectionProps = {
  buttonText1?: string;
  buttonText2?: string;
  link1?: any;
  link2?: any;
  title?: string;
  description?: string;
};

const TextSection:React.FC<SectionProps> = ({ title, description }) => (
  <div>
    <h1 className='font-bold text-[#11142D] dark:text-white md:text-[20px] lg:text-[26px]'>{title}</h1>
    <p className='font-semibold xs:text-[13px] sm:text-[14px] text-[#464B70] dark:text-[#c5c5c5] lg:w-[90%]'>{description}</p>
  </div>
);

const Testimonials = () => {
  const TestimonialsList = [
    {
      description: "Diana, Thank you sooo much again for ALL of your hard work, I can't even tell you how good the report is looking and how much we appreciate ALL of your time and effort.",
      name: 'Nastascha Coetse',
      company: 'movefortwo',
      href: 'https://www.movefortwo.org/',
      image: Image2
    },
    {
      description: 'Diana is smart, committed, takes initiative, and an independent worker. She is absolutely passionate about helping the nonprofits and thus took her job incredibly seriously.',
      name: 'Robyn Mays',
      company: 'digitalbutter',
      href: 'https://digitalbutter.co.za/',
      image: Image2
    },
    {
      description: 'Dear Diana, we are popping in here simply to say THANK YOU!  You have given your attention , time and skills to us this year and have added such value to what we do. We could never do what we do without you! So, Thank yuo from the bottom of our hearts.',
      name: 'Jessica and Nastasha',
      company: 'movefortwo',
      href: 'https://www.movefortwo.org/',
      image: Image5
    },
    {
      description: 'I was so impressed by the quality of her writing and thinking. Diana has a very scientific mind and appears to really enjoy working through complex problems methodically and purposefully. (Jonathan Hall, Uppsala University, Sweden)',
      name: 'Jonathan Hall',
      company: 'Uppsala University, Sweden',
      href: 'https://www.uu.se/en',
      image: Image5
    },
    {
      description: 'Many thanks for all the fine work, your willingness to understand and learn new things and contribute with good ideas. (Maria Nilsson, Swedish Red Cross)',
      name: 'Maria Nilsson',
      company: 'Swedish Red Cross',
      href: 'https://www.rodakorset.se/en/who-we-are/',
      image: Image5
    },
    {
      description: 'Thank you so much for your support to QARMA Unit. (Lina Myrgår, Swedish Red Cross)',
      name: 'Lina Myrgår',
      company: 'Swedish Red Cross',
      href: 'https://www.rodakorset.se/en/who-we-are/',
      image: Image5
    },
    {
      description: 'Thank you so much for your engagement and hard work. (Josefin Edberg, Swedish Red Cross)',
      name: 'Josefin Edberg',
      company: 'Swedish Red Cross',
      href: 'https://www.rodakorset.se/en/who-we-are/',
      image: Image5
    },
  ] 

  const getCardVariants = (index: number) => ({
    offscreen: { opacity: 0, y: 50 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.3, duration: 0.5 }
    }
  });

  return (
    <div className='bg-[#F5F5F5] dark:bg-[#181c20]'>
      <div className='w-full md:h-[700px] xs:h-[500px]'>
        <Image className='w-full md:h-[700px] xs:h-[500px] object-cover absolute filter brightness-50' width={1000} height={30} src={AboutUsImg} alt='Hero Image' />
        <div className='gap-y-5 flex flex-col xs:px-5 z-20 relative h-full justify-center'>
          <div className='flex flex-col'>
            <p className='font-bold text-[20px] text-[#F5F5F5] dark:text-white'>Empower</p>
            <AnimatedLettersWhite text='Inspiring Testimonials' />
          </div>
          <div className='flex gap-x-5'>
            <Link href={'/services'} className='button-learn px-4 py-2 text-[20px] text-white dark:text-white'>Learn More</Link>
          </div>
        </div>
      </div>
      
      <div className='py-10 pb-14 lg:px-20 md:px-10 xs:px-5 w-full dark:bg-[#181c20]'>
        <AnimatedLetters text='Customer testimonials' />
        <p className='font-bold md:text-[20px] xs:text-[16px] text-[#222] dark:text-white mb-10'>Read what others have to say about my organization.</p>
        <div className='grid lg:grid-cols-2 xl:grid-cols-3 xs:grid-cols-1 gap-x-5 gap-y-10'>
          {TestimonialsList.map((item, index) => (
            <motion.div 
              variants={getCardVariants(index)}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.2 }}
              key={index}  
              className='w-full h-full flex flex-col shadow-md dark:shadow-none dark:border-[1px] dark:border-[#666] p-5'
            >
              <div className='flex md:mb-5 xs:mb-2'>
                {[...Array(5)].map((_, i) => (
                  <LiaStarSolid key={i} className='text-orange-500 text-[20px]' />
                ))}
              </div>
              <p className='font-Roboto md:text-[16px] xs:text-[14px] text-[#222] dark:text-white'>{item.description}</p>
              <div className='rounded-full  mb-1 w-[50px] h-[50px] object-cover bg-[#ABABAB] mt-auto' />
              <p className='font-bold font-Roboto md:text-[18px] xs:text-[14px] text-[#222] dark:text-white'>{item.name}</p>
              <p className='font-sans md:text-[18px] xs:text-[14px] text-[#222] dark:text-white'>Company:
                <Link target='_blank' className='text-teal-600 underline underline-offset-1 ml-1' href={item.href}>{item.company}</Link>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className='flex gap-x-20 gap-y-5 xs:flex-wrap lg:flex-nowrap lg:px-20 md:px-10 xs:px-5 pt-20 pb-10 bg-white dark:bg-[#11161b]'>
        <div className='lg:w-1/2'>
          <p className='font-bold text-[20px] text-[#11142D] dark:text-white'>Empower</p>
          <AnimatedLetters text='Make a Difference Today' />
          <p className='font-semibold md:text-[16px] xs:text-[13px] text-[#464B70] dark:text-[#c5c5c5] my-5'>
            Join me in providing hope and support to children in need.
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
            <Link href={'/volunteer'} className='w-[120px] h-[50px] flex items-center justify-center border-2 border-[#666666] cursor-pointer text-[#000] dark:text-[#eee] hover:bg-[#000] hover:text-white font-semibold'>
              Volunteer
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
      <Faq />
      <div className='w-full h-[500px] font-Cairo'>
        <Image className='w-full h-[500px] object-cover absolute filter brightness-50' width={1000} height={30} src={Image5} alt='Hero Image' />
        <div className='gap-y-5 flex flex-col justify-center h-full py-10 lg:px-20 md:px-10 xs:px-5 z-20 relative'>
          <div>
            <p className='font-bold text-[20px] text-[#F5F5F5] dark:text-white'>Empower</p>
            <AnimatedLettersWhite text='Make a Difference Today' />
          </div>
          <div>
            <p className='lg:text-[18px] xs:text-[14px] text-[#F5F5F5] dark:text-[#d3d3d3]'>
              Join our volunteer program and help improve the lives of children in Africa.
            </p>
            <div className='flex gap-x-5 items-center mt-5'>
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

export default Testimonials
