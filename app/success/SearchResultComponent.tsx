'use client'
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';
import { PiSealCheckFill } from 'react-icons/pi';

const SearchResultComponent = () => {
  const [paymentDetails, setPaymentDetails] = useState({ totalAmount: 0, createdAt: '' });
  const searchParams = useSearchParams();

  useEffect(() => {
    const session_id = searchParams.get('session_id');
    if (session_id) {
      axios.get(`http://localhost:8000/users/fetch-payment-details/?session_id=${session_id}`)
        .then(response => {
          const { total_amount, created_at } = response.data;
          setPaymentDetails({
            totalAmount: total_amount,
            createdAt: new Date(created_at * 1000).toLocaleDateString("en-US"),
          });
        })
        .catch(error => {
          console.error('Error fetching payment details:', error);
        });
    }
  }, [searchParams]);

  return (
      <div className='flex flex-col gap-y-5 md:w-1/2 xs:w-full'>
        <div className='shadow-lg flex justify-between md:p-10 xs:p-4 rounded-[14px] lg:w-[600px]'>
          <div>
            <p className='lg:text-[40px] md:text-[30px] font-bold text-[#11142D] dark:text-[#FFF]'>${paymentDetails.totalAmount.toFixed(2)}</p>
            <p className='text-[#555555] font-semibold'>Payment success!</p>
          </div>
          <PiSealCheckFill className='text-[40px] text-[#11142D] dark:text-[#FFF]' />
        </div>
        <div className='shadow-lg flex flex-col justify-between md:p-10 xs:p-4 rounded-[14px] lg:w-[600px]'>
          <h1 className='lg:text-[30px] font-bold text-[#11142D] dark:text-[#FFF]'>Payment Details</h1>
          <div className='flex justify-between items-center mt-5'>
            <p className='text-[#555555] dark:text-[#a5a5a5] font-semibold xs:text-[12px] sm:text-[14px]'>Date</p>
            <p className='text-[#11142D] dark:text-[#fff] font-semibold lg:text-[20px] md:text-[14px] xs:text-[12px] sm:text-[14px]'>{paymentDetails.createdAt}</p>
          </div>
          <div className='flex justify-between items-center mt-5'>
            <p className='text-[#555555] dark:text-[#a5a5a5] font-semibold xs:text-[12px] sm:text-[14px]'>Amount</p>
            <p className='text-[#11142D] dark:text-[#fff] font-semibold lg:text-[20px] md:text-[14px]'>${paymentDetails.totalAmount.toFixed(2)}</p>
          </div>
        </div>
      </div>
  );
};

export default SearchResultComponent;
