import React from 'react'
import SkillCard from './SkillCard'
import { FaHtml5, FaCss3Alt, FaPython, FaReact } from 'react-icons/fa'
import { SiJavascript, SiTailwindcss } from 'react-icons/si'

const Skills = () => {
  return (
    <div>
      <h1 className='text-2xl font-bold text-left pt-10'>Skills</h1>
      <div className='grid grid-cols-wrap gap-6 border rounded-xl py-6'>
        <SkillCard icon={<FaHtml5 size={50} color={'orange'}/>} name={'HTML5'}/>
        <SkillCard icon={<FaCss3Alt size={50} color={'blue'}/>} name={'CSS3'}/>
        <SkillCard icon={<SiJavascript size={50}/>} name={'JavaScript'}/>
        <SkillCard icon={<FaReact size={50} color={'lightblue'}/>} name={'ReactJS'}/>
        <SkillCard icon={<SiTailwindcss size={50} color={'lightblue'}/>} name={'TailwindCSS'}/>
        <SkillCard icon={<FaPython size={50}/>} name={'Python3'}/>
        
      </div>
    </div>
  )
}

export default Skills