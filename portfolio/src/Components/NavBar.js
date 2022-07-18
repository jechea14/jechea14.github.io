import React from 'react'

const NavBar = () => {
  return (
    <div className='flex justify-between py-6'>
      <h1 className='text-xl font-bold'>Jeanie Chea</h1>
      <ul className='flex space-x-6 text-slate-600'>
        <a href='#home' className='hover:text-slate-900 transition'>Home</a>
        <a href='#about-me' className='hover:text-slate-900 transition'>About Me</a>
        <a href='#work' className='hover:text-slate-900 transition'>Work</a>
        <a href='#contact' className='hover:text-slate-900 transition'>Contact</a>
      </ul>
    </div>
  )
}

export default NavBar