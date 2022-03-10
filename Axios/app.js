const button = document.querySelector("button")
const ul = document.querySelector("#jokes")

const getDadJoke = async () => {
    try {
        const config = {
            headers: { Accept: 'application/json' }
        };
        const resp = await axios.get('https://icanhazdadjoke.com', config);
        return resp.data.joke;
    }
    catch {
        return "Oh no, something is wrong..."
    }
}

const addNewJoke = async () => {
    const jokeText = await getDadJoke()
    const li = document.createElement("li")
    li.append(jokeText)
    ul.append(li)
}



button.addEventListener("click", addNewJoke)