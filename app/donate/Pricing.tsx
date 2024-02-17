'use client'
import React, { useState } from 'react';
import { FcCheckmark } from 'react-icons/fc';
import { MdOutlinePayments } from 'react-icons/md';
import { motion } from 'framer-motion';
import Link from 'next/link';

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
    href: 'https://buy.stripe.com/test_00geXH1Ks6CYbWE3cg',
    benefits: [
      'Choose how you make an impact',
      'Support initiatives most important to you',
      'Flexible donations to match your capability',
      'Every dollar contributes to meaningful change',
      'Be a part of a community committed to making a difference',
    ],
  },
  {
    title: 'Business Plan',
    monthlyPrice: 15,
    href: {
      monthly: 'https://donate.stripe.com/test_aEU7vffBi5yUf8QeUW',
      yearly: 'https://donate.stripe.com/test_14keXHbl2aTe2m4aEJ',
    },
    benefits: [
      'Supports education initiatives',
      'Provides healthcare services',
      'Supplies clean drinking water',
      'Supports nutrition programs',
    ],
  },
  {
    title: 'Premium Plan',
    monthlyPrice: 20,
    href: {
      monthly: 'https://buy.stripe.com/test_bIYeXH3SA8L61i04gh',
      yearly: 'https://donate.stripe.com/test_aEU5n7bl20eA9OwcMS',
    },
    benefits: [
      'Supports education initiatives',
      'Provides healthcare services',
      'Supplies clean drinking water',
      'Supports nutrition programs',
      'Empowers local communities',
    ],
  },
];

const calculateYearlyPrice = (monthlyPrice: number): number => {
  switch (monthlyPrice) {
    case 1:
      return 1;
    case 15:
      return 160;
    case 20:
      return 200;
    default:
      return monthlyPrice * 12;
  }
};

const PlanCard: React.FC<{ plan: Plan; period: 'monthly' | 'yearly'; index: number }> = ({ plan, period, index }) => {
  const price = period === 'monthly' ? `$${plan.monthlyPrice}` : `$${calculateYearlyPrice(plan.monthlyPrice)}`;
  const cardVariants = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.5, duration: 0.5 },
    },
  };

  let href;
  if (typeof plan.href === 'string') {
    href = plan.href;
  } else {
    href = period === 'monthly' ? plan.href.monthly : plan.href.yearly;
  }
  
  return (
    <motion.div 
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: index * 0.2 }}
      className='shadow-md dark:shadow-none dark:border-[1px] dark:border-[#666] lg:w-full lg-md:p-5 md:p-5 xs:p-2 sm:p-5 flex flex-col'>
      <div className='flex justify-between flex-col items-center'>
        <h1 className='font-bold lg-md:text-[20px] xs:text-[25px] dark:text-[#FFF]'>{plan.title}</h1>
        <h1 className='font-bold lg-md:text-[40px] xs:text-[20px] text-[#222] dark:text-[#FFF]'>{price}</h1>
      </div>
      <hr className='my-10 border-[#a8a8a8] dark:border-[#666]' />
      <div className='flex flex-col gap-y-3 h-full'>
        {plan.benefits.map((benefit, index) => (
          <div key={index} className='flex'>
            <div className='flex lg-md:gap-x-3 md:gap-x-1 xs:gap-x-3 items-center'>
              <FcCheckmark className='lg-md:text-[20px] md:text-[15px] xs:text-[20px]' />
              <p className='lg-md:text-[16px] md:text-[12px] xs:text-[14px] sm:text-[18px] font-medium text-[#222] dark:text-[#eee]'>{benefit}</p>
            </div>
          </div>
        ))}
        <hr className='my-10 border-[#a8a8a8] dark:border-[#666] mt-auto' />
        <Link href={href} className='Btn w-full bg-black font-Cairo dark:bg-[#131313]'>
          <p>Donate</p>
          <MdOutlinePayments className='svgIcon text-[25px]' /> 
        </Link>
      </div>
    </motion.div>
  );
};

const Pricing: React.FC = () => {
  const [period, setPeriod] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <div className='flex flex-col gap-y-5 items-center justify-center text-center py-10 pb-20 h-full lg:px-20 md:px-10 xs:px-5 w-full dark:bg-[#11161b]'>
      <div className='flex flex-col items-center justify-center text-center'>
        <p className='font-bold text-[25px] text-[#222] dark:text-white'>My Promise</p>
        <p className='font-semibold xs:text-[13px] md:text-[18px] sm:text-[14px] text-[#222] dark:text-[#c5c5c5] lg:w-[60%]'>
          I promise to deliver the same level of professionalism, dedication, and quality in my pro bono work as I do in my paid engagements.
          Your mission is important, and I&apos;m here to help you achieve it.
        </p>
        <h1 className='font-bold text-[#2F4F4F] dark:text-white md:text-[36px] mt-10'>Donation Options</h1>
      </div>
      <div className='flex items-center mt-5'>
        <button onClick={() => setPeriod('monthly')} className={`w-[120px] h-[50px] flex items-center justify-center text-[18px] ${period === 'monthly' ? 'text-white bg-[#000]' : 'text-[#000] dark:text-[#eee]'} transition duration-300 ease-in-out gap-x-2 cursor-pointer border-2 border-[#666666]`}>
          Month
        </button>
        <button onClick={() => setPeriod('yearly')} className={`ml-2 w-[120px] h-[50px] flex items-center justify-center text-[18px] ${period === 'yearly' ? 'text-white bg-[#000]' : 'text-[#000] dark:text-[#eee]'} transition duration-300 ease-in-out gap-x-2 cursor-pointer border-2 border-[#666666]`}>
          Year
        </button>
      </div>
      <div className='flex xs:flex-col md:flex-row gap-y-32 gap-x-5 w-full justify-center mt-10'>
        {plans.map((plan, index) => (
          <PlanCard key={index} plan={plan} period={period} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
