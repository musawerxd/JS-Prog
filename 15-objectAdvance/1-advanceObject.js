// ======================================================
// ADVANCED OBJECTS IN JAVASCRIPT
// ======================================================





// ======================================================
// 1. Property Descriptors
// ======================================================

// Every property in JavaScript has metadata called
// a PROPERTY DESCRIPTOR.

// const user = {
//     name: "Musawer"
// }

// console.log(Object.getOwnPropertyDescriptor(user, "name"));

// Output Example:
//
// {
//   value: "Musawer",
//   writable: true,
//   enumerable: true,
//   configurable: true
// }
//
// Descriptor fields:
//
// value → stored value
// writable → can value be changed
// enumerable → appears in loops
// configurable → can descriptor be modified








// ======================================================
// 2. Object.defineProperty()
// ======================================================

// allows precise controll over property behaviour.

// const obj = {}

// Object.defineProperty(obj, "id", {
//     value: 1001,
//     writable: false,
//     Enumerable: false,
//     configurable: false
// })

// console.log(Object.getOwnPropertyDescriptor(obj, "id"));
// console.log(obj.id);

// obj.id = 12;// ignored because writable=false

// console.log(obj.id);
// console.log(Object.getOwnPropertyDescriptor(obj, "id"));









// ======================================================
// 3. Object.defineProperties()
// ======================================================

// const account = {}

// Object.defineProperties(account, {
//     username: {
//         value: "dev123",
//         writable: false
//     },
//     role: {
//         value: "admin",
//         writable: false
//     }
// }
// )
// console.log(account.username);
// console.log(account.role);

// account.username = "musawer"// ignored because writable=false
// account.role = "Ceo"// ignored because writable=false

// console.log(account.username);
// console.log(account.role);
// console.log(Object.getOwnPropertyDescriptors(account, "username", "role"));













// ======================================================
// 4. Getter & Setter
// ======================================================



// Getters and setters allow control over how properties
// are accessed or updated.

const profile = {
    firstname: "musawer",
    lastname: "Ahmad",

    get fullName() {
        return `${this.firstname}  ${this.lastname}`
    },

    set fullName(name) {
        const parts = name.split(" ");
        this.firstname = parts[0]
        this.lastname = parts[1]
    }
}

console.log(profile.firstname);
console.log(profile.lastname);

console.log(profile.fullName);
profile.fullName = "Syed Musawer"
console.log(profile.fullName);









// ======================================================
// 5. Object.preventExtensions()
// ======================================================

// Prevents adding new properties.

const config = {
    mode: "dev"
}

Object.preventExtensions(config);

config.newProp = 12;

console.log(config.newProp) // undefined










// ======================================================
// 6. Object.getOwnPropertyNames()
// ======================================================

// Returns all property names including non-enumerable ones.

const test = {}

Object.defineProperty(test, "hidden", {
    value: 123,
    Enumerable: false
})

console.log(Object.getOwnPropertyNames(test));










// ======================================================
// 7. Object.getOwnPropertySymbols()
// ======================================================

// Retrieves symbol keys.

const id = Symbol("id")

const data = {
    [id]: 123
}

console.log(Object.getOwnPropertySymbols(data));








// ======================================================
// 8. Object.fromEntries()
// ======================================================
//
// Converts array of key-value pairs into object.

const entries = [
    ["name", "Zain"],
    ["age", 24]
];

const result = Object.fromEntries(entries);

console.log(result);


// Reverse of Object.entries()











// ======================================================
// 9. Object.hasOwn()
// ======================================================
//
// Modern replacement for hasOwnProperty()

const car = {
    model: "tsla"
}

console.log(Object.hasOwn(car, "model"));






// ======================================================
// 10. Deep Cloning Objects
// ======================================================
//
// Spread only performs shallow copy.


const real = {
    name: "Ali",
    age: 20,
    address: {
        city: "Burewala",
        country: "pakistan"
    }
}


// const copy = { ...real }  //spread operator 

const copy = structuredClone(real)

console.log(real);
console.log(copy);





