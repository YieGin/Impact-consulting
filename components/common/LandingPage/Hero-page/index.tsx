import { HeroImage } from '@/public/images'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiSolidDonateHeart } from 'react-icons/bi'

const HeroPage = () => {
  return (
    <div className="flex font-Cairo dark:bg-[#11161b]">
      <div className='w-1/2 xs:hidden lg:flex flex-col justify-center ml-20'>
        <h1 className='font-bold text-[#2F4F4F] dark:text-white text-[46px] w-[80%]'>Providing Hope and Support for African Children</h1>
        <p className='text-[18px] text-[#11142D] w-[80%] dark:text-[#eee]'>
          Join us in making a difference in the lives of African children who need our help. Together, we can create a brighter future.
        </p>
        <div className='flex gap-x-5 mt-10'>
          <Link href={'/donate'} className='w-max px-5 py-2 text-[18px] bg-[#FFA500] hover:bg-[#ffc457] transition duration-300 ease-in-out flex items-center'>
            <BiSolidDonateHeart />
            <p className='font-bold text-[20px] text-[#111111]'>Donate</p>
          </Link>
          <Link href={'/services'} className='button-learn px-4 py-2 text-[20px] dark:text-white'>Learn More</Link>
        </div>
      </div>
      <Image className='lg:w-1/2 h-screen object-cover' width={4000} height={3000} src={HeroImage} alt='Hero Image' />
    </div>
  )
}

export default HeroPage
