import React from 'react'
import ProjectCard from './ProjectCard'
import advice_generator_app from '../images/advice_generator_app.png'
import rs_clan_comp_scraper from '../images/rs_clan_comp_scraper.png'
import backend_catalog_integration from '../images/backend_catalog_integration.png'
import inventory_rest_api from '../images/inventory_rest_api.png'
import rs_web_scrape_discord_bot from '../images/rs_web_scrape_discord_bot.png'
import portfolio from '../images/portfolio.png'

const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    tech: 'ReactJS, TailwindCSS',
    desc: 'Designed and developed a personal portfolio to showcase skills and projects. Utilized mobile-first approach and semantic HTML for accessibility.',
    img: `${portfolio}`,
    linkDemo: 'https://jeaniechea.vercel.app',
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
    tech: 'Python3, Pandas, NumPy, API',
    desc: 'Integrated sample client store catalog data into a Flask ingestion REST API with authentication. Cleaned and transformed sample client data then used HTTP requests to send data into a sample api given user authentication.',
    img: `${backend_catalog_integration}`
  },
  {
    id: 4,
    title: 'RuneScape Clan Competition Web Scraper',
    tech: 'Python3, Pandas, Requests, Selenium',
    desc: 'Developed an automated game competition web scraper to scrape data off of a RuneScape player tracking website and calculate competition results, which reduced the time required to prepare results by 80%.',
    img: `${rs_clan_comp_scraper}`,
    linkDemo: 'https://www.youtube.com/watch?v=mAiOTb76Poc',
    linkCode: 'https://github.com/jechea14/Automated-RS-Clan-DXP-Competition'
  },
  {
    id: 5,
    title: 'Inventory Management REST API',
    tech: 'Python3, Django, Django REST, SQLite',
    desc: 'Implemented a basic REST inventory management API with authentication and permissions. Created CRUD operatin views and used SQLite database to store data.',
    img: `${inventory_rest_api}`,
    linkDemo: 'https://www.youtube.com/watch?v=PM5A7jvtxFM',
    linkCode: 'https://github.com/jechea14/django-inventory-api'
  },
  {
    id: 6,
    title: 'RuneScape Archaeology Web Scraping Discord Bot',
    tech: 'Python3, Requests, Discord.py',
    desc: 'Developed a Discord bot to web scrape RuneScape Wiki web pages based on user input to extract data. Calculated and displayed the total cost in RuneScape currency and amount of materials needed.',
    img: `${rs_web_scrape_discord_bot}`,
    linkDemo: 'https://www.youtube.com/watch?v=sEGjhaAngnM',
    linkCode: 'https://github.com/jechea14/RSArchArtefactMaterialCalculator'

  }
]

const Projects = () => {
  return (
    <section id='projects' className='scroll-mt-8'>
      <h1 className='text-2xl font-bold text-left pb-6 pt-10'>PROJECTS</h1>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6 lg:grid-cols-3'>
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