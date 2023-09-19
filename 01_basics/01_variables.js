const accountId = 123;
let accountEmail = "sanket@gmail.com";
var accountPassword = "12356";
accountCity = "Mumbai";
let accountState;

// accountId = 2;
// console.log(accountId);

accountEmail = "jagtap@gmail.com";
accountPassword = "2121212";
accountCity = "Pune";


/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);