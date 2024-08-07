/*Data types
Variables
type conventions
operators
Basic Math
Compare
Condition
Logical


let , var, const
var age = 24;
const age = 24;
const age = 24;
let age = 24;


alert(age)


let price = "340"

let price2 = "550"

console.log(Number(price) + Number(price2));

let weekDay = 6;

switch (weekDay) {
    case 1:

        break;

    case 2:
    case 3
}


if (weekDay === 1 || weekDay === 2) {

}

switch (weekDay) {
    case 1:
    case 2:
        alert("Test")
        break;

    default:
        break;
}
let data = "data"

if (data) {
    document.write(data)
} else {
    document.write("loading")
}

data ? document.write(data) : document.write("loading")


*/



// let a = 10;

// if (a > 0) {
//     console.log("Salam");
// }

// while (a > 0) {
//     console.log("Salam");
//     a--;
// }

// for (let a = 10; a > 7; a--) {
//     console.log(a);
// }


// let i = 1;
// let sum = 0
// while (i < 100) {
//     if (i % 2 !== 0) {
//         console.log(i);
//         sum += 1
//     }
//     i++;
// }

// console.log(sum);


// let str = "Lorem Salam Elykum hello";
// // length = 20
// let result = ""
// for (let i = 0; i < str.length; i++) {
//     result += str[str.length - 1 - i]
// }

// console.log(result);


// let str = "lorem .lorem .hello. Salam .test";
// for (let i = 0; i < str.length; i++) {
//     if (str[i] === ".") {
//         console.log(i);
//         break;
//     }
// }

//
// 1 2 3 5 8 13 21


// let i = 100;


// while (i < 1000) {
//     if (i % 7 === 0) {
//         console.log(i);
//     }
//     i++
// }

let a = 41;
let i = 100;
while (i < 1000) {
    if (i % a === 0) {
        console.log(i);
    }
    i++
}