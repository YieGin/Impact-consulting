'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Image from 'next/image';
import { Image10 } from '@/public/images';
import { Spinner } from '@/utils';

interface SimpleFormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<SimpleFormData>({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name) newErrors.name = 'Name is required.';
    if (!formData.email) newErrors.email = 'Email is required.';
    if (!formData.message) newErrors.message = 'Message is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await axios.post('/api/send-email', formData);
      toast.success("We've successfully received your message!");
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('a');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='py-20 flex xs:flex-col lg:flex-row lg:px-20 gap-y-5 w-full dark:bg-[#181c20]'>
      <form onSubmit={handleSubmit} className='xs:px-5 md:px-5 lg:w-1/2'>
        <p className='font-bold md:text-[19px] xs:text-[14px] text-[#000] dark:text-[#eee]'>Support</p>
        <h1 className='font-bold text-[#2F4F4F] dark:text-white sm:text-[26px] lg:text-[46px]'>Get in touch</h1>
        <p className='font-semibold md:text-[17px] xs:text-[14px] text-[#11142D] dark:text-[#eee]'>Donate to make a difference in the lives of children in Africa.</p>
        <div className='flex flex-col gap-y-5 mt-5'>
          <div className='flex flex-col gap-y-1'>
            <label htmlFor="name" className='font-semibold md:text-[16px] xs:text-[14px] text-[#11142D] dark:text-[#eee]'>Name</label>
            <input 
              id="name" 
              name="name" 
              type="text" 
              value={formData.name} 
              onChange={handleInputChange} 
              placeholder='name' className='lg:w-[500px] h-[50px] border-2 px-2 focus:outline-none focus:ring-1 focus:ring-teal-400 focus:border-0' />
            {errors.name && <p className='text-red-500'>{errors.name}</p>}
          </div>
          <div className='flex flex-col gap-y-1'>
            <label htmlFor="email" className='font-semibold md:text-[16px] xs:text-[14px] text-[#11142D] dark:text-[#eee]'>Email</label>
            <input 
              id="email" 
              name="email" 
              type="email" 
              value={formData.email} 
              onChange={handleInputChange} placeholder='Email' 
              className='lg:w-[500px] h-[50px] border-2 px-2 focus:outline-none focus:ring-1 focus:ring-teal-400 focus:border-0' />
            {errors.email && <p className='text-red-500'>{errors.email}</p>}
          </div>
          <div className='mb-4'>
            <label htmlFor="message" className='font-semibold md:text-[16px] xs:text-[14px] text-[#11142D] dark:text-[#eee]'>Message</label>
            <textarea 
              name='message' 
              id='message' 
              rows={4} 
              value={formData.message} 
              onChange={handleInputChange} 
              className='mt-1 block lg:w-[500px] xs:w-full rounded-md border-2 shadow-sm p-1 focus:outline-none focus:ring-1 focus:ring-teal-400 focus:border-0'
              placeholder='Enter your message...'
            >
            </textarea>
            {errors.message && <p className='text-red-500'>{errors.message}</p>}
          </div>
          <div className='flex items-center justify-between'>
            <button type="submit" className='Btn w-max px-5 bg-black font-Cairo dark:bg-[#131313]' disabled={isSubmitting}>
              {isSubmitting ? <Spinner lg /> : 'Submit'}
            </button>
          </div>
        </div>
      </form>
      <Image className='lg:w-1/2 xs:w-full md:h-[900px] xs:h-[500px] object-cover' width={1000} height={30} src={Image10} alt='Hero Image' />
    </div>
  );
};

export default ContactForm;
