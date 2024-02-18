import React from 'react';
import Link from 'next/link'
import Menu from './Menu'

interface GuestNavProps {
  closeMenu: () => void;
}

const GuestNav: React.FC<GuestNavProps> = ({ closeMenu }) => {
  

  return (
    <div className='font-Cairo flex flex-col lg-md:flex-row gap-5 '>
      <Link
        onClick={closeMenu}
        href={'/services'} 
        className='text-[#181818] font-bold text dark:text-white md:bg-inherit md:dark:bg-inherit m-3 text-[18px]'>
        Services
      </Link>
      <Link
        onClick={closeMenu}
        href={'/certificates'}
        className='text-[#181818] font-bold text dark:text-white md:bg-inherit md:dark:bg-inherit m-3 text-[18px]'>
        Certificates
      </Link>
      <div className='flex items-center'>
        <Link
          onClick={closeMenu}
          href={'/donate'}
          className='text-[#181818] font-bold text dark:text-white md:bg-inherit md:dark:bg-inherit m-3 text-[18px]'>
          Donate
        </Link>
        <Menu closeMenu={closeMenu} />
      </div>
    </div>
  )
}

export default GuestNav
