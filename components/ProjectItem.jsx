import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProjectItem = ({
  title,
  backgroundImg,
  projectUrl,
  description,
  demoUrl,
}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[rgb(52,93,167)] to-[#74bce9]'>
      <Image
        className='rounded-xl group-hover:opacity-10'
        src={backgroundImg}
        alt={title}
      />
      <div className='flex-col hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-white tracking-wider text-center'>
          {title}
        </h3>
        <p className='pb-4 pt-2 text-white text-center'>{description}</p>
        <div>
          <Link href={projectUrl}>
            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>
              More Info
            </p>
          </Link>
          <a href={demoUrl} target='_blank' rel='noopener noreferrer'>
            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer mt-2'>
              Live Demo
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
