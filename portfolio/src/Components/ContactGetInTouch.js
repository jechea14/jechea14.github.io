import React from 'react'
import { FiMail } from 'react-icons/fi'
import { FaLinkedin } from 'react-icons/fa'
import { HiLocationMarker } from 'react-icons/hi'


const ContactGetInTouch = () => {
  return (
    <div className='md:flex-auto border rounded-md px-8 py-4 bg-gray-100 space-y-6 dark:bg-slate-800 dark:border-slate-800'>
        <div className='space-y-2'>
            <h2 className='text-lg font-medium'>Get in Touch</h2>
            <div className='flex items-center space-x-8 border rounded-md px-8 py-4 bg-gray-50 shadow-md dark:bg-slate-700 dark:border-slate-700'>
                <a href='mailto:chea.jeanie@gmail.com' target='_blank' rel="noreferrer"><FiMail size={40}/></a>
                <h2>chea.jeanie@gmail.com</h2>
            </div>
        </div>

        <div className='space-y-2'>
            <h2 className='text-lg font-medium'>Let's Connect!</h2>
            <div className='flex items-center space-x-8 border rounded-md px-8 py-4 bg-gray-50 shadow-md dark:bg-slate-700 dark:border-slate-700'>
                <a href='https://www.linkedin.com/in/jeanie-chea-765055151/' target='_blank' rel="noreferrer"><FaLinkedin size={40}/></a>
                <h2>linkedin.com/in/jeanie-chea-765055151/</h2>
            </div>
        </div>

        <div className='space-y-2'>
            <h2 className='text-lg font-medium'>Location</h2>
            <div className='flex items-center space-x-8 border rounded-md px-8 py-4 bg-gray-50 shadow-md dark:bg-slate-700 dark:border-slate-700'>
                <HiLocationMarker size={40}/>
                <h2>California, USA</h2>
            </div>
        </div>
    </div>
  )
}

export default ContactGetInTouch