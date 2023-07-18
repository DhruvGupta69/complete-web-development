'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
var checkButton = document.querySelector('.check');
checkButton.addEventListener('click', function () {
  var guessVal = document.querySelector('.guess');
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
var againButton = document.querySelector('.again');
againButton.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start Guessing...');
  scoreDiv.textContent = score.toString();
  divNum.textContent = '?';
  var guesVal = document.querySelector('.guess');
  guesVal.textContent = null;
  bodyStyle.style.background = '#222';
  numberStyle.style.width = '15rem';
});
