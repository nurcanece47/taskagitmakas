const computerchoiseDisplay =  document.getElementById('computer-choise')
const userchoiseDisplay =  document.getElementById('user-choise')
const resultDisplay =  document.getElementById('result')

const possibleChoices = document.querySelectorAll('button')

let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click',(e) => {
    userChoice = e.target.id
    userchoiseDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * possibleChoices.length+1)
    if(randomNumber === 1){
        computerChoice = 'tas'
    }
    if(randomNumber === 2){
        computerChoice = 'kagit'
    }
    if(randomNumber === 3){
        computerChoice = 'makas'
    }
    computerchoiseDisplay.innerHTML = computerChoice
}

function getResult(){
    if(computerChoice === userChoice){
        result = "Berabere!"
    }
    if(computerChoice === 'tas' && userChoice === 'makas'){
        result = "Maalesef... Kaybetiniz."
    }
    if(computerChoice === 'tas' && userChoice === 'kagit'){
        result = "Tebrikler... Kazandınız."
    }
    if(computerChoice === 'kagit' && userChoice === 'makas'){
        result = "Tebrikler... Kazandınız."
    }
    if(computerChoice === 'kagit' && userChoice === 'tas'){
        result = "Maalesef... Kaybetiniz."
    }
    if(computerChoice === 'makas' && userChoice === 'kagit'){
        result = "Maalesef... Kaybetiniz."
    }
    if(computerChoice === 'makas' && userChoice === 'tas'){
        result = "Tebrikler... Kazandınız."
    }

    resultDisplay.innerHTML = result
   
}