import React from 'react'
import Skills from './Skills'

function AboutMe({ active, setActive }) {

    const hideModal = () => {
        setActive("unactive");
    };

    if (active === "activeaboutme") {
        return (
            <div className="about-me modal-padding">
                <img className="modal-close" src="assets/close.svg" alt="close modal" onClick={hideModal} />
                <h1 className="modal-title">about me</h1>
                <img className="my-photo" src="assets/me.png" alt="" />
                <p className="modal-description">I’m a web developer who specializes in building beautiful and functional websites using HTML, CSS and
                    JavaScript. My background was originally in Engineering and Finance, but I decided to make I change when I
            moved to Canada, and here I am now, developing websites and loving it.</p>
                <h2 className="modal-subheader">tech skills</h2>
                <div className="modal-icons-group">
                    <Skills />
                </div>
            </div>
        )
    }
    else {
        return null
    }
}

export default AboutMe
