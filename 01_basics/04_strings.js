const name = "hitesh"
const repocount = 50
console.log(name + repocount + "Value");
//alternative
console.log(`Hello my name is ${name} and my repo count is ${repocount}`)
name[0]
name.length
name.toUpperCase()
name.charAt(2)
name.indexOf('t')
// to check for other methods you can see in console
name.substring(0,4)//4th index value is not included
name.slice(0,4)//can take -ve values in input
name.trim()//removes starting and endspaces
name.replace('%20','-')//replacing %20 to -
name.includes('abc')//returns true or false
name.split('-')