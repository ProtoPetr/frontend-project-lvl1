#!/usr/bin/env node
/* eslint-disable consistent-return */
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

const isPrimeNumber = (num) => {
  if (num <= 1) {
    return 'no';
  } if (num === 2 || num === 3) {
    return 'yes';
  }
  for (let i = Math.floor(num / 2); i >= 2; i -= 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

for (let i = 1; i <= 3; i += 1) {
  let number = getRandomInt(1, 50);
  console.log(`Question: ${number}`);
  let answer = readlineSync.question('Your answer: ');
  if (i === 3 && isPrimeNumber(number) === answer) {
    console.log(`Correct! \nCongratulations, ${name}!`);
    break;
  } else if (isPrimeNumber(number) === answer) {
    console.log('Correct!');
  } else {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${isPrimeNumber(number)}.\nLet's try again, ${name}!`);
    break;
  }
}
