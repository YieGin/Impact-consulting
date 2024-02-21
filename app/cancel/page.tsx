import Link from 'next/link'
import React from 'react'
import { FaTimesCircle } from 'react-icons/fa'

const PaymentCancelled = () => {
  return (
    <>
      <div className='h-screen flex flex-col items-center justify-center xs:px-5 dark:bg-[#181c20] bg-[#F5F5F5]'>
        <FaTimesCircle className='text-[#FF6347] text-[40px] mb-5' />
        <h1 className='text-[30px] font-bold font-Rubik text-[#11142D] dark:text-[#FFF] text-center'>Your Payment Has Been Cancelled</h1>
        <p 
          className='md:text-[18px] xs:text-[15px] font-sans dark:text-[#ABABAB] text-[#ABABAB] text-center md:w-[60%]'>
          We&apos;re sorry, but it looks like your donation process was not completed. Your support is crucial for providing aid to children in Africa,
          and every contribution makes a significant difference. If you&apos;d like to try again, you can return to the
          <Link className='mx-1 text-teal-600 underline-offset-2 underline' href={'/pro-bono'}>donation page</Link>
          to complete your generous gift. Alternatively, you can<Link className='ml-1 text-teal-600 underline-offset-2 underline' href={'/services'}>learn more</Link>.
          about our projects and see how each donation helps us make an impact.
          Thank you for your willingness to support our cause. 
        </p>
      </div>
    </>
  )
}

export default PaymentCancelled
