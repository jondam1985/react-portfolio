import React from 'react'
import projects from '../utils/PortfolioData'

function Projects() {
    return (
        projects.map((item, index) => (
            <div key={index}>
                <h2>{item.title}</h2>
                <img style={{ height: "50px", width: "50px" }} src={item.src} alt="" />
                <p>{item.description}</p>
                <a href={item.url}>visit website</a>
            </div>
        ))
    )
}

export default Projects
