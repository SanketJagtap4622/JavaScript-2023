// Arrays

const arr = [5, 6, 7, 8, 9];
// console.log(arr[2]);

const arr1 = ["abc", "pqr", "xyz"];
// console.log(arr1[1]);

const myArr = new Array(11, 12, 13, 14, 15);

// myArr.push(16);
// myArr.push(17);
// myArr.pop();

// myArr.unshift(19);
// myArr.unshift(18);
// myArr.shift();

// console.log(myArr.includes(12));
// console.log(myArr.indexOf(2));

const newArr = myArr.join();

// console.log(typeof myArr);
// console.log(myArr);
// console.log(typeof newArr);
// console.log(newArr);

// Slice, Splice
console.log("Original ", myArr);

const myn1 = myArr.slice(1, 4);

console.log("Slice ", myn1);
console.log("After slice", myArr);

const myn2 = myArr.splice(1, 3);

console.log("Splice ", myn2);
console.log("After splice", myArr);


