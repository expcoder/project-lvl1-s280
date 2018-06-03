import game from '..';
import getRandomInt from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';
const minRange = 1;
const maxRange = 100;
const isEven = num => (num % 2 === 0);

const gameData = () => {
  const question = getRandomInt(minRange, maxRange);
  const answer = isEven(question) ? 'yes' : 'no';
  return {
    question,
    answer,
  };
};

export default () => game(description, gameData);
