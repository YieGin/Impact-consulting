'use client'
import { AboutUsImg, Image2, Image5 } from '@/public/images'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiSolidDonateHeart } from 'react-icons/bi'
import Pricing from './Pricing'
import ContactForm from './ContactForm'
import { Faq, Involved } from '@/components/common/LandingPage'
import { LiaStarSolid } from 'react-icons/lia'
import { motion } from 'framer-motion';

const Donate = () => {
  const TestimonialsList = [
    {
      description: "Diana, Thank you sooo much again for ALL of your hard work, I can't even tell you how good the report is looking and how much we appreciate ALL of your time and effort.",
      name: 'Nastascha Coetse',
      company: 'https://www.movefortwo.org/',
      image: Image2
    },
    {
      description: 'Diana is smart, committed, takes initiative, and an independent worker. She is absolutely passionate about helping the nonprofits and thus took her job incredibly seriously.',
      name: 'Robyn Mays',
      company: 'https://digitalbutter.co.za/',
      image: Image2
    },
    {
      description: 'Dear Diana, we are popping in here simply to say THANK YOU!  You have given your attention , time and skills to us this year and have added such value to what we do. We could never do what we do without you! So, Thank yuo from the bottom of our hearts.',
      name: 'Jessica and Nastasha',
      company: 'https://www.movefortwo.org/',
      image: Image5
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

  return (
    <div className='dark:bg-[#181c20] bg-[#F5F5F5] font-Cairo pb-20'>
      <div className='w-full md:h-[700px] xs:h-[500px]'>
        <Image className='w-full md:h-[700px] xs:h-[500px] object-cover absolute filter brightness-50' width={1000} height={30} src={AboutUsImg} alt='Hero Image' />
        <div className='gap-y-5 flex flex-col items-center justify-center text-center py-10 lg:px-20 md:px-10 xs:px-5 z-20 relative'>
          <div className='flex flex-col items-center justify-center text-center'>
            <p className='font-bold text-[20px] text-[#F5F5F5] dark:text-white'>Empower</p>
            <h1 className='font-bold text-[#fff] dark:text-white lg:text-[46px] md:text-[26px]'>Transforming Lives Together</h1>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <p className='lg:text-[18px] xs:text-[14px] text-[#F5F5F5] dark:text-[#d3d3d3]'>
              Your donation can make a difference in the lives of children in Africa who need help.
            </p>
            <div className='flex gap-x-5 items-center mt-5'>
            <Link href={''} className='w-[120px] h-[50px] flex items-center justify-center text-[18px] text-white bg-[#000] transition duration-300 ease-in-out gap-x-2'>
              <BiSolidDonateHeart />
              <p className='font-bold text-[20px] text-[#fff]'>Donate</p>
            </Link>
              <Link 
                href={'/contact'} 
                className='w-[120px] h-[50px] flex items-center justify-center border-2 border-[#666666] cursor-pointer text-[#fff] dark:text-[#eee] hover:bg-[#000] hover:text-white font-semibold'>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='flex gap-x-5 w-full'>
        <Pricing />
      </div>
      <div className='py-10 lg:px-20 md:px-10 xs:px-5 w-full bg-white dark:bg-[#181c20]'>
        <h1 className='font-bold text-[#2F4F4F] dark:text-white xs:text-[36px] md:text-[46px]'>Testimonials</h1>
        <p className='font-bold md:text-[20px] xs:text-[16px] text-[#222] dark:text-white'>Discover the heartfelt stories of our donors and the meaningful differences their contributions have created. </p>
        <div className='flex xs:flex-wrap lg:flex-nowrap gap-x-5'>
          {TestimonialsList.map((item, index) => (
            <motion.div 
              variants={getCardVariants(index)}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.2 }}
              key={index} 
              className='mt-10 w-full p-5 shadow-md dark:shadow-none dark:border-[1px] dark:border-[#666]'
            >
              <div className='flex md:mb-5 xs:mb-2'>
                {[...Array(5)].map((_, i) => (
                  <LiaStarSolid key={i} className='text-orange-500 text-[20px]' />
                ))}
              </div>
              <p className='font-Roboto md:text-[16px] xs:text-[14px] text-[#222] dark:text-white'>{item.description}</p>
              <Image className='rounded-full mt-5 mb-1 w-[50px] h-[50px] object-cover' width={50} height={50} src={item.image} alt='Stories pfp' />
              <p className='font-semibold font-sans md:text-[18px] xs:text-[14px] text-[#222] dark:text-white'>{item.name}</p>
              <p className='font-semibold font-sans md:text-[18px] xs:text-[14px] text-[#222] dark:text-white'>Company:
                <Link target='_blank' className='text-teal-600 underline underline-offset-1 ml-1' href={item.company}>{item.company}</Link>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className='bg-white'>
        <ContactForm />
      </div>
      <Faq />
      <Involved />
    </div>
  )
}

export default Donate
