let secretNumber: number = Math.trunc(Math.random() * 20) + 1;
let score: number = 20;
let highScore: number = 0;

const bodyStyle = document.querySelector('body') as HTMLBodyElement;
const numberStyle = document.querySelector('.number') as HTMLDivElement;
const scoreDiv = document.querySelector('.score') as HTMLSpanElement;
const highScoreDiv = document.querySelector('.highscore') as HTMLSpanElement;
const divNum = document.querySelector('.number') as HTMLDivElement;

const displayMessage = function (message: string) {
  const msg = document.querySelector('.message') as HTMLParagraphElement;
  msg.textContent = message;
};

const checkButton = document.querySelector('.check') as HTMLButtonElement;
checkButton.addEventListener('click', function () {
  const guessVal = document.querySelector('.guess') as HTMLInputElement;

  if (!guessVal) {
    displayMessage('⛔️ No number!');
  } else if (Number(guessVal.value) === secretNumber) {
    displayMessage('🎉 You got it!');
    divNum.textContent = secretNumber.toString();
    bodyStyle.style.background = '#60b347';
    numberStyle.style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      highScoreDiv.textContent = highScore.toString();
    }
  } else if (Number(guessVal.value) != secretNumber) {
    displayMessage(
      Number(guessVal.value) > secretNumber ? '🔺 Too High' : '🔻 Too low'
    );
    score--;
    scoreDiv.textContent = score.toString();
  } else {
    displayMessage('☠️🚫 You Lose!');
    scoreDiv.textContent = '0';
  }
});

const againButton = document.querySelector('.again') as HTMLButtonElement;
againButton.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start Guessing...');
  scoreDiv.textContent = score.toString();
  divNum.textContent = '?';
  const guesVal = document.querySelector('.guess') as HTMLInputElement;
  guesVal.textContent = null;
  bodyStyle.style.background = '#222';
  numberStyle.style.width = '15rem';
});
