import React from 'react'

const ContactForm = () => {
  return (
    <div>
      <form className=' border rounded-xl p-10 bg-gray-50 shadow-md'>
      WORK IN PROGRESS
        <div className='flex flex-col justify-center'>
          <label for='name'>Name:</label>
          <input type='text' name='name' className='border border-gray-300 rounded-md px-2' required/>

          <label for='email'>Email:</label>
          <input type='email' name='email' className='border border-gray-300 rounded-md px-2' required/>

          <label for='message'>Message:</label>
          <textarea name='message' rows='10' className='border border-gray-300 rounded-md px-2' required/>

        </div>

        <input type='submit' value='Submit' className='bg-purple-600 text-gray-50 px-6 py-2 rounded-xl cursor-pointer hover:bg-purple-800 transition'/>
      </form>
    </div>
  )
}

export default ContactForm