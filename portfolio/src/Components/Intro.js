import React from 'react'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import self_image from '../images/self_image.jpg'

const Intro = () => {
  return (
    <section id='home' className='md:flex md:justify-around mb-20 lg:justify-center scroll-mt-20'>
      {/* picture */}
      <picture className='flex justify-center mt-4'>
        <img src={self_image} alt='self-image' className='rounded-full w-72 md:w-auto h-auto max-w-md md:max-h-72'/>
      </picture>

      {/* description */}
      <div className='flex flex-col text-center md:text-left md:justify-end md:ml-10'>
        <h1 className='font-bold mt-4 text-5xl leading-loose md:leading-none'>Hi! I'm <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500'>Jeanie</span>.</h1>
        <p className='text-center font-medium md:text-left md:mt-4 md:max-w-sm'>A Computer Engineer based in California, USA with a passion in front end web development.</p>

        {/* social media icons and links */}
        <div className='flex justify-evenly mt-10 px-12'>
          <button className=''>
            <a href='https://www.linkedin.com/in/jeanie-chea-765055151/' target='_blank'><FaLinkedin size={40} color={'blue'}/></a>
          </button>
          <button className=''>
            <a href='https://github.com/jechea14' target='_blank'><FaGithubSquare size={40}/></a>
          </button>
          <button className=''>
            <a href='mailto:chea.jeanie@gmail.com' target='_blank'><FiMail size={40}/></a>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Intro