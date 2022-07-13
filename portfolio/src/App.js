import './App.css';
import NavBar from './NavBar';
import IntroCard from './IntroCard';
import AboutMe from './AboutMe';
import Work from './Work';
import Footer from './Footer';

function App() {
  return (
    <div className="min-h-screen px-56">
      <NavBar/>
      <IntroCard/>
      <AboutMe/>
      <Work/>
      <Footer/>
    </div>
  );
}

export default App;
