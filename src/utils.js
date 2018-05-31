import readlineSync from 'readline-sync';

export const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

export const sayHello = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  return name;
};
