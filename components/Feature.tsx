import { FEATURES } from '@/constant'
import Image from 'next/image'
import { features, title } from 'process'
import React from 'react'

const Feature = () => {
  return (
    <section className='flex items-center justify-center py-24 overflow-hidden bg-feature-bg bg-no-repeat justify-end'>
      <div className='flex mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 relative w-full '>
       <div className='flex flex-1 lg:min-h-[900px]'>
        <Image
        src="/phone.png" 
        alt="phone"
        width={400}
        height={1000}
        className='absolute top-[13%] z-10 hidden max-w-[1500px] rotate-[15deg] md:-left-16 lg:flex  3xl:left-20'
         />
       </div>

      <div className='z-20 flex w-full flex-col lg:w-[60%]'>
       <div className='relative'>
        <Image
        src="/camp.svg"
        alt='camp'
        width={50}
        height={50}
        />
        <h2 className='text-[40px] font-[700] leading-[120%] lg:text-[64px] font-[700] leading-[120%]'>Oue Features</h2>
       </div>
       <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
        {
          FEATURES.map((feature) =>
            (
              <FeatureItem
              key={feature.title}
               title={feature.title}
               icon={feature.icon}
               variant={feature.variant}
               description={feature.description}
              />
            ))
        }
       </ul>
      </div>

      </div>
    </section>
  )
}
type FeatureItem =
{
  title: string
  icon: string
  variant: string
  description: string
}

const FeatureItem =({title,icon,variant,description}: FeatureItem) =>
{
  return(
    <li className='flex w-full flex-1 flex-col items-start'>
      <div className='rounded-full p-4 lg:p-7 bg-green-400'>
        <Image
        src={icon}
        alt='map'
        width={24}
        height={24}
        />
      </div>
      <h2 className='text-[20px] font-[700] p-4 lg:text-[32px] font-[700] leading-[120%] mt-5'>{title}</h2>
      <p className='text-[16px] font-[400] text-gray-50 mt-5 lg-mt-[30px]'>{description}</p>
    </li>
  )
}
export default Feature