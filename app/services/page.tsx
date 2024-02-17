'use client'
import { Faq, Involved } from '@/components/common/LandingPage';
import { AboutUsImg, Diana, Image19, Image20, Image21, Image22, Image23, Image24 } from '@/public/images';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { BiSolidDonateHeart } from 'react-icons/bi';
import { motion } from 'framer-motion';

type SectionProps = {
  buttonText1?: string;
  buttonText2?: string;
  link1?: any;
  link2?: any;
  title?: string;
  position?: string;
  description?: string;
};

const sections = [
  {
    title: "How I Became a Nonprofit Development Consultant",
    description: "As a mother of three and a passionate advocate for social development, my life took a pivotal turn when I moved to Sweden in 2015. It wasn't just a change of scenery; it was the start of a dream to make a real difference in the nonprofit sector. I decided to refresh and expand my knowledge in the humanities and social sciences, leading me to a unique and unexpected field of study for my Master's Degree: Holocaust and Genocide Studies. This program wasn't just about understanding facts; it was a deep dive into the human aspects of violence, its causes, and far-reaching impacts. It equipped me with a profound understanding of the challenges faced by populations living in adverse conditions, shaping my approach to helping those in need.",
    imgSrc: Diana,
    imgAlt: "Supporting Image",
    linkText: "Get in Touch",
    linkHref: "/contact",
    position: "right",
  },
  {
    title: "Creating a Strategic Development Plan",
    description: "Nonprofits face unique challenges and also opportunities. My approach to strategic planning is rooted in real-world experience and deep commitment to the nonprofit sector. Through my work and learning with the Swedish Red Cross and hands-on involvement with small organizations in South Africa, I've gained practical insights into what it takes to create effective, adaptable strategies. My work has equipped me with a keen understanding of the nonprofit landscape and the resilience required to navigate it. I focus on collaborative planning, working closely with you to understand your specific needs and goals. Together, we'll craft a strategic plan that is both realistic and ambitious, designed to guide your program through uncertainties and towards a thriving future. Let's harness our collective experiences and insights to build a roadmap that not only meets the immediate needs of your organization but also lays a foundation for long-term success and impact.",
    imgSrc: Image19,
    imgAlt: "Transforming Image",
    linkText: "Get in Touch",
    linkHref: "/contact",
    position: "left",
  },
  {
    title: "Monitoring & Evaluation (M&E)",
    description: "Turning Data into Impact. In the heart of every nonprofit effort lies the need to understand and showcase its true impact. My Monitoring and Evaluation services are designed to do just that – providing a clear view of how your strategies effectively achieve your goals. By meticulously tracking progress, measuring key resources, and evaluating performance indicators, we can pinpoint exactly how your programs are making a difference – be it in enhancing children's education, boosting youth self-confidence, or improving adult skills. More than just tracking numbers, this process offers vital data that informs your strategic planning, helping to allocate resources more effectively and launch impactful projects. It's about creating a narrative of success and learning that resonates with managers, policymakers, and donors alike. Through comprehensive M&E, we ensure that your program not only meets its targets but also paves the way for informed decisions, efficient operations, and a compelling story of change.",
    imgSrc: Image20,
    imgAlt: "Transforming Image",
    linkText: "Get in Touch",
    linkHref: "/contact",
    position: "right",
  },
  {
    title: "Data Analytics",
    description: "You need funding and improve efficiency. To make decisions, you must track information coming from different sources. Analytics for your nonprofit entails inquiring budgets and expenditures, planning resource allocation, and forecasting future revenue. Data analytics streamlines the process of organizing this information, making it easier to analyze. I speak the language of data with fluency. Therefore, I can provide valuable insights from data analysis.",
    imgSrc: Image21,
    imgAlt: "Transforming Image",
    linkText: "Get in Touch",
    linkHref: "/contact",
    position: "left",
  },
];

