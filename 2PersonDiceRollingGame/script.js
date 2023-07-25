var score0ELement = document.getElementById('score--0');
var score1ELement = document.getElementById('score--1');
var diceElement = document.querySelector('.dice');
var btnNew = document.querySelector('.btn--new');
var btnRoll = document.querySelector('.btn--roll');
var btnHold = document.querySelector('.btn--hold');
var current0Element = document.getElementById('current--0');
var current1Element = document.getElementById('current--1');
var player0Element = document.querySelector('.player--0');
var player1Element = document.querySelector('.player--1');
var player0NameElement = document.getElementById('name--0');
var player1NameElement = document.getElementById('name--1');
// starting conditions
score0ELement.textContent = '0';
score1ELement.textContent = '0';
diceElement.classList.add('hidden');
var scores = [0, 0];
var currentScore = 0;
var activePlayer = 0;
var playing = true;
function switchPlayer() {
    var activePlayerElement = document.getElementById("current--".concat(activePlayer));
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
        var dice = Math.trunc(Math.random() * 6) + 1;
        diceElement.classList.remove('hidden');
        diceElement.src = "media/dice-".concat(dice, ".png");
        if (dice !== 1) {
            currentScore += dice;
            var activePlayerElement = document.getElementById("current--".concat(activePlayer));
            activePlayerElement.textContent = currentScore.toString();
        }
        else {
            switchPlayer();
        }
    }
});
btnHold.addEventListener('click', function () {
    if (playing) {
        scores[activePlayer] += currentScore;
        var activePlayerElement = document.getElementById("score--".concat(activePlayer));
        activePlayerElement.textContent = scores[activePlayer].toString();
        if (scores[activePlayer] >= 20) {
            playing = false;
            var winnerPlayer = document.querySelector(".player--".concat(activePlayer));
            winnerPlayer.classList.add('player--winner');
            winnerPlayer.classList.remove('player--active');
            diceElement.classList.add('hidden');
        }
        else {
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
