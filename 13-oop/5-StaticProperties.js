// =============================
// Static Properties in JavaScript
// =============================






// ======================================================
// 1. Static Properties
// ======================================================

// Definition:
//
// Static properties belong to the CLASS itself,
// NOT to the instances of the class.
//
// WHY:
//
// Sometimes functionality belongs to the class,
// not to individual objects.
//
// Example:
//
// Math.PI
// Math.random()
//
// These belong to Math class, not objects.






// ------------------------------------------------------
// Static Method Example
// ------------------------------------------------------

class Calculator {
    static add(a, b) {
        return a + b;
    }
}

console.log(Calculator.add(2, 5))

// Explanation:
//
// add() is static
//
// It is called using:
//
// Calculator.add()
//
// NOT with an instance.








// ------------------------------------------------------
// Static Property Example
// ------------------------------------------------------

class config {
    static appName = "myApp";
}

console.log(config.appName);
// Static properties behave like global constants
// tied to a class.










// ------------------------------------------------------
// Static vs Instance
// ------------------------------------------------------

class User {
    static role = "admin";

    constructor(name) {
        this.name = name;
    }
}


const userOne = new User("Ali");
console.log(userOne.role) // undefined
console.log(User.role) //admin

// Explanation:
//
// Static property belongs to class
// Instance cannot directly access it.







// ======================================================
// 3. Static Methods Inside Instance Methods
// ======================================================

class Logger {
    static Log(message) {
        console.log("Log : ", message);
    }
}

Logger.Log("print this")

// Why useful:
//
// Static methods are commonly used for:
//
// • utility functions
// • helpers
// • configuration
// • factory methods












// static
// ------
//
// • Belongs to class, not instances
// • Called using ClassName.method()
// • Useful for utility functions
// • Instances cannot access static members
//
//
//
// Example:
//
// class MathHelper {
//
//   static square(x){
//     return x*x
//   }
//
// }
//
// MathHelper.square(5)
//