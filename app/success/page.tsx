'use client'
import React, { Suspense } from 'react';
import SearchResultComponent from './SearchResultComponent';
import Image from 'next/image';
import { Logo, LogoBlack } from '@/public/images';
import Link from 'next/link';
import { useThemeMenu } from '@/components/common/Navbar/Theme/ThemeMenuProvider';
import { Spinner } from '@/utils';

const Success = () => {
  const { theme } = useThemeMenu();
  return (
    <div>
      <div className="h-screen flex flex-wrap items-center dark:bg-[#11161b] font-Cairo xl:px-72 lg:px-24 md:px-10 xs:px-5">
        <div className='w-full'>
          {theme === "dark" ? (
            <Image className='mb-5' src={LogoBlack} alt="Logo" width={200} height={200} />
          ) : (
            <Image className='mb-5' src={Logo} alt="Logo" width={200} height={200} />
          )}
          <h1 className='lg:text-[40px] font-bold text-[#11142D] dark:text-[#FFF] w-[70%]'>Payment confirmed Successful!</h1>
          <p className='text-[#555555] dark:text-[#a5a5a5] font-semibold lg:w-[65%] my-5'>
            Thank you for your generous donation to Inputct. Your support is confirmed, and with your help,
            we&apos;re making a real difference in the lives of children across Africa. Your contribution goes directly towards providing education, healthcare,
            and essential support to those in need. If there&apos;s anything more you&apos;d like to know about how your donation helps, or if you&apos;re interested
            in further supporting our cause, please don&apos;t hesitate <Link href={'/contact'} className='font-semibold text-teal-600 dark:text-white hover:text-teal-700 underline underline-offset-2'>to reach out</Link>. We are deeply grateful for your kindness and support!
          </p>
          <div className='flex gap-x-10'>
            <Link href={'/'} className='font-bold text-[#11142D] dark:text-white hover:text-teal-600 underline underline-offset-2 lg:text-[20px] xs:text-[14px] sm:text-[18px]'>Go back to home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
