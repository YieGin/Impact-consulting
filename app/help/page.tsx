'use client'
import { AboutUsImg, Image10, Image12, Image5, Image8, Image9 } from '@/public/images'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BiSolidDonateHeart } from 'react-icons/bi'
import { IoIosArrowForward } from 'react-icons/io'
import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton } from 'react-share'
import DonationTiers from './DonationTiers'
import Touch from './Touch'
import { Faq, Involved } from '@/components/common/LandingPage'
import AnimatedLettersWhite from '../blog/AnimatedLetters'
import AnimatedLetters from '../services/AnimatedLetters'

const HowToHelp = () => {
  const [currentUrl, setCurrentUrl] = useState('');

  const DonateList = [
    {
      title: 'Donate and Change Lives',
      description: 'Your generous donations enable us to provide essential resources and support to children in need.',
      button: 'Donate',
      href: 'donate',
      Image: Image10
    },
    {
      title: 'Volunteer and Make a Difference',
      description: 'Join our dedicated team of volunteers and directly impact the lives of children in Africa.',
      button: 'Volunteer',
      href: 'volunteer',
      Image: Image8
    },
    {
      title: 'Spread Awareness and Support',
      description: 'Help us raise awareness about the challenges faced by children in Africa and encourage others to get involved.',
      button: 'Share',
      href: currentUrl,
      Image: Image12
    }
  ]

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  return (
    <div className='bg-[#F5F5F5] pb-20 dark:bg-[#181c20]'>
      <div className='w-full md:h-[700px] xs:h-[500px] font-Cairo'>
        <Image className='w-full md:h-[700px] xs:h-[500px] object-cover absolute filter brightness-50' width={1000} height={30} src={AboutUsImg} alt='Hero Image' />
        <div className='gap-y-5 flex flex-col items-center justify-center text-center py-10 lg:px-20 md:px-10 xs:px-5 z-20 relative'>
          <div className='flex flex-col items-center justify-center text-center'>
            <p className='font-bold text-[20px] text-[#F5F5F5] dark:text-white'>Empower</p>
            <AnimatedLettersWhite text='Make a Difference' />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <p className='lg:text-[18px] xs:text-[14px] text-[#F5F5F5] dark:text-[#d3d3d3]'>
              Join us in empowering children in Africa by getting involved today.
            </p>
            <div className='flex gap-x-5 items-center mt-5'>
            <Link href={''} className='w-[120px] h-[50px] flex items-center justify-center text-[18px] text-white bg-[#000] transition duration-300 ease-in-out gap-x-2'>
              <BiSolidDonateHeart />
              <p className='font-bold text-[20px] text-[#fff]'>Donate</p>
            </Link>
              <Link href={'/contact'} className='w-[120px] h-[50px] flex items-center justify-center border-2 border-[#666666] cursor-pointer text-[#fff] dark:text-[#eee] hover:bg-[#000] hover:text-white font-semibold'>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='flex xl:flex-row xs:flex-col pt-20 lg:px-20 md:px-10 xs:px-5 bg-white dark:bg-[#181c20]'>
        <AnimatedLetters text='Discover Multiple Ways to Make a Difference' />
      </div>
      <div className='flex flex-wrap gap-x-5 lg:px-20 md:px-10 pb-20 dark:bg-[#181c20] bg-white'>
        {DonateList.map((item, index) => (
          <div key={index} className='shadow-md relative xs:w-full lg:w-[350px] xl:w-[570px] flex flex-col gap-y-5 mt-10 dark:border-[1px] dark:border-[#666] h-full'>
            <div className='overflow-hidden w-full h-[300px] relative'>
              <Image className='w-full h-full object-cover transition-transform duration-700 hover:scale-105' width={4000} height={3000} src={item.Image} alt={`event image ${index}`} />
            </div>
            <div className='px-5 flex flex-col gap-y-5 pb-5'>
              <h1 className='font-bold text-[#2F4F4F] dark:text-white md:text-[26px]'>{item.title}</h1>
              <p className='font-semibold md:text-[17px] lg:text-[15px] xl:text-[17px] xs:text-[14px] text-[#11142D] dark:text-[#eee]'>{item.description}</p>
              {item.button === 'Share' ? (
                <div className='flex items-center gap-x-5 dark:text-[#eee]'>
                  <p className='font-bold text-[18px] font-Roboto'>{item.button}:</p>
                  <TwitterShareButton
                    url={currentUrl}
                    title={item.description}
                    className='Demo__some-network__share-button flex'
                  >
                    <TwitterIcon size={32} round />
                  </TwitterShareButton>
                  <FacebookShareButton
                    url={currentUrl}
                    title={item.description}
                    className='Demo__some-network__share-button flex'
                  >
                    <FacebookIcon size={32} round />
                  </FacebookShareButton>
                </div>
              ) : (
                <Link href={item.href} className='flex gap-x-2 items-center text-[#11142D] w-max cursor-pointer hover:text-teal-500 dark:hover:text-teal-500 dark:text-[#eee]'>
                  <p className='font-bold text-[18px] font-Roboto'>{item.button}</p>
                  <IoIosArrowForward className='font-bold text-[18px]' />
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
      <DonationTiers />
      <Touch />
      <div className='w-full h-[500px] font-Cairo'>
        <Image className='w-full h-[500px] object-cover absolute filter brightness-50' width={1000} height={30} src={Image5} alt='Hero Image' />
        <div className='gap-y-5 flex flex-col justify-center h-full py-10 lg:px-20 md:px-10 xs:px-5 z-20 relative'>
          <div>
            <p className='font-bold text-[20px] text-[#F5F5F5] dark:text-white'>Empower</p>
            <AnimatedLettersWhite text='Support African Kids in Need' />
            <AnimatedLettersWhite text='Discover Multiple Ways to Make a Difference' />
          </div>
          <div>
            <p className='lg:text-[18px] xs:text-[14px] text-[#F5F5F5] dark:text-[#d3d3d3]'>
              Learn how you can make a difference in the lives of African children.
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
      <Faq />
      <Involved />
    </div>
  )
}

export default HowToHelp