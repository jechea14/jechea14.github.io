import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

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
    link: 'projects'
  },
  {
    id: 4,
    link: 'contact'
  }
]

const NavBar = () => {

  const [isMobileNavShown, setIsMobileNavShown] = useState(false)
  const handleClick = () => setIsMobileNavShown(!isMobileNavShown)

  return (
    <nav className='sticky top-0 bg-gray-100 drop-shadow-sm px-5 md:px-28 flex justify-between py-4 items-center w-full 2xl:px-0'>
      <div className='text-xl font-semibold'>
        <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500'>Jeanie Chea</h1>
      </div>

      {/* mobile menu */}
      <div>
        <ul className={!isMobileNavShown ? 'hidden' : 'absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center text-slate-900 bg-slate-200'}>
          {
            links.map((link) => (
              <a href={`#${link.link}`} key={link.id} onClick={() => setIsMobileNavShown(!isMobileNavShown)} className='hover:text-slate-900 transition py-6 text-4xl capitalize'>{link.link}</a>
            ))
          }
        </ul>
      </div>

      {/* desktop menu */}
      <div>
        <ul className='md:flex space-x-8 text-gray-600 hidden'>
          {
              links.map((link) => (
                <a href={`#${link.link}`} key={link.id} className='hover:text-slate-900 transition capitalize font-semibold'>{link.link}</a>
              ))
          }
        </ul>
      </div>

      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
        {!isMobileNavShown ? <FaBars size={30}/> : <FaTimes size={30}/>}
      </div>
    </nav>
  )
}

export default NavBar