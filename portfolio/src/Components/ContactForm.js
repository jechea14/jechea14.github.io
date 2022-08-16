import React from 'react'

const ContactForm = () => {
  return (
    <div>
      <form>
        <label for='name'>Name:</label>
        <input type='text' name='name' required/>

        <label for='email'>Email:</label>
        <input type='email' name='email' required/>

        <label for='message'>Message:</label>
        <textarea name='message' cols='33' required/>

        <input type='submit' value='Submit'/>
      </form>
    </div>
  )
}

export default ContactForm