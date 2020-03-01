import React from 'react'
import PuppyCard from './PuppyCard'

function Puppies({ active, setActive }) {

    const hideModal = () => {
        setActive("unactive");
    };

    if (active === "activepuppies") {

        return (
            <div className="puppies modal-padding">
                <img className="modal-close" src="assets/close.svg" alt="close modal" onClick={hideModal} />
                <h1 className="modal-title">puppies</h1>
                <div class="puppy-cards">
                    <PuppyCard active={active} />
                </div>
            </div>
        )
    }
    else {
        return null
    }
}

export default Puppies
