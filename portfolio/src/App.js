import './App.css';
import NavBar from './Components/NavBar';
import Intro from './Components/Intro';
import AboutMe from './Components/AboutMe';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
        <NavBar/>
      <div className='px-5 md:px-28'>
        <Intro/>
        <AboutMe/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;