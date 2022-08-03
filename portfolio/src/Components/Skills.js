import React from 'react'
import SkillCard from './SkillCard'
import { FaHtml5, FaCss3Alt, FaPython, FaReact } from 'react-icons/fa'
import { SiJavascript, SiTailwindcss } from 'react-icons/si'

const skills = [
  {
    id: 1,
    icon: <FaHtml5 size={50} color={'orange'}/>,
    name: 'HTML5'
  },
  {
    id: 2,
    icon: <FaCss3Alt size={50} color={'blue'}/>,
    name: 'CSS3'
  },
  {
    id: 3,
    icon: <SiJavascript size={50}/>,
    name: 'JavaScript'
  },
  {
    id: 4,
    icon: <FaReact size={50} color={'lightblue'}/>,
    name: 'ReactJS'
  },
  {
    id: 5,
    icon: <SiTailwindcss size={50} color={'lightblue'}/>,
    name: 'TailwindCSS'
  },
  {
    id: 6,
    icon: <FaPython size={50}/>,
    name: 'Python3'
  },
]

const Skills = () => {
  return (
    <div>
      <h1 className='text-xl font-bold text-left pt-10'>SKILLS</h1>
      <div className='grid grid-cols-wrap gap-6 rounded-xl py-6'>
        {
          skills.map((skill) => (
            <SkillCard key={skill.id} icon={skill.icon} name={skill.name}/>
          ))
        }
      </div>
    </div>
  )
}

export default Skills