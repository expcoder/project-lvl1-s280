import readlineSync from 'readline-sync';
import { sayHello } from './utils';

const game = (description, data, attempts) => {
  console.log('Welcome to Brain Games!');
  console.log(`${description}`);
  const name = sayHello();
  let i = 0;
  for (i; i < attempts; i += 1) {
    const gameData = data();
    const { question } = gameData;
    console.log(`Question: ${question}`);
    const { answer } = gameData;
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

export default game;
