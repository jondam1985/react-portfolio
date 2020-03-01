import React from 'react'
import navIcons from '../utils/NavIcons'

function Navigation({setActive}) {

    const displayModal = (id) => {
        setActive("active" + id);
    };

    return (
        <div className="navigation">
        {navIcons.map((item) => (
                <a className="navigation-link" target={item.target} href={item.url} key={item.id} onClick={() => {displayModal(item.id)}}>
                <img className="navigation-img" src={item.src} alt={item.altText} />
                <br/>
                {item.text}
                </a>
        ))}
        </div>
    )
}

export default Navigation
