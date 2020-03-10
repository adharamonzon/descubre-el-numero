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
  /*   debugger; */
  const number = parseInt(snumber.value);
  if (randomNumber === number) {
    tip.innerHTML = 'Has ganado campeona!!!!';
    console.log('has ganado');
  } else if (randomNumber > number) {
    tip.innerHTML = 'Demasiado bajo';
  } else if (randomNumber < number) {
    tip.innerHTML = 'Demasiado alto';
  } else if (number > 100) {
    tip.innerHTML = 'El número debe estar entre 1 y 100';
  }
}
let click = 0;
function counterTries() {
  click++;
  if (click >= 1) {
    numberTries.innerHTML = click;
  }
}

btn.addEventListener('click', resultPlay);
