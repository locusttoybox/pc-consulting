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
            className='w-screen bg-primary pb-14 pt-28 sm:pb-2 sm:pt-14 lg:pb-14 lg:pt-28'
          >
            <div className='h-800px container mx-auto max-w-[1043px] px-4 pt-2 sm:px-6 sm:pt-2 lg:px-8 lg:pt-2'>
              <h1 className='pb-14 font-fahkwang text-3xl text-accent sm:text-3xl lg:text-6xl'>
                Par Mums
              </h1>
              <h2 className='text-secondary text-white lg:text-2xl'>
                SIA PC Consulting ir uzņēmums, kas veidotu stabilus,
                decentralizētus un ilgtspējīgus enerģijas izmantošanas rīkus
                pilsētvidē.
              </h2>
              <div className='py-10'>
                <img src={Image1.src} className='rounded-[20px]'></img>
              </div>
            </div>
          </section>
          <section
            id='section-1'
            className='w-screen bg-background pb-2 pt-14 sm:pb-2 sm:pt-14 lg:py-20'
          >
            <div className='container mx-auto max-w-[1043px] px-4 pt-2 sm:px-6 sm:pt-2 lg:px-8 lg:pt-2'>
              <div className='flex flex-col sm:w-1/2 lg:w-1/2 lg:flex-col'>
                <h1 className='pb-8 font-fahkwang text-4xl text-black'>
                  Kontaktinformācija
                </h1>

                <div className='flex flex-row gap-10'>
                  <img
                    src={AddressImage.src}
                    alt='location'
                    className='h-9 w-9'
                  />
                  <p className='pb-8 text-2xl text-black'>
                    Dzirnavu iela 57a, Rīga, LV-1010
                  </p>
                </div>
                <div className='flex flex-row gap-10'>
                  <img
                    src={PhoneImage.src}
                    alt='location'
                    className='h-9 w-9'
                  />
                  <p className='pb-8 text-2xl text-black'>+371 29364860</p>
                </div>
                <div className='flex flex-row gap-10'>
                  <img
                    src={EmailImage.src}
                    alt='location'
                    className='h-9 w-9'
                  />
                  <p className='text-2xl text-black'>
                    Dzirnavu iela 57a, Rīga, LV-1010
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
