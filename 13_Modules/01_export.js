/* at the very bottom of the code ==>  module.exports = class_name;/method_name;/anything; */
/* in the file where the component is being imported ==>  const variable_name = require("./file.js") */


// function addTwoNum(a, b) {
//     return a + b;
// }

const myObj = {
    name: "Sam",
    age: 19
}

// module.exports = addTwoNum;
module.exports = myObj;

/* For some unknown reasons default and named exports are not working and throwing "Cannot use import statement outside a module error" */