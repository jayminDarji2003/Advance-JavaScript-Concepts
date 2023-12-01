// setInterval(() => {
//     console.log("jaymin darji");
// }, 2000);


// this function called arrow function.
// const fnx = () => {
//     console.log("setTimeOut function called");
//     document.querySelector('h1').innerText = "Chai aur JavaScript";
// }

// const changeMe = setTimeout(fnx, 2000);

// document.querySelector("#stop").addEventListener("click", () => {
//     clearTimeout(changeMe);
//     console.log("btn clicked");
// })



// project started here.

// generate a random color
const generateColor = function () {
    const hax = "0123456789ABCDEF";
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += hax[Math.floor(Math.random() * 16)]
    }
    console.log(color);
    return color;
}

generateColor()

let changeColor;

const startChangingColor = function () {
    changeColor = setInterval(() => {
        document.body.style.backgroundColor = generateColor();
    }, 1000);
}

const stopChangingColor = function () {
    clearInterval(changeColor);
    changeColor = null;
    console.log("stoping color change");
}


document.querySelector("#start").addEventListener("click", startChangingColor);

document.querySelector("#stop").addEventListener("click", stopChangingColor);