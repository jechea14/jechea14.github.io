import React from 'react'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import self_image from '../images/self_image.jpg'

const Intro = () => {
  return (
    <div className='h-screen md:flex flex-row-reverse'>
      <picture className='flex justify-center mt-2'>
        <img src={self_image} className='rounded-full w-72 md:w-auto lg:w-auto'/>
      </picture>

      <div className='text-center'>
        <h1 className='font-bold mt-4 text-5xl leading-loose'>Hi! I'm <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500'>Jeanie</span>.</h1>
        <p>I am a Computer Engineer specializing in Software Engineering.</p>

        {/* social media icons and links */}
        <div className='flex justify-center mt-10'>
          <button className='mx-4'>
            <a href='https://github.com/jechea14'><FaGithubSquare size={32}/></a>
          </button>
          <button className='mx-4'>
            <a href='https://www.linkedin.com/in/jeanie-chea-765055151/'><FaLinkedin size={32}/></a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Intro