//for of
const arr=[1,2,3,4,5]
for (const num of arr) {
    console.log(num);
}

//Maps:it does not contain duplicate values similar ot set
const map= new Map();
map.set('IN',"India")
map.set('USA',"UnitedStaes")
map.set('IN',"India")//=>this value will not add

for(const [key,value] of map){
    console.log(key,':-',value)
}//if Object is instad of map it will give error for objects there is different method
const myObj ={
    js:"javascript",
    cpp:"c++",
    rb:"rubby"
}

for (const key in myObj) {
    console.log(key)
    console.log(myObj[key])
    
}