import './App.css';
import React from 'react';
import NavBar from './Components/NavBar';
import Intro from './Components/Intro';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills'
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import Contact from './Components/Contact';

function App() {
  return (
    <section className="dark:bg-slate-900 min-h-screen flex flex-col 2xl:max-w-7xl">
        <NavBar/>
      <div className='px-5 md:px-28 2xl:px-0 space-y-10'>
        <Intro/>
        <AboutMe/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </section>
  );
}

export default App;
