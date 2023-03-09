import React from 'react'
import ProjectCard from './ProjectCard'
import advice_generator_app from '../images/advice_generator_app.png'
import rs_clan_comp_scraper from '../images/rs_clan_comp_scraper.png'
import backend_catalog_integration from '../images/backend_catalog_integration.png'
import inventory_rest_api from '../images/inventory_rest_api.png'
import rs_web_scrape_discord_bot from '../images/rs_web_scrape_discord_bot.png'
import portfolio from '../images/portfolio.png'
import videogamedex from '../images/video_game_dex.png'
import ecommerce from '../images/ecommerce.png'
import { createContext } from 'react'

export const ProjectContext = createContext();

const projects = [
  {
    id: 1,
    title: 'RuneScape Archaeology Web Scraping Discord Bot',
    tech: 'Python3, Requests, Discord.py',
    desc: 'Developed a Discord bot to web scrape RuneScape Wiki web pages based on user input to extract data. Calculated and displayed the total cost in RuneScape currency and amount of materials needed.',
    img: `${rs_web_scrape_discord_bot}`,
    linkDemo: 'https://www.youtube.com/watch?v=sEGjhaAngnM',
    linkCode: 'https://github.com/jechea14/RSArchArtefactMaterialCalculator',
    completed: true
  },
  {
    id: 2,
    title: 'Inventory Management REST API',
    tech: 'Python3, Django, Django REST, SQLite',
    desc: 'Implemented a basic REST inventory management API with authentication and permissions. Created CRUD operatin views and used SQLite database to store data.',
    img: `${inventory_rest_api}`,
    linkDemo: 'https://www.youtube.com/watch?v=PM5A7jvtxFM',
    linkCode: 'https://github.com/jechea14/django-inventory-api',
    completed: true
  },
  {
    id: 3,
    title: 'RuneScape Clan Competition Web Scraper',
    tech: 'Python3, Pandas, Requests, Selenium',
    desc: 'Developed an automated game competition web scraper to scrape data off of a RuneScape player tracking website and calculate competition results, which reduced the time required to prepare results by 80%.',
    img: `${rs_clan_comp_scraper}`,
    linkDemo: 'https://www.youtube.com/watch?v=mAiOTb76Poc',
    linkCode: 'https://github.com/jechea14/Automated-RS-Clan-DXP-Competition',
    completed: true
  },
  {
    id: 4,
    title: 'Backend Store Catalog Integration',
    tech: 'Python3, Pandas, NumPy, API',
    desc: 'Integrated sample client store catalog data into a Flask ingestion REST API with authentication. Cleaned and transformed sample client data then used HTTP requests to send data into a sample api given user authentication.',
    img: `${backend_catalog_integration}`,
    completed: true
  },
  {
    id: 5,
    title: 'Advice Generator App',
    tech: 'HTML, CSS, JavaScript, Axios, API',
    desc: 'Developed an advice generator that generates random advice whenever a button is clicked. The Advice Slip API was used to generate random quotes of advice.',
    img: `${advice_generator_app}`,
    linkDemo: 'https://jechea14.github.io/advice-generator-app/',
    linkCode: 'https://github.com/jechea14/advice-generator-app',
    completed: true
  },
  {
    id: 6,
    title: 'Personal Portfolio Website',
    tech: 'ReactJS, TailwindCSS',
    desc: 'Designed and developed a personal portfolio to showcase skills and projects. Utilized mobile-first approach and semantic HTML for accessibility.',
    img: `${portfolio}`,
    linkDemo: 'https://jeaniechea.vercel.app',
    linkCode: 'https://github.com/jechea14/jechea14.github.io',
    completed: true
  },
  {
    id: 7,
    title: 'Video Game Dex',
    tech: 'ReactJS, API, NextJS',
    desc: "Developed a video game database website of over 750,000 titles using RAWG’s video game API. Integrated a search filter, increasing user productivity to easily search for a specific video game and discover similar searches. Implemented nested routing pages to show individual video game information.",
    img: `${videogamedex}`,
    linkDemo: 'https://videogamedex.vercel.app/',
    linkCode: 'https://github.com/jechea14/videogamedex',
    completed: true
  },
  {
    id: 8,
    title: 'Custom Mechanical Keyboard Ecommerce Website',
    tech: 'TypeScript, NextJS, API, Tailwindcss, MaterialUI, MantineUI',
    desc: "Designed and developed a user-friendly custom mechanical keyboard e-commerce website, which features a list of mechanical keyboard parts, a nested page routing system that allows users to navigate to specific product pages, and a shopping cart system that allows users to add, decrease, and remove products from their cart. Successfully created a fully functional web application that allows users to browse and shop for mechanical keyboard parts.",
    img: `${ecommerce}`,
    linkDemo: 'https://ecommerce-jechea14.vercel.app/',
    linkCode: 'https://github.com/jechea14/ecommerce',
    completed: true
  },
  {
    id: 9,
    title: 'Full-Stack RuneScape Clan Competition XP Tracker',
    tech: 'Node.js, Express.js, React.js, MongoDB, API, Cronjob',
    desc: "Developing a RuneScape hiscores tracking and analysis website for a double experience competition of a RuneScape clan. Building a RESTful API to track player information and experience gains over time, utilizing cron jobs to periodically consume the RuneScape API and store cleaned data in a Mongodb database. Utilizing data calculations within the database to output results into the API, which is then consumed by the front-end to display the results on the website. Tracking over 100 players and performing data calculations to output results every 4 hours",
    img: ``,
    linkDemo: '',
    linkCode: 'https://github.com/jechea14/RuneScape-DXP-Clan-Competition',
    completed: false
  },
]

const currentProjects = projects.filter((proj) => {
  return proj.completed === false
})

const completedProjects = projects.reverse().filter((proj) => {
  return proj.completed === true
})

const Projects = () => {
  return (
    <section id='projects' className='scroll-mt-8 dark:text-gray-200'>
      
        <h1 className='text-2xl font-bold text-left pb-6 pt-10'>PROJECTS</h1>
        <h1 className='text-xl font-bold text-left pb-6 pt-5'>CURRENT PROJECT(S)</h1> 
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6 lg:grid-cols-3'>
          {currentProjects.map((project) => {
            return ( 
            <ProjectContext.Provider value={project.id} key={project.id}>
              <ProjectCard 
                      title={project.title} 
                      techUsed={project.tech}
                      description={project.desc}
                      image={project.img}
                      linkDemo={project.linkDemo}
                      linkCode={project.linkCode}
                      />
            </ProjectContext.Provider>
          )
          })
          }
        </div>
        <h1 className='text-xl font-bold text-left pb-6 pt-10'>COMPLETED PROJECTS</h1> 
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6 lg:grid-cols-3'>
          {completedProjects.map((project) => {
            return ( 
              <ProjectContext.Provider value={project.id} key={project.id}>
                <ProjectCard
                        title={project.title} 
                        techUsed={project.tech}
                        description={project.desc}
                        image={project.img}
                        linkDemo={project.linkDemo}
                        linkCode={project.linkCode}
                        />
              </ProjectContext.Provider>
            )
          })
          }
        </div>
      
    </section>
  )
}

export default Projects