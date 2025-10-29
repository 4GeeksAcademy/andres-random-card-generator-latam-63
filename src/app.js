import "bootstrap";
import "./style.css";

//import "./assets/img/rigo-baby.jpg";
//import "./assets/img/4geeks.ico";

function createNewcard() {
  let suits = ["&#9824;", "&#9827;", "&#9829;", "&#9830;",]
  let numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

  function randomCard(array) {
    return Math.floor(Math.random() * array.length)
  }
  let newCardSuit = suits[randomCard(suits)]
  let newCard = document.createElement('div')
  newCard.classList.add('card')
  newCard.innerHTML = `<div class="symbol-start">${newCardSuit}</div>
                       <div class="number">${numbers[randomCard(numbers)]}</div>
                       <div class="symbol-end">${newCardSuit}</div>`
  let parent = document.getElementById('card-container');
  parent.appendChild(newCard);

  if (newCardSuit == '&#9824;' || newCardSuit == '&#9827;') {
    newCard.classList.add('black');
  }

  let cardSize = parseInt(document.getElementById('card-scale').value) / 350
  newCard.style.scale = cardSize


};

window.onload = createNewcard;

document.getElementById('button').addEventListener('click', createNewcard);

document.getElementById('change-size').addEventListener('click', function () {

  let cardSize = parseInt(document.getElementById('card-scale').value) / 350
  let cards = document.getElementsByClassName('card')
  for (let i of cards) {
    i.style.scale = cardSize
  }
});

let counter = 4
function timerCountdown(){
  if(counter == 0 ){
    counter = 5
    createNewcard()
  }
  document.getElementById('timer-display').innerHTML = counter--
 }
let cardInterval = setInterval(timerCountdown, 1000)
 
document.getElementById('stopTimer').addEventListener('click', function () {
  clearInterval(cardInterval)});


