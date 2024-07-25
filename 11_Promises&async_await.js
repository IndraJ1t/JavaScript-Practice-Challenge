const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve(console.log("Resolved"))//returns value to the .then method
        }
        else {
            reject("Error: Something went wrong")//returns value to the .catch method
        }
        console.log("Promise Executed")
        resolve()
    }, 1000)
})
promise1.then(() => {
    console.log("Resolve consumed");
})
    .catch((error) => {
        console.log(error);
    })

// Chaining

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ name: "Indrajit", age: "21" })//returns value to the .then method
        }
        else {
            reject("Error: Something went wrong")//returns value to the .catch method
        }
        console.log("Promise Executed")
        resolve() //kind of connects the resolve to .then 
    }, 1000)
})
promise2.then((user) => {
    return user;
})
    .then((user) => {
        console.log(user.age);
    })
    .catch((error) => {
        console.log(error);
    })


/*Using async/await
1. create a promise, create async function and use "await" where time is required(use try and catch methods), call the function*/

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ name: "sam", age: "19" })//returns value to the .then method
        }
        else {
            reject("Error: Something went wrong")//returns value to the .catch method
        }
        console.log("Promise Executed")
        resolve()
    }, 1000)
})
async function consumePromise3() {
    try {
        const res = await promise3
        console.log(res);
    }
    catch (error) {
        console.log(error);
    }
}
consumePromise3();

/* fetch api(has higher priorty) */

fetch('https://api.github.com/users/IndraJ1t')
    .then((user) => {
        return user.json()
    })
    .then((value) => {
        console.log(value.login)
    })
    .catch((error) => {
        console.log(error);
    })

/* usiing async await */

async function forfetch() {
    try {
        const res = await fetch('https://api.github.com/users/IndraJ1t');
        const data = await res.json()
        console.log(data);
    }
    catch (error) {
        console.log(error);
    }
}
forfetch();


/*The Promise.all() static method takes an iterable of promises (array) as input and returns a single Promise.*/


Promise.all([promise1, promise2])/*till n no. of promises */
    .then((ans) => {
        console.log(ans);
    })

Promise.race

/*While Promise. all in JavaScript waits for all promises in the iterable to be resolved or rejected Promise. race returns as soon as one of the promises in the iterable is settled. It's a race to see which promise settles first.*/

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
});

const promise5 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'two');
});

Promise.race([promise4, promise5]).then((value) => {
    console.log(value);
    // Both resolve, but promise2 is faster
});