// const numbers = (array) => {
//     let b = array[0]
//     for (i = array.length - 1; i > 0; i--) {
//         for (j = i - 1; j > array.length - 1; j--) {
//             b = array[i - 1]
//             return b
//         }
//     }
// }

// let and = [9, 2, 3, 4, 5, 6, 7, 8];

// console.log(numbers(and));

// Хөрш элэментүүдээсээ их буюу орой элэментүүдийн тоог буцаа

let a = [11, 2, 7, 4, 5, 11, 7, 12];

const numbers = (array) => {
    oroi = []
    if (a[0] > a[1]) {
        oroi.push(a[0])
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i - 1] && array[i] > array[i + 1]) {
            oroi.push(array[i]);
        }
    }
    if (a.length - 1 >a.le {

    }
    return oroi
}

console.log(numbers(a));

// 1. Өгөгдсөн 3 массивын гишүүдийн нийлбэрийн нийлбэрийг ол.

// let numbers = [12, 98, 80, 80, 76, 27, 7];
// let numbers2 = [12, 98, 80, 80, 76, 27, 72];
// let numbers3 = [12, 98, 80, 80, 76, 27, 73];

// function SumOfArray(x) {
//     let sum = 0;

//     for (let i = 0; i < x.length; i++) {
//         sum = sum + x[i];
//     }
//     return sum;
// }

// const niilber = SumOfArray(numbers);
// const niilber2 = SumOfArray(numbers2);
// const niilber3 = SumOfArray(numbers3);

// let hoosonArr = [];
// hoosonArr.push(niilber);
// hoosonArr.push(niilber2);
// hoosonArr.push(niilber3);

// console.log(SumOfArray(hoosonArr));


