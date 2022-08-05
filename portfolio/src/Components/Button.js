import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className='underline underline-offset-4 font-bold text-purple-600 hover:text-purple-800 transition'>{name}</button>
    </div>
  )
}

export default Button