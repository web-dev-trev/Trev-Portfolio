import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "aos/dist/aos.css";
import Nav from './components/Nav';
import Home from './components/Home'
import AOS from "aos";
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

var scrollIntoView = require('scroll-into-view');

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
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  </>
  );
}

export default App;
