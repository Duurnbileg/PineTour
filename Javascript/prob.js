// Өгөгдсөн Массивийн элэментүүдийг эсрэг дарааллаар буцаа.

// let massive = [1, 2, 3, 4, 5, 6, 7, 8];
// for (i = massive.length - 1; i > 0 - 1; i--) {
//     console.log(massive[i]);
// }

// Хөрш элэментүүдээсээ их буюу орой элэментүүдийн тоог буцаа

// let massive = [1, 2, 7, 4, 5, 11, 7, 8];


// const oroiOloh = (massive) => {
//     let peaks = [];
//     if (massive[0] > massive[1]) {
//         peaks.push(massive[0]);
//     }
//     for (let i = 1; i < massive.length - 1; i++) {
//         if (
//             massive[i] > massive[i - 1] &&
//             massive[i] > massive[i + 1]
//         ) {
//             peaks.push(massive[i]);
//         }
//     }
//     if (
//         massive[massive.length - 1] >
//         massive[massive.length - 2]
//     ) {
//         peaks.push(massive[massive.length - 1]);
//     }

//     return peaks;
// }

// console.log(oroiOloh(massive));

// Өгөгдсөн массивийн бүх хосыг хэвлэ

// let a = [1, 2, 7, 4, 4, 11, 7, 8];

// const pair = (array) => {
//     let hos = [];
//     for (let i = 0; i < array.length; i++) {
//         for (let j = i + 1; j < array.length - 1; j++) {
//             if (array[i] === array[j]) {
//                 hos.push(array[i], array[j])
//             }
//         }
//     }
//     return hos
// }

// console.log(pair(a));


// Массив болон тоо өгөгдөв. Нийлбэр нь өгөгдсөн тоотой тэнцүү байдаг хосын тоог ол

// let massive1 = [1, 2, 7, 4, 5, 11,8];
// let too = 9;
// let niilber = [];

// for (let i = 0; i < massive1.length; i++) {
//   for (let j = i + 1; j < massive1.length; j++) {
//     if (massive1[i] + massive1[j] === too) {
//       niilber.push([massive1[i], massive1[j]]);
//     }
//   }
// }

// console.log(niilber);

// Өгөгдсөн 2 массивийн огтлолцлыг ол

// let massive1 = [1, 2, 7, 4, 5, 11, 8];
// let massive2 = [3, 10, 7, 23, 12, 11, 8];
// let hos = [];
// for (let i = 0; i < massive1.length; i++) {
//   for (let j = 0; j < massive2.length; j++) {
//     if (massive1[i] === massive2[i]) {
//       hos.push(massive1[i], massive2[i]);
//     }
//   }
// }
// console.log(hos);

// Өгөгдсөн массивийн сөрөг тоонуудыг зүүн талд нь байрлуул

// const Negative = (array) => {
//     let result = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] < 0) {
//             result.unshift(array[i]);
//         } else {
//             result.push(array[i]);
//         }
//     }
//     return result;
// };

// let a = [1, -2, 7, -4, 5, -11, 8];
// console.log(Negative(a));


// Дараалсан тоонуудаас бүрдэх массив өгөгдөх байсан боловч 1 тоо нь дутуу байв. Тэр тоог ол
// const numFind = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] + 1 !== array[i + 1]) {
//             return array[i] + 1
//         }
//     }
// }
// let a = [1, 2, 3, 4, 5, 6, 7, 9, 10];
// console.log(numFind(a));

// 1. Өгөгдсөн массивын гишүүдийн нийлбэрийг ол.
// let massive = [12, 98, 80, 80, 76, 27];
// let b = 0;
// for (let i = 0; i < massive.length; i++) {
//   b = b + massive[i];
// }
// console.log(b);

// 2. Өгөгдсөн массивын 0-ээс их элементүүдийн нийлбэрийг ол.[2,-2,-4,9,80,76,89]
// let a = [2, -2, -4, 9, 80, 76, 89];
// let b = 0;
// for (let i = 0; i < a.length; i++) {
//   if (a[i] > 0) {
//     b = b + a[i];
//   }
// }
// console.log(b);

// 3. Өгөгдсөн массивын хамгийн бага элементийг ол.[12,45,67,2,67,4,7]

