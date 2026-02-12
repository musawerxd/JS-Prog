




//JS for of loop notes 02/11/2026


// for...of is used to iterate over ITERABLES
// Iterables: Array, String, Map, Set, NodeList, etc.


// syntax:
// for (const element of object) {
//           code
// }
// here Object means any Iterable





// 1. for...of with Arrays
console.log(`\n 1. for...of with Arrays`)
let arr = [1, 2, 3, 4, 5]
for (let values of arr) {
    console.log(values)
}

// Access index manually if needed
//Destructing
for (let [index, values] of arr.entries()) {
    console.log(`Indes : ${index} \t Value : ${values}`)
}








// 2. for...of with Strings
console.log(`\n 1. for...of with Arrays`)

let str = "Musawer Ahmad"

for (let char of str) {
    console.log(`Char : ${char} `)
}









// 3. for...of with Set
console.log(`\n 3. for...of with Set`)

let set = new Set([1, 2, 3, 3]);

for (let value of set) {
    console.log(value);
}
// 1 2 3  (no duplicates)








// 4. for...of with Map
console.log(`\n 4. for...of with Map`)
let map = new Map();

map.set("name", "Musawer")
map.set("age", 19)

console.log("\tPair:")
for (let pair of map) {
    console.log(pair)
}

// Destructuring key and value
console.log("\tKey, Value:")
for (let [key, val] of map) {
    console.log(`key: ${key}  \t Value : ${val}`)
}

// only keys
console.log("\tonly keys:")

for (let keys of map.keys()) {
    console.log(keys)
}


// only keys
console.log("\tonly values:")

for (let val of map.values()) {
    console.log(val)
}







// 5. break and continue
console.log(`\n 5. break and continue`)

for (let num of [1, 2, 3, 4, 5]) {
    if (num === 4) break;
    if (num === 2) continue;
    console.log(num)
}







// 6. Important: Does NOT work on plain Objects
console.log(`\n 6. Important: Does NOT work on plain Objects`)

let myObj = { a: "hello", b: "world" }

// for(let val of myObj){
//     console.log(val)    // Error
// }
// Because object is NOT iterable

// Use Object.keys / values / entries instead
console.log(`\tPair`)
for (let pair of Object.entries(myObj)) {
    console.log(pair)
}

console.log(`\t Keys`)
for (let key of Object.keys(myObj)) {
    console.log(key)
}

// other way to print keys


console.log(`\tValues`)
for (let val of Object.values(myObj)) {
    console.log(val)
}






// 7. Professional Notes
console.log(`\n 7. Professional Notes`)

// - Works only on iterable objects
// - Cleaner than traditional for loop
// - Cannot directly access index (use entries())
// - Supports break and continue
// - Does not mutate original data
// - Prefer for...of over forEach when using break/continue
// - Do NOT use on plain objects as Objects are not iterable.