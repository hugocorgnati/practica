// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const qtyInput = document.querySelector("#qty");
const productInput = document.querySelector("#product");
const list = document.querySelector("#list");


form.addEventListener("submit", (e) => {
    e.preventDefault();

    const newLi = document.createElement("li");
    newLi.innerText = `${qtyInput.value} ${productInput.value}`;
    list.appendChild(newLi);
    qtyInput.value = "";
    productInput.value = "";
});


