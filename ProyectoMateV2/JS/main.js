const nav = document.querySelector("#nav");
const abrir = document.querySelector("#open");
const cerrar = document.querySelector("#close");
const blockScroll = document.querySelector("#block_scroll")

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

abrir.addEventListener("click", () => {
    blockScroll.classList.add("block_scroll");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

cerrar.addEventListener("click", () => {
    blockScroll.classList.remove("block_scroll");
})

