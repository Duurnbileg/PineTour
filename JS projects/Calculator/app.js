let display = document.querySelector("#input");
let current = "";
let hadgalsan = 0;
let temdeg = "";

function clickNumber(param) {
    current = current + param;
    display.textContent = current;
}

function uildel(param) {
    if (current == "") {
        temdeg = param;
        return;
    }

    if (temdeg !== "") {
        equal();
    } else {
        hadgalsan = Number(current);
    }
    current = "";
    temdeg = param;
}

function equal() {
    if (current === "" || temdeg === "") {
        return;
    }
    let sum = 0;
    let secondNumber = Number(current);
    if (temdeg === "+") {
        sum = hadgalsan + secondNumber;
    } else if (temdeg === "*") {
        sum = hadgalsan * secondNumber;
    } else if (temdeg === "-") {
        sum = hadgalsan - secondNumber;
    } else if (temdeg === "/") {
        if (secondNumber === 0) {
            display.textContent = "Error";
            current = "";
            hadgalsan = 0;
            temdeg = "";
            return;
        }
        sum = hadgalsan / secondNumber;
    }
    display.textContent = sum;
    current = String(sum);
    hadgalsan = sum;
    temdeg = "";
}

function clearAll() {
    current = "";
    hadgalsan = 0;
    temdeg = "";
    display.textContent = "0";
}

function percent() {
    if (current === "") {
        return;
    }
    current = String(Number(current) / 100);
    display.textContent = current;
}

function clickDot() {
    if (current === "") {
        current = "0.";
    } else if (!current.includes(".")) {
        current = current + ".";
    }
    display.textContent = current;
}

function toggleSign() {
    if (current === "") {
        return;
    }
    current = String(Number(current) * -1);
    display.textContent = current;
}

function remove() {
    if (current === "") {
        return;
    }
    current = current.slice(0, -1);
    if (current === "") {
        display.textContent = "0";
    } else {
        display.textContent = current;
    }
}