import game from '..';
import getRandomInt from '../utils';

const description = 'Find the greatest common divisor of given numbers.\n';
const minRange = 1;
const maxRange = 20;
const getGcd = (num1, num2) => (num1 !== 0 ? getGcd(num2 % num1, num1) : num2);

const gameData = () => {
  const num1 = getRandomInt(minRange, maxRange);
  const num2 = getRandomInt(minRange, maxRange);
  const question = `${num1} ${num2}`;
  const answer = getGcd(num1, num2);
  return {
    question,
    answer: `${answer}`,
  };
};

export default () => game(description, gameData);
