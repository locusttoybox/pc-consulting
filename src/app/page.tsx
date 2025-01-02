'use client';
import React from 'react';
import Footer from './components/ui/Footer';
import Header from './components/ui/Header';
import Illustration from './assets/illustration-4.png';
import Illustration1 from './assets/illustration-mobile.png';

export default function Home() {
  return (
    <div className='relative min-h-screen'>
      <div className='absolute inset-0 overflow-x-hidden bg-background'>
        <div className='mx-auto w-full'>
          <Header />
          <section
            id='hero'
            className='lg:pt-30 relative h-[630px] w-screen bg-primary pt-24 md:pt-24 lg:h-[800px] lg:pb-14'
          >
            <div className='container relative mx-auto max-w-[1043px] px-4 pt-2 sm:px-6 sm:pt-2 lg:px-8 lg:pt-10'>
              <div className='sm:block md:hidden lg:hidden'>
                <div className='mx-auto w-[70%]'>
                  <img
                    src={Illustration1.src}
                    alt='Hero Image'
                    className='h-auto w-full'
                  />
                </div>
              </div>
              <div className='flex flex-col sm:w-1/2 md:mt-0 lg:mt-0 lg:w-2/3 lg:flex-row'>
                {' '}
                <div className='mb-2.5 mt-8 flex-1 sm:mt-10'>
                  <h1 className='mb-4 w-full text-left font-[family-name:Fahkwang] text-3xl text-accent sm:mb-4 sm:text-3xl md:text-4xl lg:mb-4 lg:text-6xl'>
                    Ceļā uz stabilu un ilgtspējīgu nākotni ar inovatīvām
                    viedajām tehnoloģijām
                  </h1>
                </div>
                <div className='absolute hidden max-w-[460px] flex-1 sm:block md:ml-[460px] lg:ml-[670px] lg:mr-[-120px] lg:mt-[10px]'>
                  <img
                    src={Illustration.src}
                    alt='Hero Image'
                    className='h-auto w-full'
                  />
                </div>
              </div>
              <div className='flex flex-col sm:w-[50%] lg:w-[70%] lg:flex-row'>
                <h2 className='text-left text-base text-white sm:text-white md:text-white lg:text-secondary lg:text-white'>
                  PC Consulting realizē projektu Nr. 2.2.1.3.i.0/1/24/A/CFLA/004
                  - "Videi draudzīgas elektroauto uzlādes ekosistēmas prototipa
                  izstrāde, integrējot atjaunojamos energoresursus un
                  elektrotīkla balansēšanu".
                </h2>
              </div>
            </div>
          </section>
          <section
            id='section-1 '
            className='my-12 h-full w-screen bg-background sm:my-12 lg:my-20'
          >
            <div className='container mx-auto max-w-[1043px] px-4 pb-2 sm:px-6'>
              <div className='lg:w-1/2'>
                <h2 className='pb-12 text-left text-2xl text-secondary text-black sm:text-4xl md:text-2xl lg:text-2xl'>
                  Projekta īstenotājs SIA PC Consulting Reģistrācijas Nr.
                  40203154418
                </h2>
              </div>

              <div className='grid gap-6 sm:min-h-full lg:grid-cols-[1fr_2fr]'>
                <div className='justify-center rounded-lg bg-accent p-6 text-black shadow-subtle'>
                  <div className='lg:w-1/2'></div>
                  <h3 className='pb-10 text-2xl'>
                    Pasaulē unikāls ielu apmaļu elektroauto uzlādes risinājums
                  </h3>

                  <p className='pb-4 text-base'>
                    Pētījums par viedo uzlādes standartu ieviešanas iespējām
                  </p>
                  <p className='pb-4 text-base'>
                    Ielu apmaļu uzlādes iekārtas izstrādāšana Latvijas
                    apstākļiem{' '}
                  </p>
                  <p className='text-base'>
                    Divvirzienu uzlādes risinājuma izstrāde viedo V2G
                    pakalpojumu sniegšanai{' '}
                  </p>
                </div>
                <div className='flex flex-col gap-6'>
                  <div className='justify-center rounded-lg bg-accent p-6 text-black shadow-subtle'>
                    <h3 className='pb-7 text-2xl'>
                      Universāls komunikāciju un uzlādes iekārtu vadības modulis
                    </h3>

                    <p className='text-base'>
                      Komunikācijas modeļa izstrāde, ieviešot ISO15118 protokolu
                    </p>
                  </div>
                  <div className='justify-center rounded-lg bg-accent p-6 text-black shadow-subtle'>
                    <h3 className='pb-7 text-2xl'>
                      Enerģijas plūsmu vadības sistēma
                    </h3>

                    <p className='pb-4 text-base'>
                      Enerģijas plūsmu vadības sistēmas izstrāde
                    </p>
                    <p className='text-base'>
                      Sistēmas backend programmatūras izstrāde
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            id='section-2'
            className='my-12 h-full w-screen bg-primary sm:my-12 lg:my-20'
          >
            <div className='container mx-auto max-w-[1043px] px-4 pb-20 pt-12 sm:px-6 sm:pb-20 sm:pt-12 lg:py-20'>
              <div className='lg:gap-16" flex flex-col gap-8 lg:flex-row'>
                <div className='lg:w-1/2'>
                  <h2 className='text-left text-2xl text-secondary text-white sm:text-4xl md:text-2xl lg:text-2xl'>
                    Projekta īstenotājs SIA PC Consulting Reģistrācijas Nr.
                    40203154418
                  </h2>
                </div>
              </div>
              <div className='grid w-full gap-6 pt-12 sm:grid-cols-1 lg:grid-cols-3'>
                <div className='justify-center rounded-lg bg-accent p-14 text-center text-black shadow-card'>
                  <h3 className='pb-7 text-2xl'>Projekta Ilgums</h3>
                  <p className='text-secondary'>10/2024 - 09/2026</p>
                </div>
                <div className='justify-center rounded-lg bg-accent p-14 text-center text-black shadow-card'>
                  <h3 className='pb-7 text-2xl'>Kopējais Budžets</h3>
                  <p className='text-secondary'>1 307 590.00 €</p>
                </div>
                <div className='justify-center rounded-lg bg-accent p-14 text-center text-black shadow-card'>
                  <h3 className='pb-7 text-2xl'>ES Finansējums</h3>
                  <p className='text-secondary'>1 307 590.00 €</p>
                </div>
              </div>
            </div>
          </section>
          <section
            id='section-3'
            className='my-12 h-full w-screen bg-background sm:my-12 lg:my-20'
          >
            <div className='container mx-auto max-w-[1043px] px-4 pb-2 sm:px-6 lg:w-2/3'>
              <h3 className='pb-7 text-2xl text-black'>Projekta Mērķis</h3>
              <p className='text-base text-black'>
                Pētījuma mērķis ir izstrādāt un demonstrēt viedu
                inženiersistēmas prototipu, kas nodrošinās automatizētu
                elektrotīkla balansēšanu no vairākām lokācijām vienlaicīgi,
                iekļaujot zaļos enerģijas avotus, izmantojot transportlīdzekļos
                un uzlādes stacijās iebūvētās baterijas elektrotīkla
                stabilizēšanai, nodrošinot elektrotīkla nevienmērīgu noslodzi,
                samazinot gala lietotāja elektroenerģijas izmaksas, uzlabojot
                inženiersistēmas pieejamību pilsētvidē un saglabājot vēsturisko
                mantojumu. Pētniecības projekts tiek īstenots SIA “VMKC”
                projekta Nr. 2.2.1.3.1.0/1/24/A/CFLA/004 ietvaros
              </p>
            </div>
          </section>
          <hr className='my-8 border-t border-black'></hr>
        </div>
        <Footer />
      </div>
    </div>
  );
}
