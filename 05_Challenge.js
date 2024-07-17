//Arrow functions

// let sum = (a, b) => {
//     console.log(a + b)
// }
// sum(4, 5)



// let char = () => {
//     const s = "t"
//     const string = "indrajit"
//     return string.includes(s)
// }
// if (!char()) {
//     console.log(false);
// }
// else {
//     console.log(true);
// }

// ---------------------------------------------

// function greet(name, age = 16) {
//     console.log(`hello ${name}!`)
// }
// greet("Indrajit")

// Higher order function--------------------------------

function greet(name) {
    return console.log(`Hi ${name}!`);
}
function greeting(any, message, name) {
    return console.log(`${any(name)} ${message}`);

}
greeting(greet, "Its a beautiful day", "Indrajit")


// -------------------------------------------------------


// function sum(a = 2, b = 3) {
//     return a + b;
// }
// function sum2(c = 4, d = 5) {
//     return c + d;
// }
// function highFunc(one, two, value) {
//     const result1 = (one() + value);
//     const result2 = (two() + result1);
//     console.log(result2);
//     return result2;

// }
// highFunc(sum, sum2, 6);