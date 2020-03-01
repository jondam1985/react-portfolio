import React from 'react'
import skillIcons from '../utils/SkillsIcons'

function Skills() {
    return (
        skillIcons.map((item, index) => (
            <img className="modal-icon" key={index} src={item.src} alt={item.altText}/>
        ))
    )
}

export default Skills
