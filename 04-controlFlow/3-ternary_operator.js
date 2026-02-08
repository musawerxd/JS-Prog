



// JS Ternary Operator notes 02/08/2026


// Ternary = short form of if–else
// Syntax:  condition ? valueIfTrue : valueIfFalse


// 1. Basic Example
console.log(`\n 1. Basic Example`)

let age = 17
let status = (age >= 18) ? "Adult" : "Minor"
console.log(status); // Minor

// Same logic in if–else

// let status2;

// if (age >= 18) {
//     status2 = "Adult";
// } else {
//     status2 = "Minor";
// }





// 2. Direct Action
console.log(`\n 2. Direct Action`)

let isLoggedIn = false;

(isLoggedIn) ? console.log("Welcome") : console.log("You need to Login");  //You need to Login






// 3. Assigning Values
console.log(`\n 3. Assigning Values`)

let price = 500;

let message = (price < 1000) ? "cheap" : "expensive"
console.log(message)





// 4. Nested Ternary (Possible but Avoid)
console.log("4. Nested Ternary (Possible but Avoid)")

let marks = 70;
let grade = (marks >= 80) ? "A" : (marks >= 60) ? "B" : (marks >= 40) ? "C" : "fail";
console.log(grade)



// 5. When to use
console.log(`\n 5. When to use`)

// - simple one line decisions
// - assigning a value based on condition
// - small UI text changes
