
// let n = 147;
// while (n > 1) {
//     let i = n;
//     let cnt = 0
//     while (i > 0) {
//         if (n % i === 0) {
//             cnt++;
//         }
//         i--
//     }

//     if (cnt === 2) {
//         console.log(n);
//     }
//     n--
// }


// let val = "12321";
// let result = "Palendrom ededdir!"
// for (let i = 0; i < val.length / 2; i++) {
//     console.log(i);
//     if (val[i] !== val[val.length - 1 - i]) {
//         result = "Palendrom Deyil"
//         break;
//     }
// }
// console.log(result);



// Password:
// 1 - Uppercase;
// 1 - lowercase;
// 1 - number;
// space - olmasin;



let str = "Lorem6   Lorem"
let result = "Eded yoxdur!"
for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i]) && str[i] !== " ") {
        result = "Eded var"
        break;
    }
}

console.log(result);