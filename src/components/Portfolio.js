import React from 'react'
import Projects from './Projects'

function Portfolio() {
    return (
        <div>
            <img style={{ height: "50px", width: "50px" }} src="assets/close.svg" alt="close modal" />
            <h1>
                portfolio
            </h1>
            <Projects />
        </div>
    )
}

export default Portfolio
