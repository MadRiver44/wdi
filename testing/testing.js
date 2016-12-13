let initialBoard = [" "," "," "," "," "," "," "," "," "];
let winCombinations = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
let turn = "X";
let turns = 0;
let box = null;

console.log('JS is working!');

let outputMessage = function(message) {
  let newHTML = document.getElementById('message');
  newHTML.innerHTML = message;
};

let play = function() {
  console.log('playing!');
  let board = initialBoard;
  outputMessage(`player ${turn} select a square: `);
  currentPlayer();
  evaluateBoard();
};

let currentPlayer = function() {
  if (turns % 2 === 0) {
    turn = "X";
  } else {
    turn = "O";
  }
  outputMessage(`player ${turn} select a square: `);
  return turn;
};

let move = function(box) {
  if (validMove(box)) {
    board[box] = turn;
    box.innerHTML = `${turn}`;
    return board;
  }
};

let validMove = function(box) {
  if (board[box] === " " || board[box] === "" || board[box] === null) {
      return true;
  } else if
      (board[box] === "X" || board[box] ===  "O") {
      outputMessage(`square is taken. select another square:`);
      return false;
  }
};

let evaluateBoard = function() {
  for (let win in winCombinations) {
    console.log(win);
    if (board[0] == turn && board[1] === turn && board[2] === turn) {
    outputMessage(`player ${turn} is the winner`);
  } else if (board.includes("") === false && board.includes(" ") === false) {
    outputMessage(`tie game! play again?`);
    resetButton.className = 'invisible';
  } else {
    turns ++;
    return turns;
  }
 }
};

let playAgain = function() {
  let board = initialBoard;
  let clearBoard = document.getElementsByClassName('content');   // Remove x & o images
  for (var k = 0; k < clearBoard.length; k++) {
    clearBoard[k].innerHTML = '';
  }
  resetButton.className = 'invisible';
};

window.onload = function() {
  document.querySelector('#c0').addEventListener('click', move);
  document.querySelector('#c1').addEventListener('click', move);
  document.querySelector('#c2').addEventListener('click', move);
  document.querySelector('#c3').addEventListener('click', move);
  document.querySelector('#c4').addEventListener('click', move);
  document.querySelector('#c5').addEventListener('click', move);
  document.querySelector('#c6').addEventListener('click', move);
  document.querySelector('#c7').addEventListener('click', move);
  document.querySelector('#c8').addEventListener('click', move);
  document.querySelector('#resetButton').addEventListener('click', playAgain);
};
/*
document.onclick = function(event) {
    var target = event.target;
};
*/
document.onload=function(){play()};


