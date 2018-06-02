import game from '..';
import getRandomInt from '../utils';

const description = 'Balance the given number.';
const minRange = 100;
const maxRange = 1000;
const getBalance = (number) => {
  const digitsArr = [...`${number}`].map(el => Number(el)).sort();
  const lastIndex = digitsArr.length - 1;
  if (digitsArr[lastIndex] - digitsArr[0] <= 1) {
    return digitsArr.join('');
  }
  const mapped = digitsArr
    .slice()
    .map((el, i) => (i === 0 ? el + 1 : el))
    .map((el, i) => (i === lastIndex ? el - 1 : el))
    .sort()
    .join('');
  return getBalance(Number(mapped));
};

const gameData = () => {
  const question = getRandomInt(minRange, maxRange);
  const answer = getBalance(question);
  return {
    question,
    answer,
  };
};

export default () => game(description, gameData);
