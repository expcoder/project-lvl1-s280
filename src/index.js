import readlineSync from 'readline-sync';

export const sayHello = () => {
  const name = readlineSync.question('May I have your name? ');
  return console.log(`Hello, ${name}!`);
};

export const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

export const isEvenNum = num => (num % 2 === 0);

export const print = string => console.log(string);

export const brainEven = () => {
  const minRange = 1;
  const maxRange = 100;
  const numbersOfAttempts = 3;
  const name = readlineSync.question('May I have your name? ');
  let i = 0;
  print(`Hello, ${name}!\n`);
  while (i < numbersOfAttempts) {
    const number = getRandomInt(minRange, maxRange);
    print(`Question: ${number}`);
    const realAnswer = isEvenNum(number) ? 'yes' : 'no';
    const userAnswer = readlineSync.question('Your answer: ');
    if (realAnswer === userAnswer) {
      print('Correct!');
      i += 1;
    } else {
      print(`'${userAnswer}' is wrong answer ;(. Correct answer was '${realAnswer}'.`);
      break;
    }
  }
  const resultMessage = i === numbersOfAttempts ?
    print(`Congratulations, ${name}!`) : print(`Let's try again, ${name}!`);
  return resultMessage;
};
