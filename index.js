let firstCard = getRandomNumbers();
let secondCard = getRandomNumbers();
let cards = [firstCard, secondCard];
let sum  = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true; 
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");


function getRandomNumbers() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    return randomNumber;
}

function startGame() {
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
    let card = getRandomNumbers();
    sum += card;
    cards.push(card);
    renderGame();
}