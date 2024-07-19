// While loop
// let n = 10
// while (n >= 1) {
//     console.log(n);
//     n--
// }

// let sum = 0;
// let n = 1
// while (n <= 10) {
//     sum += n
//     n++
// }
// console.log(sum);

//Do_While loop

// let n = 5
// let facto = 1
// do {
//     facto *= n
//     n--
// }
// while (n > 0)
// console.log(facto);

//Patern print

// for (i = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//         console.log("* ");
//     }
//     console.log("\n");
// }


//continue statement


for (i = 0; i < 10; i++) {
    if (i === 5) {
        continue
    }
    console.log(i);
}