// // Objects

// const myObj = {
//     title: "Game of Thrones",
//     author: "George RR Martin",
//     year: "2010"
// }
// console.log(myObj);
// console.log(myObj.author);

// Object methods

// function myFunc(year) {
//     myObj.year = year;
// }
// myFunc(2011)
// console.log(myObj);

// Nested Objects
// this keyword

// let library = {
//     book1: {
//         name: "The Beatles",
//         year: 1969,

//     },
//     book2: {
//         name: "Queen",
//         year: 1964
//     }

// }
// console.log(library);
// console.log(library.book1.year);

// function book(name, year) {
//     this.name = name;
//     this.year = year;
// }

// const book1 = new book("something", 2003);
// const book2 = new book("InTheWind", 2005);
// console.log(book1);
// console.log(book2);


// For in

const myObj = {
    title: "Game of Thrones",
    author: "George RR Martin",
    year: "2010"
}
// for (const key in myObj) {
//     console.log(key, ":", myObj[key]);
// }

console.log(Object.keys(myObj));
console.log(Object.values(myObj));