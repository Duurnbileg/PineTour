let container = document.querySelector(".background")


function changeColor() {
    container.classList.toggle(`background-black`)
}

let img = document.querySelector("#animal")
let caption = document.querySelector("#caption")

function changeAnimal() {
    const newSrc = "/pood.png"
    const newAlt = "Нохой"
    const newTxt = "Энэ бол нохой"

    img.setAttribute("src", newSrc)
    img.setAttribute("alt", newAlt)
    caption.textContent = newTxt
}




