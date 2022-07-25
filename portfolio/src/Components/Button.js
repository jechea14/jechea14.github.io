import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className='border py-2 px-12 rounded-xl bg-purple-600 text-slate-100 hover:bg-purple-800 transition'>{name}</button>
    </div>
  )
}

export default Button