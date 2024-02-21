'use client'
import { AboutUsImg, Image2, Image5 } from '@/public/images'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Pricing from './Pricing'
import ContactForm from './ContactForm'
import { Faq, Involved } from '@/components/common/LandingPage'
import { LiaStarSolid } from 'react-icons/lia'
import { motion } from 'framer-motion';
import AnimatedLettersWhite from '../blog/AnimatedLetters'
import AnimatedLetters from '../services/AnimatedLetters'

const Bono = () => {
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
      
      <div className='flex gap-x-5 w-full'>
        <Pricing />
      </div>
      <div className='py-10 lg:px-20 md:px-10 xs:px-5 w-full bg-white dark:bg-[#181c20]'>
        <AnimatedLetters text='Testimonials' />
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

export default Bono