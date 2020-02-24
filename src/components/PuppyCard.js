import React, { useState, useEffect } from 'react'
import API from '../utils/API';

function PuppyCard({ active }) {

    const [puppies, setPuppies] = useState([]);

    if(active === "unactive") {
        setPuppies([]);
    }

useEffect(() => { 

    let arrRand = [];
    let puppyArr = [];

    for (let i = 0; i < 3; i++) {
        arrRand[i] = Math.floor(Math.random() * 25);
    }
    API.getPuppies()
    .then(Response => {
        let gif = Response.data.data;
        for (let i = 0; i < arrRand.length; i++) {
            puppyArr[i] = gif[arrRand[i]].images.downsized.url;
        }
        setPuppies(puppyArr);
    })
}, []);

return (
    puppies.map((item, index) => (
        (
            <img style={{ height: "100px", width: "100px" }} alt="" src={item} key={index} />
        )
)))
}

export default PuppyCard
