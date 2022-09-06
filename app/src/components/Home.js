import { ProjectCard } from '../cards/ProjectCard'
import projects from '../context/projects.json'
import arrow from '../assets/arrow.svg'
import '../styles/Home.css'
import { useEffect, useState } from 'react'

export default function Home() {

  let [projectPosition, setPosition] = useState(0);

  const projectCount = projects.length

  const scrollPrevious = () => {
    const isFirst = projectPosition === 0;
    const newPosition = isFirst ? projectCount - 1 : projectPosition - 1;
    setPosition(newPosition);
    document.getElementById(newPosition).scrollIntoView({behavior: "smooth", block: "center", inline: "center"})
  }
  const scrollNext = () => {
    const isLast = projectPosition === projectCount - 1;
    const newPosition = isLast ? 0 : projectPosition + 1;
    setPosition(newPosition);
    document.getElementById(newPosition).scrollIntoView({behavior: "smooth", block: "center", inline: "center"})
  }

  return (
    <>
      <div className='bioContainer' data-aos="fade-up" data-aos-offset="300">
        <h4>Software Engineer</h4>
        <p>React | Python | Node</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div className='projectsContainer' data-aos="fade-up" data-aos-offset="100">
        <img alt='scroll-left' src={arrow} style={{width: "52px", transform: "scaleX(-1)", filter: "invert(100%)"}} onClick={() =>scrollPrevious()} />
          <div className='projectsCarousel'>
            <>
              {projects.map((Project, i) => (
                  <ProjectCard key={i} title={Project.name} id={i} textColor={Project.textColor} description={Project.description} background={Project.background}/>
              ))}
            </>
          </div>
        <img alt='scroll-right' src={arrow} style={{width: "52px", filter: "invert(100%)", alignSelf: "center"}} onClick={() => scrollNext()}/>
      </div>
        <div className='projectsControl'>
          <p>position: {projectPosition}</p>
        </div>
    </>
  )
}



