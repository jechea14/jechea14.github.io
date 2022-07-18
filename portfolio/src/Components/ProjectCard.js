import React from 'react'

const ProjectCard = ({ title, techUsed }) => {
  return (
    <div className='border text-center p-2'>
      {/* <img></img> */}
      <div className='h-20 w-20 border'></div>
      <h2 className='font-semibold'>{title}</h2>

      <p className='text-xs'>{techUsed}</p>
    </div>
  )
}

export default ProjectCard