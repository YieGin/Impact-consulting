import Link from 'next/link'
import React, { useState } from 'react'
import Menu from './Menu'

const GuestNav = () => {
  

  return (
    <div className='font-Cairo flex flex-col lg-md:flex-row gap-5 items-center'>
      <Link 
        href={'/services'} 
        className='text-[#181818] font-bold text dark:text-white xs:dark:bg-[#151b20] xs:bg-[#f3f3f3] md:bg-inherit md:dark:bg-inherit p-3 text-[18px]'>
        Services
      </Link>
      <Link 
        href={'/certificates'}
        className='text-[#181818] font-bold text dark:text-white xs:dark:bg-[#151b20] xs:bg-[#f3f3f3] md:bg-inherit md:dark:bg-inherit p-3 text-[18px]'>
        Certificates
      </Link>
      <div className='flex items-center'>
        <Link 
          href={'/donate'}
          className='text-[#181818] font-bold text dark:text-white xs:dark:bg-[#151b20] xs:bg-[#f3f3f3] md:bg-inherit md:dark:bg-inherit p-3 text-[18px]'>
          Donate
        </Link>
        <Menu />
      </div>
    </div>
  )
}

export default GuestNav
