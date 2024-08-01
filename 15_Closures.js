function func1() {
    let myName = "Indrajit"
    return new function func2() {
        console.log(myName);
    }
    func2()
}
func1()

function uniqueID() {
    let lastID = 0;
    return function generateNewID() {
        lastID++;
        return lastID;
    }
}
const generation = uniqueID();
console.log(generation());
console.log(generation());
console.log(generation());
console.log(generation());


function creation() {
    const functions = [];
    for (let i = 0; i < 5; i++) {
        functions.push(function () {
            console.log(i);/* pushes a function at i position of array */
        })
    }
    return functions;
}
const myFunc = creation();
myFunc[0]()/* executes the function at 0 position of array */
myFunc[4]()
