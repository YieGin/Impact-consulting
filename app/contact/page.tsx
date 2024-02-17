import React from 'react'
import ContactForm from '../donate/ContactForm'
import { Faq, Involved } from '@/components/common/LandingPage'

const Contact = () => {
  return (
    <div className='dark:bg-[#181c20] bg-[#F5F5F5] font-Cairo pb-20'>
      <ContactForm />
      <Faq />
      <Involved />
    </div>
  )
}

export default Contact
