const numbers = (array) => {
    let b = array[0]
    for (i = array.length - 1; i > 0; i--) {
        for (j = i - 1; j > array.length - 1; j--) {
            b = array[i - 1]
            return b
        }
    }
}

let and = [9, 2, 3, 4, 5, 6, 7, 8];

console.log(numbers(and));



