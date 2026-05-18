let title = document.getElementById("pageTitle")
let description1 = document.querySelector(".description")
let description2 = document.querySelector(".description2")
let button = document.querySelector("button")
let message = document.getElementById("greetings")
message.textContent = "Сайн байна уу! Сурагчаа"
let fact = document.getElementById("fact")
fact.textContent = "Алдааг (bug) олох, засах процессийг дебаг (debug) гэж нэрлэдэг."
const nameInput = document.getElementById("nameInput")
const name = nameInput.value

function greetUser() {
    const name = document.getElementById("nameInput").value
    const output = document.getElementById("outputText")
    output.textContent = `Сайн уу! ${name}`
}
console.log("1st ", title.textContent);
console.log("2nd ", description1.textContent);
console.log("3rd ", description2.textContent);
console.log("4th ", button.textContent);
console.log("5th ", message.textContent);

const resultBox = document.getElementById("resultBox")
function showMessage() {
    resultBox.innerHTML =
        "Дэлхийн хамгийн өндөр уул нь Эверест бөгөөд өндөр нь 8848м юм."
}

const cakeOrder = document.getElementById("cakeOrder")
function showOrder(ner) {
    cakeOrder.innerHTML =
        `Таны ${ner}-ны захиалгыг авлаа.`
}


