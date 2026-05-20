function addTask() {
    let taskListEl = document.getElementById("taskList")
    let inputEl = document.getElementById("taskInput")

    let xBtn = document.createElement("button")
    xBtn.innerText = "Done!"
    let li = document.createElement("li")
    li.innerText = inputEl.value
    li.appendChild(xBtn)
    li.onclick = (xBtn) => li.remove()

    if (inputEl.value == "") {
        addTask()
    }

    taskListEl.appendChild(li)
    inputEl.value = ""
}