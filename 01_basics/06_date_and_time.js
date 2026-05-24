let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
//typeof Date is object
let myCreatedDate = new Date(2026, 0, 23)//in js months start from 0
console.log(myCreatedDate.toString())
let myCreatedDate_2 = new Date("01-14-2026")//in string months start from 01
console.log(myCreatedDate_2.toString())
// #there are methods such as .now, .getMonth(), .getDay() 