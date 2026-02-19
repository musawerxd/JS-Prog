




//JS maps notes 02/19/2026


// map() is a HIGHER-ORDER ARRAY METHOD
// It creates a NEW ARRAY by transforming each element
// It runs once for every element
// It does NOT modify the original array






// 1. Basic Syntax
console.log(`\n 1. Basic Syntax`);

// array.map(function(element, index, array){
//     return newVaulues // must RETURN something
// })


// Explanation:
// element → current value
// index → current position
// array → original array
// Whatever you RETURN becomes part of the NEW array









// 2. Basic Example
console.log(`\n 2. Basic Example`);

let arr = [1, 2, 3, 4, 5]

let doubledArr = arr.map(function (val) {
    return val * 2;
})

console.log(`Orignal Array : `, arr);
console.log(`Doubled Arr Array : `, doubledArr);










// 3. Arrow version (modern)
console.log(`\n 3. Arrow version (modern)`);

let arr1 = [10, 20, 30, 40, 50]

let doubledArr1 = arr1.map((val) => val * 2)

console.log(`Orignal Array : `, arr1);
console.log(`Doubled Arr Array : `, doubledArr1);

// Notes:
// - index is useful for numbering
// - array is rarely needed
// - You MUST return something









// 4. Using All Parameters
console.log(`\n 4. Using All Parameters`);

let arr2 = [1, 2, 3, 4, 5]

arr2.map((val, index, array) => {
    console.log(`Index : `, index);
    console.log(`Value : `, val);
    console.log(`array : `, array);
    return val;
})

// Notes:
// - index is useful for numbering
// - array is rarely needed
// - You MUST return something







// 5. Maping Objects
console.log(`\n 5. Maping Objects`);

let users = [
    { name: "Musawer", degree: "CS" },
    { name: "Ali", degree: "CS" }
]

let names = users.map((user) => user.name)
console.log(names);

// Notes:
// - Often used to extract properties
// - Very common in frontend frameworks









// 6. Tranforming Object Structure 
console.log(`\n 6. Tranforming Object Structure `)

let users1 = [
    { name: "Musawer", degree: "CS", age: 20 },
    { name: "Ali", degree: "CS", age: 20 }
]

let updatedUsers = users1.map((user) => ({
    ...user,
    isAdult: user.age >= 18
}))

console.log(updatedUsers);

/*
Notes:
- Used to reshape data
- Does not modify original objects (if done correctly)
- Spread operator keeps existing properties
*/








// 7. Returning Different Data Types
console.log(`\n 7. Returning Different Data Types`);

let arr3 = [1, 2, 3, 4]

let result = arr3.map((val) => {
    if (val % 2 == 0) return "even"
    else return "odd";
})

console.log(`Orignal array is : `, arr3);
console.log(`Result :  `, result);

// Notes:
// - Can return ANY type (number, string, object, boolean)
// - Not restricted to same type



// 8. map vs forEach
console.log(`\n 8. map vs forEach`);

let arr4 = [1, 2, 3, 4]

let resultForEach = arr4.forEach((val) => val * 2) //undefined
let resultMap = arr4.map((val) => val * 2) // new array 

console.log('resultForEach', resultForEach)
console.log('resultMap', resultMap)

// Rule:
// - If transforming → use map
// - If side-effects (logging, DOM updates) → use forEach






// 9. Important Notes
console.log(`\n  9. Important Notes`);

// - Always returns a NEW array
// - Always same length as original
// - Cannot break early
// - Executes once per element
// - Synchronous
// - Functional programming style
// - Does NOT mutate original array


