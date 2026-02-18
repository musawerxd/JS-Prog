



//JS for each loop notes 02/12/2026


// forEach() is a HIGHER-ORDER array method
// It runs a callback function for EACH element in an array
// It does NOT return anything (returns undefined)






// 1. Basic Syntax
console.log("\n  1. Basic Syntax")

// array.forEach(function (element, index, array) {
//     // code
// });







// 2. Basic Example with simple function
console.log("\n  2. Basic Example with simple function")
// Arrow function version (most common in real projects)


let nums = [12, 24, 36]
nums.forEach(function (num) {
    console.log(num)
})







// 3. Basic Example with arrow function
console.log("\n  3. Basic Example with arrow function")

let nums1 = [1, 2, 3, 4, 5]
nums1.forEach((num) => console.log(num))










// 4. Using All Parameters
console.log("\n  4. Using All Parameters")

let nums2 = [12, 34, 45, 67]
nums2.forEach((value, index, array) => {
    console.log(value)
    console.log(index)
    console.log(array)
})

// Why useful?
// - index helps when you need position
// - array is useful when modifying original array
// - You rarely need the 3rd parameter
// - You can skip parameters you don’t need







// 5. Modifying Original Array
console.log(`\n 5. Modifying Original Array`)

let nums3 = [1, 2, 3, 4, 5];
console.log("Before Change: ")
nums3.forEach((value) => {
    console.log("Values are :", value)
})
nums3.forEach((value, index, array) => {
    array[index] = value * 2;
})
console.log("Before Change: ")
nums3.forEach((value) => {
    console.log("Values are :", value)
})

// Important:
// forEach does NOT create new array
// It only modifies original if you manually change it
// If you need a new array → use map()









// 6. Cannot Use break or continue
console.log(`\n 6. Cannot Use break or continue`)

let nums4 = [1, 2, 3, 4]
nums4.forEach(val => {
    if (val == 1) {
        // break;
        // continue;
        // both will give error, instead use this : 
        return; // Works like continue (skips this iteration)
    }
    console.log(`val : `, val);
})

// break NOT allowed
// You CANNOT stop forEach early
// If you need break → use for...of loop instead







// 7. Nested forEach
console.log(`\n 7. Nested forEach`)

let matrix = [[1, 2], [3, 4]]
matrix.forEach((row, index1) => {
    row.forEach((val, index2) => {
        console.log(`value at index ${index1},${index2}  : is ${val}`)
    });
})

// Used for 2D arrays
// Outer loop → rows
// Inner loop → values










// 8. With Objects (Using Object.entries)
console.log(`\n 8. With Objects (Using Object.entries)`)
let obj = {
    user: "musawer",
    age: 19
}

Object.entries(obj).forEach((pair) => {
    console.log(pair)
})

//destructuring
Object.entries(obj).forEach(([key, value]) => {
    console.log(`${key} : ${value}`)
})


// Why Object.entries?
// Because forEach works on arrays
// Object.entries converts object into array of [key, value]





// 10. Important Deep Notes



// - Cannot break or stop early
// - Always returns undefined
// - Cleaner than traditional for loop
// - If you need control flow → use for...of
