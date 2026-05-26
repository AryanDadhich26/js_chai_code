const user={
    username:"Aryan",
    price:999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this)//=>tells about current context of the user its details mentioned in Object
    }
}

user.welcomeMessage()
console.log(this)//=>prints empty paranthesis bcz its not inisde any Object and in node this is empty if not anything
//this keyword also does not works in functions ony return meta data or {} or defined if try to access anything from function
const chai = ()=>{//this is called arrow function
    let username = "aryan"
    console.log(this);//=>return {}
}

const addTwo = (num1,num2)=> num1+num2//=>will return the addition since we had only 1 line statement so we dont need to write {} and return statement, but if we use {} then it is compulsion to use return keyword



