// Navbar.tsx
'use client';
import React, { useEffect, useState } from 'react';
import HamburgerMenu from './HamburgerMenu';
import LogoDisplay from './LogoDisplay';
import ThemeToggle from './ThemeToggle';
import GuestNav from './GuestNav';

const Navbar: React.FC = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const navbarElement = document.querySelector('nav');
    if (navbarElement) {
      setNavbarHeight(navbarElement.clientHeight);
    }
  }, []);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);
  const dummyCloseMenu = () => {}; 

  return (
    <nav style={{ top: showNav ? '0' : `-${navbarHeight}px` }} className="bg-white lg:px-10 dark:bg-[#11161b] text-white p-4 font-Cairo w-full border-b-[1px] z-50 border-[#E1E1E1] dark:border-[#555555] sticky top-0 right-0 transition-top duration-500">
      <div className="flex items-center justify-between w-full">
        <div className='lg-md:flex xs:hidden gap-x-5'>
          <GuestNav closeMenu={dummyCloseMenu} />
        </div>
        <LogoDisplay />
        <div className='flex items-center gap-x-5'>
          <ThemeToggle />
          <div className="gap-x-5 xs:flex lg-md:hidden h-full">
            <HamburgerMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;