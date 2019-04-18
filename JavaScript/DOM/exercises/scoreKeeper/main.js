const p1Button = document.querySelector('#p1');
const p2Button = document.getElementById('p2');
const p1Display = document.getElementById('p1-display');
const p2Display = document.querySelector('#p2-display');
const reset = document.querySelector('#reset');
// const winningScore = document.querySelector('#score-number');
let numInput = document.querySelector("input[type='number']");
let winningScoreDisplay = document.querySelector('.winning-score span');
let winningScore = Number(winningScoreDisplay.textContent);

let gameOver = false;
p1Score = 0;
p2Score = 0;
let win = () => {
  gameOver = true;
};
let resetScore = () => {
  p1Score = 0;
  p2Score = 0;
  p1Display.classList.remove('winner');
  p2Display.classList.remove('winner');
  p2Display.textContent = p2Score;
  p1Display.textContent = p1Score;
  gameOver = false;
};

p1Button.addEventListener('click', () => {
  if (!gameOver) {
    console.log('Winning Score', winningScore, gameOver);
    p1Score++;
    if (p1Score === winningScore) {
      p1Display.classList.add('winner');
      win();
    }
    p1Display.textContent = p1Score;
  }
});

p2Button.addEventListener('click', () => {
  if (!gameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      p2Display.classList.add('winner');
      win();
    }
    p2Display.textContent = p2Score;
  }
});

numInput.addEventListener('change', () => {
  winningScoreDisplay.textContent = numInput.value;
  winningScore = Number(numInput.value);
  resetScore();
});

reset.addEventListener('click', () => {
  resetScore();
});
