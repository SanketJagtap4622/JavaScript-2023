// Dates
const myDate = new Date();
console.log(myDate);
console.log(typeof myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toJSON());

// Declare specific date

// const myCreatedDate = new Date(1982, 7, 11);
// console.log(myCreatedDate.toDateString());

// const myCreatedDate = new Date(1982, 7, 11, 8, 4);
// console.log(myCreatedDate.toLocaleString());

// const myCreatedDate = new Date("2023-05-14");
const myCreatedDate = new Date("01-14-2015");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());