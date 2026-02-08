


// JS if , if-else, if-else-if notes 02/08/2026




// 1. Simple if
console.log(`\n 1. Simple if`)
// Runs block only when condition is true

let age = 20;

if (age >= 18) {
    console.log("You are adult");
}

// If condition is false -> nothing happens






// 2. if – else
console.log(`\n 2. if - else`)

// Two possible execution paths

let marks = 45;

if (marks >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// Exactly ONE block will run


// 3. if – else if – else
console.log(`\n 3. if - else if - else`)

// Multiple conditions checked in order

let score = 78;

if (score >= 90) {
    console.log("Grade A");
}
else if (score >= 80) {
    console.log("Grade B");
}
else if (score >= 70) {
    console.log("Grade C");
}
else if (score >= 60) {
    console.log("Grade D");
}
else {
    console.log("Fail");
}

// Rules:
// - Conditions checked top to bottom
// - First true block runs
// - Rest are ignored
// - else is optional fallback


// 4. Without braces (not recommended)
console.log(`\n 4. Without braces`)

if (age > 18) console.log("Allowed");

// can be multiple
if (age > 18) console.log("Allowed"), console.log(" i ran!");
// but it is considered bad code 


// Use braces when more than one line


// 5. Common mistakes
console.log(`\n 5. Common mistakes`)
// Mistake: assignment instead of comparison
// if (age = 18) { console.log("allowed") }   // WRONG

// Correct
if (age === 18) { }


// 6. Professional Notes

// - Use if for single condition
// - Use if–else for two paths
// - Use if–else if for multiple ranges
// - Prefer === for comparison
// - Avoid deep nested ifs