import React from 'react'

const NavBar = () => {
  return (
    <div className='flex justify-between'>
      <h1>Jeanie Chea</h1>
      <ul className='flex space-x-6'>
        <a href='#home'>Home</a>
        <a href='#about-me'>About Me</a>
        <a href='#work'>Work</a>
      </ul>
    </div>
  )
}

export default NavBar