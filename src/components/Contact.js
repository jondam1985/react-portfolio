import React from 'react'
import ContactMeans from './ContactMeans'

function Contact() {
    return (
        <div>
            <img style={{ height: "50px", width: "50px" }} src="assets/close.svg" alt="close modal" />
            <h1>contact</h1>
            <p>So many ways to stay in touch. Please pick your favourite from the selection below. If you want to know more about me, my work or anything else (meaning of life, are crabs immortal?, etc.) just reach out to me and I'll happily get back to you.</p>
            <ContactMeans />
        </div>
    )
}

export default Contact
