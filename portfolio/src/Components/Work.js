import React from 'react'
import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'Portfolio Website',
    tech: 'ReactJS, TailwindCSS'
  },
  {
    title: 'Advice Generator App',
    tech: 'HTML, CSS, JavaScript, Axios'
  },
  {
    title: 'Backend Store Catalog Integration',
    tech: 'Python, Pandas, NumPy, API'
  },
  {
    title: 'RuneScape Clan Competition Web Scraper',
    tech: 'Python, Pandas, Requests, Selenium'
  }
]

const Work = () => {
  return (
    <div>
      <h1 className='text-2xl font-bold text-center py-10'>Work</h1>
      <div className=''>
        {projects.map((project) => {
          return <ProjectCard title={project.title} techUsed={project.tech}/>
        })
        }
      </div>
    </div>
    // <div>
    //   <h1 className='text-2xl font-bold text-center py-10'>Work</h1>
    //   <div className='grid grid-cols-3 gap-8'>
    //     {projects.map((project) => {
    //       return <ProjectCard title={project.title} techUsed={project.tech}/>
    //     })
    //     }
    //   </div>
    // </div>
  )
}

export default Work