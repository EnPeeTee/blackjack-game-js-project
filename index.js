
let firstCard = 10
let secondCard = 11
let cardSum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true

let message = ``
let elMessage = document.getElementById("el-message")
let elCards = document.getElementById("el-cards")
let elSum = document.getElementById("el-sum")

function startGame() {
    
    if (cardSum < 21) {
        message = `Do you want to draw an extra card?`
    } else if (cardSum === 21) {
        message = `You got Blackjack!`
        hasBlackJack = true
    } else {
        message = `You've lost the game.`
        isAlive = false
    }
    
    elMessage.textContent = message
    elCards.textContent = `Cards: ${firstCard} ${secondCard}`
    elSum.textContent = `Sum: ${cardSum}`
    console.log(message)
}