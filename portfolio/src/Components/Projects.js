import React from 'react'
import ProjectCard from './ProjectCard'
import advice_generator_app from '../images/advice_generator_app.png'
import rs_clan_web_scraper from '../images/rs_clan_web_scraper.png'

const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    tech: 'ReactJS, TailwindCSS',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, veniam? Vitae animi eos praesentium iure sunt fugit nobis sequi quisquam. Facilis nam nisi consequatur architecto! Debitis, veniam. Voluptates, pariatur nesciunt?Totam esse pariatur dorem, quidem quas doloremque reprehenderit. Iusto illo cum repellendus, doloribus illum',
    linkDemo: 'https://jechea14.github.io/',
    linkCode: 'https://github.com/jechea14/jechea14.github.io'
  },
  {
    id: 2,
    title: 'Advice Generator App',
    tech: 'HTML, CSS, JavaScript, Axios, API',
    desc: 'Developed an advice generator that generates random advice whenever a button is clicked. The Advice Slip API was used to generate random quotes of advice.',
    img: `${advice_generator_app}`,
    linkDemo: 'https://jechea14.github.io/advice-generator-app/',
    linkCode: 'https://github.com/jechea14/advice-generator-app'
  },
  {
    id: 3,
    title: 'Backend Store Catalog Integration',
    tech: 'Python, Pandas, NumPy, API',
    desc: 'Integrated sample client store catalog data into a Flask ingestion REST API with authentication. Cleaned and transformed sample client data then used HTTP requests to send data into a sample api given user authentication.'
  },
  {
    id: 4,
    title: 'RuneScape Clan Competition Web Scraper',
    tech: 'Python, Pandas, Requests, Selenium',
    desc: 'Developed an automated game competition web scraper to scrape data off of a RuneScape player tracking website and calculate competition results, which reduced the time required to prepare results by 80%.',
    img: `${rs_clan_web_scraper}`,
    linkDemo: 'https://www.youtube.com/watch?v=mAiOTb76Poc',
    linkCode: 'https://github.com/jechea14/Automated-RS-Clan-DXP-Competition'
  }
]

const Projects = () => {
  return (
    <section id='projects' className='scroll-mt-10'>
      <h1 className='text-2xl font-bold text-left pt-10'>PROJECTS</h1>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
        {projects.map((project) => {
          return <ProjectCard 
                  title={project.title} 
                  techUsed={project.tech}
                  description={project.desc}
                  image={project.img}
                  linkDemo={project.linkDemo}
                  linkCode={project.linkCode}
                  id={project.id}
                  />
                  
        })
        }
      </div>
    </section>
  )
}

export default Projects