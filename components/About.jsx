import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import profilePic from '../public/assets/profile-pic-2.jpeg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[rgb(52,93,167)]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600 text-lg'>
          I am Yuvraj, a problem-solver with a builder's attitude, consistently ranking among the top 500 in competitive programming contests. This ranking showcases my ability to tackle complex problems efficiently under pressure. My problem-solving skills are further reinforced by the Gold Medal I received for my academic achievements in Computer Science, indicating a strong grasp of core CS concepts.
          </p>
          <p className='py-2 text-gray-600 text-lg'>
          My contributions to open-source projects demonstrate my willingness to give back and improve existing technologies. I possess a diverse skill set and experience that align well with the requirements of the role. During my internship, I built a full-stack web application using the MERN stack, highlighting my ability to design, develop, and deploy real-world solutions. My blend of problem-solving prowess and a builder mentality makes me a valuable asset for any team.
          </p>
          <p className='py-2 text-gray-600 text-lg'>
          I am a self-motivated and hardworking individual, constantly involved in self-improvement and always ready to take up challenging tasks to test and enhance my skills further. A keen observer who believes in learning by sharing knowledge, I am skilled in C++, JavaScript, Data Structures, Algorithms, Node.js, MySQL, and front-end development in React.js. I hold a Bachelor of Technology (BTech) focused on Computer Science & Engineering from Graphic Era Hill University.
          </p>
          {/* <Link href='/#projects' scroll={false}>
            <p className='py-2 text-[rgb(52,93,167)] underline cursor-pointer animate-pulse duration-300 text-lg font-semibold'>
              Check out my projects!
            </p>
          </Link> */}
        </div>
        <div className='w-[80%] h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 '>
          <Image
            src={profilePic}
            width='300'
            height='550'
            alt='profile-pic'
            className='rounded-xl'
          />
        </div>
      </div>
    </div>
  );
};

export default About;
