import React from 'react'
import AboutMe from './AboutMe'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Puppies from './Puppies'

function Modals({ active, setActive }) {
    return (
        <div className="modal">
            <AboutMe active={active} setActive={setActive} />
            <Portfolio active={active} setActive={setActive} />
            <Contact active={active} setActive={setActive} />
            <Puppies active={active} setActive={setActive} />
        </div>
        
    )
}

export default Modals
