import readlineSync from 'readline-sync';

const steps = 3;
export default (questionAndAnswer, description) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  for (let i = 1; i <= steps; i += 1) {
    const [question, correctAnswer] = questionAndAnswer();
    console.log(`Question: ${question}`);
    const answerUser = readlineSync.question('Your answer: ');
    if (correctAnswer === answerUser) {
      console.log('Correct!');
    } else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${correctAnswer}')`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
