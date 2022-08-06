import React from 'react'

const Button = ({name, link, id}) => {
  return (
    <div>
      {
        id === 3 ? <div className='font-bold text-purple-600 hover:text-purple-800 hover:cursor-not-allowed transition'><button className='line-through hover:cursor-not-allowed '>{name}</button><span> Private</span></div>
        : <button className='underline underline-offset-4 font-bold text-purple-600 hover:text-purple-800 transition'><a href={link} target='_blank'>{name}</a></button>
      }
    </div>
  )
}

export default Button