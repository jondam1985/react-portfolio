import React from 'react'
import PuppyCard from './PuppyCard'

function Puppies() {
    return (
        <div>
            <img style={{ height: "50px", width: "50px" }} src="assets/close.svg" alt="close modal" />
            <h1>puppies</h1>
            <PuppyCard />
        </div>
    )
}

export default Puppies
