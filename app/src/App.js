import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import { TestProject } from './cards/TestProject';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: false,
      offset: 50,
    });
  }, []);
  return (
  <>
    <div className='pageContainer'>
      <Nav data-aos="fade-up"/>
      <hr/>
      <div className='bioContainer' data-aos="fade-up" data-aos-offset="300">
        <h4>Software Engineer</h4>
        <p>React | Python | Node</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      </div>
      <div className='projectsContainer' data-aos="fade-up" data-aos-offset="100">
        <div className='projectsCarousel'>
          <TestProject/>
          <TestProject/>
          <TestProject/>
          <TestProject/>
          <TestProject/>
        </div>
      </div>
        <div className='projectsControl'>
          <a>scroll-left</a>
          <a>scroll-right</a>
        </div>
  </>
  );
}

export default App;
