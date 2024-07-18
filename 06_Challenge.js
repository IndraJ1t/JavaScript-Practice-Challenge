//Array

// let arr = [2, 3, 4, 5]
// arr.push(6)
// console.log(arr);

// arr.pop()
// console.log(arr);

// arr.shift()
// console.log(arr);

// arr.unshift(1)
// console.log(arr);


//Map (key value and remembers the original order)

// let map1 = new Map();
// map1.set("a", 1)
// map1.set("b", 2)
// map1.set("c", 3)
// map1.set("d", 4)

// for (const [key, value] of map1) {
//     console.log(key ,":", value * 2)
// }

//Filter

const myarr = [1, 2, 3, 4, 5, 6, 7, 8]


// const res = myarr.filter((val) => val % 2 === 0)
// console.log(res);

//Reduce

// const result = myarr.reduce(function (acc, currValur) {
//     return acc + currValur;
// }, 0)
// console.log(result);


// Multi Dimenisonal Array

let myarr2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]

];
console.log(myarr2);
let row = [2];
let col = [1];
console.log(myarr2[row][col]);

console.log(myarr);