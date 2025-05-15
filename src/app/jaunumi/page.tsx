import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import Image3 from '../assets/nap-logo-1.png';
import Image4 from '../assets/es-next-logo-01.png';
import Button from '../components/ui/Button';

const Jaunumi: React.FC = () => {
  return (
    <>
      <Header />

      <div className='mx-auto h-auto w-full bg-primary'>
        <main>
          <section
            id='jaunumi'
            className='w-screen bg-primary pb-10 pt-20 sm:pb-2 sm:pt-10 lg:pb-14 lg:pt-20'
          >
            <div className='h-800px container mx-auto max-w-[1043px] px-4 pt-2 sm:px-6 sm:pt-2 lg:px-8 lg:pt-2'>
              <h1 className='font-fahkwang text-3xl text-background sm:text-3xl lg:text-6xl'>
                Jaunumi
              </h1>
            </div>
          </section>
          <section
            id='section-1'
            className='w-screen bg-primary pb-14 sm:pb-2 lg:pb-14'
          >
            <div className='container mx-auto max-w-[1043px] px-4 pb-10 sm:px-6'>
              <div className='mb-10 justify-center rounded-[20px] bg-accent text-black shadow-subtle'>
                <div className='flex flex-col sm:flex-col lg:flex-row'>
                  <div className='flex items-center justify-center rounded-t-[20px] bg-background py-14 text-black sm:w-2/5 sm:rounded-l-none sm:rounded-t-[20px] lg:rounded-l-[20px] lg:rounded-tr-none'>
                    {' '}
                    <div className='flex flex-row justify-center gap-10'>
                      {' '}
                      <img
                        src={Image3.src}
                        className='h-28 w-28'
                        alt='nacionalais atistibas plans logo'
                      ></img>
                      <img
                        src={Image4.src}
                        className='h-28 w-28'
                        alt='nacionalais atistibas plans logo'
                      ></img>
                    </div>
                  </div>
                  <div className='w:1/2 flex flex-col justify-center p-6 lg:w-3/5 lg:rounded-l-none lg:rounded-r-[20px]'>
                    {' '}
                    <h3 className='pb-10 text-2xl'>
                      Par projekta Nr. 2.2.1.3.i.0/1/24/A/CFLA/004 otrā
                      ceturkšņa rezultātiem
                    </h3>
                    <p className='text-base text-black'>
                      Kopā ar Apvienotās Karalistes partneri “Lesla Ltd” uzsākta
                      10. aktivitāšu pakete (Starptautiska). Tās pirmajā posmā -
                      10.1. aktivitātē - tiek apkopota informācija par
                      Apvienotās Karalistes enerģētikas nozari un elektroauto
                      lietošanas paradumiem. Šī analīze nodrošinās pamatu, lai
                      novērtētu mūsu risinājuma pielietojamību un eksporta
                      potenciālu šajā tirgū.
                    </p>
                    <div className='pt-10'>
                      <a href='/projekts-3'>
                        <Button className='w-44' variant='outlineBlack'>
                          Uzzināt vairāk
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mb-10 justify-center rounded-[20px] bg-accent text-black shadow-subtle'>
                <div className='flex flex-col sm:flex-col lg:flex-row'>
                  <div className='flex items-center justify-center rounded-t-[20px] bg-background py-14 text-black sm:w-2/5 sm:rounded-l-none sm:rounded-t-[20px] lg:rounded-l-[20px] lg:rounded-tr-none'>
                    {' '}
                    <div className='flex flex-row justify-center gap-10'>
                      {' '}
                      <img
                        src={Image3.src}
                        className='h-28 w-28'
                        alt='nacionalais atistibas plans logo'
                      ></img>
                      <img
                        src={Image4.src}
                        className='h-28 w-28'
                        alt='nacionalais atistibas plans logo'
                      ></img>
                    </div>
                  </div>
                  <div className='w:1/2 flex flex-col justify-center p-6 lg:w-3/5 lg:rounded-l-none lg:rounded-r-[20px]'>
                    {' '}
                    <h3 className='pb-10 text-2xl'>
                      Par projekta Nr. 2.2.1.3.i.0/1/24/A/CFLA/004 pirmā
                      ceturkšņa rezultātiem
                    </h3>
                    <p className='text-base text-black'>
                      Sabiedrība SIA PC Consulting, sadarbībā ar SIA VMKC ir
                      pabeigusi projekta “Videi draudzīgas elektroauto uzlādes
                      ekosistēmas prototipa izstrāde, integrējot atjaunojamos
                      energoresursus un elektrotīkla balansēšanu” pirmā
                      ceturkšņa īstenošanu.
                    </p>
                    <div className='pt-10'>
                      <a href='/projekts-1'>
                        <Button className='w-44' variant='outlineBlack'>
                          Uzzināt vairāk
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='justify-center rounded-[20px] bg-accent text-black shadow-subtle'>
                <div className='flex flex-col sm:flex-col lg:flex-row'>
                  <div className='flex items-center justify-center rounded-t-[20px] bg-background py-14 text-black sm:w-2/5 sm:rounded-l-none sm:rounded-t-[20px] lg:rounded-l-[20px] lg:rounded-tr-none'>
                    {' '}
                    <div className='flex flex-row justify-center gap-10'>
                      {' '}
                      <img
                        src={Image3.src}
                        className='h-28 w-28'
                        alt='nacionalais atistibas plans logo'
                      ></img>
                      <img
                        src={Image4.src}
                        className='h-28 w-28'
                        alt='nacionalais atistibas plans logo'
                      ></img>
                    </div>
                  </div>
                  <div className='w:1/2 flex flex-col justify-center p-6 lg:w-3/5 lg:rounded-l-none lg:rounded-r-[20px]'>
                    {' '}
                    <h3 className='pb-10 text-2xl'>
                      Par projekta Nr. 2.2.1.3.i.0/1/24/A/CFLA/004 uzsākšanu
                    </h3>
                    <p className='text-base text-black'>
                      Sabiedrība SIA PC Consulting, sadarbībā ar SIA VMKC ir
                      uzsākusi pētniecības projekta “Videi draudzīgas
                      elektroauto uzlādes ekosistēmas prototipa izstrāde,
                      integrējot atjaunojamos energoresursus un elektrotīkla
                      balansēšanu” īstenošanu.
                    </p>
                    <div className='pt-10'>
                      <a href='/projekts-2'>
                        <Button className='w-44' variant='outlineBlack'>
                          Uzzināt vairāk
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className='container mx-auto max-w-[1043px] px-4 pb-10 sm:px-6'>
              <div className='shadow-subtle justify-center rounded-[20px] bg-accent text-black'>
                <div className='flex flex-row lg:flex-row'>
                  <div className='flex items-center justify-center bg-background py-14 text-black sm:w-2/5 lg:rounded-l-[20px]'>
                    <div className='flex flex-row justify-center gap-10'>
                      {' '}
                      <img
                        src={Image3.src}
                        className='h-28 w-28'
                        alt='nacionalais atistibas plans logo'
                      ></img>
                      <img
                        src={Image4.src}
                        className='h-28 w-28'
                        alt='nacionalais atistibas plans logo'
                      ></img>
                    </div>
                  </div>
                  <div className='flex w-3/5 flex-col justify-center p-6 lg:rounded-l-none lg:rounded-r-[20px]'>
                    {' '}
                    <h3 className='pb-10 text-2xl'>
                      Par projekta Nr. 2.2.1.3.i.0/1/24/A/CFLA/004 uzsākšanu
                    </h3>
                    <p>
                      Sabiedrība SIA PC Consulting, sadarbībā ar SIA VMKC ir
                      uzsākusi pētniecības projekta “Videi draudzīgas
                      elektroauto uzlādes ekosistēmas prototipa izstrāde,
                      integrējot atjaunojamos energoresursus un elektrotīkla
                      balansēšanu” īstenošanu.
                    </p>
                    <div className='pt-10'>
                      <Button className='w-44' variant='outlineBlack'>
                        Uzzināt vairāk
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </section>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default Jaunumi;
