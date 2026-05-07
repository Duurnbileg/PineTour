// Өгөгдсөн Массивийн элэментүүдийг эсрэг дарааллаар буцаа.
// let massive = [1, 2, 3, 4, 5, 6, 7, 8];
// for (i = massive.length - 1; i > 0 - 1; i--) {
//   console.log(massive[i]);
// }

// Хөрш элэментүүдээсээ их буюу орой элэментүүдийн тоог буцаа

// let massive = [1, 2, 7, 4, 5, 11, 7, 8];
// let oroi = [];

// for (let i = 1; i < massive.length - 1; i++) {
//   if (massive[i] > massive[i - 1] && massive[i] > massive[i + 1]) {
//     oroi.push(massive[i]);
//   }
// }

// console.log(oroi);

// Өгөгдсөн массивийн бүх хосыг хэвлэ
// let massive1 = [1, 2, 7, 4, 5, 11, 7, 8];
// let hos = [];

// for (let i = 0; i < massive1.length - 1; i++) {
//   hos.push([massive1[i], massive1[i + 1]]);
// }
// console.log(hos);

// Массив болон тоо өгөгдөв. Нийлбэр нь өгөгдсөн тоотой тэнцүү байдаг хосын тоог ол
// let massive1 = [1, 2, 7, 4, 5, 11, , 8];
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
// Өгөгдсөн массивийн сөрөг тоонуудыг зүүн талд нь байрлуул
// Дараалсан тоонуудаас бүрдэх массив өгөгдөх байсан боловч 1 тоо нь дутуу байв. Тэр тоог ол

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

let a = [12, 1, 98, 67, 87, 90, 98];
let max = a[0];
let c = [];

for (let i = 1; i < a.length; i++) {
  if (a[i] >= max) {
    max = a[i]; //98=2
    c.push(i);
  }
}
console.log(c);
