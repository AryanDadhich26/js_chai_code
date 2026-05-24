//array:can have mixed datatype , size can be changesd after diclaration, copy operations create shallow copies this is marked by refrences i.e. change in copy will make in chaneg in original array
const myArr = [0,1,2,"aryan", true]
//  new way to declare array"
let myArr2 = new Array(1,2,3,4,5)
//Array methods:
myArr.push(6)//adds elements in arr
myArr.pop()//removes last element in array
myArr.unshift(0)//this adds element in start
myArr.shift()//removes elemnt from start
myArr.includes(9)//gives true or false 
myArr.indexOf(9)//gives -1 if not exists
myArr.join()//converts arr to string
myArr.slice(1,3)//prints array from index 1 to 2 does not includes last one and does not make any changes in origincal array
myArr.splice(1,3)//prints elements from index 1 to 3 , 3 included also it removes elements from 1 to 3 , 3 included in original array this is the diff between slice and splice
arr1.push(arr2)//this does not concatenates or merges arr2 in one it pushes arr2 as it is in arr1 i.e. prinitng arr1 will give [1,2,3,[4,5,6]] where [4,5,6] is arr2
const newarr= arr1.concat(arr2)//concat operation merges array nicely and stores in new array gives output of consoling newarr is [1,2,3,4,5,6]
const newarr= [...arr1, ...arr2]//... does the work of spreading elements in array and then makes a new array consisting all elements this also goves output [1,2,3,4,5,6]
arr.flat(deapth)//deapth can be Infinity also this is used when i am having arr in arr conditon and i want all elements in single array this also gives new array in return depth in how much array in arra is e.g. [1,2,3,[4,5,[6,7]]] here depth is 2 
Array.isArray(input)//checks wether the input is array gives true or false 
Array.from("Aryan")//creates arr of the input here ['A','r'....]
Array.from({name:"Aryan"})//creates an empty array since the function is confused wether to make array of the keys or of the values 
let s1=100
let s2=200
let s3=300
Array.of(s1,s2,s3)//returns array [100,200,300] of fucntion also returns an array