// let a = [12, 45, 97, 88, 99, 4, 7];
// let min = a[0];
// for (let i = 0; i < a.length; i++) {
//   if (a[i] < min) {
//     min = a[i];
//   }
// }
// console.log(min);

// 4. Өгөгдсөн массивын хамгийн их элемент хэд дэх нь вэ? Хэрэв хамгийн их элементийн тоо 1-ээс олон бол бага дугаарыг нь хэвлэнэ.[12,1,25,67,87,90,98]

// let a = [12, 1, 98, 67, 87, 90, 98];
// let max = a[0];
// let maxIndex = 0;
// const Findmax = (a) => {
//     for (let i = 1; i < a.length; i++) {
//         if (a[i] >= max) {
//             max = a[i];
//             maxIndex = i;
//         }
//     }
//     return maxIndex
// }

// const numbers = [12, 1, 98, 67, 87, 90, 98]
// const answer = Findmax(numbers)
// console.log(answer);



// 1. Массив болон тоо өгөгдөв. Өгөгдсөн тоо массивд байгаа бол дугаарыг нь, байхгүй бол -1 буцаа

// let a = [12, 1, 98, 67, 87, 90, 98]
// let too = 1
// const numFind = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === too) {
//             return i
//         }
//     }
//     return -1
// }

// console.log(numFind(a));

// 2. Өгөгдсөн массивын элементүүдийг хойш нь нэг цикл шилжилт хий. Өөрөөр хэлбэл 1-рийг 2-рт, 2-рыг 3-рт, гэх мэт сүүлийн элементийг 1-рт тус тус шилжүүл.
//     Жич: 1 2 3 4 5 -> 5 1 2 3 4

// const move1 = (array) => {
//     let last = array[array.length - 1];
//     for (let i = array.length - 1; i > 0; i--) {
//         array[i] = array[i - 1];
//     }
//     array[0] = last;
//     return array;
// };

// let a = [1, 2, 3, 4, 5];
// console.log(move1(a));

// 3. Өгөгдсөн массив өсөх эрэмбээр байвал true үгүй бол false буцаа
// function toUp(array) {
//     for (let i = 0; i < array.length - 1; i++) {
//         if (array[i] > array[i + 1]) {
//             return false
//         }
//     }
//     return true

// }
// const a = [1, 5, 8, 4, 5];
// const answer = toUp(a)
// console.log(answer);

// 4. HackerLand University has the following grading policy:
// - Every student receives a in the inclusive range from  to.
//         - Any  less than  is a failing grade.
//     Sam is a professor at the university and likes to round each student's  according to these rules:
//     If the difference between the  and the next multiple of  is less than, round  up to the next multiple of.
//     If the value of  is less than, no rounding occurs as the result will still be a failing grade.
//     Examples:
//  84 - round to(85 - 84 is less than 3)
//  28 - do not round(result is less than 40)
//  57 - do not round(60 - 57 is 3 or higher)
//  Given the initial value of  for each of Sam's  students, write code to automate the rounding process.

// 1.Массивын дундаж ба медиан
// Массив авч, дундаж(average) болон медианыг буцаа.
//     Жишээ: [1, 2, 3, 4, 5] → { avg: 3, median: 3 }
// 2.String доторх эгшиг тоолох
// String авч, хэдэн эгшиг(a, e, i, o, u) байгааг буцаа.
//     Жишээ: "hello" → 2
// 3.Anagram шалгах
// Хоёр string авч, үсгийн дараалал өөр боловч ижил үсгээр бүтсэн эсэхийг шалга.
//     Жишээ: "listen" & "silent" → true
// 4.Тоог Ром тоо болгох
// Тоо авч, Ром цифр болгон буцаадаг функц бич.
//     Жишээ: 14 → XIV, 2025 → MMXXV
// 5.Longest Increasing Subsequence(LIС) – энгийн хувилбар
// Массив авч, хамгийн урт өсөх дарааллын уртыг буцаа.
//     Жишээ: [10, 9, 2, 5, 3, 7, 101, 18] → 4([2, 3, 7, 101])
// 6.String доторх хамгийн урт palindrome substring
// String авч, хамгийн урт палиндром substring буцаа.
//     Жишээ: "babad" → "bab" эсвэл "aba"
// 7.Массив дахь дундажтай ойрхон тоо
// Массив авч, дундажид хамгийн ойрхон тоог буцаа.
//     Жишээ: [2, 5, 8, 12] → 8(дундаж 6.75)

