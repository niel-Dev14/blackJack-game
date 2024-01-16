let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard]; //store cards on array
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el");
//Another way of manipulating DOM
let sumEl = document.querySelector(".sum-el");
let cardsEl = document.querySelector(".cards-el");

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 14);

  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  renderGame();
}

function renderGame() {
  sumEl.textContent = `Sum: ${sum}`;
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  let card = getRandomCard();
  cards.push(card);
  sum += card;
  renderGame();
}
