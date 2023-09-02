

let cards = [] //array - ordered list of items
let sum = 0;
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEL = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el");
let cardsEl = document.querySelector("#cards-el");
let playerEl = document.getElementById("player-el")

let player = {
    name: "Henna",
    chips: 145
}

playerEl.textContent = player.name + ": $" + player.chips;
function startGame() {

    isAlive = true
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    sum = firstCard + secondCard;
    cards = [firstCard, secondCard];
    renderGame()
}

function getRandomCard() {

    let number = Math.floor(Math.random() * 13) + 1

    if(number === 1) {
        return 11
    } else if (number > 10) {
        return 10
    } else {
        return number
    }
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

    if(isAlive && !hasBlackJack){
        let newCard = getRandomCard();
        sum += newCard
        cards.push(newCard)
        renderGame()
    }
   
}