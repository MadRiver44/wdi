const cellDivs = document.querySelectorAll('.row div');
let currentPlayer = 'X';
let board = [0,1,2,3,4,5,6,7,8];
let inProgress = true;

function checkWIn() {
if (this.board[0] === this.board[1]) && (this.board[1] === this.board[2])
|| (this.board[3] === this.board[4]) && (this.board[4] === this.board[5])
|| (this.board[6] === this.board[7]) && (this.board[7] === this.board[8])
|| (this.board[0] === this.board[3]) && (this.board[3] === this.board[6])
|| (this.board[1] === this.board[4]) && (this.board[4] === this.board[7])
|| (this.board[2] === this.board[5]) && (this.board[5] === this.board[8])
|| (this.board[0] === this.board[4]) && (this.board[4] === this.board[8])
|| (this.board[2] === this.board[4]) && (this.board[4] === this.board[6]) {
  alert('winner');
  inProgress = true;
  }
}

//  currentPlayer = currentPlayer === 'X' ? 'O' : 'O';  --> Ternary function to change player

function playCell(index) {
  if (inProgress === true) {
    if (cellDivs[index].innerHTML === '') {
      if (currentPlayer === 'X') {
        cellDivs[index].innerHTML = 'X';
        board[index] = "X";
        currentPlayer = 'O';
      } else if (currentPlayer === 'O') {
        cellDivs[index].innerHTML = 'O';
        board[index] = "O";
        currentPlayer = 'X';
      }
  } else {
      alert('Square not empty');
  }
  checkWin();
}

for (let i = 0; i < cellDivs.length; i++) {
  cellDivs[i].addEventListener('click', function(), { playCell(i) });
}

