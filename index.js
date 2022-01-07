let firstCard = 6;
let secondCard = 10;

let sum  = firstCard + secondCard;

if (sum < 21) {
    console.log("You have to pick another card 😊");
} else if (sum === 21) {
    console.log("You have gotten a blackjack! 🙌");
} else {
    console.log("You have lost! 😢");
}