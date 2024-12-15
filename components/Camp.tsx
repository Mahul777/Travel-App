import { PEOPLE_URL } from '@/constant';
import Image from 'next/image';
import React from 'react';

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

// CampSite Component: Displays individual camp site with background image, title, subtitle, and joined people
const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }: CampProps) => {
  return (
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
      {/* Container for camp site with background image and rounded corners */}

      {/* Text and people information */}
      <div className='flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10'>
        
        {/* Camp title and subtitle section */}
        <div className='flex items-center justify-center gap-4'>
          <div className='rounded-full bg-green-50 p-4'>
            <Image
              src='/folded-map.svg'
              alt='map'
              width={24}
              height={24}
            />
          </div>
          <div className='flex flex-col gap-1'>
            <h4 className='text-white text-[18px] font-[700]'>{title}</h4>
            <p className='text-white text-[14px] font-[600]'>{subtitle}</p>
          </div>
        </div>

        {/* People who joined section */}
        <div className='flex items-center justify-center gap-6'>
          <span className='flex -space-x-4 overflow-hidden'>
            {/* Mapping through PEOPLE_URL array to display people's images */}
            {PEOPLE_URL.map((url) => (
              <Image
                className="inline-block h-10 w-10 rounded-full"
                src={url}
                key={url}
                alt="person"
                width={52}
                height={52}
              />
            ))}
          </span>
          <p className='text-[16px] font-[700] text-white'>{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};

// Main Camp component: Displays a list of camp sites in a horizontal scrollable view
const Camp = () => {
  return (
    <section className="2xl:mx-auto max-w-[1440px] relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      {/* Horizontal scrollable container for displaying multiple CampSite components */}
      <div className='hide-scrollbar flex h-[340px] w-full item-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]'>
        
        {/* CampSite 1 */}
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="Putuk Truno Camp"
          subtitle="Prigen,Pasuran"
          peopleJoined="50+ Joined"
        />

        {/* CampSite 2 */}
        <CampSite
          backgroundImage="bg-bg-img-2"
          title="Mountain View Camp"
          subtitle="Somewhere in the Wildness"
          peopleJoined="50+ Joined"
        />
      </div>

      {/* This section is reserved for a pop-up message or notification (empty in current code) */}
      <div>
        
      </div>
    </section>
  );
};

export default Camp;
