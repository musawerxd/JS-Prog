// ================= JavaScript: async / await =================


// async/await is syntactic sugar built on top of Promises.
// It allows writing asynchronous code in a synchronous-looking style.

// Important:
// async/await DOES NOT make code synchronous.
// It only pauses execution inside the async function.

// Internally:
// - async function ALWAYS returns a Promise.
// - await pauses execution of that async function.
// - await works only with Promises.
// - After await, execution continues via microtask queue.




// ======================================================
// 1. async Function Basics
// ======================================================


async function greet() {
    return "hello";
}

const func = greet();
console.log(func); // returns a Promise { 'hello' }
// Output:
// Promise { "Hello" }
//
// Explanation:
// Even though we returned a string,
// async automatically wraps it inside Promise.resolve("Hello").
//
// Internally:
// async function → returns Promise.resolve(returnValue)