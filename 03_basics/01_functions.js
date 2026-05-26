function sayMyName(){
    console.log("Aryan")
}

sayMyname()

function addNumbers(n1,n2){
    console.log(n1+n2)
}
addNumbers(3,4)//=>7
addNumbers(3,"4")//=>34
addNumbers(3,"a")//=>3a
addNumbers(3,null)//=>3

function calculateCartPrice(...num1){//this ... is knows as rest operator here earlier was called spread according to use case
    return num1 

}

console.log(calculateCartPrice(200,300,400))//=>[200,300,400]
const user={
    name:"Aryan",
    price:12345
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.name} and price is ${anyObject.price}`);
}

handleObject(user)