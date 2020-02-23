import React from 'react'
import icons from '../utils/NavIcons'

function Navigation() {
    return (
        icons.map(item => (
            <div>
                <a href="#">
                <img style={{ height: "50px", width: "50px" }} src={item.src} alt={item.altText} />
                <br/>
                {item.text}
                </a>
            </div>
        ))
    )
}

export default Navigation
