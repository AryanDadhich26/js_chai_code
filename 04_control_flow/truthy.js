const userEmail="abc@gmail.com"

if (userEmail){
    console.log("Got user email")
}else{
    console.log("Got user email")
}

//falsy values:false,0,-0, BigInt 0n, "",null,undefined , Nan 
//else all are truthy values some surprising "0","false"," ",[],{},function(){} =>anything written in string or declared functions , arrays , objects are called truthy values

val1=5??10//=>stores 5 in val1
val1=null??10//=>stores 10 in val1 it can also be undefined instead of null

// condition ? true: false =>if conditon true then true statemnets executes else false executes.