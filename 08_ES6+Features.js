// Destructuring 

// let myArr = [1, 2, 3, 4, 5, 6]
// const [first, second, ...rest] = myArr  //assigning variables
// console.log(first, ",", second)

//Object

// let myObj = {
//     name: "Indrajit",
//     age: 21
// }
// const { name } = myObj;
// console.log(name);

//Spread Operator

// let array = [1, 2, 3, 4];
// let array2 = [5, 6, 7, 8];
// let newArrray = [...array, ...array2];
// console.log(newArrray);

// rest operator

// function myFunc(...arg) {
//     let sum = 0
//     for (const num of arg) {
//         sum += num;
//     }
//     console.log(sum);
// }
// myFunc(1, 2, 3, 4, 5, 6)


// function func(one, two = 1) {
//     return one * two;
// }
// console.log(func(4));  // without second parameter(4)
// console.log(func(4, 2));  // with second parameter(8)


//Enhanced Objects literals
// function objFunc(name, age) {
//     this.name = name;
//     this.age = age;
// }
// let person1 = new objFunc("Rohan", 21)
// console.log(person1);
// console.log(person1.age);// accessing properties

let name = "book1";
let title = "GoT";
let obj = {
    [name]: title
}
console.log(obj);