import React from 'react'
import PuppyCard from './PuppyCard'

function Puppies({ active, setActive}) {

    const hideModal = () => {
        setActive("unactive");
    };

    if(active === "activepuppies") {

    return (
        <div>
            <img style={{ height: "50px", width: "50px" }} src="assets/close.svg" alt="close modal" onClick={hideModal} />
            <h1>puppies</h1>
            <PuppyCard active={active} />
        </div>
    )
}
else {
    return null
}
}

export default Puppies
