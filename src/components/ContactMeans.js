import React from 'react'
import contactData from '../utils/ContactData'

function ContactMeans() {
    return (
        contactData.map(item => (
            <a key={item.id} href={item.url} target={item.target}>
                <img style={{ height: "50px", width: "50px" }} src={item.src} alt={item.alt} />
            </a>
        ))
    )
}

export default ContactMeans
