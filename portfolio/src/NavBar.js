import React from 'react'

const NavBar = () => {
  return (
    <div className='flex justify-between'>
      <h1>Jeanie Chea</h1>
      <ul className='flex space-x-6'>
        <li>Work</li>
        <li>Education</li>
        <li>About Me</li>
        <li>Experience</li>
      </ul>
    </div>
  )
}

export default NavBar