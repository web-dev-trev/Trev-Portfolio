import { ProjectCard } from '../cards/ProjectCard'
import projects from '../context/projects.json'
import arrow from '../assets/arrow.svg'
import '../styles/Home.css'
import { useState, useRef } from 'react'
import scrollIntoView from 'scroll-into-view'

export default function Home() {

  const [rightArrow, setRightArrow] = useState(true);
  const [rightArrowState, setRightState] = useState("invert(100%)")
  const [leftArrow, setLeftArrow] = useState(true);
  const [leftArrowState, setLeftState] = useState("invert(100%)")
  const [projectPosition, setPosition] = useState(0);

  const scrollLeft = function(){
    if(projectPosition < 0) {
      setPosition(projectPosition + 1)
      setLeftState(leftArrowState == "invert(100%)")
    } else if(projectPosition === 0){
      setLeftState(leftArrowState == "invert(90%)")
    }
  }

  const scrollRight = function(){

  }

  return (
    <>
      <div className='bioContainer' data-aos="fade-up" data-aos-offset="300">
        <h4>Software Engineer</h4>
        <p>React | Python | Node</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div className='projectsContainer' data-aos="fade-up" data-aos-offset="100">
        <div className='projectsCarousel'>
          <>
            {projects.map((Project) => (
                <ProjectCard  title={Project.name} id={Project.id} textColor={Project.textColor} description={Project.description} background={Project.background}/>
            ))}
          </>
        </div>
      </div>
        <div className='projectsControl'>
          <img alt='scroll-left' src={arrow} style={{width: "52px", transform: "scaleX(-1)",  filter: leftArrowState}} onClick={() =>scrollLeft()} />
          <img alt='scroll-right' src={arrow} style={{width: "52px", filter: rightArrowState}} onClick={() => scrollRight()}/>
          <p>position: {projectPosition}</p>
        </div>
    </>
  )
}



