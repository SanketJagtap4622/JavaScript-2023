"use strict"; // treat all js code as a newer version

// alert(3+3); // we are using nodejs, not browser

// console.log(3 
//     +3) // code readability should be high

// console.log("Sanket")


// Primitive datatypes

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique

// console.log(typeof undefined); // undefined
// console.log(typeof null); // object

let name = "Sanket";
let age = 20;
let temp = null;
let isLoggedIn = false
let state;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

let bigNumber = 1694961651349641984651984n;

// Reference (Non Primitive)
// Array, Object, Functions

const temp1 = ["abc", "pqr", "xyz"];

const myObj = {
    name : "Sanket",
    age : 20,
}

const myFunction = function(){
    console.log("Hello World");
}


