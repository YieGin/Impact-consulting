'use client'
import { Faq, Involved } from '@/components/common/LandingPage'
import { AboutUsImg, Image13, Image15, Image16, Image17, Image18, Image25, Image26, Image27, Image28 } from '@/public/images'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiSolidDonateHeart } from 'react-icons/bi'
import { IoIosArrowForward } from 'react-icons/io'
import AnimatedLettersWhite from './AnimatedLetters'
import AnimatedLetters from '../services/AnimatedLetters'
import AnimatedLettersTitle from './AnimatedLettersTitle'

const Page = () => {
  const DonateList = [
    {
      title: "8 Key Sport's Benefits in Violence Prevention: The Holistic Approach to Youth At-Risk",
      description: "Can sports and recreation decrease violence in poverty-stricken communities?’ It has been observed is that sports and recreation strongly impact positively the marginalised groups from impoverished communities, providing significant effects on mental health, reflecting on social behaviour.",
      href: 'https://medium.com/the-creative-pen/8-critical-benefits-of-sports-recreation-in-violence-prevention-in-impoverished-communities-the-98ea9e763dc7',
      Image: Image13
    },
    {
      title: 'What Are the Leading Causes of Poverty in Developing Countries?',
      description: 'When we think about the millions of people living under 0,99 cents a day often results in inertia built-in from the perception of hopeless inability to manage it. This leads to insensitivity and disregard for the extremely poor. In summary, it overwhelms us. What if it would be possible to end poverty by breaking the cycle of poverty?',
      href: 'https://medium.com/the-creative-pen/what-are-the-leading-causes-of-poverty-in-developing-countries-8f3ca7fa5fca',
      Image: Image17
    },
    {
      title: 'Why Positive Education Breaks the Poverty Cycle: Strengthening Vulnerable People',
      description: 'Children and young people exposed to violent environments live in fear, with the perspective that the world is neither fair nor safe, a state of mind reflecting on their behavior. The good news is that the opposite is also true. When exposed to positive experiences, vulnerable children and youth overcome adversities to develop life skills and build strengths enabling them to make their own choices, relate to others, and thrive. And this is possible due to positive education.',
      href: 'https://medium.com/the-creative-pen/why-nonprofits-should-adopt-positive-education-abe0d755b81a',
      Image: Image16
    },
    {
      title: 'How Being Unrealistic Can Guide You Through Life’s Challenges',
      description: 'My friend’s services were deemed unnecessary with a polite dismissal from the company — your post is no longer required. Eight years of commitment ended instantly — he was out, a casualty of corporate downsizing that favoured a select few over the rest. I look around, and what I see are global crises that have been escalating: the COVID-19 pandemic shook our lives, conflict in Ukraine triggered political instability, and violence flared up again in the Gaza Strip, deepening social strife.',
      href: 'https://medium.com/better-humans/how-being-unrealistic-can-guide-you-through-lifes-challenges-058807d4378b',
      Image: Image25
    },
    {
      title: 'I Learned Swedish in a Room Full of Refugees',
      description: 'For me, Sweden was an organized country with tranquil cities and villages surrounded by lakes, and dense forests, offering a strong education and health system. The country used to take in around twenty to forty thousand immigrants yearly. A number they were prepared for. But in 2015, the number skyrocketed to over 160,000. Among them were Syrians, Eritreans, Somalis, South Sudanese, South Americans, and many from Asia, all seeking refuge from the turmoil in their homelands.',
      href: 'https://medium.com/better-humans/how-being-unrealistic-can-guide-you-through-lifes-challenges-058807d4378b',
      Image: Image26
    },
    {
      title: 'Here’s How Reading Fiction Can Improve Your Life',
      description: 'How can a fairytale overthrow a political party in power for 40 years? Often, people might find themselves in a situation they have disliked for years but perceive they cannot change it. Worse, they get used to it. Suddenly, a story written by a famous author reflects their situation. It triggers their thoughts, and their reaction becomes viral.',
      href: 'https://medium.com/better-humans/how-being-unrealistic-can-guide-you-through-lifes-challenges-058807d4378b',
      Image: Image27
    },
    {
      title: 'Survivors’ Tales Illuminate My Path to Renewal',
      description: 'Courage is daring to break the chains. And, there are so many… in our minds—breakaway for the sake of love for yourself and others, and dare to make the world a better place. Break the Chains and Make the World a Better Place.',
      href: 'https://medium.com/the-creative-pen/why-nonprofits-should-adopt-positive-education-abe0d755b81a',
      Image: Image28
    },
    {
      title: '5 Steps to Develop Personal Agency: Take Control',
      description: 'Sitting face-to-face with people who’ve stared down the darkest corners of human experience changes you. I found myself in such a moment when interviewing survivors for my research. A large group of university students and young professionals faced a harrowing ordeal. Denounced as ‘Nitistas,’ supporters of Nito Alves were seen as creating divisions within the ruling party and trying to undermine its authority and control. A sudden purge,',
      href: 'https://medium.com/the-creative-pen/why-nonprofits-should-adopt-positive-education-abe0d755b81a',
      Image: Image15
    },
    {
      title: 'How to Finally Move On from Past Hurts',
      description: 'How can you release the grip of pain and move forward on your path to personal growth and fulfilment? In the tapestry of our lives, the weight of past hurts can cast a shadow on our present moments. Yet, within us lies the resilience to heal and find liberation. So, I invite you to embark on a transformative journey of self-discovery, self-compassion, and resilience.',
      href: 'https://medium.com/the-creative-pen/why-nonprofits-should-adopt-positive-education-abe0d755b81a',
      Image: Image18
    },
  ]

  return (
    <div className='bg-[#F5F5F5] font-Cairo dark:bg-[#11161b]'>
      <div className='w-full md:h-[700px] xs:h-[500px]'>
        <Image className='w-full md:h-[700px] xs:h-[500px] object-cover absolute filter brightness-50' width={1000} height={30} src={AboutUsImg} alt='Hero Image' />
        <div className='gap-y-5 flex flex-col xs:px-5 z-20 relative h-full justify-center'>
          <div className='flex flex-col'>
            <p className='font-bold text-[20px] text-[#F5F5F5] dark:text-white'>Empower</p>
            <AnimatedLettersWhite text='Transforming Lives Together' />
          </div>
          <div className='flex gap-x-5'>
            <Link href={'/services'} className='button-learn px-4 py-2 text-[20px] text-white dark:text-white'>Learn More</Link>
          </div>
        </div>
      </div>

      <div className='flex flex-col pt-20 lg:px-20 md:px-10 xs:px-5 dark:bg-[#181c20]'>
        <p className='font-bold text-[20px] text-[#11142D] dark:text-white'>Latest</p>
        <AnimatedLetters text='Discover My Blog Posts' />
        <p className='font-bold md:text-[20px] xs:text-[14px] text-[#11142D] dark:text-white'>Stay informed with our latest blog updates.</p>
      </div>
      <div className='flex flex-wrap gap-x-5 lg:px-20 md:px-10 pb-20 dark:bg-[#181c20]'>
        {DonateList.map((item, index) => (
          <div 
            key={index}   
            className='shadow-md relative xs:w-full lg:w-[470px] md:w-[320px] lg-md:w-[420px] xl:w-[570px] flex flex-col gap-y-5 mt-10 dark:border-[1px] dark:border-[#666] h-full'>
            <Link target='_blank' href={item.href} className='overflow-hidden w-full h-[300px] relative'>
              <Image className='w-full h-full object-cover transition-transform duration-700 hover:scale-105' width={4000} height={3000} src={item.Image} alt={`event image ${index}`} />
            </Link>
            <div className='px-5 flex flex-col gap-y-4 pb-5 h-full'>
              <AnimatedLettersTitle text={item.title} />
              <p className='md:text-[16px] xs:text-[14px] font-sans text-[#222] dark:text-[#eee] line-clamp-4'>{item.description}</p>
              <div className='flex justify-between mt-auto'>
                <Link target='_blank' href={item.href} className='read_button'>
                  <p className='dark:text-[#fff]'>Read more</p>
                  <IoIosArrowForward className='font-bold text-[18px] dark:text-white' />
                </Link>
                <Link href={'/contact'} className='hire_button'>
                  <p className='dark:text-[#fff]'>Hire me</p>
                  <IoIosArrowForward className='font-bold text-[18px] dark:text-[#fff]' />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Faq />
      <Involved />
    </div>
  )
}

export default Page
