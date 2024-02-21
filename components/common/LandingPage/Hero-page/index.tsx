'use client'
import AnimatedLetters from '@/app/services/AnimatedLetters';
import { HeroImage, Image29, Image30 } from '@/public/images';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const heroImages = [
  { src: HeroImage, alt: 'Hero Image 1' },
  { src: Image29, alt: 'Hero Image 2' },
  { src: Image30, alt: 'Hero Image 3' },
];

const HeroPage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex font-Cairo dark:bg-[#11161b]">
      <div className='w-1/2 xs:hidden lg:flex flex-col justify-center ml-20'>
        <AnimatedLetters text='Providing Hope and Support for African Children' />
        <p className='text-[18px] text-[#11142D] w-[80%] dark:text-[#eee]'>
          At Impact Consulting, I specialize in empowering nonprofit organizations, with a keen focus on grassroots groups, to make a significant impact in their communities. My goal is to transform lives and create lasting change by providing strategic guidance and support. Whether you&apos;re starting out or looking to expand your reach, I&apos;m here to help turn your vision into reality or escalate your impact to a new level.
        </p>
        <div className='flex gap-x-5 mt-10'>
          <Link href={'/services'} className='button-learn px-4 py-2 text-[20px] dark:text-white'>Learn More</Link>
        </div>
      </div>
      <Image
        className='lg:w-1/2 h-screen object-cover'
        width={4000}
        height={3000}
        src={heroImages[currentImage].src}
        alt={heroImages[currentImage].alt}
        key={currentImage}
      />
    </div>
  );
};

export default HeroPage;
