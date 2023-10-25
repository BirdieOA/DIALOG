const SHOW_TEXT = document.getElementById("showText")
const FORMULARIO = document.getElementById("formulario")
const TEXT = document.getElementById("text")

SHOW_TEXT.addEventListener("click", () => {
    text.innerText = ('UN DIALOG')
    FORMULARIO.showModal();
})