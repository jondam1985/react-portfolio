import React from 'react'
import Skills from './Skills'

function AboutMe({ active, setActive }) {

    const hideModal = () => {
        setActive("unactive");
    };

    if (active === "activeaboutme") {
        return (
            <div className={active}>
                <img style={{ height: "50px", width: "50px" }} src="assets/close.svg" alt="close modal" onClick={hideModal} />
                <h1>about me</h1>
                <img style={{ height: "50px", width: "50px" }} src="assets/me.png" alt="" />
                <p>I’m a web developer who specializes in building beautiful and functional websites using HTML, CSS and
                    JavaScript. My background was originally in Engineering and Finance, but I decided to make I change when I
            moved to Canada, and here I am now, developing websites and loving it.</p>
                <Skills />
            </div>
        )
    }
    else {
        return null
    }
}

export default AboutMe
