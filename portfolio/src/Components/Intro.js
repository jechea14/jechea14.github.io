import React from 'react'
import self_image from '../images/self_image.jpg'

const Intro = () => {
  return (
    <div>
      <h1 className='text-5xl font-bold'>Hi! My name is <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500'>Jeanie</span>.</h1>
      <picture>
        <img src={self_image}className='rounded-3xl'/>
      </picture>
      <p>I am a Computer Engineer specializing in Software Engineering.</p>

      {/* social media icons and links */}
      <div>

      </div>
    </div>
  )
}

export default Intro