'use client';
import React from 'react';

import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import Image1 from '../assets/image-1.png';
import AddressImage from '../assets/location.png';
import PhoneImage from '../assets/phone.png';
import EmailImage from '../assets/email.png';

const ParMums: React.FC = () => {
  return (
    <>
      <Header />
      <div className='mx-auto h-auto w-full bg-primary'>
        <main>
          <section
            id='par-mums'
            className='w-screen bg-primary pb-10 pt-20 sm:pb-2 sm:pt-10 md:pb-12 lg:pb-14 lg:pt-20'
          >
            <div className='h-800px container mx-auto max-w-[1043px] px-4 pt-2 sm:px-6 sm:pt-2 lg:px-8 lg:pt-2'>
              <h1 className='font-fahkwang text-3xl text-background sm:text-3xl md:mt-16 md:text-4xl lg:mt-0 lg:text-6xl'>
                Par Mums
              </h1>
            </div>
          </section>
          <section
            id='section-1'
            className='w-screen bg-primary pb-2 sm:pb-2 md:pb-6 lg:pb-14'
          >
            <div className='h-800px container mx-auto max-w-[1043px] px-4 pt-2 sm:px-6 sm:pt-2 lg:px-8 lg:pt-2'>
              {' '}
              <div className='flex flex-col sm:w-1/2 md:w-full lg:w-4/5 lg:flex-col'>
                <h2 className='text-secondary text-white lg:text-2xl'>
                  SIA PC Consulting ir uzņēmums, kas veidotu stabilus,
                  decentralizētus un ilgtspējīgus enerģijas izmantošanas rīkus
                  pilsētvidē.
                </h2>
              </div>
              <div className='py-10'>
                <img src={Image1.src} className='rounded-[20px]'></img>
              </div>
            </div>
          </section>
          <section
            id='section-2'
            className='w-screen bg-background pb-2 sm:pb-2 sm:pt-14 md:py-0 lg:py-20'
          >
            <div className='md:pt- container mx-auto max-w-[1043px] px-4 pb-10 pt-10 sm:px-6 sm:pb-10 sm:pt-10 lg:px-8 lg:pb-0 lg:pt-2'>
              <div className='flex flex-col sm:w-1/2 md:w-full lg:w-1/2 lg:flex-col'>
                <h1 className='pb-8 text-2xl text-black'>Kontaktinformācija</h1>

                <div className='flex flex-row gap-10'>
                  <img
                    src={AddressImage.src}
                    alt='location'
                    className='h-7 w-7 sm:h-7 sm:w-7 lg:h-9 lg:w-9'
                  />
                  <p className='pb-6 text-base text-black sm:pb-6 sm:text-base md:text-secondary lg:pb-8 lg:text-secondary'>
                    Ofiss: Dzirnavu iela 57a, Rīga, LV-1010
                  </p>
                </div>
                <div className='flex flex-row gap-10'>
                  <img
                    src={PhoneImage.src}
                    alt='location'
                    className='h-7 w-7 sm:h-7 sm:w-7 lg:h-9 lg:w-9'
                  />
                  <p className='pb-6 text-base text-black sm:pb-6 sm:text-base md:text-secondary lg:pb-8 lg:text-secondary'>
                    +371 29364860
                  </p>
                </div>
                <div className='flex flex-row items-center gap-10'>
                  <img
                    src={EmailImage.src}
                    alt='location'
                    className='h-7 w-7 sm:h-7 sm:w-7 lg:h-9 lg:w-9'
                  />
                  <p className='text-base text-black sm:text-base md:text-secondary lg:text-secondary'>
                    info@pcconsulting.lv vai girts@pcconsulting.lv
                  </p>
                </div>
              </div>
            </div>
          </section>
          <hr className='border-t border-black'></hr>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default ParMums;
