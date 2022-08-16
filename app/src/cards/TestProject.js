import React from 'react'
import '../styles/ProjectCard.css'

export const TestProject = () => {
  return (
    <div className='projectCard' style={{ backgroundImage: "url(https://i.ibb.co/HP7ry64/laura-chouette-Wzl-Tl8-Lrgv0-unsplash.jpg)", backgroundSize: "cover" }}>
        <div style={{height: "650px", display: "flex", flexDirection: "column"}}>
          <h1 style={{color: "white"}} className='projectTitle'>Project Title</h1>
          <div style={{display: "flex", margin: "20px", color: "white"}}>
            <p>language</p>
          </div>
        </div>
    </div>
  )
}
