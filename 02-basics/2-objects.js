


// JS Object Notes 06/02/2026




// Two ways to create an object

//Method A – Normal way (literal)
console.log("\n1. Two ways to create an object");

let obj = { name: "Musawer" }; // used 99% of the time 
console.log("Normal way (literal) obj : ", obj);

//Method B – Constructor way
let obj1 = new Object({ name: "musawer" })
console.log("Constructor way obj1 : ", obj1);





// Simple Empty object  
console.log("\n2. Empty Object");

const obj2 = {}; // yup, that empty object is still an object  
console.log(obj2); // shows the object structure  
console.log(typeof obj); // "object"





// Object with keys and values  
console.log("\n3. Object with keys and values ");

const obj3 = {
    name: "musawer",
    email: "musawer@google.com",
};

// here "name" and "email" are KEYS  
// "musawer" and "musawer@google.com" are VALUES  

// unlike arrays:
// - keys can be: string, number, or symbol  
// - values can be ANYTHING: string, number, boolean, null, undefined, array, function, or another object  

console.log(obj3);





//How to access Data from object
console.log("\n4. Two ways to Access Data from object ");

const obj4 = {
    name: "Musawer",
    email: "musawer@google.com",
    isLoggedin: false,
    "full name": "Musawer Ahmad"
};

// Method 1 -> Dot notation
console.log("First ->  obj4.email : ", obj4.email) //when keys are simple 
// Method 2 -> Bracket notation
console.log("Second -> obj4[\"full name\"] : ", obj4["full name"]) //when keys are simple (Needed when: key has space), we cannot access it with ob4.full name





// Add / change / delete
console.log("\n5. Add / change / delete in object ");

//Add
const obj5 = {} // empty object
obj5.name = "Musawer Ahmad";
console.log("obj5 : ", obj5);// now obj5 has name data

//Change
const obj6 = {
    email: "musawer@google.com"
}
obj6.email = "musawer@github.com";
console.log("obj6 : ", obj6);// now obj6 has email changed

//Change
const obj7 = {
    isLoggedin: true,
    email: "musawer@google.com"
}
delete obj7.email
console.log("obj7 : ", obj7);// now obj7 has email deleted





// functions can be added in objects 
console.log("\n6. Functions can be added in objects  ");

const obj8 = {
    name: "Musawer",
    isLoggedin: true,
    email: "musawer@google.com",
    greets() {
        console.log("Hello! my name is Musawer")
    }
}
console.log(obj8.greets())





// Objects are reference types
console.log("\n7. Objects are reference types");

let a = { name: "Musawer" };
let b = a;   // NOT a copy, just same object ka second name (heap concept)

console.log("Before Change: ")
console.log("a.name : ", a.name); // Musawer 
console.log("b.name : ", b.name); // Musawer 

b.name = "Ali";

console.log("After Change: ")
console.log("a.name : ", a.name); // Ali 
console.log("b.name : ", b.name); // Ali 
//Both a and b point to SAME memory





// 8. How to actually copy objects
console.log("\n8. Copying objects (not reference)");
let objA = { name: "Musawer", age: 18 };
let objB = objA;   //  reference (points to the same heap memory)

// so how to actually copy an object

// Method 1 -> Spread operator
let objC = { ...objA }
console.log("Before Change: ")
console.log("objA.name : ", objA.name); // Musawer 
console.log("objC.name : ", objC.name); // Musawer 

objC.name = "Ali";

console.log("After Change: ")
console.log("objA.name : ", objA.name); // Musawer 
console.log("objC.name : ", objC.name); // Ali 

// Method 2 -> Object.assign
let objD = Object.assign({}, objA);
console.log("Before Change: ")
console.log("objA.age : ", objA.age); // 18 
console.log("objD.age : ", objD.age); // 18 

objD.age = 20;

console.log("After Change: ")
console.log("objA.age : ", objA.age); // 18 
console.log("objD.age : ", objD.age); // 20 





// 9. Nested Objects
console.log("\n9. Nested objects");

const user = {
    "full name": {
        firstName: "musawer",
        lastName: "ahmad"
    }
}
console.log("user[\"full name\"] :", user["full name"]) // returns object
console.log("user[\"full name\"].lastName :", user["full name"].lastName) // returns lastName // we can narrow down as much as we want





// 10. Arrays in obbjects
console.log("\n10. Arrays in obbjects");
const user2 = {
    "full name": {
        firstName: "musawer",
        lastName: "ahmad"
    },
    hobbies: ["F1 racing", "Cricket", "table tennis"] // array inside object 
}
console.log("user2.hobbies", user2.hobbies); // returns array
console.log("user2.hobbies", user2.hobbies[0]); // returns first element from array