// 1. Remove Duplicates from Sorted Array-leet
// nums = [1, 4, 6, 6, 8, 10]
// function remove(array) {
//     let single = [];
//     for (let i = 0; i < array.length; i++) {
//         if (!single.includes(array[i])) {
//             single.push(array[i]);
//         }
//     }
//     return single;
// }

// let nums = [1, 4, 6, 5, 6, 8, 10];
// console.log(remove(nums));

// 2. Өгөгдсөн гурвалжингийн гурвалжин болж чадах эсэхийг шалгаад, талбайг ол.
// function triangle(a, b, c) {
//     if (a + b > c && a + c > b && b + c > a) {
//         let p = (a + b + c) / 2;
//         let S = Math.sqrt(p * (p - a) * (p - b) * (p - c));
//         return "Гурвалжингийн талбай нь: " + S;
//     } else {
//         return "Гурвалжин болохгүй";
//     }
// }
// let a = 3;
// let b = 4;
// let c = 5;
// console.log(triangle(a, b, c));

// 3. Өгөгдсөн утасны дугаарыг аль оператор болохыг буцаа.


// function operator(phone) {
//     let a = phone.toString().slice(0, 2)

//     if (a == "99" || a == "85") {
//         return "Mobicom"
//     } else if (a == "88" || a == "80") {
//         return "Unitel"
//     } else if (a == "96" || a == "90") {
//         return "Skytel"
//     } else if (a == "98" || a == "93") {
//         return "G-Mobile"
//     }
// }
// let numb = 99664639
// const answer = operator(numb)
// console.log(answer);

// 4. Өгөгдсөн тойргийг талбайг ол. r=4

// function talbai(radius) {
//     s = 0
//     pi = 3.14
//     s = pi * radius * radius
//     return s
// }
// let r = 4
// const answer = talbai(r)
// console.log(answer);


// 5. Өгөгдсөн тооны цифрүүдийн нийлбэрийг ол.
// function sumOfArray(too) {
//     let sum = 0
//     let b = 0
//     for (let i = too; i > 1; i = i / 10) {
//         b = too % 10
//         sum = sum + b
//         too = (too - b) / 10
//     }
//     return sum
// }
// let nums = 128;
// const answer = sumOfArray(nums)
// console.log(answer);

// 6. Өгөгдсөн тоо палиндром бол true үгүй бол false буцаа. Палиндром тоо гэдэг нь тонгорогсон тоотойгоо тэнцүү тоог хэлнэ
// function palindrome(numb) {
//     let a = numb.toString()
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] !== a[a.length - 1 - i]) {
//             return false
//         }
//         return true
//     }
// }

// let number = 2442
// const answer = palindrome(number)
// console.log(answer);

// 7. Өгөгдсөн хоёр натурал тооны хамгийн их ерөнхий хуваагчийг ол.

function natural(a, b) {
    let start = 0
    let divider = 0
    if (a > b) {
        start = b
    } else if (a < b) {
        start = a
    }
    for (let i = start; i > 0; i--) {
        if (a % i == 0 && b % i == 0) {
            divider = i
        }
    }
    
}

let too1 = 15
let too2 = 24
const answer = natural(too1, too2)
console.log(answer);


// 8. Хүү n гишгүүртэй шатаар өгсөхдөө 2 янзаар урагшилж чадна. Зогсож байгаа гишгүүрийнхээ дараах гишгүүрт, эсвэл 1 алгасаад дараагийн гишгүүрт алхаж очно. Нэгдүгээр гишгүүрийн өмнө зогсож байгаа хүү n-р гишгүүр хүртэл хичнээн ялгаатай маршрутаар алхаж очиж вэ?
// 9. Фибоначчийн дарааллын n-р гишүүнийг ол.
// 10. Өгөгдөн массивийн i аас j дэх гишүүдийн хамгийн багыг ол
// 11. arr = [4, 3, 6, 65, 8, 7, 90, 10, 5] өсөх дарааллаар эрэмблэ.
// 12 . Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order. 
// Example 1:
// Input: nums = [1, 3, 5, 6], target = 5 Output: 2
// Example 2:
// Input: nums = [1, 3, 5, 6], target = 2 Output: 1

