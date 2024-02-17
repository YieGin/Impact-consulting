import { Description, Discover, Events, Faq, Hero, Involved } from '@/components/common/LandingPage'
import React from 'react'

const page = () => {
  return (
    <div className='dark:bg-[#181c20] bg-[#F5F5F5] pb-20'>
      <Hero />
      <div className='font-Cairo'>
        <Description />
        <Discover />
        <Events />
        <Faq />
        <Involved />
      </div>
    </div>
  )
}

export default page
