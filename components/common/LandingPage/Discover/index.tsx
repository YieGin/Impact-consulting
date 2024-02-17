'use client'
import React from 'react'
import { Image3, Image6 } from '@/public/images'
import YouTubeVideo from './YouTubeVideo'
import { IoIosArrowForward } from 'react-icons/io'
import Link from 'next/link'
import { motion } from "framer-motion"


const Discover = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    },
  };

  return (
    <div className='font-Cairo lg:px-20 md:px-10 xs:px-5'>
      <div className='flex items-center flex-col justify-center my-20'>
        <p className='font-bold text-[20px] text-[#11142D] dark:text-[#eee]'>Latest</p>
        <h1 className='font-bold text-[#2F4F4F] dark:text-white md:text-[46px] sm:text-[26px] xs:text-[20px]'>Discover Inspiring Blog Stories</h1>
        <p className='font-semibold md:text-[20px] xs:text-[14px] text-[#11142D] dark:text-[#eee]'>Stay updated with our latest blog entries.</p>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className='flex xs:flex-wrap lg:flex-nowrap gap-y-20 gap-x-5'
      >
        <motion.div
          className='lg:w-1/2 flex flex-col md:gap-y-5 xs:gap-y-2 shadow-md p-5' variants={itemVariants}>
          <YouTubeVideo
            videoId="TH4V-yHbJXk" 
            placeholder={Image3}
          />
          <div className='flex'>
            <p className='bg-[#EEEEEE] px-4 py-1 font-bold mr-5 w-max'>Category</p>
            <p className='px-4 py-1 font-bold text-[#464B70] dark:text-[#eee]'>5 min video</p>
          </div>
          <h1 className='font-bold text-[#2F4F4F] dark:text-white md:text-[30px] lg:text-[26px] xl:text-[46px]'>How We&apos;re Making a Difference</h1>
          <p className='md:text-[18px] xs:text-[14px] font-Roboto text-[#464B70] dark:text-[#d3d3d3]'>Learn about our impactful projects and initiatives.</p>
          <div className='flex items-center gap-x-2 cursor-pointer dark:text-white w-max text'>
            <Link
              href='https://www.youtube.com/watch?v=megFxsjjTEY' 
              target='_blank' 
              rel='noopener noreferrer' 
              className='font-bold text-[18px] text-[#11142D] dark:text-[#eee]'
            >
              Watch
            </Link>
            <IoIosArrowForward />
          </div>
        </motion.div>
        <motion.div className='lg:w-1/2 flex flex-col md:gap-y-5 xs:gap-y-2 p-5 shadow-md' variants={itemVariants}>
        <YouTubeVideo
          videoId="TH4V-yHbJXk" 
          placeholder={Image6}
        />
          <div className='flex'>
            <p className='bg-[#EEEEEE] px-4 py-1 font-bold mr-5 w-max'>Category</p>
            <p className='px-4 py-1 font-bold text-[#464B70] dark:text-[#eee]'>5 min video</p>
          </div>
          <h1 className='font-bold text-[#2F4F4F] dark:text-white md:text-[30px] lg:text-[26px] xl:text-[46px]'>Empowering Children Through Education</h1>
          <p className='md:text-[18px] xs:text-[14px] font-Roboto text-[#464B70] dark:text-[#d3d3d3]'>Discover the impact of education on children in Africa.</p>
          <div className='flex items-center gap-x-2 cursor-pointer dark:text-white w-max text'>
            <Link 
              href='https://www.youtube.com/watch?v=megFxsjjTEY' 
              target='_blank' 
              rel='noopener noreferrer' 
              className='font-bold text-[18px] text-[#11142D] dark:text-[#eee]'
            >
              Watch
            </Link>
            <IoIosArrowForward />
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Discover
