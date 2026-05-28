let startBtn = document.querySelector("#startBtn")
let resetBtn = document.querySelector("#resetBtn")
let pauseBtn = document.querySelector("#pauseBtn")

let [hours, minutes, seconds] = document.querySelectorAll("#timer > div")
let time = 0
let intervalId = null
let isPaused = false

startBtn.addEventListener("click", () => {

    if (intervalId) return

    intervalId = setInterval(() => {
        time++
        let pastHours = Math.floor(time / 3600)
        let pastMinutes = Math.floor((time / 60) % 60)
        let pastSeconds = time % 60

        hours.textContent = pastHours.toString().padStart(2, "0")
        minutes.textContent = pastMinutes.toString().padStart(2, "0")
        seconds.textContent = pastSeconds.toString().padStart(2, "0")
    }, 100)
})

pauseBtn.addEventListener("click", () => {
    clearInterval(intervalId)
    intervalId = null
})

resetBtn.addEventListener("click", () => {
    clearInterval(intervalId)
    intervalId = null
    time = 0

    hours.textContent = "00"
    minutes.textContent = "00"
    seconds.textContent = "00"
})