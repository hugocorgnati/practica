const input11 = document.querySelector("#input1");
const h1 = document.querySelector("h1")

input11.addEventListener("input", (e) => {
    h1.innerText = input11.value;
})