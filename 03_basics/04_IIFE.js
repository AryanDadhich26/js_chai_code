//Immediately Invoked Funciton Expression(IIFE)

// function chai(){
//     console.log('Hi!')
// }()//=>will give error 

// (function chai(){
//     console.log('Hi!')
// })()//=>will print Hi! since first () shows initialization of func and second () shows execution 

// (() => {
//     console.log('Hi!')
// })()//=>this will give bcz the above funciton is not stooped IIFE does not know where to stop the context so here we have to put ; after ending IIFE
(function chai(){
    console.log('Hi!')
})();//=>will print Hi! since first () shows initialization of func and second () shows execution 

(() => {
    console.log('Hi!')
})()//=>Hi! Arraow function