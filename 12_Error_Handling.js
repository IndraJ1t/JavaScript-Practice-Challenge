// async function zeroError(x, y) {
//     try {
//         if (y !== 0) {
//             const result = await x / y
//             console.log(result);
//         }
//         else {
//             throw new Error("Cannot be divided by ZERO");
//         }
//     }
//     catch (error) {
//         console.error(error);
//     }
//     finally {
//         console.log("This is finally and it will get executed no matter what.");
//     }
// }
// zeroError(6, 2);  

/* Custom error class */

// class customError extends Error {
//     constructor(username, password) {
//         super()
//         this.username = username;
//         this.password = password;
//         this.message = "Incorrect password"
//     }
// }
// const person = new customError("sam", 1234)
// try {
//     if (person.password !== 1234) {
//         throw person
//     }
//     console.log("Successful");
// } catch (error) {
//     console.log(error.message);
// }


// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = false;
//         if (!error) {
//             resolve({ name: "Indrajit", age: "21" })//returns value to the .then method
//         }
//         else {
//             reject("Error: Something went wrong")//returns value to the .catch method
//         }
//         console.log("Promise Executed")
//         resolve() //kind of connects the resolve to .then 
//     }, 1000)
// })

// async function inPromises() {
//     try {
//         const result = await promise2
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }

// inPromises()

/* For fetch */

async function forFetch() {
    try {
        const data = await fetch('https://api.jithub.com/users/IndraJ1t')
        const refined = await data.json()
        console.log(refined);
    } catch (error) {
        console.error("Invalid URL")
    }
}
forFetch();