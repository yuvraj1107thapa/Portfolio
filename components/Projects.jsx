import React from 'react';
import one from '../public/assets/projects/1.png';
import two from '../public/assets/projects/2.png';
import three from '../public/assets/projects/3.png';
import four from '../public/assets/projects/4.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[rgb(52,93,167)]'>
          Projects
        </p>
        <h2 className='py-4'>What I've Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Live Code Share'
            description='Social Media + Study Room'
            backgroundImg={four}
            projectUrl='https://github.com/yuvraj1107thapa/LiveCodeShare'
            demoUrl='https://livecodeshare.netlify.app/'
          />
          <ProjectItem
            title='Codeforces Visuals'
            description='Data Visualization'
            backgroundImg={one}
            projectUrl='https://github.com/yuvraj1107thapa/Codeforces-Visuals'
            demoUrl='https://codeforces-visuals.netlify.app/'
          />
          <ProjectItem
            title='Tensor Feel'
            description='Emotion Analysis'
            backgroundImg={two}
            projectUrl='https://github.com/yuvraj1107thapa/Emotion-Analysis'
            demoUrl='https://emotionanalysis.netlify.app/'
          />
          <ProjectItem
            title='Mapty'
            description='Social Media App'
            backgroundImg={three}
            projectUrl='https://github.com/yuvraj1107thapa/Cosmos'
            demoUrl='https://team-cosmos.netlify.app/'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
