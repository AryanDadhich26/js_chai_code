addOne(3)//=>4
function addOne(num){
    return num+1 
}
addTwo(3)//=>Error: addTwo is not initialized if store then this error comes
const addTwo=function(num){
    return num+2 
}