const sectionsWriting = [
  {
    title: "Grant Writing",
    description: "The grant writing service is designed to strategically enhance your nonprofit's funding opportunities. I begin by proactively reaching out to potential donors who align with your program's goals, ensuring a targeted and efficient approach. Following this, I craft proposals, meticulously adhering to each donor's specific guidelines to maximize the proposal's success rate. Beyond just submitting these applications through the donors' preferred methods, I also engage in personalized follow-up communications. This not only helps build enduring relationships with donors but also provides insightful feedback, regardless of the proposal's outcome.",
    imgSrc: Image22,
    imgAlt: "Transforming Image",
    linkText: "Get in Touch",
    linkHref: "/contact",
    position: "right",
  },
  {
    title: "Annual Report",
    description: "An annual report is more than a document; it's a powerful tool to connect with your core audience – from board members and donors to volunteers and the communities you serve. It's about showcasing not just your achievements, but also your commitment to your mission and values. For your board members, it provides a transparent overview of results and accomplishments, reinforcing their governance and support. For your staff, it's a source of motivation and pride, highlighting the collective efforts and impacts made over the year. To your current and potential donors, an excellent annual report serves as a testimonial to your effectiveness and integrity, encouraging ongoing and new support. It's a way to demonstrate how their contributions are fueling meaningful change. Potential partners gain insights into your approach and impact, fostering opportunities for collaboration. And for your volunteers, it's a narrative that celebrates their dedication and showcases the difference they're making. A well-crafted annual report does more than inform; it engages, inspires, and affirms the trust in your organization. It's a reflection of your productivity, your commitment to your values, and the significant impact you have on communities. Let's create an annual report that not only tells your story but also amplifies your voice in the nonprofit world.",
    imgSrc: Image23,
    imgAlt: "Transforming Image",
    linkText: "Get in Touch",
    linkHref: "/contact",
    position: "left",
  },
];

const sectionsContent = [
  {
    title: "content creation",
    description: "As a passionate writer with a flair for content creation, I specialize in crafting compelling and insightful pieces that resonate with a diverse audience. My writing journey on the Medium platform has honed my skills in delivering content that not only engages but also informs and inspires. Whether you're in need of captivating blog posts, in-depth articles, or creative narratives, I bring a unique perspective and a dedicated approach to every piece. Let me help you tell your story, share your ideas, and connect with your readers in a meaningful way. This is what she told me: I really like the texts I wrote and would love if they were included in the website. Eventually I want to proceed to make videos explaining how to do the things I've learned except they are more simplified. These videos would serve as a cheaper version of my services so that SMALLER fundraising organizations can purchase them. This would maybe/hopefully also lead to them hiring me to review their work after they've seen my videos.",
    imgSrc: Image24,
    imgAlt: "Transforming Image",
    linkText: "Get in Touch",
    linkHref: "/contact",
    position: "right",
  },
];


const ButtonGroup:React.FC<SectionProps> = ({ buttonText1, link1 }) => (
  <Link href={link1} className='w-[120px] h-[50px] flex items-center justify-center text-[18px] text-white bg-[#000] transition duration-300 ease-in-out gap-x-2'>
    <BiSolidDonateHeart />
    <p className='font-bold text-[18px] text-[#fff]'>{buttonText1}</p>
  </Link>
);

const TextSection:React.FC<SectionProps> = ({ title, description }) => (
  <div>
    <h1 className='font-bold text-[#11142D] dark:text-white md:text-[20px] lg:text-[26px]'>{title}</h1>
    <p className='font-medium font-sans xs:text-[14px] md:text-[16px] text-[#222] dark:text-[#eee] lg:w-[90%]'>{description}</p>
  </div>
);

