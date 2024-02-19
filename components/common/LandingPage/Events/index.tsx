'use client'
import { Diana, Image10, Image12, Image7, Image8, Image9 } from '@/public/images';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiSolidDonateHeart } from 'react-icons/bi';
import { IoIosArrowForward } from 'react-icons/io';
import { useThemeMenu } from '../../Navbar/Theme/ThemeMenuProvider';
import { Logo, LogoBlack } from '@/public/images';
import { motion, useAnimation } from 'framer-motion';
import AnimatedLetters from '@/app/services/AnimatedLetters';

const Events = () => {
  const { theme } = useThemeMenu();

  const eventsList = [
    {
      title: 'Exciting Event Happening',
      Image: Image7,
      description: 'Join us for an exciting event filled with fun and entertainment.',
    },
    {
      title: 'Fun-filled Event Experience',
      Image: Image8,
      description: "Don't miss out on this exciting event filled with laughter and joy.",
    },
    {
      title: 'Unforgettable Event Experience',
      Image: Image10,
      description: 'Experience the magic of this event that will leave you inspired.',
    },
    {
      title: 'Empowering African Youth',
      Image: Image12,
      description: 'Be a part of our empowering journey to uplift the lives of young minds in Africa. Your involvement can make a real difference.',
    },    
  ];

  const itemVariants = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.4, duration: 0.5 }
    }),
  };
  return (
    <div className='mt-32 font-Cairo xs:px-5 md:px-0'>
      <div className='lg:px-20 md:px-10'>
        <p className='font-bold md:text-[20px] text-[#11142D] dark:text-white'>Join</p>
        <AnimatedLetters text='Upcoming' />
        <p className='font-semibold md:text-[20px] xs:text-[14px] text-[#11142D] dark:text-white'>Stay updated with our exciting community events.</p>
      </div>
      <div className='flex xs:flex-wrap xl:flex-nowrap gap-x-5 lg:px-20 md:px-10'>
        {eventsList.map((item, index) => (
          <motion.div
            key={index}
            className='border-[1px] relative xs:w-full lg:w-[350px] xl:w-full flex flex-col gap-y-5 mt-10'
            variants={itemVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            custom={index}
          >
            <Image className='w-full h-[300px] object-cover' width={4000} height={3000} src={item.Image} alt={`event image ${index}`} />
            <div className='px-5 flex flex-col gap-y-5 pb-2'>
              <p className='py-1 font-bold w-max md:text-[18px] xs:text-[13px]'>Category</p>
              <h1 className='font-bold text-[#2F4F4F] dark:text-white md:text-[26px]'>{item.title}</h1>
              <p className='font-semibold md:text-[17px] xs:text-[14px] text-[#11142D] dark:text-[#eee]'>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className='flex flex-col gap-y-5 mt-10 lg:px-20 md:px-10'>
        <AnimatedLetters text='Help Us Make a Difference' />
        <p className='font-semibold md:text-[20px] xs:text-[14px] text-[#11142D] dark:text-white'>Your donation can provide education, healthcare, and hope to children in Africa.</p>
        <div className='flex gap-x-5'>
          <Link href={'/donate'} className='w-max px-5 py-2 text-[18px] bg-[#FFA500] hover:bg-[#ffc457] transition duration-300 ease-in-out flex items-center'>
            <BiSolidDonateHeart />
            <p className='font-bold text-[20px] text-[#111111]'>Donate</p>
          </Link>
          <Link href={'/services'} className='button-learn px-4 py-2 text-[18px] dark:text-white'>Learn More</Link>
        </div>
      </div>
      <div className='md:mt-40 xs:mt-10 flex flex-col items-center justify-center gap-y-7 dark:bg-[#11161b] py-10'>
        <Link href="/">
          {theme === "dark" ? (
            <Image className='sm:w-[150px] xs:w-[100px]' src={LogoBlack} alt="Logo" width={150} height={150} />
          ) : (
            <Image className='sm:w-[150px] xs:w-[100px]' src={Logo} alt="Logo" width={150} height={150} />
          )}
        </Link>
        <p className='font-semibold md:text-[20px] xs:text-[16px] text-[#11142D] dark:text-white lg:w-1/2 text-center'>
          Volunteering with this nonprofit organization has been an incredibly rewarding experience.
          Seeing the positive impact we can make in the lives of children in Africa is truly inspiring.
        </p>
        <Image className='sm:w-[80px] rounded-full' src={Diana} alt="Logo" width={150} height={150} />
        <div className='flex flex-col items-center'>
          <p className='font-bold text-[20px] text-[#11142D] dark:text-white'>Diana G.Pinto</p>
          <p className='font-semibold text-[20px] text-[#11142D] dark:text-white text-center'>Volunteer, Nonprofit Development Consultant</p>
        </div>
     </div>
    </div>
  );
}

export default Events;
