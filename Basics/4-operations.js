

// JS Operations Notes 1/29/2026

// Basic Arithmetic Operations in JavaScript
console.log("Basic Arithmetic Operations")
console.log(2 + 2); // 4
console.log(10 - 2); // 8
console.log(4 * 2); // 8
console.log(16 / 2); // 8
console.log(17 % 3); // 2 (remainder)
console.log(2 ** 3); // 8 (exponentiation)


// Unary plus and minus
console.log("Unary plus and minus")
let value = 5;
console.log(value); // 5 
let negValue = -value; // negation
console.log(negValue); // -5

// String concatenation
console.log("String concatenation")
let str1 = "Hello";
let str2 = " Musawer";
console.log("Value of str1 ", str1); // "Hello"
console.log("Value of str2 ", str2); // " Musawer"
let str3 = str1 + str2; // concatenation
console.log("Value of str3 ", str3); // "Hello Musawer"


console.log("\"5\" + 2 = ", "5" + 2); // string concatenation //5 2
console.log("5 + \"2\"", 5 + "2"); // string concatenation //52
console.log("\"5\" + 2 + 2", "5" + 2 + 2); // "522"
console.log("5 + 2 + \"2\"", 5 + 2 + "2"); // "522"


// increment & decrement
console.log("Increment & Decrement")
let counter = 2;
counter++;
console.log(counter); // 3
counter--;
console.log(counter); // 2 


// Prefix vs Postfix
console.log("Prefix vs Postfix")
let a = 1;
let b = ++a; // prefix increment
console.log(a); // 2
console.log(b); // 2    

let c = 1;
console.log("c++ = ", c++); // postfix increment, outputs 1
console.log(c); // 2    

let d = 1;
console.log("++d = ", ++d); // prefix increment, outputs 2
console.log(d); // 2


