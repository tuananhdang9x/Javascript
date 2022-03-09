console.log("Ngày em đẹp nhất");

let arr1 = ["e", "h", "k"];
let arr2 = arr1;

//  let myName = "Tuấn Anh";
//  let myAge = 25;
//  // Hằng số
// const MY_LOVE = "NHG";

// let a = b = 1;
// console.log(myName)
// console.log(a + b);

let myself = {
  myName: "Tuấn Anh",
  age: 25,
  favorite: ["Movie", "Football", "Game"],
  job: "Engineer",
  learn() {
    console.log("HTML/CSS,Java");
  },
};

function sumMethod(a, b) {
  console.log(a + b);
  return a + b;
}

//a++ lay gtri trc tang gt sau, ++a tang gia tri trc lay sau
// function display(obj, key) {
//   console.log(obj[key]);
//   if (typeof obj[key] == "function") {
//     obj[key]();
//   } else {
//     console.log(obj[key]);
//   }
// }

// let a = 1;
// let b = (a * 2) / 2;
// console.log(b);
// let c = a-- + b++;
// console.log(c);
// let d = "-0";
// console.log("câu 1:");
// console.log(a - b - c - d);
// console.log("câu 2:");
// console.log(a + b - c + d);
// console.log("câu 3:");
// console.log(a++ - (b++ / c) * d);

// console.log("câu 4:");
// console.log(--a + -b / c - d);

// console.log("câu :");
// console.log(--a + -b / c - d);
let c = 1;
console.log((c++) + (++c) + (c++));
