import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'

const NavBar = () => {

  const [isShown, setIsShown] = useState(false)

  return (
    <nav className='flex justify-between py-6 items-center'>
      <div className='text-xl font-bold'>
        <h1>Jeanie Chea</h1>
      </div>
      <div>
        <ul className='flex flex-col text-slate-600'>
          <a href='#home' className='hover:text-slate-900 transition'>Home</a>
          <a href='#about-me' className='hover:text-slate-900 transition'>About Me</a>
          <a href='#work' className='hover:text-slate-900 transition'>Work</a>
          <a href='#contact' className='hover:text-slate-900 transition'>Contact</a>
        </ul>
      </div>

      <div>
        <FaBars/>
      </div>
    </nav>
    // <nav className='flex justify-between py-6 items-center'>
    //   <h1 className='text-xl font-bold'>Jeanie Chea</h1>
    //   <ul className='flex space-x-6 text-slate-600'>
    //     <a href='#home' className='hover:text-slate-900 transition'>Home</a>
    //     <a href='#about-me' className='hover:text-slate-900 transition'>About Me</a>
    //     <a href='#work' className='hover:text-slate-900 transition'>Work</a>
    //     <a href='#contact' className='hover:text-slate-900 transition'>Contact</a>
    //   </ul>
    // </nav>
  )
}

export default NavBar