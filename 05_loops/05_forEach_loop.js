// forEach

const languages = ["Js", "Python", "Java", "CPP", "Ruby"];

// languages.forEach( function (item) {
//     console.log(item);
// } )

// languages.forEach( (val) => {
//     console.log(val);
// } )

// function printMe(item){
//     console.log(item);
// }

// languages.forEach(printMe);

// languages.forEach( (item, index, array) => {
//     console.log(item, index, array);
// } )

const myArr = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "C++",
        languageFileName: "cpp"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    }
]

myArr.forEach((item) => {
    // console.log(item.languageName);
    // console.log(item.languageFileName);
})