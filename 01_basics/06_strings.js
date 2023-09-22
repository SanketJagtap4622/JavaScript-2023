const name = "Sanket";
const repoCount = 10;

console.log(typeof name);
console.log(typeof String);
console.log(typeof repoCount);

console.log(name +" " + repoCount + " value");

console.log(`Hello my name is ${name} and my repository count is ${repoCount}`);


// Another way to declare string
const str = new String('JavaScript');
console.log(str);

console.log(str[5]);
console.log(str.__proto__);

console.log(str.length);
console.log(str.toUpperCase());
console.log(str.charAt(8));
console.log(str.indexOf('i'));

const newString = str.substring(3, 8);
console.log(newString);

const str1 = str.slice(-8, 4);
console.log(str1);

const str2 = "   Hello World   ";
console.log(str2);
console.log(str2.trim());

const userName = "Sanket%20Jagtap";
console.log(userName.replace("%20", "-"));

console.log(userName.includes("ket"));
console.log(userName.includes("abc"));

const path = "Users\\DELL\\Desktop\\JavaScript\\01_basics\\06_strings.js";
console.log(path.split("\\"));