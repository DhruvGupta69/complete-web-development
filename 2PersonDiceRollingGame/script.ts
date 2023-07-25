const score0ELement = document.getElementById(
  'score--0'
) as HTMLParagraphElement;
const score1ELement = document.getElementById(
  'score--1'
) as HTMLParagraphElement;
const diceElement = document.querySelector('.dice') as HTMLImageElement;
const btnNew = document.querySelector('.btn--new') as HTMLButtonElement;
const btnRoll = document.querySelector('.btn--roll') as HTMLButtonElement;
const btnHold = document.querySelector('.btn--hold') as HTMLButtonElement;
const current0Element = document.getElementById(
  'current--0'
) as HTMLParagraphElement;
const current1Element = document.getElementById(
  'current--1'
) as HTMLParagraphElement;
const player0Element = document.querySelector('.player--0') as HTMLElement;
const player1Element = document.querySelector('.player--1') as HTMLElement;
const player0NameElement = document.getElementById(
  'name--0'
) as HTMLHeadingElement;
const player1NameElement = document.getElementById(
  'name--1'
) as HTMLHeadingElement;

// starting conditions
score0ELement.textContent = '0';
score1ELement.textContent = '0';
diceElement.classList.add('hidden');

let scores: number[] = [0, 0];
let currentScore: number = 0;
let activePlayer: number = 0;
let playing: boolean = true;

function switchPlayer() {
  const activePlayerElement = document.getElementById(
    `current--${activePlayer}`
  ) as HTMLParagraphElement;
  activePlayerElement.textContent = '0';
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0Element.classList.toggle('player--active');
  player1Element.classList.toggle('player--active');
}

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    player0NameElement.contentEditable = 'false';
    player1NameElement.contentEditable = 'false';
    const dice: number = Math.trunc(Math.random() * 6) + 1;
    diceElement.classList.remove('hidden');
    diceElement.src = `media/dice-${dice}.png`;
    if (dice !== 1) {
      currentScore += dice;
      const activePlayerElement = document.getElementById(
        `current--${activePlayer}`
      ) as HTMLParagraphElement;
      activePlayerElement.textContent = currentScore.toString();
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    const activePlayerElement = document.getElementById(
      `score--${activePlayer}`
    ) as HTMLParagraphElement;
    activePlayerElement.textContent = scores[activePlayer].toString();

    if (scores[activePlayer] >= 20) {
      playing = false;
      const winnerPlayer = document.querySelector(
        `.player--${activePlayer}`
      ) as HTMLElement;
      winnerPlayer.classList.add('player--winner');
      winnerPlayer.classList.remove('player--active');
      diceElement.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  player0NameElement.contentEditable = 'true';
  player1NameElement.contentEditable = 'true';

  current0Element.textContent = '0';
  current1Element.textContent = '0';
  score0ELement.textContent = '0';
  score1ELement.textContent = '0';

  diceElement.classList.add('.hidden');
  player0Element.classList.remove('player--winner');
  player1Element.classList.remove('player--winner');
  player0Element.classList.add('player--active');
  player1Element.classList.remove('player--active');
});
