import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import Image3 from '../assets/nap-logo-1.png';
import Image4 from '../assets/es-next-logo-01.png';

const Jaunumi: React.FC = () => {
  return (
    <>
      <Header />

      <div className='mx-auto h-auto w-full bg-primary'>
        <main>
          <section
            id='jaunumi'
            className='w-screen bg-primary pb-14 pt-28 sm:pb-2 sm:pt-14 lg:pb-14 lg:pt-28'
          >
            <div className='h-800px container mx-auto max-w-[1043px] px-4 pt-2 sm:px-6 sm:pt-2 lg:px-8 lg:pt-2'>
              <h1 className='font-fahkwang text-3xl text-accent sm:text-3xl lg:text-6xl'>
                Jaunumi
              </h1>
            </div>
          </section>
          <section className='w-screen bg-primary pb-9 sm:pb-2 lg:pb-10'>
            <div className='container mx-auto max-w-[1043px] px-4 pb-2 sm:px-6'>
              <div className='shadow-subtle justify-center rounded-[20px] bg-accent text-black'>
                <div className='lg:flex-crow flex flex-row'>
                  <div className='bg-background py-14 text-black sm:w-2/5 lg:rounded-l-[20px]'>
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
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default Jaunumi;
