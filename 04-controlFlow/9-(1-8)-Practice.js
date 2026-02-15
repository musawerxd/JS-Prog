


// JS Practice 02/15/2026



//1. Compare "5" and 5 using == and ===. Explain the difference.
console.log(`\n Q-1: `);

// Using == (loose equality)
console.log("5 == '5' : ", 5 == '5') // Explanation: == converts types before comparing (type coercion)

// Using === (strict equality)
console.log("5 === '5' : ", 5 === '5')// Explanation: === checks both value AND type; string !== number







//2. Check if 0, "0", false, null, undefined, NaN, and "" are truthy or falsy.
console.log(`\n Q-2: `);
let values = [0, "0", false, null, undefined, NaN, ""]

for (const val of values) {
    console.log(`Value : ${val} ->`, val ? "truthy" : "falsy")
}









//3. Assign a variable username and default it to "Guest" using ||. Test with "", "0", null, and "Musawer".
console.log(`\n Q-3: `);

let username1 = "" || "Guest"
console.log(`username1 : `, username1); // "" is falsy 

let username2 = "0" || "Guest"
console.log(`username2 : `, username2);// "0" is truthy 

let username3 = null || "Guest"
console.log(`username3 : `, username3); // null is falsy 

let username4 = "Musawer" || "Guest"
console.log(`username4 : `, username4); // "Musawer" is truthy





//4. Use ?? to assign a default value only if a variable is null or undefined. Test with 0, "", and false.
console.log(`\n Q-4: `);

let variable1 = 0 ?? "default"
console.log(variable1) // 0 , because 0 is not a null or undefined 

let variable2 = "" ?? "default"
console.log(variable2) //  , because    is not a null or undefined 

let variable3 = false ?? "default"
console.log(variable3) // false , because false  is not a null or undefined 







//5. Write an if statement that prints "Adult" if age ≥ 18, otherwise "Minor". Then rewrite it using a ternary operator.
console.log(`\n Q-5: `);

age = 14;
``
console.log(`With If-Else: `);
if (age >= 18) {
    console.log("Adult")
}
else {
    console.log("Minor")
}
console.log(`With Ternary Operator: `);
(age >= 18) ? console.log(`Adult`) : console.log(`Minor`)









//6. Write a nested ternary to assign grades: ≥80 → A, ≥60 → B, ≥40 → C, <40 → Fail.
console.log(`\n Q-6: `);

let marks = 66

let grade = marks >= 80 ? "A"
    : marks >= 60 ? "B"
        : marks >= 40 ? "C"
            : "Fail";

console.log("GRADE : ", grade)






//7. Check if a number is between 10 and 20 using logical AND (&&).
console.log(`\n Q-7: `);
let num = 20
console.log(num >= 10 && num <= 20)







//8. Print "Premium Access" only if both isPaid AND isVerified are true using &&.
console.log(`\n Q-8: `);
let isPaid = true
let isVerfied = true

console.log(isPaid && isVerfied)

isPaid = false

console.log(isPaid && isVerfied)








//9. Check if a user is admin OR owner using logical OR (||). Print appropriate message.
console.log(`\n Q-9: `);

let role = "owner"
if (role === "admin" || role === "admin") {
    console.log(`Access Granted`);
}
else console.log(`Access denied`);








//10. Use ! to reverse a boolean flag isLoggedIn. Print "Login required" if false.
console.log(`\n Q-10: `);

let isLoggedIn = false;

if (!isLoggedIn) {
    console.log("Login required");
} else {
    console.log("Welcome!");
}








//11. Compare "abc" and "bcd" using > and <. Print which comes first alphabetically.
console.log(`\n Q-11: `);


let str1 = "abc";
let str2 = "bcd";

if (str1 < str2) {
    console.log(`${str1} comes before ${str2} alphabetically`);
} else if (str1 > str2) {
    console.log(`${str2} comes before ${str1} alphabetically`);
} else {
    console.log("Both strings are equal");
}









//12. Write a switch for days of the week. Then remove breaks and explain fall-through.
console.log(`\n Q-12: `);

let day = "Tuesday";

switch (day) {
    case "Monday":
        console.log("Start of week");
        break;
    case "Tuesday":
        console.log("Second day");
        break;
    case "Wednesday":
        console.log("Midweek");
        break;
    case "Thursday":
        console.log("Almost weekend");
        break;
    case "Friday":
        console.log("Last workday");
        break;
    default:
        console.log("Weekend!");
}

// FALL-THROUGH EXAMPLE 
switch (day) {
    case "Monday":
        console.log("Start of week");
    case "Tuesday":
        console.log("Second day");
    case "Wednesday":
        console.log("Midweek");
    default:
        console.log("End");
}




//13. Use short-circuiting with AND: result = value1 && value2 && "Success". Test different combinations of truthy/falsy.
console.log(`\n Q-13: `);
// Test values
let a = true;
let b = false;
let c = "Hello";
let d = null;

// AND short-circuit: returns first falsy or last value if all truthy
let result01 = a && c && "Success";
console.log(`true && "Hello" && "Success":`, result01);
// Output: Success (all truthy → last value returned)

let result02 = b && c && "Success";
console.log(`false && "Hello" && "Success":`, result02);
// Output: false (first falsy stops evaluation)

let result03 = a && d && "Success";
console.log(`true && null && "Success":`, result03);
// Output: null (first falsy encountered)

let result04 = d && b && "Success";
console.log(`null && false && "Success":`, result04);
// Output: null (first falsy stops evaluation)









//14. Use short-circuiting with OR: result = value1 || value2 || "Default". Test 0, "", null, "Hello".
console.log(`\n Q-14: `);

// Test values
let value1 = 0;
let value2 = "";
let value3 = null;
let value4 = "Hello";

// OR short-circuit: returns first truthy value
let result1 = value1 || "Default";
console.log(`value1 (0) || "Default":`, result1);
// Output: Default (0 is falsy)

let result2 = value2 || "Default";
console.log(`value2 ("") || "Default":`, result2);
// Output: Default ("" is falsy)

let result3 = value3 || "Default";
console.log(`value3 (null) || "Default":`, result3);
// Output: Default (null is falsy)

let result4 = value4 || "Default";
console.log(`value4 ("Hello") || "Default":`, result4);
// Output: Hello ("Hello" is truthy)











//15. Compare null and undefined using == and ===. Explain the difference.
console.log(`\n Q-15: `);

// Using == (loose equality)
console.log("null == undefined : ", null == undefined);// Explanation: == considers null and undefined equal (type coercion)

// Using === (strict equality)
console.log("null === undefined : ", null === undefined); // Explanation: === checks type too; null !== undefined