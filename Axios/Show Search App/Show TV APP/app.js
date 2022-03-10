const form = document.querySelector("#searchForm");
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    await axiosSearch()
})

const axiosSearch = async () => {
    const userSearch = form.elements.query.value;
    const config = { params: { q: userSearch } }
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config)
    makeImages(res.data)
    form.elements.query.value = "";
}

const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            sourceImg = result.show.image.medium;
            const img = document.createElement("img")
            img.src = sourceImg
            document.body.append(img)
        }
    }

}

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", (e) => {
    e.stopPropagation();
    form.elements.query.value = ""
    const img = document.querySelectorAll("img")
    for (let eachImg of img) {
        eachImg.remove()
    }
})
