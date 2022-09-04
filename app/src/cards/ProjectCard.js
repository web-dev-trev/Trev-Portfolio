import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/ProjectCard.css'

export const ProjectCard = (props) => {
  return (
      <div id={props.id} className='projectCard' style={{ background: "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)), url("+props.background+")", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
          <div style={{height: "650px", display: "flex", flexDirection: "column", zIndex: "2"}}>
            <h1 style={{color: props.textColor}} className='projectTitle'>{props.title}</h1>
            <div style={{display: "flex", margin: "20px", color: "white"}}>
              <p style={{color: props.textColor}}>{props.description}</p>
            </div>
          </div>
          <div>
            
          </div>
      </div>
  )
}
