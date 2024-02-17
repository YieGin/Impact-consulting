import React from 'react'
import { HiBuildingOffice } from 'react-icons/hi2'
import { MdEmail, MdLocalPhone } from 'react-icons/md'

const Involved = () => {
  return (
    <div className='flex flex-wrap gap-5 w-full justify-between lg:px-20 md:px-10 xs:px-5 mt-20 pb-20'>
      <div className='flex flex-col gap-y-5'>
        <p className='font-bold md:text-[18px] xs:text-[14px] text-[#11142D] dark:text-[#eee]'>Empowering</p>
        <h1 className='font-bold text-[#2F4F4F] dark:text-white md:text-[46px] xs:text-[30px]'>Get Involved</h1>
        <p className='font-semibold md:text-[18px] xs:text-[14px] text-[#11142D] dark:text-[#eee]'>We would love to hear from you. Please reach out to us with any questions or inquiries.</p>
      </div>
      <div className='flex flex-col gap-y-3 mt-10 font-sans'>
        <div className='flex items-center gap-x-2'>
          <MdEmail className='text-[#222] md:text-[25px] dark:text-[#fff]' />
          <div>
            <p className='font-bold md:text-[20px] text-[#11142D] dark:text-[#eee]'>Email</p>
            <p className='font-semibold md:text-[20px] text-[#303030] dark:text-[#eee] underline underline-offset-2'>hello@email.com</p>
          </div>
        </div>
        <div className='flex items-center gap-x-2'>
          <MdLocalPhone className='text-[#222] dark:text-[#fff] md:text-[25px]' />
          <div>
            <p className='font-bold md:text-[20px] text-[#11142D] dark:text-[#eee]'>Phone</p>
            <p className='font-semibold md:text-[20px] text-[#303030] dark:text-[#eee] underline underline-offset-2'>+1 (555) 000-0000</p>
          </div>
        </div>
        <div className='flex items-center gap-x-2'>
          <HiBuildingOffice className='text-[#222] dark:text-[#fff] md:text-[25px]' />
          <div>
            <p className='font-bold md:text-[20px] text-[#11142D] dark:text-[#eee]'>Office</p>
            <p className='font-semibold md:text-[20px] text-[#303030] dark:text-[#eee] underline underline-offset-2'>123 Sample St, Sydney NSW 2000 AU</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Involved
