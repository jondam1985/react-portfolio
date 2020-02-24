import React from 'react'
import Projects from './Projects'

function Portfolio({ active, setActive }) {

    const hideModal = () => {
        setActive("unactive");
    };

    if (active === "activeportfolio") {

        return (
            <div>
                <img style={{ height: "50px", width: "50px" }} src="assets/close.svg" alt="close modal" onClick={hideModal} />
                <h1>
                    portfolio
            </h1>
                <Projects />
            </div>
        )
    }
    else {
        return null
    }
}

export default Portfolio
