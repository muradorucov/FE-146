// function showName(param) {
//     return `${param} is active now!`;
// }

// console.log(showName("Nicat"));
// showName("Ali")
// showName("Anar")

// function compare(a, b, c) {
//     if (a > b && a > c) {
//         console.log(a);
//     } else if (b > a && b > c) {
//         console.log(b);
//     } else {
//         console.log(c);
//     }
// }
// compare(10, 14, 17)
// compare(67, 14, 34)
// compare(10, 15, 12)

// function exchange(rubl, usd) {
//     let total = rubl + (usd * 75)
//     console.log(`Bütün depozitlər üzrə məbləğ: ${total} rubl`);
// }

// exchange(1200, 20)
// exchange(1000, 200)


// let value = "26";

// function oneDigit(param) {
//     switch (param) {
//         case "1":
//             return "Bir"
//         case "2":
//             return "Iki"
//         case "3":
//             return "Üç"
//         case "4":
//             return "Dörd"
//         case "5":
//             return "Beş"
//         case "6":
//             return "Altı"
//         case "7":
//             return "Yeddi"
//         case "8":
//             return "Səkkiz"
//         case "9":
//             return "Doqquz"
//     }
// }

// function tenDigit(param) {
//     switch (param) {
//         case "1":
//             return "On"
//         case "2":
//             return "İyirmi"
//         case "3":
//             return "Otuz"
//         case "4":
//             return "Qırx"
//         case "5":
//             return "Əlli"
//         case "6":
//             return "Altmış"
//         case "7":
//             return "Yetmiş"
//         case "8":
//             return "Səksən"
//         case "9":
//             return "Doxsan"
//     }
// }

// function numberToText() {
//     if (value.length === 1) {
//         return oneDigit(value);
//     } else if (value.length === 2 && value[1] === "0") {
//         return (tenDigit(value[0]));
//     } else if (value.length === 2 && value[1] !== "0") {
//         return `${tenDigit(value[0])} ${oneDigit(value[1])}`;
//     }
// }

// console.log(numberToText());


// function isLucky(param) {
//     let str = String(param)
//     if (+str[0] + +str[1] + Number(str[2]) === +str[3] + +str[4] + +str[5]) {
//         return true
//     }
//     return false
// }
// console.log(isLucky(234805));

// uppercase, slice,
// function capitalizeWords(str) {
//     str += " "
//     let result = "";
//     let word = ""
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] !== " ") {
//             word += str[i]
//         } else {
//             result += word[0].toUpperCase() + word.slice(1) + " "
//             word = ""
//         }
//     }
//     console.log(result);

// }
// capitalizeWords('Hello my name is Harry');

// let sequence = "loreM56{}\`11#$ Murad"
// let result = sequence.match(/[a-zA-Z]/g).join("")
// console.log(result);


// function getNum() {
//     const num = 45
// }
// console.log(num);



// if (true) {
//     const num = 6
// }
// console.log(num);


// Array

// let users = "Nicat, Sevgi, Anar, Ali, Ahu, Esmer";
