const button = document.querySelector(".btn");
const image = document.querySelector(".img");
const url = "http://aws.random.cat//meow";

async function fetchHandler() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        image.src = data.file;
    } catch (error) {
        alert(error)
    }
}


button.addEventListener("click", () => {
    let isloaded = image.complete;

    if (isloaded) {
        fetchHandler();
    }
});

