let score = "33"
console.log(typeof score)

//converting string to Number
let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)
// but if score is "33abc" converion will not show error but valueInNumbers will be Nan if score is null valueInNumber converts to 0
//33=>33
//"33"=>33
//"33abc"=>NaN
//true=>1 ; false=>0
//null=>0


// for Boolean converter
// 1=>true; 0=>false
// " "=>fasle; "Aryan"=>true

//Operations:
let value = 3
let negValue = -value
// console.log(negValue)=>gives output -3
let str1 = "Aryan"
let str2 = "Khushal"
let str3 = str1  + str2
console.log(str3)   // concatenates string
console.log(1+"2")  // ans is 12
console.log("1"+2)  // ans is 12
console.log("1"+2+2) // ans is 122
console.log(1+2+"2") // ans is 32
console.log(+true) // ans is 1
console.log(+"") // ans is 0

//comparisions:
console.log("2">1);//will give True but avoid doing it
console.log(null > 0); //ans is false
console.log(null == 0); //ans is false
console.log(null >= 0); //ans is true
//reason is that equality == and comparision > etc work differently comparion converts null to number, treating as 0 that's why null>=0 is true and null>0 is false
//for undefined instead of null it gives false in all three cond
// === compares both value and datatype both