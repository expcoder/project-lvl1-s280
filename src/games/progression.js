import game from '..';
import getRandomInt from '../utils';

const description = 'What number is missing in this progression?\n';
const minRange = 1;
const maxRange = 10;
const length = 10;

const getProgression = (progressionLength) => {
  const difference = getRandomInt(minRange, maxRange);
  const result = [];
  for (let i = 1; i < progressionLength + 1; i += 1) {
    result.push(i * difference);
  }
  return result;
};

const gameData = () => {
  const progression = getProgression(length);
  const randomIndex = getRandomInt(0, length);
  const question = progression
    .map((el, i) => (i === randomIndex ? '..' : el))
    .join(' ');
  const answer = progression[randomIndex];
  return {
    question,
    answer: `${answer}`,
  };
};

export default () => game(description, gameData);
