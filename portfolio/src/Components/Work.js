import React from 'react'
import ProjectCard from './ProjectCard'
import advice_generator_app from '../images/advice_generator_app.png'
import rs_clan_web_scraper from '../images/rs_clan_web_scraper.png'

const projects = [
  {
    title: 'Portfolio Website',
    tech: 'ReactJS, TailwindCSS',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, veniam? Vitae animi eos praesentium iure sunt fugit nobis sequi quisquam. Facilis nam nisi consequatur architecto! Debitis, veniam. Voluptates, pariatur nesciunt?Totam esse pariatur dorem, quidem quas doloremque reprehenderit. Iusto illo cum repellendus, doloribus illum'
  },
  {
    title: 'Advice Generator App',
    tech: 'HTML, CSS, JavaScript, Axios, API',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, veniam? Vitae animi eos praesentium iure sunt fugit nobis sequi quisquam. Facilis nam nisi consequatur architecto! Debitis, veniam. Voluptates, pariatur nesciunt?Totam esse pariatur dorem, quidem quas doloremque reprehenderit. Iusto illo cum repellendus, doloribus illum',
    img: `${advice_generator_app}`
  },
  {
    title: 'Backend Store Catalog Integration',
    tech: 'Python, Pandas, NumPy, API',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, veniam? Vitae animi eos praesentium iure sunt fugit nobis sequi quisquam. Facilis nam nisi consequatur architecto! Debitis, veniam. Voluptates, pariatur nesciunt?Totam esse pariatur dorem, quidem quas doloremque reprehenderit. Iusto illo cum repellendus, doloribus illum'  },
  {
    title: 'RuneScape Clan Competition Web Scraper',
    tech: 'Python, Pandas, Requests, Selenium',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, veniam? Vitae animi eos praesentium iure sunt fugit nobis sequi quisquam. Facilis nam nisi consequatur architecto! Debitis, veniam. Voluptates, pariatur nesciunt?Totam esse pariatur dorem, quidem quas doloremque reprehenderit. Iusto illo cum repellendus, doloribus illum',
    img: `${rs_clan_web_scraper}`
  }
]

const Work = () => {
  return (
    <div>
      <h1 className='text-2xl font-bold text-center pt-10'>Work</h1>
      <div className='flex flex-col items-center md:grid grid-cols-2 lg:grid-cols-3'>
        {projects.map((project) => {
          return <ProjectCard 
                  title={project.title} 
                  techUsed={project.tech}
                  description={project.desc}
                  image={project.img}/>
        })
        }
      </div>
    </div>
  )
}

export default Work