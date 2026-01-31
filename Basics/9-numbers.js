


// JS Numbers  Notes 1/31/2026

// Numbers

let num = 10; // dynamic initialization, simple number
let num2 = new Number(20); // object initialization, now num2 is an object and has properties and methods

console.log("typeof num : ", typeof num); // "number"
console.log("typeof num2 : ", typeof num2); // "object"



// Number Properties

console.log("\nNumber Properties:");

console.log("Number.MAX_VALUE : ", Number.MAX_VALUE); // Maximum numeric value representable in JS, biggest possible number

console.log("Number.MIN_VALUE : ", Number.MIN_VALUE); // Minimum positive numeric value representable in JS, smallest // possible number greater than 0

console.log("Number.POSITIVE_INFINITY : ", Number.POSITIVE_INFINITY); // Represents positive infinity

console.log("Number.NEGATIVE_INFINITY : ", Number.NEGATIVE_INFINITY); // Represents negative infinity

console.log("Max safe integer : ", Number.MAX_SAFE_INTEGER); // Maximum safe integer in JS (2^53 - 1)

console.log("Min safe integer : ", Number.MIN_SAFE_INTEGER); // Minimum safe integer in JS (-(2^53 - 1))

console.log("Number.NaN : ", Number.NaN); // Represents Not-a-Number value






// Number Methods

console.log("\nNumber Methods:");

console.log("num2.toExponential() : ", num2.toExponential()); // toExponential method to represent number in exponential notation, returns string

const num3 = 1.34345;
console.log("num3.toFixed(3) : ", num3.toFixed(3)); // toFixed method to format number to fixed decimal places, returns string

const num4 = 10000000;
console.log("num4.toLocaleString() : ", num4.toLocaleString()); // toLocaleString method to format number with local conventions, US format here, returns string
console.log("num4.toLocaleString('de-DE') : ", num4.toLocaleString('de-DE')); // German format

const num5 = 12.355543;
console.log("num5.toPrecision(3) : ", num5.toPrecision(3)); // toPrecision method to format number to specified precision, returns string

const num6 = "123.45abc";
console.log("Number(num6) : ", Number(num6)); // Converts string to number, returns NaN if not a valid number   

const num7 = "456abc";
console.log("parseInt(num7) : ", parseInt(num7)); // Parses string and returns integer part, ignores non-numeric characters 

const num8 = "43.1232cdffd";
console.log("parseFloat(num8) : ", parseFloat(num8)); // Parses string and returns floating-point number, ignores non-numeric characters

console.log("isNaN(\"abc\")", isNaN("abc")); // Checks if value is NaN, returns true or false
console.log("isNaN(123)", isNaN(123)); // false

console.log("isFinite(123)", isFinite(123)); // Checks if value is finite number, returns true or false
console.log("isFinite(Infinity)", isFinite(Infinity)); // false



