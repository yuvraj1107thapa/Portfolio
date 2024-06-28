import React from 'react';
import Image from 'next/image';
import html from '../public/assets/skills/html.png';
import css from '../public/assets/skills/css.png';
import aws from '../public/assets/skills/aws.png';
import flask from '../public/assets/skills/flask.png';
import github1 from '../public/assets/skills/github1.png';
import google from '../public/assets/skills/google.png';
import javascript from '../public/assets/skills/javascript.png';
import nextjs from '../public/assets/skills/nextjs.png';
import mongo from '../public/assets/skills/mongo.png';
import node from '../public/assets/skills/node.png';
import python from '../public/assets/skills/python.png';
import react from '../public/assets/skills/react.png';
import sql from '../public/assets/skills/sql.png';
import cpp from '../public/assets/skills/cpp.png';
import tailwind from '../public/assets/skills/tailwind.png';

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='uppercase text-xl tracking-widest text-[rgb(52,93,167)]'>
          Skills
        </p>
        <h2 className='py-4'>What I Do</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
        <div className='p-6 shadow-lg shadow-blue-400 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={cpp} width='64' height='64' alt='css' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>CPP</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-lg shadow-yellow-400 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={javascript}
                  width='64'
                  height='64'
                  alt='javascript'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-lg shadow-sky-400 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={react} width='64' height='64' alt='react' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>React.js</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-lg shadow-lime-500 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={node} width='64' height='64' alt='node' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Node.js</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-lg shadow-green-500 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={mongo} width='64' height='64' alt='mongo' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>MongoDB</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-lg shadow-orange-500 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={html} width='64' height='64' alt='html' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>HTML</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-lg shadow-blue-400 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={css} width='64' height='64' alt='css' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>CSS</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-lg shadow-sky-600 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={python} width='64' height='64' alt='python' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Python</h3>
              </div>
            </div>
          </div>

          {/* <div className='p-6 shadow-lg shadow-gray-600 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={flask} width='64' height='64' alt='flask' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Flask</h3>
              </div>
            </div>
          </div> */}

          <div className='p-6 shadow-lg shadow-sky-600 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={sql} width='64' height='64' alt='SQL' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>MySQL</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-lg shadow-cyan-600 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={tailwind} width='64' height='64' alt='tailwind' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Tailwind CSS</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-lg shadow-gray-600 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={github1} width='64' height='64' alt='github' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>GitHub</h3>
              </div>
            </div>
          </div>

          {/* <div className='p-6 shadow-lg shadow-orange-500 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={aws} width='64' height='64' alt='aws' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>AWS</h3>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
