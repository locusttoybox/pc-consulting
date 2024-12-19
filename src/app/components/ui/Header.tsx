'use client';

// import { HeaderProps } from '@radix-ui/themes/src/components/table.jsx';
import { useState, useEffect } from 'react';
import LogoImage from '../../assets/logo.png';

interface HeaderProps {
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setMenuOpen(!menuOpen);
  };
  return (
    <header className='fixed left-0 top-0 z-50 w-full bg-primary'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='my-4 flex h-16 items-center justify-between'>
          {!menuOpen && (
            <a href='/'>
              <img
                src={LogoImage.src}
                alt='pc-group-logo'
                className='color-white w-46 h-8 align-baseline'
              ></img>
            </a>
          )}{' '}
          <div className='flex items-center justify-between gap-10'>
            <div className='align-center'>
              <div className='hidden gap-6 sm:flex'>
                <a
                  href='/par-mums'
                  className='font-fahkwang text-secondary text-white hover:text-accent'
                >
                  Par Mums
                </a>
                <a
                  href='/jaunumi'
                  className='font-fahkwang text-secondary text-white hover:text-accent'
                >
                  Jaunumi
                </a>
              </div>
            </div>

            {/* <a
              href='mailto:veronika@pcconsulting.lv'
              className='hidden sm:block'
            >
              <Button className='hover:text-accent' variant='outlineWhite'>
                Sazinies Ar Mums
              </Button>
            </a> */}
            <button
              className='block text-white hover:text-accent focus:outline-none sm:hidden'
              onClick={toggleMenu}
            >
              <svg
                className='h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16m-7 6h7'
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`fixed inset-0 z-50 flex flex-col bg-accent p-4 transition-transform duration-300 sm:px-6 ${
            menuOpen && isMobile ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className='container mx-auto my-4 max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='flex h-16 flex-col justify-start gap-3 align-top'>
              <button
                className='text-right text-2xl text-black hover:text-white focus:outline-none'
                onClick={toggleMenu}
              >
                X
              </button>
              <a
                href='/par-mums'
                className='text-right font-[family-name:Fahkwang] text-2xl text-black hover:text-white'
              >
                Par Mums
              </a>
              <a
                href='/jaunumi'
                className='text-right font-[family-name:Fahkwang] text-2xl text-black hover:text-white'
              >
                Jaunumi
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
