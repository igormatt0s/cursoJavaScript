
let computerNumber
let userNumbers = []
let attempts = 0
let maxGuesses = 10

function newGame() {
    window.location.reload() //aplica o reload na window
}

function init() {
    computerNumber = Math.floor(Math.random() * 100 + 1) // número random de 1 a 100
    //console.log(computerNumber)
}

function compareNumbers() {
    const userNumber = Number(document.getElementById('inputBox').value)

    if (userNumber <= 100 && userNumber >= 1) {
        userNumbers.push(' ' + userNumber) //número add na array
        document.getElementById('guesses').innerHTML = userNumbers

        if (attempts < maxGuesses) {
            if (userNumber > computerNumber && userNumber <= 100) {
                document.getElementById('textOutput').innerHTML = 'Your number is too high'
                document.getElementById('inputBox').value = '' // zera a caixa de texto depois do ENTER
                attempts++
                document.getElementById('attempts').innerHTML = attempts
            } else if (userNumber < computerNumber && userNumber >= 1) {
                document.getElementById('textOutput').innerHTML = 'Your number is too low'
                document.getElementById('inputBox').value = ''
                attempts++
                document.getElementById('attempts').innerHTML = attempts
            } else {
                document.getElementById('textOutput').innerHTML = 'Congratulations!!!'
                attempts++
                document.getElementById('attempts').innerHTML = attempts
                document.getElementById('inputBox').setAttribute('Readonly', 'Readonly') //método que seta o atributo como Readonly e o valor string Readonly
            }
        } else {
            document.getElementById('textOutput').innerHTML = 'You Lose! The computer Number was: ' + computerNumber
            document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
        }
    }else {
        document.getElementById('textOutput').innerHTML = userNumber + `: is a Invalid Value!
        Valid Values between 1 - 100!`
        document.getElementById('inputBox').value = ''
    }
}