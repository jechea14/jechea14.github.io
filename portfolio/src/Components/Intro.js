import React from 'react'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import self_image from '../images/self_image.jpg'

const Intro = () => {
  return (
    <section id='home' className='h-screen scroll-mt-16 md:flex md:flex-row-reverse md:justify-around'>
      <picture className='flex justify-center mt-4'>
        <img src={self_image} className='rounded-full w-72 md:w-auto h-auto max-w-6xl max-h-96'/>
      </picture>

      <div className='flex flex-col text-center md:text-left justify-center'>
        <h1 className='font-bold mt-4 text-5xl leading-loose'>Hi! I'm <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500'>Jeanie</span>.</h1>
        <p className='text-center'>A Computer Engineer specializing in Software Engineering with a passion in web development.</p>

        {/* social media icons and links */}
        <div className='flex justify-center mt-10'>
          <button className='mx-6'>
            <a href='https://www.linkedin.com/in/jeanie-chea-765055151/' target='_blank'><FaLinkedin size={40} color={'blue'}/></a>
          </button>
          <button className='mx-6'>
            <a href='https://github.com/jechea14' target='_blank'><FaGithubSquare size={40}/></a>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Intro