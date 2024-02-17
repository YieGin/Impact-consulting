'use client'
import React, { useState } from 'react';
import { IoIosMenu } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import Image from 'next/image';
import { Logo, LogoBlack } from '@/public';
import { useThemeMenu } from './Theme/ThemeMenuProvider';
import GuestNav from './GuestNav';

const HamburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const { theme } = useThemeMenu();

  return (
    <div className={`font-Cairo flex items-center justify-center lg:hidden ml-auto `}>
      <button onClick={toggleMenu}>
        <IoIosMenu className='dark:text-white text-black' size={40} />
      </button>
    <div className={`fixed top-0 right-0 bg-white dark:bg-[#11161b] md:w-[300px] w-full h-full shadow-lg z-40 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} ease-in-out duration-300 overflow-y-auto overflow-x-hidden`}>
      {theme === "dark" ? (
        <Image className='object-cover m-5' loading="lazy" src={LogoBlack} alt="Logo" width={150} height={50} />
        ) : (
        <Image className='object-cover m-5' loading="lazy" src={Logo} alt="Logo" width={150} height={50} />
      )}
      <button onClick={toggleMenu} className="absolute top-4 right-4">
        <IoClose className='text-black dark:text-white' size={24} />
      </button>
      <GuestNav />
    </div>
  </div>
  );
}

export default HamburgerMenu;
