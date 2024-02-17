import { Image10, Image5 } from '@/public/images'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiSolidDonateHeart } from 'react-icons/bi'
import { MdCastForEducation } from 'react-icons/md'
import { RiMentalHealthFill } from 'react-icons/ri'

type SectionProps = {
  title?: string;
  description?: string;
  buttonText1?: string;
  buttonText2?: string;
  link1?: any;
  link2?: any;
};

const ButtonGroup:React.FC<SectionProps> = ({ buttonText1, buttonText2, link1, link2 }) => (
  <div className='flex gap-x-5 mt-5'>
    <Link href={link1} className='w-max px-5 py-2 text-[18px] bg-[#FFA500] hover:bg-[#ffc457] transition duration-300 ease-in-out flex items-center gap-x-2'>
      <BiSolidDonateHeart />
      <p className='font-bold text-[20px] text-[#111111]'>{buttonText1}</p>
    </Link>
    <Link href={link2} className='button-learn px-4 py-2 text-[18px] dark:text-white'>{buttonText2}</Link>
  </div>
);

const TextSection:React.FC<SectionProps> = ({ title, description }) => (
  <div>
    <h1 className='font-bold text-[#11142D] dark:text-white md:text-[20px] lg:text-[26px]'>{title}</h1>
    <p className='font-semibold text-[16px] text-[#464B70] dark:text-[#c5c5c5] lg:w-[90%]'>{description}</p>
  </div>
);

const Description = () => {
  return (
    <div className='font-Cairo'>      
      <div className='flex gap-x-20 gap-y-5 xs:flex-wrap-reverse lg:flex-nowrap lg:px-20 md:px-10 xs:px-5 bg-white py-20 dark:bg-[#11161b]'>
        <div className='lg:w-1/2'>
          <p className='font-bold text-[20px] text-[#11142D] dark:text-white'>Empower</p>
          <h1 className='font-bold text-[#2F4F4F] dark:text-white lg:text-[46px] md:text-[26px] xl:w-[70%]'>Make a Difference in Kids Lives</h1>
          <p className='font-semibold text-[16px] text-[#464B70] dark:text-[#c5c5c5] my-5'>
            Support our nonprofit organization and help improve the lives of children in Africa.
            Your contribution can make a lasting impact and provide them with a brighter future.
          </p>
          <div className='flex flex-col gap-y-5'>
            <TextSection
              title="Transform Lives"
              description="Your support enables us to provide education, healthcare, and essential resources to children in need."
            />
            <TextSection
              title="Create Hope"
              description="Together, we can give these children a chance for a brighter and more promising future."
            />
          </div>
          <ButtonGroup buttonText1="Donate" buttonText2="Get Involved" link1={'/donate'} link2={'/contact'} />
        </div>
        <div className='lg:w-1/2'>
          <Image className='w-full h-[500px] object-cover' width={1000} height={30} src={Image10} alt='Hero Image' />
        </div>
      </div>

      <div className='gap-y-5 flex xs:flex-wrap-reverse lg:flex-nowrap gap-x-20 dark:bg-[#11161b] py-10 lg:px-20 md:px-10 xs:px-5'>
        <div className='lg:w-1/2'>
          <p className='font-bold text-[20px] text-[#11142D] dark:text-white'>Empower</p>
          <h1 className='font-bold text-[#2F4F4F] dark:text-white lg:text-[46px] md:text-[26px] xl:w-[70%]'>Transforming Lives Through Education and Opportunity</h1>
        </div>
        <div className='lg:w-1/2'>
          <p className='lg:text-[18px] text-[#464B70] dark:text-[#d3d3d3]'>
            At our nonprofit organization, we are dedicated to providing essential programs and services to children in Africa.
            Through education, healthcare, and community development initiatives, we aim to empower young minds and create a brighter future for all.
          </p>
          <div className='mt-5 flex flex-col gap-y-5'>
            <div>
              <MdCastForEducation className='text-[35px] dark:text-white text-[#11142D]' />
                <TextSection
                  title="Education"
                  description="Access to quality education for every child, regardless of their background or circumstances."
                />
            </div>
            <div>
              <RiMentalHealthFill className='text-[35px] dark:text-white text-[#11142D]' />
              <TextSection
                title="Healthcare"
                description="Providing essential healthcare services to ensure the well-being and vitality of children."
              />
            </div>
          </div>
          <ButtonGroup buttonText1="Donate" buttonText2="Volunteer" link1={'/donate'} link2={'/volunteer'} />
        </div>
      </div>
      <Image className='w-full h-[700px] object-cover' width={4000} height={3000} src={Image5} alt='Hero Image' />
    </div>
  )
}

export default Description