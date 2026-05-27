const coding=["cpp","java","py"]
//forEach does not returns anything
const number=[1,2,3,4,5,6,7,8,9]
const newNums=number.filter((num)=>{ return num>4})//=>returns values according to the condition in callback function
const newNums=number.filter((num)=>num>4)//=>returns values according to the condition in callback function
//4th and 5th giv ethe same output since its expilicit return case as we discussed earliear
const newNums=number.filter((num)=>{num>4})//=>returns empty array since we have used {} we have to use return as discussed earliear


//yt vedio question
const useBooks=books.filter((bk)=>bk.genre==="History" && bk.publish>=1995 )