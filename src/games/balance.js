import game from '..';
import getRandomInt from '../utils';

const description = 'Balance the given number.\n';
const minRange = 100;
const maxRange = 1000;
const getBalance = (number) => {
  const digitsArr = [...`${number}`].map(el => Number(el)).sort();
  const lastIndex = digitsArr.length - 1;
  if (digitsArr[lastIndex] - digitsArr[0] <= 1) {
    return number;
  }
  digitsArr[0] += 1;
  digitsArr[lastIndex] -= 1;
  return getBalance(Number(digitsArr.join('')));
};

const gameData = () => {
  const question = getRandomInt(minRange, maxRange);
  const answer = getBalance(question);
  return {
    question,
    answer: `${answer}`,
  };
};

export default () => game(description, gameData);
