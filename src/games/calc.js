import game from '..';
import getRandomInt from '../utils';

const description = 'What is the result of the expression?\n';
const minRange = 1;
const maxRange = 10;
const operators = ['+', '-', '*'];

const getRundomOperator = (arrayOfOperators) => {
  const index = getRandomInt(0, arrayOfOperators.length);
  return operators[index];
};

const gameData = () => {
  const num1 = getRandomInt(minRange, maxRange);
  const num2 = getRandomInt(minRange, maxRange);
  const operator = getRundomOperator(operators);
  const question = `${num1} ${operator} ${num2}`;
  let answer;
  switch (operator) {
    case '+':
      answer = num1 + num2;
      break;
    case '-':
      answer = num1 - num2;
      break;
    case '*':
      answer = num1 * num2;
      break;
    default: console.log('Error: Unknown operator was found.');
  }
  return {
    question,
    answer: `${answer}`,
  };
};

export default () => game(description, gameData);
