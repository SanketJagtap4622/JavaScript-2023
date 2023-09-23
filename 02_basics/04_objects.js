// const tinderUser = new Object();
const tinderUser = {};

tinderUser.id = "1223abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regular_user = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Sanket",
            lastname: "Jagtap"
        }
    }
}

// console.log(regular_user.fullname.userfullname.firstname);

// Optional chaining - We use following syntax, if fullname is not present
// console.log(regular_user.fullname?.userfullname.firstname);

const obj1 = {1: "A", 2: "B"};
const obj2 = {3: "A", 4: "B"};
const obj3 = {5: "A", 6: "B"};

// const ansObj = {obj1, obj2};
// const ansObj = Object.assign(obj1, obj2);
// const ansObj = Object.assign({}, obj1, obj2, obj3);
const ansObj = {...obj1, ...obj2, ...obj3};
// console.log(ansObj);

const user = [
    {
        id: 1,
        email: "sanket@gmail.com"
    },
    {
        id: 1,
        email: "sanket@gmail.com"
    },
    {
        id: 1,
        email: "sanket@gmail.com"
    }
]

// console.log(user[1].email);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));