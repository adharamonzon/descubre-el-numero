'use strict';

const btn = document.querySelector('.js-btn');
const snumber = document.querySelector('.js-number');
const tip = document.querySelector('.js-tip');
const numberTries = document.querySelector('.js-try-number');

function getRandomNumber(max = 100) {
  return Math.ceil(Math.random() * max);
}
const randomNumber = getRandomNumber();
console.log(randomNumber);

function resultPlay() {
  tryNumber();
  counterTries();
}

function tryNumber() {
  const number = parseInt(snumber.value);
  if (number > 100 || number < 1) {
    tip.innerHTML = 'El número debe estar entre 1 y 100';
  } else if (randomNumber === number) {
    tip.innerHTML = 'Has ganado campeona!!!!';
    console.log('has ganado');
  } else if (randomNumber > number) {
    tip.innerHTML = 'Pista: Demasiado bajo';
  } else {
    tip.innerHTML = 'Pista: Demasiado alto';
  }
}
function paintFeedback(element) {
  tryNumber();
}
let click = 0;
function counterTries() {
  click++;
  if (click >= 1) {
    numberTries.innerHTML = `Número de intentos: ${click}`;
  }
}

btn.addEventListener('click', resultPlay);
