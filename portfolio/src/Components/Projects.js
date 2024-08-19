import React from "react";
import ProjectCard from "./ProjectCard";
import advice_generator_app from "../images/advice_generator_app.png";
import rs_clan_comp_scraper from "../images/rs_clan_comp_scraper.png";
import backend_catalog_integration from "../images/backend_catalog_integration.png";
import inventory_rest_api from "../images/inventory_rest_api.png";
import rs_web_scrape_discord_bot from "../images/rs_web_scrape_discord_bot.png";
import portfolio from "../images/portfolio.png";
import videogamedex from "../images/video_game_dex.png";
import ecommerce from "../images/ecommerce.png";
import etk_dxp from "../images/etk_dxp.png";
import Reveal from "./Reveal";

const projects = [
  {
    id: 1,
    title: "RuneScape Archaeology Web Scraping Discord Bot",
    tech: "Python3, Requests, Discord.py",
    desc: [
      "Developed a Discord bot to web scrape RuneScape Wiki web pages based on user input to extract data.",
      "Calculated and displayed the total cost in RuneScape currency and amount of materials needed.",
    ],
    img: `${rs_web_scrape_discord_bot}`,
    linkDemo: "https://www.youtube.com/watch?v=sEGjhaAngnM",
    linkCode: "https://github.com/jechea14/RSArchArtefactMaterialCalculator",
    completed: true,
  },
  {
    id: 2,
    title: "Inventory Management REST API",
    tech: "Python3, Django, Django REST, SQLite",
    desc: [
      "Implemented a basic REST inventory management API with authentication and permissions.",
      "Created CRUD operatin views and used SQLite database to store data.",
    ],
    img: `${inventory_rest_api}`,
    linkDemo: "https://www.youtube.com/watch?v=PM5A7jvtxFM",
    linkCode: "https://github.com/jechea14/django-inventory-api",
    completed: true,
  },
  {
    id: 3,
    title: "RuneScape Clan Competition Web Scraper",
    tech: "Python3, Pandas, Requests, Selenium",
    desc: [
      "Developed an automated game competition web scraper to scrape data off of a RuneScape player tracking website and calculate competition results, which reduced the time required to prepare results by 80%.",
    ],
    img: `${rs_clan_comp_scraper}`,
    linkDemo: "https://www.youtube.com/watch?v=mAiOTb76Poc",
    linkCode: "https://github.com/jechea14/Automated-RS-Clan-DXP-Competition",
    completed: true,
  },
  {
    id: 4,
    title: "Backend Store Catalog Integration",
    tech: "Python3, Pandas, NumPy, API",
    desc: [
      "Integrated sample client store catalog data into a Flask ingestion REST API with authentication.",
      "Cleaned and transformed sample client data then used HTTP requests to send data into a sample api given user authentication.",
    ],
    img: `${backend_catalog_integration}`,
    linkDemo: "",
    linkCode: "https://github.com/jechea14/backend-integrations-test",
    completed: true,
  },
  {
    id: 5,
    title: "Advice Generator App",
    tech: "HTML, CSS, JavaScript, Axios, API",
    desc: [
      "Developed an advice generator that generates random advice whenever a button is clicked.",
      "The Advice Slip API was used to generate random quotes of advice.",
    ],
    img: `${advice_generator_app}`,
    linkDemo: "https://jechea14.github.io/advice-generator-app/",
    linkCode: "https://github.com/jechea14/advice-generator-app",
    completed: true,
  },
  {
    id: 6,
    title: "Personal Portfolio Website",
    tech: "ReactJS, TailwindCSS",
    desc: [
      "Designed and developed a personal portfolio to showcase skills and projects.",
      "Utilized mobile-first approach and semantic HTML for accessibility.",
    ],
    img: `${portfolio}`,
    linkDemo: "https://jeaniechea.vercel.app",
    linkCode: "https://github.com/jechea14/jechea14.github.io",
    completed: true,
  },
  {
    id: 7,
    title: "Video Game Dex",
    tech: "ReactJS, API, NextJS",
    desc: [
      "Developed a video game database website to address the need for a centralized platform to discover and search for video game titles efficiently.",
      "Integrated RAWG’s video game API to build a comprehensive database of over 750,000 titles and implemented a search filter feature to enhance user productivity and enable easy searching for specific video games.",
      "Implemented nested routing pages to provide detailed information about individual games, allowing users to explore and discover similar titles effortlessly.",
      "Increased user engagement by 30% and reduced network bounce rate by 85%.",
    ],
    img: `${videogamedex}`,
    linkDemo: "https://videogamedex.vercel.app/",
    linkCode: "https://github.com/jechea14/videogamedex",
    completed: true,
  },
  {
    id: 8,
    title: "Custom Mechanical Keyboard Ecommerce Website",
    tech: "TypeScript, NextJS, API, Tailwindcss, MaterialUI, MantineUI",
    desc: [
      "Designed and developed a user-friendly e-commerce website for custom mechanical keyboards to address the need for a seamless online shopping experience for keyboard enthusiasts.",
      "Implemented a nested page routing system for easy navigation to specific product pages.",
      "Created a shopping cart system to allow users to add, decrease, and remove products, resulting in a streamlined shopping experience for customers.",
    ],
    img: `${ecommerce}`,
    linkDemo: "https://ecommerce-jechea14.vercel.app/",
    linkCode: "https://github.com/jechea14/ecommerce",
    completed: true,
  },
  {
    id: 9,
    title: "Full-Stack RuneScape Clan Competition XP Tracker",
    tech: "Node.js, Express.js, React.js, MongoDB, API, Cronjob",
    desc: [
      "Developed a RuneScape hiscores tracking and analysis website to address the need for monitoring player progress and facilitating fair competition within a RuneScape guild’s double experience competition",
      "Built an API and database system to track player information and experience gains, resulting in efficient data management and calculations",
      "Successfully tracked over 100 players, performed data calculations every 4 hours, and significantly reduced the time required to prepare competition results by 95%",
      "Improved competition fairness among players within skill levels by 90%, leading to a more engaging and competitive gaming experience",
    ],
    img: `${etk_dxp}`,
    linkDemo: "https://etk-dxp.vercel.app/",
    linkCode: "https://github.com/jechea14/RuneScape-DXP-Clan-Competition",
    completed: true,
  },
];

const currentProjects = projects.filter((proj) => {
  return proj.completed === false;
});

const completedProjects = projects.reverse().filter((proj) => {
  return proj.completed === true;
});

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-8 dark:text-gray-200">
      <h1 className="text-2xl font-bold text-left pb-6 pt-10">PROJECTS</h1>
      <h1 className="text-xl font-bold text-left pb-6 pt-5">
        CURRENT PROJECT(S)
      </h1>
      <div className="grid grid-cols-1 gap-4">
        {currentProjects.map((project) => {
          return (
            <ProjectCard
              title={project.title}
              techUsed={project.tech}
              description={project.desc}
              image={project.img}
              linkDemo={project.linkDemo}
              linkCode={project.linkCode}
            />
          );
        })}
        None! Practicing leetcode and/or exploring tech stacks... Portfolio
        rework coming soon &trade;
      </div>
      <h1 className="text-xl font-bold text-left pb-6 pt-10">
        COMPLETED PROJECTS
      </h1>
      <div className="grid grid-cols-1 gap-4">
        {completedProjects.map((project) => {
          return (
            <Reveal key={project.title}>
              <ProjectCard
                title={project.title}
                techUsed={project.tech}
                description={project.desc}
                image={project.img}
                linkDemo={project.linkDemo}
                linkCode={project.linkCode}
              />
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
