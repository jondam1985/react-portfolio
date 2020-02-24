import React from 'react'

function Hero() {

    window.addEventListener("load", () => {

        let helloArr = ["hola", "salut", "nǐ hǎo", "ciao", "konnichiwa", "hallo", "olá", "hello,"];
        let index = 0;
        let rotation = setInterval(() => {
            document.getElementById("rotatingText").innerText = helloArr[index];
            index++;
            if (index === helloArr.length) {
                clearInterval(rotation);
            }
        }, 500);
    })

    return (
        <div>
            <h1 id="rotatingText">
                hello,
        </h1>
            <h1>
                i am damian
        </h1>
            <p>
                your friendly neighbourhood web developer
        </p>
        </div>
    )
}

export default Hero
