import engine from '../engine';
import getRandomNumber from '../utils';

const gcd = (m, n) => (n === 0 ? m : gcd(n, m % n));
export default () => {
  const description = 'Find the greatest common divisor of given numbers.';
  const generateDataGameGcd = () => {
    const a = getRandomNumber(1, 100);
    const b = getRandomNumber(1, 100);
    const question = `${a} ${b}`;
    const correctAnswer = `${gcd(Number(a), Number(b))}`;
    return [question, correctAnswer];
  };
  engine(generateDataGameGcd, description);
};
