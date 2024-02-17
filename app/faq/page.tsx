'use client'
import React, { useState } from 'react'
import { ImConfused2 } from 'react-icons/im'
import { Transition } from '@headlessui/react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import Link from 'next/link'

const Faq = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    if (selectedQuestion === index) {
      setSelectedQuestion(null);
    } else {
      setSelectedQuestion(index);
    }
  };

  const questionsAndAnswers = [
    { question: 'How can I help?', answer: 'You can help by donating to our cause, spreading awareness, and volunteering for our programs. Every bit of support makes a huge difference in the lives of children in Africa.' },
    { question: 'Where do donations go?', answer: '100% of your donations are utilized to improve the lives of children in Africa. This includes supporting education initiatives, providing healthcare services, supplying clean drinking water, and empowering local communities.' },
    { question: 'How can I donate?', answer: "Donating is easy! Just click on the 'Donation' button on our website. You will be directed to the donation page where you can choose from our three plans: Basic Plan ($10/mo), Business Plan ($20/mo), and Enterprise Plan ($25/mo). Each plan supports vital services for the children." },
    { question: 'Can I volunteer?', answer: "Absolutely! We're always in need of passionate volunteers. Please visit our 'Volunteer' page to learn more about volunteering opportunities and how you can make a difference." },
    { question: 'How do I get involved?', answer: "There are many ways to get involved. You can donate, volunteer, or simply spread the word about our mission. For more information or specific inquiries, please visit our 'Contact Us' page. We'd love to hear from you!" }
  ];

  return (
    <div className='md:pt-20 xs:pt-10 flex items-center justify-center flex-col font-Cairo lg:px-20 md:px-10 xs:px-5 bg-white dark:bg-[#11161b] py-10'>
      <h1 className='font-bold text-[#2F4F4F] dark:text-white md:text-[46px] xs:text-[26px] text-center'>Frequently Asked Questions</h1>
      <p className='font-semibold text-center lg:text-[20px] md:text-[18px] xs:text-[14px] text-[#11142D] dark:text-[#eee]'>Find answers to common questions about our organization, how to help, and where donations go.</p>
      <div className='mt-20 xs:w-full lg:w-[50%]'>
        {questionsAndAnswers.map((item, index) => (
          <div key={index}>
            <div 
              className='flex justify-between items-center w-full border-t-2 border-b-2 py-5 border-[#666666] mt-5 px-2 cursor-pointer'
              onClick={() => toggleQuestion(index)}
            >
              <p className='font-bold text-[20px] text-[#11142D] dark:text-[#fff]'>{item.question}</p>
              <MdKeyboardArrowDown className={`${selectedQuestion === index ? 'transform rotate-180' : ''} transition duration-500 ease-in-out text-[25px] dark:text-[#fff]`} />
            </div>
            <Transition
              show={selectedQuestion === index}
              enter="transition duration-500 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-500 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <div className='px-2 py-4 text-left'>
                <p className='font-semibold text-[18px] text-[#11142D] dark:text-[#eee]'>{item.answer}</p>
              </div>
            </Transition>
          </div>
        ))}
      </div>
      <div className='mt-20 md:mb-10 lg:mb-0 flex flex-col items-center lg:gap-y-5 md:gap-y-2'>
        <h1 className='font-bold text-[#2F4F4F] dark:text-white md:text-[46px] xs:text-[30px]'>Still have questions?</h1>
        <p className='font-bold md:text-[20px] xs:text-[17px] text-[#11142D] dark:text-[#eee]'>Contact us for more information.</p>
        <Link href={'/contact'} className='border-2 border-[#666666] cursor-pointer px-5 py-2 text-[#11142D] dark:text-[#eee] hover:bg-[#222] hover:text-white font-semibold w-max'>
          <p>Contact</p>
        </Link>
      </div>
    </div>
  )
}

export default Faq
