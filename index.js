
let firstCard = 6
let secondCard = 14
let cards = [firstCard, secondCard] //array - ordered list of items
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEL = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el");
let cardsEl = document.querySelector("#cards-el");

function startGame() {
    renderGame()
}

function renderGame() {
  
    if(sum <= 20) {
      message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
      message = "Wohoo! You'hv got Blackjack! 🥳"
      hasBlackJack = true
    } else {
      message = "You are out of the game! 😭 "
      isAlive = false
    }
    messageEL.textContent = message;
    sumEl.textContent =  "Sum: " + sum;
    cardsEl.textContent = "Cards: " 
    for(let i = 0; i < cards.length; i ++) {
        cardsEl.textContent += cards[i] + " "
    }
}

function newCard() {

    let newCard = 1
    sum += newCard
    cards.push(newCard)
    renderGame()
}