import React from 'react'
import ContactForm from './ContactForm'
import ContactGetInTouch from './ContactGetInTouch'

const Contact = () => {
  return (
    <section id='contact' className='scroll-mt-10'>
      <h1 className='text-2xl font-bold text-left pt-10 pb-6'>CONTACT</h1>
      <div className='space-y-6 lg:flex lg:space-x-8 lg:space-y-0'>
        <ContactGetInTouch/>
        <ContactForm/>
      </div>
    </section>
  )
}

export default Contact