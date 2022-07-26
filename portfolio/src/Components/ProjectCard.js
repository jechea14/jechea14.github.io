import React from 'react'
import Button from './Button'

const ProjectCard = ({ title, techUsed, description, image }) => {
  return (
    <div className='border rounded-xl text-center border-slate-800 pt-4 px-4 my-4 md:w-96 mx-2'>
      <picture>
        <img src={image} alt={image}/>
      </picture>
      <h1 className='font-semibold text-lg pt-2'>{title}</h1>

      <p className='text-xs mb-2'>{techUsed}</p>
      <p className='text-left pt-2 border-t-2 border-b-2 pb-2'>{description}</p>
      <div className='flex justify-evenly py-4'>
        <Button name={'Demo'}/>
        <Button name={'Code'}/>
      </div>
    </div>
  )
}

export default ProjectCard