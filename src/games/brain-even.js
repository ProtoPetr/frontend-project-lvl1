/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import readlineSync from 'readline-sync';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const isEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 1; i <= 4; i += 1) {
    const randomNumber = getRandomInt(1, 100);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    if (i === 3 && ((randomNumber % 2 === 0 && answer === 'yes') || (randomNumber % 2 !== 0 && answer === 'no'))) {
      console.log(`Correct! \nCongratulations, ${name}!`);
      break;
    } else if ((randomNumber % 2 === 0 && answer === 'yes') || (randomNumber % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
    } else if (randomNumber % 2 === 0 && answer === 'no') {
      console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`);
      break;
    } else if (randomNumber % 2 !== 0 && answer === 'yes') {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
      break;
    } else {
      console.log(`${answer} is wrong answer; type your unswer only with yes/no.\nLet's try again, ${name}!`);
      break;
    }
  }
};

export default isEvenGame;
