'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { IoIosArrowDown } from 'react-icons/io';
import Link from 'next/link';


interface CategoryLink {
  name: string;
  href: string;
}

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const bookCategories: CategoryLink[] = [
    { name: 'Donate', href: '/donate' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact me', href: '/contact' },
    { name: 'How to help', href: '/help' },
    { name: 'Volunteer', href: '/volunteer' },
  ];

  const firstHalf = bookCategories.slice(0, 4);
  const secondHalf = bookCategories.slice(4, 8);

  return (
    <div onClick={() => setIsOpen(!isOpen)} className='flex gap-x-3 cursor-pointer relative'>
      <IoIosArrowDown size={16} className="text-[#11161b] dark:text-white" />
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute left-[-70px] mt-10 py-2 bg-white dark:bg-[#11161b] rounded-md shadow-xl z-50"
          style={{ width: 'max-content' }}
        >
          <>
            <div className="flex">
              <div className="flex flex-col">
                {firstHalf.map((category, index) => (
                  <Link
                    key={index} 
                    href={category.href}
                    className="px-10 py-3 text-sm text-gray-700 font-semibold dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>

              <div className="flex flex-col">
                {secondHalf.map((category, index) => (
                  <Link 
                    key={index} 
                    href={category.href}
                    className="px-10 py-3 text-sm text-gray-700 dark:text-white font-semibold hover:bg-gray-100 dark:hover:bg-gray-900"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
          </>
        </motion.div>
      )}
    </div>
  )
}

export default Menu;
