let cards = [];
let sum  = 0;
let hasBlackJack = false;
let isAlive = false; 
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");

let player = {
    name: "Samuel",
    chips: "100"
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": " + "$" + player.chips;

function getRandomNumbers() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    } 
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomNumbers();
    let secondCard = getRandomNumbers();
    cards = [firstCard, secondCard];
    sum  = firstCard + secondCard;
    renderGame();
}

function renderGame() {

    cardEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;

    if (sum <= 20) {
        message = "You have to pick  another card 😊";
    } else if (sum === 21) {
        message = "You have gotten a blackjack! 🙌";
                hasBlackJack = true;
    } else {
        message = "You have lost! 😢";
        isAlive = false;
    }
    
    messageEl.textContent = message;
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomNumbers();
        sum += card;
        cards.push(card);
        renderGame();
    }
}