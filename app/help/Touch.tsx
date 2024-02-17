'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { GoCheckCircleFill, GoCircle } from 'react-icons/go';
import axios from "axios"
import { toast } from 'react-toastify';
import { Spinner } from '@/utils';
import { FaRegCircle } from 'react-icons/fa6';
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  selectedProduct: string;
}
const Touch: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    selectedProduct: ''
  });
  const [selectedTerms, setSelectedTerms] = useState<boolean>(false);
  const [errors, setErrors] = useState<Partial<FormData> & { selectedTerms?: string }>({});
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors(prevErrors => ({ ...prevErrors, [name]: undefined }));
    }
  };
  const handleselectedTerms = () => {
    setSelectedTerms(!selectedTerms);
    if (errors.selectedTerms) {
      setErrors(prevErrors => ({ ...prevErrors, selectedTerms: undefined }));
    }
  };
  const validateForm = () => {
    const newErrors: Partial<FormData> & { selectedTerms?: string } = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required.';
    if (!formData.lastName) newErrors.lastName = 'Last name is required.';
    if (!formData.email) newErrors.email = 'Email is required.';
    if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone number is required.';
    if (!formData.selectedProduct) newErrors.selectedProduct = 'Selecting a product is required.';
    if (!selectedTerms) newErrors.selectedTerms = 'You must accept the terms.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const response = await axios.post('/api/send-volunteer', formData);
        console.log(response.data.message);
        toast.success('Thank you for your application! We appreciate your interest and will respond to your email as soon as possible.');
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log('Submission error:', error.response?.data.message);
          toast.error('An error occurred while submitting the form.');
        } else {
          console.error('Unexpected error:', error);
        }
      } finally {
        setIsSubmitting(false);
      }
    } else {
      console.log('Validation errors:', errors);
    }
  };
  return (
    <div className='py-20 flex flex-col items-center bg-white dark:bg-[#11161b]'>
      <form onSubmit={handleSubmit} className='xs:px-5 md:px-0 md:w-max'>
        <h1 className='font-bold text-[#2F4F4F] dark:text-white sm:text-[26px]'>Get in touch</h1>
        <p className='font-semibold md:text-[17px] xs:text-[14px] text-[#11142D] dark:text-[#eee]'>Fill out the application form below to become a volunteer.</p>
        <div className='flex xs:flex-col md:flex-row gap-x-20 gap-y-5 mt-5'>
          {/* First Name */}
          <div className='flex flex-col gap-y-1'>
            <label htmlFor="firstName" className='font-semibold md:text-[16px] xs:text-[14px] text-[#11142D] dark:text-[#eee]'>First name</label>
            <input id="firstName" name="firstName" type="text" value={formData.firstName} onChange={handleInputChange} placeholder='First name' className='lg:w-[400px] h-[50px] border-2 px-2' />
            {errors.firstName && <p className='text-red-500'>{errors.firstName}</p>}
          </div>
          {/* Last Name */}
          <div className='flex flex-col gap-y-1'>
            <label htmlFor="lastName" className='font-semibold md:text-[16px] xs:text-[14px] text-[#11142D] dark:text-[#eee]'>Last name</label>
            <input id="lastName" name="lastName" type="text" value={formData.lastName} onChange={handleInputChange} placeholder='Last name' className='lg:w-[400px] h-[50px] border-2 px-2' />
            {errors.lastName && <p className='text-red-500'>{errors.lastName}</p>}
          </div>
        </div>
        {/* Email and phone number inputs */}
        <div className='flex xs:flex-col md:flex-row gap-x-20 gap-y-5 mt-5'>
          {/* Email */}
          <div className='flex flex-col gap-y-1'>
            <label htmlFor="email" className='font-semibold md:text-[16px] xs:text-[14px] text-[#11142D] dark:text-[#eee]'>Email</label>
            <input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder='Email' className='lg:w-[400px] h-[50px] border-2 px-2' />
            {errors.email && <p className='text-red-500'>{errors.email}</p>}
          </div>
          {/* Phone Number */}
          <div className='flex flex-col gap-y-1'>
            <label htmlFor="phoneNumber" className='font-semibold md:text-[16px] xs:text-[14px] text-[#11142D] dark:text-[#eee]'>Phone number</label>
            <input id="phoneNumber" name="phoneNumber" type="tel" value={formData.phoneNumber} onChange={handleInputChange} placeholder='Phone number' className='lg:w-[400px] h-[50px] border-2 px-2' />
            {errors.phoneNumber && <p className='text-red-500'>{errors.phoneNumber}</p>}
          </div>
        </div>
        {/* Product selection */}
        <div className='flex flex-col gap-y-1 mt-5'>
          <label className='font-semibold md:text-[16px] xs:text-[14px] text-[#11142D] dark:text-[#eee]'>Choose How You Want to Help</label>
          <select id="selectedProduct" name="selectedProduct" value={formData.selectedProduct} onChange={handleInputChange} className='w-full h-[50px] border-2 px-2'>
            <option value="">Select one...</option>
            <option value="education_support">Education Support</option>
            <option value="healthcare_assistance">Healthcare Assistance</option>
            <option value="nutritional_programs">Nutritional Programs</option>
            <option value="community_development">Community Development</option>
            <option value="clean_water_initiatives">Clean Water Initiatives</option>
            <option value="skills_training">Skills Training</option>
            <option value="environmental_conservation">Environmental Conservation</option>
            <option value="emergency_relief">Emergency Relief Efforts</option>
          </select>
          {errors.selectedProduct && <p className='text-red-500'>{errors.selectedProduct}</p>}
        </div>
        {/* Terms acceptance */}
        <div className='flex items-center mt-5 justify-between'>
          <div className='flex items-center gap-x-1'>
            {selectedTerms ? (
              <GoCheckCircleFill onClick={handleselectedTerms} className='text-[20px] text-teal-600 cursor-pointer' />
            ) : (
              <FaRegCircle onClick={handleselectedTerms} className='text-[18px] text-[#000] dark:text-[#fff] cursor-pointer' />
            )}
            <div className='flex flex-col justify-center'>
              <label className='font-semibold md:text-[17px] xs:text-[14px] font-sans dark:text-[#eee]'>
                I accept the <Link href="/terms-and-Conditions" className='text-teal-600 underline cursor-pointer'>Terms</Link>
              </label>
              {errors.selectedTerms && <p className='text-red-500'>{errors.selectedTerms}</p>}
            </div>
          </div>
          {/* Submit Button */}
          <button type="submit" className='Btn w-max px-5 bg-black font-Cairo dark:bg-[#131313]' disabled={isSubmitting}>
            {isSubmitting ? <Spinner lg /> : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
};
export default Touch;