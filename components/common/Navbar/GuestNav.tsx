import React from 'react';
import Link from 'next/link';
import Menu from './Menu';
import { usePathname } from 'next/navigation';

interface GuestNavProps {
  closeMenu: () => void;
}

const GuestNav: React.FC<GuestNavProps> = ({ closeMenu }) => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <div className='font-Cairo flex flex-col lg:flex-row gap-1 '>
      {[
        { href: '/pro-bono', label: 'Pro Bono' },
        { href: '/blog', label: "Diana's Writing" },
        { href: '/testimonials', label: 'Testimonials' },
        { href: '/campaign', label: 'Campaign' },
        { href: '/volunteer', label: 'Volunteer' },
        // Removed 'hasMenu' flag from here
      ].map((link, index) => (
        <Link
          key={index}
          onClick={closeMenu}
          href={link.href}
          className={`${isActive(link.href) ? 'text-[#000] dark:text-white' : 'text-[#808080]'} font-bold font-Roboto text md:bg-inherit md:dark:bg-inherit m-3 text-[16px]`}
        >
          {link.label}
        </Link>
      ))}
      {/* Wrapping the 'Services' link and Menu in a flex container */}
      <div className='flex items-center'>
        <Link
          onClick={closeMenu}
          href='/services'
          className={`${isActive('/services') ? 'text-[#000] dark:text-white' : 'text-[#808080]'} font-bold font-Roboto text  md:bg-inherit md:dark:bg-inherit m-3 text-[16px]`}
        >
          Services
        </Link>
        <Menu closeMenu={closeMenu} />
      </div>
    </div>
  );
}

export default GuestNav;