'use client';
import React from 'react';
import Image3 from '../../assets/nap-logo-1.png';
import Image4 from '../../assets/es-next-logo-01.png';

const Footer: React.FC = () => {
  return (
    <div className='bg-background'>
      <section
        id='footer-links'
        className='my-12 h-full w-screen md:my-12 lg:my-12'
      >
        <div className='container mx-auto max-w-[1043px] px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-row items-center justify-between gap-20'>
            <ul className='flex list-none flex-col gap-1'>
              <li>
                <a
                  href='/par-mums'
                  className='text-left text-secondary text-black hover:text-accent sm:text-secondary lg:text-secondary'
                >
                  Par Mums
                </a>
              </li>
              <li>
                <a
                  href='/jaunumi'
                  className='text-left text-secondary text-black hover:text-accent sm:text-secondary lg:text-secondary'
                >
                  Jaunumi
                </a>
              </li>
            </ul>
            <div className='flex flex-row justify-center gap-5 sm:gap-5 lg:gap-20'>
              <img
                src={Image3.src}
                className='h-16 w-16 sm:h-16 sm:w-16 lg:h-24 lg:w-24'
                alt='nacionalais atistibas plans logo'
              ></img>
              <img
                src={Image4.src}
                className='h-16 w-16 sm:h-16 sm:w-16 lg:h-24 lg:w-24'
                alt='eiropas savieniba logo'
              ></img>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
