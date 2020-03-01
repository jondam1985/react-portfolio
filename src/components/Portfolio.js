import React from 'react'
import Projects from './Projects'

function Portfolio({ active, setActive }) {

    const hideModal = () => {
        setActive("unactive");
    };

    if (active === "activeportfolio") {

        return (
            <div className="portfolio modal-padding">
                <img className="modal-close" src="assets/close.svg" alt="close modal" onClick={hideModal} />
                <h1 className="modal-title">
                    portfolio
            </h1>
                <div className="portfolio-projects">
                    <Projects />
                </div>
            </div>
        )
    }
    else {
        return null
    }
}

export default Portfolio
