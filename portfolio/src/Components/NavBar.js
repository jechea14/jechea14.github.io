import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const NavBar = () => {

  const [isMobileNavShown, setIsMobileNavShown] = useState(false)
  const handleClick = () => setIsMobileNavShown(!isMobileNavShown)

  return (
    <nav className='sticky top-0 bg-gray-200 drop-shadow-sm px-5 md:px-28 flex justify-between py-4 items-center w-full'>
      <div className='text-xl font-bold'>
        <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500'>Jeanie Chea</h1>
      </div>

      {/* mobile menu */}
      <div>
        <ul className={!isMobileNavShown ? 'hidden' : 'absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center text-slate-600 bg-slate-300'}>
          <a href='#home' className='hover:text-slate-900 transition py-6 text-4xl'>Home</a>
          <a href='#about-me' className='hover:text-slate-900 transition py-6 text-4xl'>About Me</a>
          <a href='#work' className='hover:text-slate-900 transition py-6 text-4xl'>Work</a>
          <a href='#contact' className='hover:text-slate-900 transition py-6 text-4xl'>Contact</a>
        </ul>
      </div>

      {/* desktop menu */}
      <div>
        <ul className='md:flex space-x-8 text-slate-600 hidden'>
          <a href='#home' className='hover:text-slate-900 transition'>Home</a>
          <a href='#about-me' className='hover:text-slate-900 transition'>About Me</a>
          <a href='#work' className='hover:text-slate-900 transition'>Work</a>
          <a href='#contact' className='hover:text-slate-900 transition'>Contact</a>
        </ul>
      </div>

      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
        {!isMobileNavShown ? <FaBars size={30}/> : <FaTimes size={30}/>}
      </div>
    </nav>
  )
}

export default NavBar