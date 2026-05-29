const randomNum=parseInt(Math.random()*100+1)//generates a random number between 1 and 100

const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const lastResult=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')


const p=document.createElement('p')
let prevGuess=[]
let numGuess=1

let playGame=true

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess=parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    })
}
function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter valid number")
    }else if (guess<1){
        alert("Please enter a number greater than 1")
    }else if (guess>100){
        alert("Please enter a number less than 100")
    }else{
        prevGuess.push(guess)
        if (numGuess===11){
            displayGuess(guess)
            displayMessage(`Game Over! The number was ${randomNum}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess===randomNum){
        displayMessage(`Congratulations! You guessed the number in ${numGuess} guesses!`)
        endGame()
    }else if (guess<randomNum){
        displayMessage("Too low! Try again.")
    }else if (guess>randomNum){
        displayMessage("Too high! Try again.")
    }
    
}

function displayGuess(guess){
    userInput.value=''
    guessSlot.innerHTML+=`${guess}  `
    numGuess++;
    remaining.innerHTML=`You have ${11-numGuess} guesses left.`
}
function displayMessage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`
}

function endGame(){
    userInput.value=''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(p)
    playGame=false
    newGame()
}
function newGame(){
    const newGameButton=document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        randomNumber=parseInt(Math.random()*100+1)
        prevGuess=[]
        newGuess=1
        guessSlot.innerHTML=''
        remaining.innerHTML=`${11-newGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame=true
    })
}
