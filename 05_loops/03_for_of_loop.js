// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    // console.log(num);
}

const str = "Hello World";

for (const char of str) {
    if(char == " ") continue;
    // console.log(char);
}

const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");
map.set('IN', "India");

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ":-", value);
}

const myObject = {
    email1: "sanket123@gmail.com",
    email2: "sjagtap123@gmail.com",
    email3: "sjagtap10@gmail.com"
}

// for (const [key, value] of myObject) {
//     console.log(key, ":-", value);
// }