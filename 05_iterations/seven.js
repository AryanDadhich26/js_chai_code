const number=[1,2,3,4,5,6,7,8,9]
//map
const newNums=number.map((num)=>num+10) 
const newNums=number.map((num)=>num+10).map((num)=>num*10)//=>working is first map sends the array created to second map and then second map returns the final array by making changes in array returned by first map 
//reduce:
const initialValue=0
const sumWithInitial = number.reduce(
    (accumulator, currentValue)=>accumulator+currentValue,
    initialValue
)//accumulator only asks one time what is in initialvalue and then addition goes in accumulator
shoppingcart=[
    {
        course:"js",
        price:299
    },
    {
        course:"py",
        price:399
    },
    {
        course:"node",
        price:499
    }
]
const priceTopay=shoppingcart.reduce((acc,item)=>acc+item.price,0)
console.log(priceTopay)