'use strict';

const playerX = document.querySelector('.player1');
const playerO = document.querySelector('.player2');

const gameWinner = document.querySelector('.winner');

const horizontal1 = document.querySelectorAll('.horizontal1');
const horizontal2 = document.querySelectorAll('.horizontal2');
const horizontal3 = document.querySelectorAll('.horizontal3');

const vertical1 = document.querySelectorAll('.vertical1');
const vertical2 = document.querySelectorAll('.vertical2');
const vertical3 = document.querySelectorAll('.vertical3');

const diagonal1 = document.querySelectorAll('.diagonal1');
const diagonal2 = document.querySelectorAll('.diagonal2');

document.querySelectorAll('.box').forEach(box =>
  box.addEventListener('click', function () {
    let currentPlayer = playerX.classList.contains('active') ? 'X' : 'O';

    if (currentPlayer === 'X') {
      this.textContent = currentPlayer;
      this.classList.add('disabled');
      playerX.classList.remove('active');
      playerO.classList.add('active');
      checkWin();
    } else {
      this.textContent = currentPlayer;
      this.classList.add('disabled');
      playerX.classList.add('active');
      playerO.classList.remove('active');
      checkWin();
    }
  })
);

function checkWin() {
  if (
    Array.from(horizontal1).every(e => e.textContent == 'X') ||
    Array.from(horizontal2).every(e => e.textContent == 'X') ||
    Array.from(horizontal3).every(e => e.textContent == 'X') ||
    Array.from(vertical1).every(e => e.textContent == 'X') ||
    Array.from(vertical2).every(e => e.textContent == 'X') ||
    Array.from(vertical3).every(e => e.textContent == 'X') ||
    Array.from(diagonal1).every(e => e.textContent == 'X') ||
    Array.from(diagonal2).every(e => e.textContent == 'X')
  ) {
    playerX.classList.add('winner-color');
    gameWinner.textContent = `Player X wins! 🏆`;
  } else if (
    Array.from(horizontal1).every(e => e.textContent == 'O') ||
    Array.from(horizontal2).every(e => e.textContent == 'O') ||
    Array.from(horizontal3).every(e => e.textContent == 'O') ||
    Array.from(vertical1).every(e => e.textContent == 'O') ||
    Array.from(vertical2).every(e => e.textContent == 'O') ||
    Array.from(vertical3).every(e => e.textContent == 'O') ||
    Array.from(diagonal1).every(e => e.textContent == 'O') ||
    Array.from(diagonal2).every(e => e.textContent == 'O')
  ) {
    gameWinner.textContent = `Player 0 wins! 🏆`;
    playerO.classList.add('winner-color');
  }
}
