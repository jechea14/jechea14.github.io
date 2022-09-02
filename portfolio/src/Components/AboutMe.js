import React from 'react'

const AboutMe = () => {
  return (
    <section id='about' className='scroll-mt-8'>
      <h1 className='text-2xl font-bold text-left pb-6 pt-10 dark:text-gray-200'>ABOUT ME</h1>
      <div className='lg:px-15 lg:text-lg p-8 md:p-10 border space-y-3 rounded-xl bg-gray-50 shadow-md hover:shadow-xl hover:transition dark:text-gray-200 dark:bg-slate-700 dark:border-slate-700'>
        <p>
          I am a blooming front-end software engineer with a background in computer engineering. 
          I started my journey as a software developer after obtaining my <span className='text-purple-600 font-semibold dark:text-purple-300'>Bachelors in Computer Engineering from San Jose State University</span>.
        </p>
        <p>
          I learned Python and enjoyed it from building <span className='hover:cursor-pointer underline'><a href='https://github.com/jechea14/Automated-RS-Clan-DXP-Competition' target='_blank'>web scrapers</a></span> and <span className='hover:cursor-pointer underline'><a href='https://github.com/jechea14/django-inventory-api' target='_blank'>APIs</a></span> and wanted to go into back-end web development with Python. 
          However, I became very interested in front-end development while developing my web scrapers as I wanted to display data on a webpage. 
          After learning HTML, CSS, JavaScript, and other front-end technologies, I fell in love with front-end and wanted to learn more about the front-end world and pursue front-end web development as a software engineer.
        </p>
        <p>
          I love coding and solving problems through code, and I am excited to work alongside other engineers and learn so much more! 
          I'm looking for opportunities in junior/new grad front-end web development positions to start my career and learn among professionals.
          I'm also open to back-end software engineering positions as well.
        </p>
      </div>      
    </section>
  )
}

export default AboutMe