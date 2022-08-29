import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { MdNightlight, MdOutlineLightMode } from 'react-icons/md'

const links = [
  {
    id: 1,
    link: 'home'
  },
  {
    id: 2,
    link: 'about'
  },
  {
    id: 3,
    link: 'skills'
  },
  {
    id: 4,
    link: 'projects'
  },
  {
    id: 5,
    link: 'contact'
  }
]

const NavBar = () => {

  const [isMobileNavShown, setIsMobileNavShown] = useState(false)

  const [darkMode, setDarkMode] = useState("false")

  const toggleTheme = () => {
    const body = document.querySelector("body")

    if(darkMode) {
      body.classList.add("dark")
      document.body.style.backgroundColor = 'rgb(15 23 42)'
    }
    else {
      body.classList.remove("dark")
      document.body.style.backgroundColor = 'rgb(243 244 246)'
    }

    setDarkMode(!darkMode)
  }

  const handleClick = () => {
    setIsMobileNavShown(!isMobileNavShown)
  }


  return (
    <nav className='overflow-x-hidden dark:bg-slate-900 sticky top-0 bg-gray-100 border-b-2 px-5 md:px-28 flex justify-between py-4 items-center 2xl:px-0 dark:border-b-slate-700'>
      <div className='text-xl font-semibold'>
        <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500'><a href='#'>Jeanie Chea</a></h1>
      </div>

      {/* mobile menu */}
      <div>
        <ul className={!isMobileNavShown ? 'hidden' : 'absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center text-slate-900 bg-slate-200 dark:bg-slate-900 dark:text-gray-300'}>
          
          {
            links.map((link) => (
              <a href={`#${link.link}`} key={link.id} onClick={() => setIsMobileNavShown(!isMobileNavShown)} className='hover:text-gray-900 transition py-6 text-4xl capitalize hover:cursor-pointer'>{link.link}</a>
            ))
          }
          <div onClick={toggleTheme} className='hover:cursor-pointer pt-5'>
            {
              darkMode ? <MdNightlight size={40}/> : <MdOutlineLightMode size={40}/>
            }
          </div>
        </ul>
      </div>

      {/* desktop menu */}
      <div>
        <ul className='md:flex space-x-8 text-gray-600 dark:text-gray-200 hidden hover:cursor-pointer items-center'>
          {
            links.map((link) => (
              <a href={`#${link.link}`} key={link.id} className='hover:text-slate-900 transition capitalize font-semibold'>{link.link}</a>
              ))
          }

          <div onClick={toggleTheme}>
            {
              darkMode ? <MdNightlight size={20}/> : <MdOutlineLightMode size={20}/>
            }           
          </div>
        </ul>
      </div>

      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer p-1 dark:bg-slate-600 dark:rounded-lg'>
        {!isMobileNavShown ? <FaBars size={20}/> : <FaTimes size={20}/>}
      </div>
    </nav>
  )
}

export default NavBar