// ================================
// call(), apply(), bind() in JavaScript
// ================================


// These three methods are used to control the value of "this"
// when calling a function.
//
// Normally, "this" depends on how a function is called.
// But call, apply, and bind allow us to manually set "this".
//
// They belong to: Function.prototype
//
// That means EVERY function in JavaScript can use them.







// ======================================================
// 1. call()
// ======================================================

// call() invokes a function immediately
// and allows you to set "this" explicitly.
//
// Syntax:
//
// functionName.call(thisArg, arg1, arg2, arg3)


// const user = {
//     username: "Musawer"
// }

// function introduce(city, country) {
//     console.log(`Hello my name is ${this.username} and i am from ${city} ${country}`);
// }


// introduce.call(user, "Multan", "Pakistan")

// Explanation:
//
// call()
// 1. sets "this" to person
// 2. runs the function immediately
//
// Output:
// Hi, I'm Musawer from Lahore, Pakistan


// Production code example
// function SetUsername(username) {
//     //complex DB calls
//     this.username = username
//     console.log("called");
// }

// function createUser(username, email, password) {
//     SetUsername.call(this, username)

//     this.email = email
//     this.password = password
// }

// const chai = new createUser("chai", "chai@fb.com", "123")
// console.log(chai);










// ======================================================
// 2. apply()
// ======================================================

// Definition:
// apply() is the same as call()
// BUT arguments are passed as an array.

// Syntax:
//
// functionName.apply(thisArg, [arg1, arg2])

// const user = {
//     name: "Musawer"
// }

// function introduce(city, country) {
//     console.log(`Hello my name is ${this.name} and i am from ${city}, ${country}`);
// }

// introduce.apply(user, ["Multan", "Pakistan"]);

// Explanation:
//
// apply()
// 1. sets "this" to user
// 2. arguments passed in array
// 3. runs immediately










// ======================================================
// call vs apply
// ======================================================
//
// call → arguments passed individually
// apply → arguments passed as array

// Example:

// function add(a, b) {
//   return a + b;
// }

// console.log(add.call(null, 2, 3));
// console.log(add.apply(null, [2, 3]));












// ======================================================
// 3. bind()
// ======================================================

// Definition:
// bind() does NOT call the function immediately.
// Instead it returns a NEW function with "this" permanently set.
//
// Syntax:
//
// const newFunc = func.bind(thisArg, arg1, arg2)

// function sayHello() {
//     console.log(`Hello ${this.name}`);
// }

// const student = {
//     name: "Ali"
// }

// const helloFunc = sayHello.bind(student);

// helloFunc();

// Explanation:
//
// bind()
// 1. creates new function
// 2. binds "this"
// 3. function runs only when called









// ======================================================
// bind with arguments
// ======================================================

// function multiply(a, b) {
//     return a * b;
// }

// const double = multiply.bind(null, 2);

// console.log(double(10))


// Explanation:
//
// double(5)
// internally runs:
//
// multiply(2,5)










// ======================================================
// 4. Borrowing Methods
// ======================================================
//
// call() is often used to borrow methods from other objects.

const personOne = {
    userName: "musawer",
    age: 20,
    introduce: function () {
        console.log(`Hello, I am ${this.userName} and i am ${this.age} years old`);
    }
}

const personTwo = {
    userName: "Tahir",
    age: 23
}

personOne.introduce.call(personTwo)
// Output:
// Hello, I am Tahir and i am 23 years old
