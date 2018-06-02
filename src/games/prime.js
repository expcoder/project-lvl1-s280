import game from '..';
import getRandomInt from '../utils';

const description = 'Is this number prime?\n';
const minRange = 1;
const maxRange = 100;

const isPrime = (num) => {
  if (num % 2 === 0 || num === 1) {
    return num === 2;
  }
  let devider = 2;
  while (num % devider !== 0) {
    devider += 1;
  }
  return devider === num;
};

const gameData = () => {
  const question = getRandomInt(minRange, maxRange);
  const answer = isPrime(question) ? 'yes' : 'no';
  return {
    question,
    answer: `${answer}`,
  };
};

export default () => game(description, gameData);
