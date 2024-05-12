import React from 'react';
import { linkedin, facebook, youtube, instagram, x , github } from '../assets';

const About = () => {
  return (
    <div className='flex flex-col space-y-4'>
    <div className='flex flex-col justify-start space-y-2'>
      <p className='font-medium font-tanker text-2xl mb-2'>Developer Profile</p>
      <p className='font-medium text-lg font-archivo'>I'm <span className='font-tanker text-yellow-500'>Mustafa Khan</span>, a developer with a strong background in Economics and Finance from NED University. My passion for coding complements my expertise, allowing me to create tailored solutions for finance websites. Proficient in React, NextJS, Dart, React Native, JavaScript, and SQL.</p>
      <p className='font-medium text-lg font-archivo'>With a passion for continuous learning and staying updated with the latest developments in both finance and technology, I am dedicated to staying at the forefront of innovation and driving success for your finance website. Let's collaborate to build a digital platform that empowers users to make informed financial decisions and achieve their goals with confidence.</p>
    </div>
    <div className='grid sm:grid-cols-6 grid-cols-1 gap-4'>
      <a className='btn sm:btn-ghost' href='https://github.com/mustafakhanneo' target="_blank" rel="noopener noreferrer"><img className='w-[24px] h-[24px]' src={github} />Mustafa Khan</a>
      <a className='btn sm:btn-ghost' href='https://linkedin.com/in/mustafakhanneo/' target="_blank" rel="noopener noreferrer"><img className='w-[24px] h-[24px]' src={linkedin} />Mustafa Khan</a>
      <a className='btn sm:btn-ghost' href='https://x.com/mustafakhanneo' target="_blank" rel="noopener noreferrer"><img className='w-[24px] h-[24px]' src={x} />Mustafa Khan</a>
      <a className='btn sm:btn-ghost' href='https://youtube.com/@mustafakhanneo' target="_blank" rel="noopener noreferrer"><img className='w-[24px] h-[24px]' src={youtube} />Mustafa Khan</a>
      <a className='btn sm:btn-ghost' href='https://instagram.com/mustafakhanneo' target="_blank" rel="noopener noreferrer"><img className='w-[24px] h-[24px]' src={instagram} />Mustafa Khan</a>
      <a className='btn sm:btn-ghost' href='https://facebook.com/mustafakhanne' target="_blank" rel="noopener noreferrer"><img className='w-[24px] h-[24px]' src={facebook} />Mustafa Khan</a>
    </div>
    </div>
  )
}

export default About