import React from 'react'
import projects from '../utils/PortfolioData'

function Projects() {
    return (
        projects.map((item, index) => (
            <div className="project" key={index}>
                <h2 className="modal-subheader">{item.title}</h2>
                <img className="project-screen" src={item.src} alt="" />
                <p className="modal-description">{item.description}</p>
                <a className="project-link" href={item.url} target="_blank">visit website</a>
            </div>
        ))
    )
}

export default Projects
