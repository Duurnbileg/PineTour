let display = document.querySelector("#input")
let current = ""
let hadgalsan = 0
let temdeg = ""

function clickNumber(param) {
    current = current + param
    display.textContent = current
}

function uildel(param) {
    hadgalsan = Number(current)
    current = ""
    temdeg = param
}

function equal() {
    let sum = 0
    if (temdeg == "+") {
        sum = hadgalsan + Number(current)
        display.textContent = sum
    } else if (temdeg == "*") {
        sum = hadgalsan * Number(current)
        display.textContent = sum
    } else if (temdeg == "-") {
        sum = hadgalsan - Number(current)
        display.textContent = sum
    } else if (temdeg == "/") {
        sum = hadgalsan / Number(current)
        display.textContent = sum
    }
}

function percent() {
    
}

function clearAll() {
    current = ""
    hadgalsan = 0
    temdeg = ""
    display.textContent = 0
}