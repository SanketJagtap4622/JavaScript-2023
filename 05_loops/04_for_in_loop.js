// for in

const myObject = {
    js: "Javascript",
    cpp: "C plus plus",
    py: "Python",
    java: "Java"
}

for (const key in myObject) {
    // console.log(key);
    // console.log(myObject[key]);
    // console.log(`${key} extension is for ${myObject[key]}`);
}

const programming_languages = ["Js", "Python", "Java", "CPP", "Ruby"];

for (const key in programming_languages) {
    // console.log(key);
    // console.log(programming_languages[key]);
}

const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");
map.set('IN', "India");

// console.log(map);

for (const key in map) {
    console.log(key);
}