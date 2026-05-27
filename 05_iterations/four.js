const cosing=["cpp","java","py"]

//forEach:especially for arr
cosing.forEach( function (item) {
    console.log(item)
})//this funciton is a callback function which decides what to do with item in array where item is each value in arr it does not need name since we dont need to store it

cosing.forEach((item)=>{
    console.log(item);
})//arrow fucntion

function printMe(item){
    console.log(item);
}
cosing.forEach(printMe)//calling function

const mycoding=[
    {
        languagename:"javascript",
        languagefilename:"js"
    },
    {
        languagename:"C++",
        languagefilename:"cpp"
    },
    {
        languagename:"python",
        languagefilename:"py"
    }
]

mycoding.forEach((item)=>{
    console.log(item.languagefilename)
})