const Services = () => {
  const fadeInVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9 } },
  };
  const fadeInVariantLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9 } },
  };

  return (
    <div className='dark:bg-[#181c20] bg-[#F5F5F5] font-Roboto'>
      <div className='w-full md:h-[700px] xs:h-[500px]'>
        <Image className='w-full md:h-[700px] xs:h-[500px] object-cover absolute filter brightness-50' width={1000} height={30} src={AboutUsImg} alt='Hero Image' />
        <div className='gap-y-5 flex flex-col items-center justify-center text-center py-10 lg:px-20 md:px-10 xs:px-5 z-20 relative'>
          <div className='flex flex-col items-center justify-center text-center'>
            <p className='font-bold text-[20px] text-[#F5F5F5] dark:text-white'>Empower</p>
            <h1 className='font-bold text-[#fff] dark:text-white lg:text-[46px] md:text-[26px] xl:w-[70%]'>Transforming Lives Together</h1>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <p className='lg:text-[18px] xs:text-[14px] text-[#F5F5F5] dark:text-[#d3d3d3] lg:w-1/2'>
              At my nonprofit organization, we are dedicated to empowering children in Africa to create a brighter future. Through education,
              healthcare, and community support, we aim to transform lives and make a lasting impact.
            </p>
            <div className='flex gap-x-5 items-center mt-5'>
              <ButtonGroup buttonText1="Donate" link1="/donate" />
              <Link href="/contact" className='w-[120px] h-[50px] flex items-center justify-center border-2 border-[#666666] cursor-pointer text-[#fff] dark:text-[#eee] hover:bg-[#000] hover:text-white font-semibold'>
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>

      <h1 className='font-bold text-[#2F4F4F] dark:text-white sm:text-[25px] xs:text-[20px] lg:text-[46px] md:text-[26px] text-center xs:mt-10 lg:mt-32 mb-5'>Strategic Impact & Analytics</h1>
      <div className='flex flex-col gap-y-20'>
        {sections.map((section, index) => (
          <div 
            key={index}
            className={`flex ${section.position === "right" ? "flex-row" : "flex-row-reverse"} gap-x-20 gap-y-5 overflow-hidden xs:flex-wrap-reverse lg:flex-nowrap lg:px-10 xl:px-20 md:px-10 xs:px-2`}
            >
            <motion.div
              variants={fadeInVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className='lg:w-1/2'
            >
              <p className='font-bold sm:text-[20px] xs:text-[16px] text-[#11142D] dark:text-white'>Empower</p>
              <h1 className='font-bold text-[#2F4F4F] dark:text-white xs:text-[15px] sm:text-[20px] lg:text-[46px] md:text-[26px] xl:w-[70%]'>{section.title}</h1>
              <p className='font-medium font-sans xs:text-[14px] md:text-[16px] text-[#222] dark:text-[#eee] md:my-5 xs:my-3'>{section.description}</p>
              <div className='flex flex-col gap-y-5'>
                <TextSection
                  title="My Promise"
                  description="I promise to deliver the same level of professionalis, dedication, and quality in my pro bono work as i do in my paid engagements. Your mission is important, and I'm here to help you achieve it"
                />
                <TextSection
                  title="Get in Touch"
                  description="If your organization could benefit from my services, or if you have any questions about my pro bono program, please don't hesitate to contact me. Let's work together t ocreate a brighter future for your community."
                />
              </div>
              <div className='flex gap-x-5 items-center mt-5'>
                <ButtonGroup buttonText1="Donate" link1={'/donate'} />
                <Link href={section.linkHref} className='w-[120px] h-[50px] flex items-center justify-center border-2 border-[#666666] cursor-pointer text-[#000] dark:text-[#eee] hover:bg-[#000] hover:text-white font-semibold'>
                  {section.linkText}
                </Link>
              </div>
            </motion.div>
            <motion.div 
              variants={fadeInVariantLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className='lg:w-1/2 xs:w-full flex flex-col'>
              <Image className='w-full h-[500px] object-cover' src={section.imgSrc} alt={section.imgAlt} width={3000} height={3000} />
            </motion.div>
          </div>
        ))}
      </div>
      <h1 className='font-bold text-[#2F4F4F] dark:text-white sm:text-[25px] xs:text-[20px] lg:text-[46px] md:text-[26px] text-center xs:mt-10 lg:mt-32 mb-5'>WRITING SERVICES</h1>
      <div className='flex flex-col gap-y-20'>
        {sectionsWriting.map((section, index) => (
          <div key={index} className={`flex ${section.position === "right" ? "flex-row" : "flex-row-reverse"} gap-x-20 gap-y-5 xs:flex-wrap-reverse lg:flex-nowrap lg:px-10 xl:px-20 md:px-10 xs:px-5`}>
            <motion.div
              variants={fadeInVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className='lg:w-1/2'
            >
              <p className='font-bold text-[20px] text-[#11142D] dark:text-white'>Empower</p>
              <h1 className='font-bold text-[#2F4F4F] dark:text-white xs:text-[15px] sm:text-[20px] lg:text-[46px] md:text-[26px] xl:w-[70%]'>{section.title}</h1>
              <p className='font-medium font-sans xs:text-[14px] md:text-[16px] text-[#222] dark:text-[#eee] md:my-5 xs:my-3'>{section.description}</p>
              <div className='flex flex-col gap-y-5'>
                <TextSection
                  title="My Promise"
                  description="I promise to deliver the same level of professionalis, dedication, and quality in my pro bono work as i do in my paid engagements. Your mission is important, and I'm here to help you achieve it"
                />
                <TextSection
                  title="Get in Touch"
                  description="If your organization could benefit from my services, or if you have any questions about my pro bono program, please don't hesitate to contact me. Let's work together t ocreate a brighter future for your community."
                />
              </div>
              <div className='flex gap-x-5 items-center mt-5'>
                <ButtonGroup buttonText1="Donate" link1={'/donate'} />
                <Link href={section.linkHref} className='w-[120px] h-[50px] flex items-center justify-center border-2 border-[#666666] cursor-pointer text-[#000] dark:text-[#eee] hover:bg-[#000] hover:text-white font-semibold'>
                  {section.linkText}
                </Link>
              </div>
            </motion.div>
            <motion.div 
              variants={fadeInVariantLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className='lg:w-1/2 xs:w-full flex flex-col'>
              <Image className='w-full h-[500px] object-cover' src={section.imgSrc} alt={section.imgAlt} width={3000} height={3000} />
            </motion.div>
          </div>
        ))}
      </div>
      <h1 className='font-bold text-[#2F4F4F] dark:text-white sm:text-[25px] xs:text-[20px] lg:text-[46px] md:text-[26px] text-center xs:mt-10 lg:mt-32 mb-5'>content creation (hobby?)</h1>
      <div className='flex flex-col gap-y-20 pb-20'>
        {sectionsContent.map((section, index) => (
          <div key={index} className={`flex ${section.position === "right" ? "flex-row" : "flex-row-reverse"} gap-x-20 gap-y-5 xs:flex-wrap-reverse lg:flex-nowrap lg:px-10 xl:px-20 md:px-10 xs:px-5`}>
            <motion.div
              variants={fadeInVariantLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className='lg:w-1/2'
            >
              <p className='font-bold text-[20px] text-[#11142D] dark:text-white'>Empower</p>
              <h1 className='font-bold text-[#2F4F4F] dark:text-white xs:text-[15px] sm:text-[20px] lg:text-[46px] md:text-[26px] xl:w-[70%]'>{section.title}</h1>
              <p className='font-medium font-sans xs:text-[14px] md:text-[16px] text-[#222] dark:text-[#eee] md:my-5 xs:my-3'>{section.description}</p>
              <div className='flex flex-col gap-y-5'>
                <TextSection
                  title="My Promise"
                  description="I promise to deliver the same level of professionalis, dedication, and quality in my pro bono work as i do in my paid engagements. Your mission is important, and I'm here to help you achieve it"
                />
                <TextSection
                  title="Get in Touch"
                  description="If your organization could benefit from my services, or if you have any questions about my pro bono program, please don't hesitate to contact me. Let's work together t ocreate a brighter future for your community."
                />
              </div>
              <div className='flex gap-x-5 items-center mt-5'>
                <ButtonGroup buttonText1="Donate" link1={'/donate'} />
                <Link href={section.linkHref} className='w-[120px] h-[50px] flex items-center justify-center border-2 border-[#666666] cursor-pointer text-[#000] dark:text-[#eee] hover:bg-[#000] hover:text-white font-semibold'>
                  {section.linkText}
                </Link>
              </div>
            </motion.div>
            <motion.div 
              variants={fadeInVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className='lg:w-1/2 xs:w-full flex flex-col'>
              <Image className='w-full h-[500px] object-cover' src={section.imgSrc} alt={section.imgAlt} width={3000} height={3000} />
            </motion.div>
          </div>
        ))}
      </div>
      <Faq />
      <Involved />
    </div>
  );
}

export default Services