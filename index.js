let player = {
    name: "En",
    chips: 1000
}
let cards = []
let cardSum = 0

let hasBlackJack = false
let isAlive = false

let message = ``

let elMessage = document.getElementById("el-message")
let elCards = document.getElementById("el-cards")
let elSum = document.getElementById("el-sum")
let elPlayer = document.getElementById("el-player")

elPlayer.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    
    const randomNumber = Math.floor( Math.random() * 13 ) + 1
    
    if (randomNumber === 1) {
        return 11
    }
    else if (randomNumber >= 11) {
        return 10
    }
    else {  
        return randomNumber
    }
    
}

function startGame() {
    
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    cardSum = firstCard + secondCard
    
    renderGame()

}

function renderGame() {
    
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
    elCards.textContent = `Cards: `
    elSum.textContent = `Sum: ${cardSum}`

    for (i = 0; i < cards.length; i++) {
        elCards.textContent += `${cards[i]} `
    }

    console.log(message)
}

function newCard() {
    if (isAlive && !hasBlackJack) {
        let thirdCard = getRandomCard()
        cardSum += thirdCard
        cards.push(thirdCard)
        renderGame()
    }
}
