
// let userName;

// Decleration func
// Expressions func

// function getSayHello() {
//     console.log("Welcome!");
// }
// getSayHello()

// console.log(getSayHello);


// let getSayHello = function () {
//     console.log("Salam");
// }


// getSayHello();



// Rekursive

// for (let i = 0; i < 10; i++) {
//     console.log(i);

// }


// let startValue = 0;
// let endValue = 10;

// function customLoop() {
//     if (startValue < endValue) {
//         startValue++;
//         console.log(startValue);
//         customLoop()
//     }
// }

// customLoop()


// parametrli func
// return func


// function getSayHello(userName = "Jon", lastName = "Doe", age = 0) {
//     console.log(`User info: \n AD - ${userName}, \n Soyad - ${lastName}, \n Age - ${age}`);
// }

// getSayHello("Murad", 24);




function calc(a, b, c) {
    switch (c) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "/":
            return a / b;
        case "*":
            return a * b;
    }
}



console.log(calc(45, 34, "+"));;
calc(45, 34, "-")
calc(100, 34, "/")
let test = calc(12, 3, "*");
console.log(test);




// let str = "Salam";

// let mOfINdex = str.indexOf("m");
// console.log(mOfINdex);


// function getSayHello() {
//     alert()

//     document.body

//     return "SLM";
// }