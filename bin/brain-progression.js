#!/usr/bin/env node
/* eslint-disable eqeqeq */
/* eslint-disable consistent-return */
/* eslint-disable prefer-const */

import readlineSync from 'readline-sync';

function getRandomInt(min, max) {
  // eslint-disable-next-line no-param-reassign
  min = Math.ceil(min);
  // eslint-disable-next-line no-param-reassign
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

let progr = () => {
  let startNum = getRandomInt(1, 50);
  let progressionStep = getRandomInt(2, 6);
  let progressionLen = getRandomInt(5, 15);
  let fullProgression = [];
  let i = 0;
  while (i <= progressionLen) {
    for (let j = startNum; j <= startNum + progressionLen * progressionStep; j += progressionStep) {
      fullProgression[i] = j;
      i += 1;
    }
  }
  return fullProgression;
};

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

console.log('What number is missing in the progression?');

for (let k = 1; k <= 3; k += 1) {
  let emptyProgression = progr();
  let randomIndex = getRandomInt(0, emptyProgression.length);
  let randomElement = emptyProgression[randomIndex];
  emptyProgression.splice(randomIndex, 1, '..');
  console.log(`Question: ${emptyProgression.join(' ')}`);
  const answer = readlineSync.question('Your answer: ');
  if (k === 3 && randomElement == answer) {
    console.log(`Correct! \nCongratulations, ${name}!`);
    break;
  } else if (randomElement == answer) {
    console.log('Correct!');
  } else {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${randomElement}.\nLet's try again, ${name}!`);
    break;
  }
}
