import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
// import { BsFillPersonLinesFill } from 'react-icons/bs';
import { GrDocumentDownload } from 'react-icons/gr';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            LET'S BUILD TOGETHER
          </p>
          <h1 className='py-4 text-gray-700'>
            Hello, I'm <span className='text-[rgb(52,93,167)]'>Yuvraj</span>
          </h1>
          <h1 className='py-4 text-gray-700'>A problem solver who loves to build.</h1>

          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <Link
              href='https://www.linkedin.com/in/yuvrajthapa/'
              target='_blank'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-gray-100'>
                <FaLinkedinIn size={20} />
              </div>
            </Link>
            <Link href='https://github.com/yuvraj1107thapa' target='_blank'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-gray-100'>
                <FaGithub size={20} />
              </div>
            </Link>
            <Link href='mailto:yuvrajthapa692@gmail.com'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-gray-100'>
                <AiOutlineMail size={20} />
              </div>
            </Link>
            <Link href='/Resume - Yuvraj Thapa - June 2024.pdf' target='_blank'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-gray-100'>
                <GrDocumentDownload size={20} />
                {/* <p className='font-semibold'>CV</p> */}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
