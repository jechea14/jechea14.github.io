import React from 'react'
import ContactForm from './ContactForm'
import ContactGetInTouch from './ContactGetInTouch'

const Contact = () => {
  return (
    <div id='contact' className='h-screen scroll-mt-10'>
      <h1 className='text-2xl font-bold text-left pt-10'>CONTACT</h1>
      <div className='space-y-6 lg:flex lg:space-x-8 lg:space-y-0'>
        <ContactGetInTouch/>
        <ContactForm/>
      </div>
    </div>
  )
}

export default Contact