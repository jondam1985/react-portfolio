import React from 'react'
import contactData from '../utils/ContactData'

function ContactMeans() {
    return (
        contactData.map((item, index) => (
            <a className="modal-icon" key={index} href={item.url} target={item.target}>
                <img className="contact-img" src={item.src} alt={item.alt} />
            </a>
        ))
    )
}

export default ContactMeans
