const button1 = document.querySelector("#button1")
const h1 = document.querySelector("#header")

const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    if (r < 100 && g < 100 && b < 100) {
        h1.style.color = "white";
    } else {
        h1.style.color = "black";
    }
    return `rgb(${r}, ${g}, ${b})`;
}

button1.addEventListener("click", () => {
    const randomColor = makeRandomColor();
    document.body.style.backgroundColor = randomColor;
    h1.innerText = `The new color is ${randomColor}`;
})



