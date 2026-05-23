const accountId = 12345
let accountEmail = "aryandadhichksg@gmail.com"
var accountPassword = "12345678"
accountCity = "Jaipur"
let accountState
//accountID =2 ->Not allowed will give error
accountEmail = "hc@hc.com"
accountPassword = "87654321"
accountCity="Ajmer"
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);
console.table([accountEmail,accountPassword,accountCity,accountState])
/*
Prefered not to use var bcz of issue in block scope and functional scope
*/