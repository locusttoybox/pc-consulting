import Image3 from '../../assets/nap-logo-1.png';
import Image4 from '../../assets/es-next-logo-01.png';

const Footer: React.FC = () => {
  return (
    <div className='bg-[#FDFFFC]'>
      <section
        id='footer-links'
        className='my-12 h-full w-screen bg-[#FDFFFC] md:my-12 lg:my-12'
      >
        <div className='container mx-auto max-w-[1043px] px-4 sm:px-6 lg:px-8'>
          <ul className='flex list-none flex-col gap-3'>
            <li>
              <a
                href='/par-mums'
                className='text-left font-[family-name:Fahkwang] text-2xl text-black'
              >
                Par Mums
              </a>
            </li>
            <li>
              {/* <a
                href='/kontakti'
                className='text-left font-[family-name:Fahkwang] text-2xl text-black'
              >
                Kontakti
              </a> */}
            </li>
            <li>
              <a
                href='/projekti'
                className='text-left font-[family-name:Fahkwang] text-2xl text-black'
              >
                Jaunumi
              </a>
            </li>
          </ul>
        </div>
      </section>
      <hr className='my-8 border-t border-black'></hr>
      <section
        id='footer-logos'
        className='mb-4 mt-12 h-full w-screen bg-[#FDFFFC] sm:my-2 lg:my-12'
      >
        <div className='container mx-auto max-w-[1043px] px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-row justify-center gap-20'>
            <img
              src={Image3.src}
              className='h-28 w-28'
              alt='nacionalais atistibas plans logo'
            ></img>
            <img
              src={Image4.src}
              className='h-28 w-28'
              alt='eiropas savieniba logo'
            ></img>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
