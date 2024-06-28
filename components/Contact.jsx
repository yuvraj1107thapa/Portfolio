import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMail, AiOutlineArrowUp } from 'react-icons/ai';
import { GrDocumentDownload } from 'react-icons/gr';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { sendContactForm } from '../lib/api';
import contact from '../public/assets/contact.jpg';

// This is the specific form values
const initValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

// This will store all of our form values
const initState = { values: initValues };

const Contact = () => {
  const [state, setState] = useState(initState);
  const [successMsg, setSuccessMsg] = useState(false);
  const { values, error } = state;

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setState((prev) => ({
      ...prev,
    }));

    try {
      await sendContactForm(values);
      setState(initState);
      setSuccessMsg(true);
    } catch (error) {
      setState((prev) => ({
        ...prev,
        error: error.message,
      }));
    }
  };

  return (
    <div id='contact' className='relative w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
        <p className='text-xl tracking-widest text-[rgb(52,93,167)]'>Contact</p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* Left Side  */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full'>
              <div>
                <Image
                  // src='/../public/assets/contact.jpg'
                  src={contact}
                  width='500'
                  height='250'
                  alt='contact-me'
                  priority
                />
              </div>
              <div>
                <h2 className='py-2 mt-4'>Yuvraj Thapa</h2>
                <p>10x Software Engineer</p>
                <p className='py-4'>
                  I'm looking for SWE roles. Contact
                  me and lets talk!
                </p>
              </div>
              <div>
                <p className='uppercase pt-8'>Connect With Me</p>
                {/* This will hodl all of our icons  */}
                <div className='flex items-center justify-between py-4'>
                  <Link
                    href='https://www.linkedin.com/in/yuvrajthapa/'
                    target='_blank'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-gray-100'>
                      <FaLinkedinIn size={20} />
                    </div>
                  </Link>
                  <Link
                    href='https://github.com/yuvraj1107thapa'
                    target='_blank'
                  >
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
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side  */}
          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form method='POST'>
                <div className='flex flex-col'>
                  <label className='uppercase text-sm py-2'>Name</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                    name='name'
                    value={values.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='email'
                    name='email'
                    required
                    value={values.email}
                    onChange={handleChange}
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                    name='subject'
                    required
                    value={values.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300'
                    rows='10'
                    name='message'
                    required
                    value={values.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                {/* Error message  */}
                {error && (
                  <div
                    id='toast-danger'
                    class='flex items-center w-full max-w-xs p-4 my-2 bg-red-100 rounded-xl'
                    role='alert'
                  >
                    <div className='ml-3 text-md font-normal text-red-500'>
                      Failed to send message
                    </div>
                    <button
                      type='button'
                      class='ml-auto -mx-1.5 -my-1.5 bg-transparent p-1.5 text-red-500'
                      data-dismiss-target='#toast-danger'
                      aria-label='Close'
                    >
                      <span class='sr-only'>Close</span>
                      <svg
                        aria-hidden='true'
                        class='w-5 h-5'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fill-rule='evenodd'
                          d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                          clip-rule='evenodd'
                        ></path>
                      </svg>
                    </button>
                  </div>
                )}

                {/* Success Message  */}
                {successMsg && (
                  <div className='w-full flex justify-center'>
                    <div
                      id='toast-success'
                      class='flex items-center w-full max-w-xs p-4 text-green-600 bg-green-100 rounded-xl shadow'
                      role='alert'
                    >
                      <div class='inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-600 bg-green-100 rounded-xl'>
                        <svg
                          aria-hidden='true'
                          className=''
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fill-rule='evenodd'
                            d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                            clip-rule='evenodd'
                          ></path>
                        </svg>
                      </div>
                      <div class='ml-3 text-sm font-normal'>
                        Message sent successfully!
                      </div>
                      <button
                        type='button'
                        className='ml-auto -mx-1.5 -my-1.5 text-green-600 p-1.5 inline-flex h-8 w-8 hover:cursor-pointer'
                        onClick={() => setSuccessMsg(false)}
                        data-dismiss-target='#toast-success'
                        aria-label='Close'
                      >
                        <svg
                          aria-hidden='true'
                          className='w-5 h-5'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fill-rule='evenodd'
                            d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                            clip-rule='evenodd'
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                )}

                <button
                  className='w-full p-4 mt-4 relative border rounded-xl font-semibold'
                  disabled={
                    !values.name ||
                    !values.email ||
                    !values.subject ||
                    !values.message
                  }
                  onClick={onSubmit}
                >
                  {' '}
                  {/* <span className='animate-ping absolute top-1 right-0.5 block h-4 w-4 rounded-full ring-2 ring-green-400 bg-green-600'></span> */}
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Scroll to top link  */}
        <div className='flex justify-center py-12'>
          {/* <div className='flex justify-center py-12 md:absolute md:top-[93%] md:left-[85%] md:translate-x-[-50%] md:translate-y-[-50%]'>  */}
          <Link href='/#home' scroll={false}>
            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300 animate-bounce bg-gray-100'>
              <AiOutlineArrowUp className='text-[rgb(52,93,167)]' size={25} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
