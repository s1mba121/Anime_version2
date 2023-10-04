const button_1 = document.querySelector(".button_1");
const button_2 = document.querySelector(".button_2");
const anime = document.querySelector(".anime");
const nav = document.querySelector(".anime_nav");
const line = document.querySelector(".line");
const anime_download = document.querySelector(".anime_download");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

button_1.addEventListener("click", async () => {
    // add
    anime.classList.add("clicked");
    nav.classList.add("clicked");
    line.classList.add("clicked");
    // remove
    anime_download.classList.remove("clicked");

})

button_2.addEventListener("click", () => {
    // remove
    anime.classList.remove("clicked");
    nav.classList.remove("clicked");
    line.classList.remove("clicked");
    // add
    setTimeout(function() {
        anime_download.classList.add("clicked");
      }, 100);
    

})