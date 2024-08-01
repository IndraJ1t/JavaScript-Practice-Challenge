// localStorage.setItem("name", "Sam")
// // localStorage.setItem("name2", "Indt")
// console.log(`key: name, value: ${localStorage.getItem("name")}`);

/* json string */

// let obj = {
//     color: "brown",
//     age: 19,
//     books: "GoT"
// }
// const objString = JSON.stringify(obj);
// localStorage.setItem("object", objString)
// const data = localStorage.getItem("object")
// const finalRes = JSON.parse(data)
// console.log(finalRes);

// localStorage.removeItem(name);

/* Saving inputs from form to localStorage */

const getForm = document.getElementById("form");
const getButton = document.getElementById("btn");
getButton.addEventListener("click", (e) => {
    e.preventDefault();
    const fName = document.getElementById("fname").value;
    const lName = document.getElementById("lname").value;

    localStorage.setItem("first_name", fName)
    localStorage.setItem("last_name", lName)

    console.log(`first_name: ${localStorage.getItem("first_name")}`);
    console.log(`last_name: ${localStorage.getItem("last_name")}`);

})