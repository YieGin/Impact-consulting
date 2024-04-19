'use client'
import AnimatedLetters from '@/app/services/AnimatedLetters';
import { HeroImage } from '@/public/images';
import Image from 'next/image';
import Link from 'next/link';


const HeroPage = () => {

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
        src={HeroImage}
        alt={"Hero Image"}
      />
    </div>
  );
};

export default HeroPage;
