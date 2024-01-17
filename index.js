//create object for the player
let player = {
  name: "Your Chips: ",
  chips: 5000,
};

let cards = []; //store cards on array
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el");
//Another way of manipulating DOM
let sumEl = document.querySelector(".sum-el");
let cardsEl = document.querySelector(".cards-el");
let playerEl = document.querySelector("#player-el");

playerEl.textContent = `${player.name}: $${player.chips}`;

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
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  isAlive = true;
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
    player.chips += 10;
    playerEl.textContent = `${player.name}: $${player.chips}`;
  } else {
    message = "You're out of the game!";
    isAlive = false;
    player.chips -= 10;
    playerEl.textContent = `${player.name}: $${player.chips}`;
  }
  messageEl.textContent = message;
}

function newCard() {
  // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    cards.push(card);
    sum += card;
    renderGame();
  }
}
