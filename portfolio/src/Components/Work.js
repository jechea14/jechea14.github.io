import React from 'react'
import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'Portfolio Website',
    tech: 'ReactJS, TailwindCSS',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, veniam? Vitae animi eos praesentium iure sunt fugit nobis sequi quisquam. Facilis nam nisi consequatur architecto! Debitis, veniam. Voluptates, pariatur nesciunt?Totam esse pariatur dorem, quidem quas doloremque reprehenderit. Iusto illo cum repellendus, doloribus illum'
  },
  {
    title: 'Advice Generator App',
    tech: 'HTML, CSS, JavaScript, Axios',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, veniam? Vitae animi eos praesentium iure sunt fugit nobis sequi quisquam. Facilis nam nisi consequatur architecto! Debitis, veniam. Voluptates, pariatur nesciunt?Totam esse pariatur dorem, quidem quas doloremque reprehenderit. Iusto illo cum repellendus, doloribus illum'  },
  {
    title: 'Backend Store Catalog Integration',
    tech: 'Python, Pandas, NumPy, API',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, veniam? Vitae animi eos praesentium iure sunt fugit nobis sequi quisquam. Facilis nam nisi consequatur architecto! Debitis, veniam. Voluptates, pariatur nesciunt?Totam esse pariatur dorem, quidem quas doloremque reprehenderit. Iusto illo cum repellendus, doloribus illum'  },
  {
    title: 'RuneScape Clan Competition Web Scraper',
    tech: 'Python, Pandas, Requests, Selenium',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, veniam? Vitae animi eos praesentium iure sunt fugit nobis sequi quisquam. Facilis nam nisi consequatur architecto! Debitis, veniam. Voluptates, pariatur nesciunt?Totam esse pariatur dorem, quidem quas doloremque reprehenderit. Iusto illo cum repellendus, doloribus illum'  }
]

const Work = () => {
  return (
    <div>
      <h1 className='text-2xl font-bold text-center pt-10'>Work</h1>
      <div className=''>
        {projects.map((project) => {
          return <ProjectCard 
                  title={project.title} 
                  techUsed={project.tech}
                  description={project.desc}/>
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