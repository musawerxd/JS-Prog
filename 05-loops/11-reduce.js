



//JS Reduce notes 02/19/2026

// reduce() is a HIGHER-ORDER ARRAY METHOD
// It reduces an array to a SINGLE VALUE
// That single value can be: number, string, object, array, anything

// Think of it like:
// “Take all elements… combine them into ONE result.”





// 1. Basic Syntax
console.log(`\n 1. Basic Syntax`);

// array.reduce((accumulator, currentValue, index, array) => {
//     return UpdatedAccumulator;
// }, initialValue)


// accumulator   → stores the running result
// currentValue  → current element in iteration
// index         → current index (optional)
// array         → original array (optional)
// initialValue  → starting value of accumulator (VERY important)

// reduce ALWAYS returns a single value.






// 2. Basic Example (Sum)
console.log(`\n 2. Basic Example (Sum)`);

let arr = [1, 2, 3, 4, 5]

let sum = arr.reduce((acc, curr) => {
    return acc + curr
}, 0)

console.log("Sum : ", sum)

// How it works step-by-step:

// Initial acc = 0

// Iteration 1 → acc = 0 + 1 = 1
// Iteration 2 → acc = 1 + 2 = 3
// Iteration 3 → acc = 3 + 3 = 6
// Iteration 4 → acc = 6 + 4 = 10
// Iteration 5 → acc = 10 + 5 = 15

// Final result = 15










// 3. If you skip Initial Value
console.log(`\n 3. If you skip Initial Value`);

let arr1 = [1, 2, 3, 4, 5]

let sum1 = arr1.reduce((acc, curr) => acc + curr)
console.log("Sum : ", sum1)

// If no initialValue:
// - First element becomes accumulator, here 1
// - Loop starts from second element

// So:
// acc = 1
// curr = 2

// ⚠️ Risky if array is empty → ERROR
// Professional rule:
// Always provide initial value.








// 4. Multiply Example
console.log(`\n 4. Multiply Example`);

let arr2 = [1, 2, 3, 4, 5]

let multiple = arr2.reduce((acc, curr) => {
    return acc * curr
}, 1)

console.log("Multiple : ", multiple)









// 5. Using reduce to Flatten Array
console.log(`\n 5. Using reduce to Flatten Array`);

let nestedArr = [[1, 2], [3, 4], [5, 6], 7, 8]

let flatArr = nestedArr.reduce((acc, curr) => {
    return acc.concat(curr)
}, [])

console.log("nestedArr : ", nestedArr)
console.log("flatArr : ", flatArr)




// 6. Chaining with filter/map
console.log(`\n  6. Chaining with filter/map`);

let nums = [1, 2, 3, 4, 5]

let result = nums.filter((val) => val > 2).map((val) => val * 2).reduce((acc, curr) => acc + curr, 0);
console.log("nums : ", nums)
console.log("result : ", result) //24

// Pattern:
// filter → select
// map → transform
// reduce → combine into single value








// 7. Important Notes
console.log(`\n 8. Important Notes`)


// - Returns ONE final value
// - Very powerful but harder to read
// - Always return accumulator
// - Always provide initial value
// - Runs once per element
// - Synchronous
// - Can replace many loops
