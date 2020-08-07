'use strict';

const btn = document.querySelector('.js-btn');
const snumber = document.querySelector('.js-number');
const numberTries = document.querySelector('.js-try-number');

function getRandomNumber(max = 100) {
  return Math.ceil(Math.random() * max);
}
const randomNumber = getRandomNumber();
console.log(`el número aleatorio es ${randomNumber}`);

function resultPlay() {
  tryNumber();
  counterTries();
  paintResult();
}

const getInnerHtml = function (element) {
  return document.querySelector(element).innerHTML;
};
let result = getInnerHtml('.js-tip');

function tryNumber() {
  const number = parseInt(snumber.value);
  if (number > 100 || number < 1) {
    result = 'El número debe estar entre 1 y 100';
  } else if (randomNumber === number) {
    result = 'Has ganado!!!!';
  } else if (randomNumber > number) {
    result = 'Pista: Demasiado bajo';
  } else {
    result = 'Pista: Demasiado alto';
  }
}
function paintResult() {
  const text = document.querySelector('.js-tip');
  text.innerHTML = result;
}
let click = 0;
function counterTries() {
  click++;
  if (click >= 1) {
    numberTries.innerHTML = `Número de intentos: ${click}`;
  }
}

btn.addEventListener('click', resultPlay);
