let startBtn = document.querySelector("#startBtn")
let [hours, minutes, seconds] = document.querySelectorAll("#timer>div")

let time = 0
let intervalId = null

startBtn.addEventListener("click", () => {
    if (intervalId) {
        clearInterval(intervalId)
        return
    }

    intervalId = setInterval() = {
        time++
    let pastHours = time / 3600
    let pastMinutes = (time / 60) % 60
    let pastSeconds = time / 60

    hours.
        
    }
})