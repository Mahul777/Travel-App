import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      {/* Main section container that holds all elements */}
      <div className="padding-container max-container w-full pb-24">
        {/* Image and heading section */}
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        
        {/* Subtitle text indicating the purpose */}
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          We are here for you
        </p>
        
        {/* Flex container that holds the guide's main title and description */}
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          
          {/* Main title of the guide */}
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Guide You to Easy Path</h2>
          
          {/* Description text of the guide */}
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            Only with the hilink application you will no longer get lost and get lost again, because we already support offline maps when there is no internet connection in the field. Invite your friends, relatives and friends to have fun in the wilderness through the valley and reach the top of the mountain
          </p>
        </div>
      </div>

      {/* Image section displaying a boat image */}
      <div className="flexCenter max-container relative w-full">
        
        <Image 
          src="/boat.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />
        
        {/* Absolute positioning for the information box */}
        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          
          {/* Vertical meter icon */}
          <Image 
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          
          {/* Flex container for information about the destination */}
          <div className="flexBetween flex-col">
            
            {/* Information about the destination */}
            <div className='flex w-full flex-col'>
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-green-50">48 min</p>
              </div>
              <p className="bold-20 mt-2">Aguas Calientes</p>
            </div>

            {/* Information about the starting point */}
            <div className='flex w-full flex-col'>
              <p className="regular-16 text-gray-20">Start track</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">Wonorejo Pasuruan</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide

