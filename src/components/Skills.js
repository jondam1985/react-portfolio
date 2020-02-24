import React from 'react'
import skillIcons from '../utils/SkillsIcons'

function Skills() {
    return (
        skillIcons.map((item, index) => (
            <img style={{height:"50px", width:"50px"}} key={index} src={item.src} alt={item.altText}/>
        ))
    )
}

export default Skills