//Adding element inside array in onbject
user2.hobbies.push("golf")
console.log("user2.hobbies", user2.hobbies); // now golf is added





// 12. Symbols in objects
console.log("\n12. Symbols in objects");

// Symbols = unique keys
const id = Symbol("id");
const role = Symbol("role");

const user3 = {
    name: "musawer",
    [id]: 23,
    [role]: "CEO"
};
console.log("user3[id]: ", user3[id]); // returns 23
console.log("user3[role]: ", user3[role]); // returns CEO





// 13. Object Freeze
console.log("\n13. Object Freeze");

const user4 = {}
user4.name = "musawer ahmad"
console.log("user4.name : ", user4.name)
console.log("Before Freeze : ")
user4.name = "Shah sb." // can be changed 
console.log("user4.name : ", user4.name)

Object.freeze(user4); // freezed the user4 object so now on no changes will be made lets check

console.log("After Freeze : ")
user4.name = "Hunny" // cannot be changed 
console.log("user4.name : ", user4.name) // will be same as (Shah sb.)







// 13. this in object
console.log("\n13. this in object");
const user5 = {
    "full name": {
        firstName: "musawer",
        lastName: "ahmad"
    },
    hobbies: ["F1 racing", "Cricket", "table tennis"], // array inside object 
    display() {
        console.log(`User 5 name is : ${this["full name"].firstName} ${this["full name"].lastName} and has Hobby of :  ${this.hobbies[0]}`)
    }
}
console.log("user5.display() : ", user5.display())





// 14. Basic API response in object
console.log("\n14. Basic API response in object");

const apiResponse = {
    status: 200,
    message: "Success",
    data: {
        id: 101,
        username: "musawerxd",
        email: "musawer@gmail.com",
        isVerified: true,
        posts: [
            { id: 1, title: "JS is fun" },
            { id: 2, title: "Objects are life" }
        ]//array of objects
    }
}
console.log("Status: ", apiResponse.status)
console.log("Message: ", apiResponse.message)
console.log("Username: ", apiResponse.data.username)
console.log("Email: ", apiResponse.data.email)
console.log("Post 1 id : ", apiResponse.data.posts[0].id, "Post 1 Title : ", apiResponse.data.posts[0].title)





// 15. Object.keys() & Object.values() & Object.entries()
console.log("\n15. Object.keys & Object.values");

const userK = {
    name: "Musawer",
    age: 21,
    isLoggedIn: true
};
console.log("userK : ", userK)
console.log("Object.keys(userK) : ", Object.keys(userK)) // returns array of keys in the object

console.log("Object.values(userK) : ", Object.values(userK)) // returns array of values in the object

console.log("Object.entries(userK) : ", Object.entries(userK)) // returns array of key values pair in the object





// 16. hasOwnProperty() or hasOwn()
console.log("\n16. hasOwnProperty()");

const userH = {
    name: "Musawer",
    age: 21,
    isLoggedIn: true
}
console.log("userH : ", userH)
console.log("Object.hasOwn(\"isLoggedIn\") : ", Object.hasOwn("isLoggedIn"))// true
console.log("Object.hasOwn(\"data\") : ", Object.hasOwn("data"))// false





// 17. De-Structuring in objects
console.log("\n17. De-Structuring in objects");

const userD = {
    name: "Musawer",
    age: 21,
    isLoggedIn: true,
    company: "google"
}
console.log("userD : ", userD)
console.log("Without deStructuring we do it like this:")
console.log("userD.name : ", userD.name); // Dot Notation, there is nothing wrong in this 

console.log("with deStructuring we do it like this:")
const { name } = userD
console.log("name : ", name); // much cleaner and short saves time by not writing big lines of code again n again

//we can also rename while deStructuring 

const { isLoggedIn: working } = userD
console.log("working : ", working); // true 

// we can extract multiple 
const { age, isLoggedIn, company } = userD
console.log("Age : ", age)
console.log("isLoggedIn : ", isLoggedIn)
console.log("company : ", company)





// 18. Nested De-Structuring in objects
console.log("\n18. De-Structuring in objects");

const userN = {
    fullAdress: {
        city: "Multan",
        zip: 60000
    }
}
const { fullAdress: { city, zip } } = userN;
console.log("city : ", city);
console.log("zip : ", zip);





// 19.  De-Structuring With arrays inside object
console.log("\n19. De-Structuring With arrays inside object");

const userA = {
    hobbies: ["F1", "UFC"]
}

const { hobbies: [one] } = userA;

console.log("one : ", one);






// Common interview trap
// const { a } = null; //  error
// Destructuring only works on real objects, not null/undefined.
