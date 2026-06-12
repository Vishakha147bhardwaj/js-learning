// Data Types: 1. Primitive Types. 2. Non-Primitive Types
// Primitive Types: 1. Number -(int, float) 2. String 3. Boolean 4. null 5. undefined 6. Symbol 7. bigInt
const score = 100
const scoreValue = 100.3
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;
const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId);
const bigNumber = 3456789873456n

// Non-Primitive Types:
//1.Arrays 2. Objects 3. Functions

const heros = ["shaktiman","naagraj","doga"];
let myObj = {
    name:"Vishakha",
    age:23,
}

const myFunction = function(){
    console.log("hello world");
    
}
console.log(typeof bigNumber);
console.log(typeof myFunction);
