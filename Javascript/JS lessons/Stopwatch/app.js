// setTimeout(() => {
//     console.log("hello");
// }, 1000
// )

const id = setInterval(() => {
    console.log("Hello");
}, 1000)

setTimeout(() => {
    clearInterval(id)
}, 10 * 1000)
