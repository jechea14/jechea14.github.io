import React from 'react'
import Button from './Button'

const ProjectCard = ({ title, techUsed, description }) => {
  return (
    <div className='border text-center pt-4 px-4 my-8'>
      {/* <img></img> */}
      <div className='h-20 w-20 border'></div>
      <h2 className='font-semibold'>{title}</h2>

      <p className='text-xs mb-2'>{techUsed}</p>
      <p className=' pt-2 border-t-2 border-b-2 pb-2'>{description}</p>
      <div className='flex justify-evenly py-2'>
        <Button name={'Demo'}/>
        <Button name={'Code'}/>
      </div>
    </div>
  )
}

export default ProjectCard