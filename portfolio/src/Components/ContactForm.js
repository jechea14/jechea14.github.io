import React from 'react'

const ContactForm = () => {
  return (
    <div>
      <form className=' border rounded-xl p-10 bg-gray-50 shadow-md'>
        <div className='flex flex-col justify-center'>
          <label for='name'>Name:</label>
          <input type='text' name='name' className='border border-gray-300 rounded-md' required/>

          <label for='email'>Email:</label>
          <input type='email' name='email' className='border border-gray-300 rounded-md' required/>

          <label for='message'>Message:</label>
          <textarea name='message' cols='33' className='border border-gray-300 rounded-md' required/>

        </div>

        <input type='submit' value='Submit' className='bg-purple-600 text-gray-50 px-6 py-2 rounded-xl cursor-pointer hover:bg-purple-800 transition'/>
      </form>
    </div>
  )
}

export default ContactForm