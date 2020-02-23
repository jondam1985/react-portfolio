import React from 'react'
import navIcons from '../utils/NavIcons'

function Navigation() {
    return (
        navIcons.map(item => (
            <div>
                <a target={item.target} href={item.url} key={item.id}>
                <img style={{ height: "50px", width: "50px" }} src={item.src} alt={item.altText} />
                <br/>
                {item.text}
                </a>
            </div>
        ))
    )
}

export default Navigation
