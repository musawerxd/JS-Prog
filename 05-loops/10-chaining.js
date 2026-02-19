





//JS Chaining notes 02/19/2026


// Method chaining = calling multiple methods one after another
// on the same value (usually arrays)

// It works because many array methods RETURN a new array
// That returned array can immediately call another method



// 1. Basic Example
console.log(`\n 1. Basic Example`);

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let result = nums.filter((val) => val > 2)
    .map((val) => val * 10);

console.log("Orignal Array : ", nums);
console.log('result', result)


// Step-by-step:
// 1. filter → selects values greater than 2
// 2. map → transforms each selected value
// Each method returns a NEW array
// That’s why chaining works







// 2. Why Chaining Works
console.log(`\n 2. Why Chaining Works`);


// Array methods like:
// - map()
// - filter(
// - slice()
// - concat()
// - flat()
// - etc.

// Return a NEW array.

// So:

// nums.filter(...)

// returns an array →
// That array can call .map() →
// That returns another array →
// That can call .slice(), so on..

// If a method returns undefined (like forEach),
// chaining breaks!








// 3. Example with Objects
console.log(`\n 3. Example with Objects`);

let user = [
    { name: "Ali", age: 18 },
    { name: "tahir", age: 23 },
    { name: "musawer", age: 20 }
]

let names = user.filter((val) => val.age > 18)
    .map((val) => val.name)
    .sort();

console.log(names)

// Real-world logic:
// 1. filter → only adults
// 2. map → extract names
// 3. sort → alphabetical order

// Very common in dashboards & APIs






// 4. Professional Pattern
console.log(`\n 4. Professional Pattern`)

// Select → Transform → Aggregate
// filter → map → reduce
// This is the golden combo.
