// Exercise: this is very similiar to the late lecture version,
// see if you can go through it line by line and add comments that explain
// exactly what is going on.

const cellDivs = document.querySelectorAll('.row div');
let currentPlayer = 'X';
let gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let inProgress = true;

function checkWin() {
  if (((gameBoard[0] === gameBoard [1]) && gameBoard[1] === gameBoard[2])
    || ((gameBoard[3] === gameBoard [4]) && gameBoard[4] === gameBoard[5])
    || ((gameBoard[6] === gameBoard [7]) && gameBoard[7] === gameBoard[8])
    || ((gameBoard[0] === gameBoard [3]) && gameBoard[3] === gameBoard[6])
    || ((gameBoard[1] === gameBoard [4]) && gameBoard[4] === gameBoard[7])
    || ((gameBoard[2] === gameBoard [5]) && gameBoard[5] === gameBoard[8])
    || ((gameBoard[0] === gameBoard [4]) && gameBoard[4] === gameBoard[8])
    || ((gameBoard[2] === gameBoard [4]) && gameBoard[4] === gameBoard[6])) {
      alert('winner!');
      inProgress = false;
  }
}

function playCell(index) {
  if (inProgress === true) {
    if (cellDivs[index].innerHTML === '') {
      if (currentPlayer === 'X') {
        cellDivs[index].innerHTML = 'X';
        gameBoard[index] = 'X';
        currentPlayer = 'O';
      } else if (currentPlayer === 'O') {
        cellDivs[index].innerHTML = 'O';
        gameBoard[index] = 'O';
        currentPlayer = 'X';
      }
    } else {
      alert('square not empty');
    }
    checkWin();
  }
}

for (let i = 0; i < cellDivs.length; i++) {
  cellDivs[i].addEventListener('click', function() { playCell(i) });
}
