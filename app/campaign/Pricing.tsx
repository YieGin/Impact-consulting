'use client'
import React, { useState } from 'react';
import { FcCheckmark } from 'react-icons/fc';
import { MdOutlinePayments } from 'react-icons/md';
import { motion } from 'framer-motion';
import Link from 'next/link';
import AnimatedLetters from '../services/AnimatedLetters';

interface Plan {
  title: string;
  href: string | { monthly: string; yearly: string };
  monthlyPrice: number;
  benefits: string[];
}

const plans: Plan[] = [
  {
    title: 'Custom',
    monthlyPrice: 1,
    href: 'https://bookvillage.co.za/donate',
    benefits: [
      'Choose how you make an impact',
      'Support initiatives most important to you',
      'Flexible donations to match your capability',
      'Every dollar helps',
      'Be a part of a community',
    ],
  },
];


const PlanCard: React.FC<{ plan: Plan; period: 'monthly' | 'yearly'; index: number }> = ({ plan, period, index }) => {

  let href;
  if (typeof plan.href === 'string') {
    href = plan.href;
  } else {
    href = period === 'monthly' ? plan.href.monthly : plan.href.yearly;
  }
  
  return (
    <motion.div 
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: index * 0.2 }}
      className='shadow-md dark:shadow-none dark:border-[1px] dark:border-[#666] lg:w-full lg-md:p-10 md:p-5 xs:p-2 sm:p-3 flex flex-col'>
      <div className='flex justify-between flex-col'>
        <h1 className='font-bold lg-md:text-[30px] xs:text-[25px] dark:text-[#FFF]'>{plan.title}</h1>
      </div>
      <hr className='my-10 border-[#a8a8a8] dark:border-[#666]' />
      <div className='flex flex-col gap-y-3 h-full'>
        {plan.benefits.map((benefit, index) => (
          <div key={index} className='flex'>
            <div className='flex lg-md:gap-x-3 md:gap-x-1 xs:gap-x-1 sm:gap-x-2'>
              <FcCheckmark className='lg-md:text-[20px] md:text-[15px] xs:text-[15px]' />
              <p className='lg-md:text-[16px] md:text-[12px] xs:text-[13px] sm:text-[16px] font-medium text-[#222] dark:text-[#eee]'>{benefit}</p>
            </div>
          </div>
        ))}
        <hr className='my-10 border-[#a8a8a8] dark:border-[#666] mt-auto' />
        <Link target='_blank' href={href} className='Btn w-full bg-black font-Cairo dark:bg-[#131313]'>
          <p>Donate</p>
          <MdOutlinePayments className='svgIcon text-[25px]' /> 
        </Link>
      </div>
    </motion.div>
  );
};

const Pricing: React.FC = () => {
  const [period] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <div className='flex flex-col gap-y-5 items-center justify-center text-center py-10 pb-20 h-full lg:px-20 md:px-10 xs:px-5 w-full dark:bg-[#11161b]'>
        <AnimatedLetters text='Donation Options' />
      <div className='flex xs:flex-col md:flex-row gap-y-32 gap-x-5 w-max justify-center mt-10'>
        {plans.map((plan, index) => (
          <PlanCard key={index} plan={plan} period={period} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
