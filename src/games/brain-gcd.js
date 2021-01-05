/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable consistent-return */
import readlineSync from 'readline-sync';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const gcd = (num1, num2) => {
  for (let i = num1; i >= 1; i -= 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      return i;
    }
  }
};

const isGcd = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 1; i <= 3; i += 1) {
    const randomNumber1 = getRandomInt(1, 100);
    const randomNumber2 = getRandomInt(1, 100);
    console.log(`Question: ${randomNumber1} ${randomNumber2}`);
    const answer = readlineSync.question('Your answer: ');
    if (i === 3 && gcd(randomNumber1, randomNumber2) == answer) {
      console.log(`Correct! \nCongratulations, ${name}!`);
      break;
      // eslint-disable-next-line eqeqeq
    } else if (gcd(randomNumber1, randomNumber2) == answer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${gcd(randomNumber1, randomNumber2)}.\nLet's try again, ${name}!`);
      break;
    }
  }
};

export default isGcd;
