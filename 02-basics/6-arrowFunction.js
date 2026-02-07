





// JS Arrow Function Notes 07/02/2026


//1. Basic Syntax
console.log(`\n 1. Basic Syntax`)

// Normal Function 
function add(a, b) {
    return a + b;
}
console.log(add(3, 2))

// Arrow Function 
const addA = (a, b) => {
    return a + b;
}
console.log(addA(3, 2))







// 2. Implicit Return
console.log(`\n 2. Implicit Return`)

const addI = (a, b) => a + b; // no {} --> no return keyword needed
// const addI = (a, b) => (a + b); // can also be written as this 

console.log(addI(3, 2))







// 3. Single Parameter
console.log(`\n 3. Single Parameter`)

const square = x => x * x; //returns square of number,  no need of brackets required with one parameter
console.log(square(4))




// 4. No Parameter
console.log(`\n 4. No Parameter`)

const greet = () => "Hello"  // returns string "hello"
console.log(greet());





// 5. Returning Object (common trap)

// const newObj = () => { username: musawer } //wrong
// console.log(newObj()) // returns [Function: newObj]

const newObjC = () => ({ username: "musawer" }) // correct, Parentheses are needed for object
console.log(newObjC()) // returns [Function: newObj]



