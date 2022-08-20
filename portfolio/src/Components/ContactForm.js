import React from 'react'
import * as emailjs from 'emailjs-com';

const ContactForm = () => {


  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_hgfd3yl', 'template_m5izejp', e.target, 'IsKftCyPiMttClna1')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return (
    <div className='md:flex-auto lg:basis-1/2'>
      <h2 className='text-lg font-semibold'>Contact Form</h2>
      <form onSubmit={sendEmail} className=' border rounded-md p-8 bg-gray-50 shadow-md'>
        <div className='flex flex-col justify-center space-y-5'>
          <input type='text' name='name' placeholder='Name*' className='border border-gray-300 rounded-md px-4 py-2' required/>

          <input type='email' name='email' placeholder='Email*' className='border border-gray-300 rounded-md px-4 py-2' required/>

          <input type='text' name='subject' placeholder='Subject*' className='border border-gray-300 rounded-md px-4 py-2' required/>

          <textarea name='message' rows='5' placeholder='Message*' className='border border-gray-300 rounded-md px-4 py-2' required/>
        </div>

        <input type='submit' value='Send' className='mt-4 bg-purple-600 text-gray-50 px-6 py-2 rounded-xl cursor-pointer hover:bg-purple-800 transition'/>
      </form>
    </div>
  )
}

export default ContactForm