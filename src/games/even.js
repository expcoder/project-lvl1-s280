import readlineSync from 'readline-sync';
import getRandomInt from '../utils';

const isEvenNum = num => (num % 2 === 0);
const minRange = 1;
const maxRange = 100;
const numbersOfAttempts = 3;

const brainEven = () => {
  console.log('Welcome to Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  let i = 0;
  for (i; i < numbersOfAttempts; i += 1) {
    const question = getRandomInt(minRange, maxRange);
    console.log(`Question: ${question}`);
    const answer = isEvenNum(question) ? 'yes' : 'no';
    const userAnswer = readlineSync.question('Your answer: ');
    if (answer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default brainEven;
