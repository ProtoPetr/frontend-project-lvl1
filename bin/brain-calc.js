#!/usr/bin/env node
/* eslint-disable eqeqeq */
/* eslint-disable prefer-const */

import readlineSync from 'readline-sync';

function getRandomInt(min, max) {
  // eslint-disable-next-line no-param-reassign
  min = Math.ceil(min);
  // eslint-disable-next-line no-param-reassign
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

console.log('What is the result of the expression?');

for (let i = 1; i <= 3; i += 1) {
  let randomNumber1 = getRandomInt(1, 100);
  let randomNumber2 = getRandomInt(1, 100);
  let randomIndex = getRandomInt(0, 3);
  // eslint-disable-next-line max-len
  let correctAnswer = [randomNumber1 + randomNumber2, randomNumber1 - randomNumber2, randomNumber1 * randomNumber2];
  let operChar = ['+', '-', '*'];
  console.log(`Question: ${randomNumber1} ${operChar[randomIndex]} ${randomNumber2}`);
  const answer = readlineSync.question('Your answer: ');
  if (i === 3 && correctAnswer[randomIndex] == answer) {
    console.log(`Correct! \nCongratulations, ${name}!`);
    break;
  } else if (correctAnswer[randomIndex] == answer) {
    console.log('Correct!');
  } else {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer[randomIndex]}.\nLet's try again, ${name}!`);
    break;
  }
}
