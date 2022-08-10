import React from 'react'

const SkillCard = ({icon, name}) => {
  return (
    <div className='border rounded-xl bg-gray-50 shadow-md hover:shadow-xl'>
      <div className='flex flex-col justify-center items-center m-4'>
        <div className='mb-2'>
          {icon}
        </div>
        <p className='text-xs font-bold'>{name}</p>
      </div>
    </div>
  )
}

export default SkillCard