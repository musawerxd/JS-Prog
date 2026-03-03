// ================= JavaScript Promises =================

// A Promise is an object representing the eventual completion (resolve)
// or failure (reject) of an asynchronous operation.

// To handle async operations in a structured way instead of callback nesting.

// Callback Hell:
// getData(function(data) {
//    processData(data, function(result) {
//        saveData(result, function(done) {
//            console.log(done)
//        })
//    })
// })

// That’s called Callback Hell.

// Promise has internal state machine:
// [[PromiseState]]: "pending" | "fulfilled" | "rejected"
// [[PromiseResult]]: value or reason

// Once settled (fulfilled/rejected), state is IMMUTABLE.
// Syntax:
// new Promise((resolve, reject) => { ... })









// ======================================================
// 1. Creating a Promise
// ======================================================


// let PromiseOne = new Promise(function (resolve, reject) {
// console.log("Executor running");
//     const success = true;
//     if (success) {
//         resolve("Success")
//     } else {
//         reject("Operation Failed")
//     }
// })

// Notes:
// - Executor function runs IMMEDIATELY when Promise is created.
// - resolve() → moves state to fulfilled
// - reject() → moves state to rejected
// - Only first resolve/reject counts.




// ======================================================
// 2. Consuming a Promise (.then, .catch)
// ======================================================

// console.log("Start");

// PromiseOne
//     .then(function (response) {
//         console.log("Resolved:", response);
//     })
//     .catch(function (err) {
//         console.log("Errors :", err);
//     })

// console.log("End");

//Promise Is Asynchronous
// Start
// End
// Promise Stuff

// Execution Flow:
// 1. Promise created → executor runs
// 2. resolve() called
// 3. .then callback queued in microtask queue
// 4. Runs after current call stack completes
//
// Important:
// .then() handles fulfilled
// .catch() handles rejected






// ======================================================
// 3. Asynchronous Promise Example
// ======================================================


// const asyncPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("This is Executed after 2s");
//     }, 2000);
// })


// console.log("Before asyncPromise");

// asyncPromise.then((data) => {
//     console.log(data);
// })

// console.log("After asyncPromise");

// Output:
// Before asyncPromise
// After asyncPromise
// (after 2s)
// This is Executed after 2s
//
// Important:
// Promise callbacks run in microtask queue (higher priority than setTimeout)





// ======================================================
// 4. Promise States (Very Important)
// ======================================================

// const statePromise = new Promise((resolve, reject) => {
//     resolve("Resolved")
//     reject("rejected") //ignored
// })

// statePromise.then((res) => console.log(res)).catch((err) => console.log(err))

// Notes:
// - Promise can settle only ONCE.
// - After fulfilled → cannot become rejected.
// - After rejected → cannot become fulfilled.







// ======================================================
// 5. Promise Chaining
// ======================================================

// const promiseChaining = new Promise((resolve, reject) => {
//     resolve(20);
// })

// promiseChaining
//     .then((num) => {
//         console.log("First then : ", num); // 20
//         return num * 2;
//     })
//     .then((num) => {
//         console.log("Second then : ", num); //40
//         return num + 10;
//     })
//     .then((num) => {
//         console.log("Third then : ", num); //50
//     });

// Notes:
// - Each .then returns a NEW Promise.
// - Returned value passes to next .then.
// - If you throw error → goes to nearest .catch.






// ======================================================
// 6. Error Handling
// ======================================================

// const errorPromise = new Promise((resolve, reject) => {
//     reject("Something went wrong")
// })

// errorPromise
//     .then((data) => console.log("data : ", data))
//     .catch((error) => console.log("Error : ", error));

// Imp:
// Always attach .catch().
// Unhandled rejections cause runtime warnings.






// ======================================================
// 7. Promise vs setTimeout (Microtask vs Macrotask)
// ======================================================

// console.log("start");

// setTimeout(() => {
//     console.log("Timeout");
// }, 0)

// new Promise((resolve, reject) => {
//     resolve("resolved");
// }).then((data) => { console.log(data) })

// console.log("End");

// Output:
// start
// End
// resolved
// Timeout

// Explanation:
// Promise callbacks go to Microtask Queue.
// setTimeout goes to Task (Macrotask) Queue.
// Microtasks execute BEFORE next macrotask.





// ======================================================
// 8. Promise Static Methods
// ======================================================

// promise Resolve()
// Promise.resolve("Imediate Resolve").then((data) => console.log("promise Resolve() : ", data))

// // promise Reject()
// Promise.reject("Imediate Reject").catch((err) => console.log("promise Reject() : ", err))

// // promise.all()
// Promise.all([
//     Promise.resolve(1),
//     Promise.resolve(2),
//     Promise.resolve(3)
// ]).then(values => console.log("Promise.all() : ", values))
// Fails fast if any reject.

// promise.race()

// Promise.race([
//     new Promise(res => setTimeout(() => res("first"), 1000)),
//     new Promise(res => setTimeout(() => res("second"), 1000))
// ]).then((data) => console.log(data))
// Returns first settled promise.






// ======================================================
// 9.  Patterns
// ======================================================
//
// - Wrap async operations (API calls, DB calls) in Promises.
// - Use chaining to avoid callback hell.
// - Always return promise inside .then when chaining.
// - Prefer async/await for readability (built on Promises).
//
// Core Understanding:
//
// Promise is not the async operation.
// Promise is a wrapper around the result of an async operation.
//
// It represents future value.
//
// Internal Flow:
//
// Executor runs immediately
// ↓
// resolve/reject called
// ↓
// State changes (immutable)
// ↓
// .then/.catch scheduled in microtask queue
// ↓
// Event loop executes them after call stack clears
//





// Because modern JS APIs:

// fetch
// axios
// database drivers
// file system
// React Suspense
// Next.js loaders
// All depend on promise resolution mechanics.