

window.addEventListener("DOMContentLoaded", function () {
    console.log("loaded")
    window.setTimeout(() => {
        document.querySelector('.frame').classList.add("in-view");
    }, 1000)
})