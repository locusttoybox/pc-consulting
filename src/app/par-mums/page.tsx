import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import Image1 from '../assets/image-1.png';

const ParMums: React.FC = () => {
  return (
    <>
      <Header />
      <div className='mx-auto h-auto w-full bg-primary'>
        <main>
          <section
            id='par-mums'
            className='w-screen bg-primary pb-2 pt-28 sm:pb-2 sm:pt-14 lg:pb-16 lg:pt-28'
          >
            <div className='h-800px container mx-auto max-w-[1043px] px-4 pt-2 sm:px-6 sm:pt-2 lg:px-8 lg:pt-2'>
              <h1 className='pb-7 font-fahkwang text-3xl text-accent sm:text-3xl lg:text-6xl'>
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
        </main>
      </div>
      <Footer />
    </>
  );
};

export default ParMums;
