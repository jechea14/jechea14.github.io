import React from 'react'
import Skills from './Skills'


const AboutMe = () => {
  //put education & experience
  return (
    <section id='about' className='scroll-mt-20'>
      <h1 className='text-2xl font-bold text-left'>ABOUT ME</h1>
      <Skills/>
    </section>
  )
}

export default AboutMe