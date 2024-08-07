// let str = "Nicat, Sevgi, ELi, Anar, Ahu";

// let word = ""
// for (let i = 0; i < str.length; i++) {
//     if (str[i] !== ',') {
//         word += str[i].trim()
//     } else {
//         console.log(word);
//         word = ""
//     }
// }

// console.log(word);


// ARRAY =>

// let arr = ["Murad", "Murad", 'Murad'];
// push()
// pop()
// shift()
// unshift()
// console.log(arr.push("Sevgi", "Kenan", "Ayxan"));;
// console.log(arr.unshift("Anar"));
// console.log(arr.shift());
// console.log(arr.pop());

// arr.filter()
// console.log(arr);


// arr[0] = "Ali";
// arr[3] = "Esmer"
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);

// for (let j = 0; j < arr.length; j++) {
//     console.log(arr[j]);
// }


// const list = [12, 3, 4, 5, 6]

// list[3] = 50;
// list = []   


// console.log(list);


let salary = [
    [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
    [75, 75, 75, 75, 75, 75, 70, 77, 75, 75, 70, 75],
    [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 180],
    [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
    [80, 80, 80, 80, 80, 80, 80, 105, 105, 105, 105, 105],
    [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
    [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 120],
    [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
    [80, 80, 80, 80, 80, 80, 80, 90, 90, 90, 90, 90],
    [75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 70, 75]
];


// function getAnnualSalary() {
//     let totalSalary = 0
//     for (let i = 0; i < salary.length; i++) {
//         for (let j = 0; j < salary[i].length; j++) {
//             totalSalary += salary[i][j]
//         }
//     }
//     return totalSalary;
// }

// console.log(getAnnualSalary());



// function getMonthlySalary(param) {
//     let result = [];
//     for (let i = 0; i < salary.length; i++) {
//         result.push(salary[i][param - 1])
//     }
//     return result
// }

// console.log(getMonthlySalary(12));




function getQuarterSalary(param) {
    let total = 0
    let qstart = (param - 1) * 3;
    let qend = param * 3;
    for (let i = 0; i < salary.length; i++) {

        for (let j = 0; j < salary[i].length; j++) {
            if (j >= qstart && j < qend) {
                total += salary[i][j]
            }

        }

    }
    return total
}

console.log(getQuarterSalary(2));