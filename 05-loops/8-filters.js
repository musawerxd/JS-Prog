


//JS Filter notes 02/18/2026


// filter() is a HIGHER-ORDER ARRAY METHOD
// It creates a NEW ARRAY containing elements
// that PASS a given condition (return true)
// It does NOT modify the original array




// 1. Basic Syntax
console.log(`\n 1. Basic Syntax`)

// let conditionedArray = array.filter(function (element, index, array) {
//     return condition; // must return true or false
// })








// 2. Basic Example
console.log(`\n 2. Basic Example`)

let nums = [1, 2, 3, 4, 5]

let newNums = nums.filter(function (value) {
    return (value % 2 == 0) // returns even numbers 
})
console.log(newNums);

// Notes:
// - Original array NOT changed
// - Order is preserved
// - Returns new array

//Alternative using forEach 

let newNums1_forEach1 = [];
nums.forEach((val) => {
    if (val % 2 == 0)
        newNums1_forEach1.push(val)
})
console.log(`Using foreach : `, newNums1_forEach1)










// 3. Arrow version (cleaner)
console.log("\n 3. Arrow version (cleaner)")

let nums1 = [1, 2, 3, 4, 5]

let newNums1 = nums1.filter((val) => !(val % 2 == 0)) // returns odd numbers 
console.log(newNums1)

// Notes:
// - Original array NOT changed
// - Order is preserved
// - Returns new array

//Alternative using forEach 

let newNums1_forEach2 = [];
nums1.forEach((val) => {
    if (val % 2 !== 0)
        newNums1_forEach2.push(val)
})
console.log(`Using foreach : `, newNums1_forEach2)










// 4. Using All Parameters
console.log("\n 4. Using All Parameters")
let nums2 = [1, 2, 3, 4, 5]

let newNums2 = nums2.filter((value, index, array) => {
    console.log("Value : ", value)
    console.log("Index : ", index)
    console.log("Array : ", array)
    return value > 2
})

// Notes:
// - index is number
// - array is the SAME original array
// - Usually you only need value
// - index useful for position-based filtering









// 5. Filtering Objects
console.log("\n 5. Filtering Objects")

let users = [
    {
        name: "musawer",
        age: 20
    },
    {
        name: "ali",
        age: 10
    },
    {
        name: "tahir",
        age: 23
    }
]

let adultUsers = users.filter((user) => user.age >= 18)
console.log(adultUsers)

// Notes:
// - Very common in real projects
// - Used for search, filtering lists, dashboards









// 6. Returning Truthy / Falsy
console.log(`\n 6. Returning Truthy / Falsy`);

let values = [0, "0", "Hello", null, 23, undefined];

let truthyValues = values.filter((val) => val) // returns array of truthy values
let falsyValues = values.filter((val) => !(val)) // returns array of falsy values

console.log("truthyValues : ", truthyValues);
console.log("falsyValues : ", falsyValues);

// Notes:
// - filter keeps elements where callback returns truthy
// - Not limited to true/false — any truthy value works







// 7. Empty Result
console.log(`\n  7. Empty Result`);

let nums3 = [1, 2, 3, 4, 5]

let newNums3 = nums3.filter((val) => val > 100) // returns empty array, 
// as there is no value greater than 100
console.log(newNums3);



// Notes:
// - Always returns array
// - If nothing matches → empty array








// 8. filter vs forEach
console.log(`\n 8. filter vs forEach`);

// filter → returns NEW array
// forEach → returns undefined
// If you're selecting elements → use filter
// If you're doing side effects → use forEach
// side effects means modification/change 









// 9. Important  Notes
console.log(`\n 9. Important  Notes`);

// - Does NOT modify original array
// - Always returns a new array
// - Skips empty slots in sparse arrays
// - Executes synchronously
// - Cannot break early (runs for all elements)
// - Great for search, validation, permission filtering
// - Preserves order of elements









// 10. Common Real-World Use Cases
console.log(`\n 10. Common Real-World Use Cases`);



// 1. Search functionality
// 2. Remove deleted items
// 3. Filter by role or permission
// 4. Filter completed tasks
// 5. Clean unwanted values


