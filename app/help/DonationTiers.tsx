import Link from 'next/link';
import React from 'react';
import { FcCheckmark } from 'react-icons/fc';
import { MdOutlinePayments } from 'react-icons/md';

const DonationTiers = () => {
  const benefits = [
    { id: 1, title: "Supports education initiatives" },
    { id: 2, title: "Provides healthcare services" },
    { id: 3, title: "Supplies clean drinking water" },
    { id: 4, title: "Supports nutrition programs" },
  ];

  return (
    <div className='pt-20 dark:bg-[#11161b]'>
      <div className='lg:w-1/2 lg:px-20 md:px-10 xs:px-5'>
        <p className='font-bold text-[20px] text-[#11142D] dark:text-white'>Empower</p>
        <h1 className='font-bold text-[#2F4F4F] dark:text-white xs:text-[18px] lg:text-[46px] md:text-[26px] xl:w-[70%]'>
          Donation Tiers
        </h1>
        <p className='font-semibold md:text-[16px] xs:text-[13px] text-[#464B70] dark:text-[#c5c5c5] my-5'>
          Every donation brings a glimmer of hope and a step towards a brighter future for children across Africa.
          Our Donation Tiers have been thoughtfully established to show how your generosity can make a tangible difference in the lives of these children.
          From providing essential educational materials to ensuring daily nutritious meals, your support is the cornerstone of change. Together,
          we can uplift communities, empower the next generation, and pave the way for enduring transformations. Explore our tiers and find the impact
          you wish to leave in the heart of Africa — because every child deserves a chance to dream, grow, and succeed.
        </p>
      </div>
      <div className='flex items-center xs:flex-wrap lg:flex-nowrap gap-x-40 gap-y-10 lg:px-20 md:px-10 xs:px-5 py-10'>
        <div className='lg:w-1/2 flex flex-col gap-y-5'>
          <div className='flex items-center gap-x-2'>
            <div className='flex flex-col gap-y-1'>
              <h1 className='font-bold text-[#2F4F4F] dark:text-white text-[25px]'>Impactful Donations</h1>
              <p className='font-semibold md:text-[16px] xs:text-[13px] text-[#464B70] dark:text-[#c5c5c5]'>Choose a donation amount that can make a difference.</p>
            </div>
          </div>
          <div className='flex items-center gap-x-2'>
            <div className='flex flex-col gap-y-1'>
              <h1 className='font-bold text-[#2F4F4F] dark:text-white text-[25px]'>Sustainable Solutions</h1>
              <p className='font-semibold md:text-[16px] xs:text-[13px] text-[#464B70] dark:text-[#c5c5c5]'>See how your donation can help change lives.</p>
            </div>
          </div>
          <div className='flex items-center gap-x-2'>
            <div className='flex flex-col gap-y-1'>
              <h1 className='font-bold text-[#2F4F4F] dark:text-white text-[25px]'>Education Programs</h1>
              <p className='font-semibold md:text-[16px] xs:text-[13px] text-[#464B70] dark:text-[#c5c5c5]'>Support long-term projects that create lasting impact.</p>
            </div>
          </div>
        </div>
        <div className='shadow-md dark:shadow-none dark:border-[1px] dark:border-[#666] lg:w-1/2 p-5'>
          <div className='flex justify-between'>
            <div className='flex flex-col gap-y-1'>
              <h1 className='font-bold md:text-[20px] xs:text-[15px] dark:text-[#FFF]'>Business Plan</h1>
              <p className='md:text-[14px] xs:text-[12px] font-medium text-[#222] dark:text-[#eee]'>Start Making a Difference Today</p>
            </div>
            <h1 className='font-bold md:text-[30px] xs:text-[20px] text-[#222] dark:text-[#FFF]'>$15/mo</h1>
          </div>
          <hr className='mt-10 border-[#a8a8a8] dark:border-[#252525]' />
          <div>
            <p className='text-[14px] font-medium text-[#222] dark:text-[#eee] my-5'>Includes:</p>
            <div className='flex flex-col gap-y-5'>
              {benefits.map(benefit => (
                <div key={benefit.id} className='flex gap-x-3 items-center'>
                  <FcCheckmark className='md:text-[20px] xs:text-[14px]' />
                  <p className='md:text-[16px] xs:text-[12px] font-medium text-[#222] dark:text-[#eee]'>{benefit.title}</p>
                </div>
              ))}
            </div>
            <hr className='my-10 border-[#a8a8a8] dark:border-[#252525]' />
            <Link target='_blank' href={'https://donate.stripe.com/test_aEU7vffBi5yUf8QeUW'} className='Btn bg-black font-Cairo dark:bg-[#131313] w-full flex items-center justify-center'>
              <p>Donate</p>
              <MdOutlinePayments className='svgIcon text-[25px]' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DonationTiers
