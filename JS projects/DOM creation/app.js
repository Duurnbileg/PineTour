let newBtn = document.createElement("button")

newBtn.innerText = "Namaig dar!"
newBtn.style.padding = "10px 20px"
newBtn.style.backgroundColor = "orange"
newBtn.style.borderRadius = "5px"

function addTask() {
    let taskListEl = document.getElementById("taskList")
    let inputEl = document.getElementById("taskInput")

    let xBtn = document.createElement("button")
    xBtn.innerText = "Remove"
    let li = document.createElement("li")
    li.innerText = inputEl.value
    li.appendChild(xBtn)
    li.onclick = (xBtn) => li.remove()



    taskListEl.appendChild(li)
    inputEl.value = ""
}