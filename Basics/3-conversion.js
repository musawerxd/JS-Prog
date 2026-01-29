"use strict";

// ---------------------------
// Value type & conversions
// ---------------------------

// let value = 2;
// let value = null;
// let value = undefined;
// let value = true;
let value = false;

console.log(
    "Type of value:",
    typeof value,
    "& Value:",
    value,
    "\n"
);

let valueInString = String(value); // conversion to string
console.log(
    "Type of valueInString:",
    typeof valueInString,
    "& Value:",
    valueInString,
    "\n"
);

let valueInNumber = Number(valueInString); // conversion to number
console.log(
    "Type of valueInNumber:",
    typeof valueInNumber,
    "& Value:",
    valueInNumber,
    "\n"
);

// ---------------------------
// Conversion examples
// ---------------------------

// 22        -> "22"        -> 22
// null      -> "null"      -> 0
// undefined -> "undefined" -> NaN
// true      -> "true"      -> 1
// false     -> "false"     -> 0

// NaN: Not a Number (type is number, but not equal to itself)
console.log(
    "Is NaN equal to itself?",
    NaN === NaN,
    "\n"
);

// ---------------------------
// Boolean conversions
// ---------------------------

// let isLoggedin = 1
// let isLoggedin = 0
// let isLoggedin;
// let isLoggedin = ""
// let isLoggedin = " "
// let isLoggedin = "musawer"
let isLoggedin = [];

console.log(
    "Type of isLoggedin:",
    typeof isLoggedin,
    "& Value:",
    isLoggedin,
    "\n"
);

let BooleanisLoggedin = Boolean(isLoggedin);
console.log(
    "Type of BooleanisLoggedin:",
    typeof BooleanisLoggedin,
    "& Value:",
    BooleanisLoggedin,
    "\n"
);

// ---------------------------
// Truthy / Falsy reference
// ---------------------------

// 1          -> true
// 0          -> false
// undefined  -> false
// ""         -> false
// "musawer"  -> true
// " "        -> true  (space is a character)
// "0"        -> true
// "null"     -> true
// "undefined"-> true
// "false"    -> true
// []         -> true
// {}         -> true
