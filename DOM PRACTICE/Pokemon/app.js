// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const containerDiv = document.querySelector("#container");


for (let i = 1; i <= 151; i++) {
    const divPokemon = document.createElement("div");
    divPokemon.classList.add("divPokemonClass");
    const labelPokemon = document.createElement("span");
    labelPokemon.innerText = `#${i}`
    const pokemonImg = document.createElement("img");
    pokemonImg.classList.add("imgPokemon");
    pokemonImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
    divPokemon.appendChild(pokemonImg);
    divPokemon.appendChild(labelPokemon);
    containerDiv.appendChild(divPokemon);
}