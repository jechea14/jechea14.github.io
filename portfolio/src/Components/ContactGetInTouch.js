import React from 'react'
import { FiMail } from 'react-icons/fi'


const ContactGetInTouch = () => {
  return (
    <div className='md:flex-auto'>
        <h2 className='text-lg font-semibold'>Get in Touch</h2>
        <div className='flex items-center space-x-8 border rounded-md px-8 py-4 bg-gray-50 shadow-md'>
            <button className=''>
                <a href='mailto:chea.jeanie@gmail.com' target='_blank'><FiMail size={40}/></a>
            </button>
            <h2>chea.jeanie@gmail.com</h2>
        </div>
    </div>
  )
}

export default ContactGetInTouch