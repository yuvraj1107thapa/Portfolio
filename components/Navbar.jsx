import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useRouter } from 'next/router';
import yuvi from '../public/assets/img.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('rgb(240,240,240)');
  const [linkColor, setLinkColor] = useState('#1f2937');
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === '/property' ||
      router.asPath === '/devbud' ||
      router.asPath === '/forkify' ||
      router.asPath === '/mapty'
    ) {
      setNavBg('transparent');
      setLinkColor('rgb(240,240,240)');
    } else {
      setNavBg('rgb(240,240,240)');
      setLinkColor('#1f2937');
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'absolute w-full h-20 shadow-xl z-[100]'
          : 'fixed w-full h-20 z-[100]'
      }
    >
      <div className='flex justify-between items-center w-auto h-auto px-2 2xl:px-16'>
        <Link href='/#home' scroll={false}>
          <Image
            // src='/../public/assets/willLogo2.png'
            src={yuvi}
            alt='logo'
            width='100'
            height='50'
          />
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
            <Link href='/#home' scroll={false}>
              <li className='ml-10 text-sm uppercase hover:border-b hover:scale-125 hover:duration-500'>
                Home
              </li>
            </Link>
            <Link href='/#about' scroll={false}>
              <li className='ml-10 text-sm uppercase hover:border-b hover:scale-125 hover:duration-500'>
                About
              </li>
            </Link>
            <Link href='/#skills' scroll={false}>
              <li className='ml-10 text-sm uppercase hover:border-b hover:scale-125 hover:duration-500'>
                Skills
              </li>
            </Link>
            <Link href='/#projects' scroll={false}>
              <li className='ml-10 text-sm uppercase hover:border-b hover:scale-125 hover:duration-500'>
                Projects
              </li>
            </Link>
            <Link href='/#contact' scroll={false}>
              <li className='ml-10 text-sm uppercase hover:border-b hover:scale-125 hover:duration-500'>
                Contact
              </li>
            </Link>
          </ul>

          {/* Dropdown menu icon  */}
          <div onClick={handleNav} className='md:hidden'>
            <AiOutlineMenu size={25} style={{ color: `${linkColor}` }} />
          </div>
        </div>
      </div>

      {/* Background overlay for mabile menu  */}
      <div
        onClick={handleNav}
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        {/* Mobile Navbar  */}
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[40%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-auto items-center justify-between'>
              <Link href='/#home' scroll={false} onClick={() => setNav(false)}>
                <Image
                  // src='/../public/assets/willLogo2.png'
                  src={yuvi}
                  width='100'
                  height='50'
                  alt='/'
                />
              </Link>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
              >
                <AiOutlineClose />
              </div>
            </div>

            {/* Mobile Menu Header  */}
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>Lets build and connect!</p>
            </div>
          </div>

          {/* Mobile Navbar Menu  */}
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/#home' scroll={false}>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Home
                </li>
              </Link>
              <Link href='/#about' scroll={false}>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  About
                </li>
              </Link>
              <Link href='/#skills' scroll={false}>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Skills
                </li>
              </Link>
              <Link href='/#projects' scroll={false}>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Projects
                </li>
              </Link>
              <Link href='/#contact' scroll={false}>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Contact
                </li>
              </Link>
            </ul>
            <div className='pt-40 '>
              <p className='uppercase tracking-widest text-[rgb(52,93,167)]'>
                Let's Connect
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaLinkedinIn />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaGithub />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <AiOutlineMail />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
