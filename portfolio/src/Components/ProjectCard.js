import React from 'react'
import Button from './Button'

const ProjectCard = ({ title, techUsed, description, image, linkDemo, linkCode, id}) => {
  return (
    <div className='flex flex-col justify-between border rounded-xl text-center bg-gray-50 shadow-md'>  
      <div>
        {/* project picture */}
        <picture className=''>
          <img src={image} alt={image} className=' 2xl:h-52 2xl:w-full md:w-auto md:h-60 xl:w-auto xl:h-64 rounded-tl-lg rounded-tr-lg'/>
        </picture>
        <div className='pt-4 px-4'>
          {/* project title */}
          <h1 className='font-semibold text-lg pt-2'>{title}</h1>
          {/* technologies used */}
          <p className='text-xs mb-2'>{techUsed}</p>
          {/* project description */}
            <p className='text-left pt-2 border-t-2 pb-2 min-h-full'>{description}</p>
        </div>
      </div>

      {/* Demo and Code buttons */} 
      <div className='border-t-2 mx-4'>
        <div className='flex justify-around py-4'>
          <Button name={'Demo'} link={linkDemo} id={id}/>
          <Button name={'Code'} link={linkCode} id={id}/>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard