// 1. Өгөгдсөн тоо нь 5-д хуваагддаг үгүйг шалгана уу.
let number = 10;
if (number % 5 === 0) {
  console.log("true");
} else {
  console.log("false");
}
// 2. Өгөгдсөн үсгийг шалгаад эгшиг бол "vowel" , гийгүүлэгч бол "consonant" гэж хэвлэнэ үү .
let letter = "a";
if (
  letter === "a" ||
  letter === "e" ||
  letter === "i" ||
  letter === "o" ||
  letter === "u"
) {
  console.log("vowel");
} else {
  console.log("consonant");
}
// 3. Өгөгдсөн тоо 1-ээс 100-н хооронд байвал "include" , байхгүй бол "exclude" гэж хэвлэнэ үү .
let too = 99;
if (too >= 1 && too <= 100) {
  console.log("include");
} else {
  console.log("exclude");
}
// 4. 3 тооноос хамгийн ихийг нь олж хэвлэнэ үү .
let a = 1;
let b = 2;
let c = 3;
if (a > b && a > c) {
  console.log("A");
} else if (b > a && b > c) {
  console.log("B");
} else {
  console.log("C");
}
// 5. Өгөгдсөн жил нь Олимпийн жил мөн бишийг шалгаад хэвлэнэ үү .
let year = 2038;
if (year % 4 === 0) {
  console.log("Olymp year");
} else {
  console.log("non olymp year");
}
// 6. Check the given number is not a prime number .
let givenNumber = 10;
let divider = 1;
if (divider >= 2 && divider <= givenNumber) {
} else if (givenNumber % givenNumber === 0 && givenNumber % divider === 0) {
  console.log("PrimeNumber");
} else {
  console.log("Non Prime");
}
// 7. Өгөгдсөн тоог анхны тоо мөн бишийг шалгана уу . (1 болон өөртөө хуваагддаг тоог анхны тоо гэнэ)
// example :
// number = 2 // true
// number = 15 // false

// 8. Өгөгдсөн сурагчийн дүнг A , B , C , D , F бүлэгт ангилж хэвлэнэ үү .
//    90-100, A
//    80-89, B
//    70-79, C
//    60-69, D
//    0-59, F
let dun = 49;
if (dun >= 90 && dun <= 100) {
  console.log("A");
} else if (dun >= 80 && dun <= 89) {
  console.log("B");
} else if (dun >= 70 && dun <= 79) {
  console.log("C");
} else if (dun >= 60 && dun <= 69) {
  console.log("D");
} else if (dun >= 0 && dun <= 59) {
  console.log("F");
}
// 9. Өгөгдсөн сарыг шалгаад тохирох улирлыг хэвлэнэ үү .
// for example : month = November / Autumn
let month = 9;
if (month == 12 && month == 1 && month == 2) {
  console.log("Winter");
} else if (month >= 3 && month <= 5) {
  console.log("Spring");
} else if (month >= 6 && month <= 8) {
  console.log("Summer");
} else if (month >= 9 && month <= 11) {
  console.log("Fall");
}
// 10. Яг одоогийн цагийг шалган өглөө бол "Good morning",
//  өдөр бол "Good afternoon", орой бол "Good evening" гэж хэвлэнэ үү
let time = 23;
if (time >= 24 || time >= 20 || time <= 4) {
  console.log("Good evening");
} else if (time >= 5 && time <= 12) {
  console.log("Good morning");
} else if (time >= 13 && time <= 19) {
  console.log("Good Afternoon");
}
// 11. Цаг агаарын температур болон "sunny" эсвэл "rainy" гэж өгөгдөх ба
// бороотой бол "Don't forget your umbrella!" ,
// нартай бол температур нь 30-аас их бол "It's a hot day!" , 20-30 градус бол "It's a warm day" ,
// 20-оос бага бол "It's a bit cool today" гэж хэвлэнэ үү .
// for example : weather = "sunny" temperature = 25 / It's a warm day.
let temp = 29;
let weather = "sunny";
if ((weather = "rainy")) {
  console.log("Don't forget your umbrella!");
} else if ((weather = "sunny")) {
  if (temp > 30) {
    console.log("It's a hot day!");
  } else if (temp >= 20 && temp <= 30) {
    console.log("It's a warm day");
  } else if (temp <= 20) {
    console.log("It's a bit cool today");
  }
}
