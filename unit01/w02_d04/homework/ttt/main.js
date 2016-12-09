let board = [" "," "," "," "," "," "," "," "," "];
let winCombinations = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
let currentPlayer = "X";
let turns = 0;
let box = null;

console.log('JS is working!');

let outputMessage = function(message) {
  let newHTML = document.getElementById('message');
  newHTML.innerHTML = message;
};

let play = function() {
  console.log('playing!');
  outputMessage(`player ${currentPlayer} select a square: `);
};

let move = function(event) {
  console.log('Now in move!');
  console.log(event.target)
  event.target.innerHTML  = `${currentPlayer}`;
  let box = event.target;
  console.log(box.getAttribute('data-position'));
  let index = (box.getAttribute('data-position'));
  console.log('Board going to validateMove is ' + board);

  let validation = validMove(box);
  console.log("THIS IS VALIDATION: ", validation);
  if (validation === true) {
    console.log("THIS IS CURRENTPLAYER:", currentPlayer);
    console.log("THIS IS BOARD[INDEX]: ", board[index])
    board[index] = currentPlayer;
    console.log('Board after move method updates index is ' + board);
    console.log('Leaving move, heading for evaluateBoard!');
    evaluateBoard(board);
  } else {
    console.log('Back in move, heading for play!');
    play();
  }
};

let validMove = function(box) {
  console.log('Validating move!');
  console.log('Board being validated is ' + board);
  if (board[box] === "X" || board[box] ===  "O") {
     outputMessage(`square is taken. select another square:`);
     console.log('Leaving validMove with return false!');
     return false;
  } else {
    console.log('Leaving validMove with return true!');
    return true;
  }
};

let evaluateBoard = function() {
  console.log('Evaluating this board: ' + board);
  if (board[0] == currentPlayer && board[1] === currentPlayer && board[2] === currentPlayer) {
    console.log('Winning board! ' + board);
    outputMessage(`player ${currentPlayer} is the winner!`);
    resetButton.className = 'visible';
  } else if (board[3] == currentPlayer && board[4] === currentPlayer && board[5] === currentPlayer) {
    console.log('Winning board! ' + board);
    outputMessage(`player ${currentPlayer} is the winner!`);
    resetButton.className = 'visible';
  } else if (board[6] == currentPlayer && board[7] === currentPlayer && board[8] === currentPlayer) {
    console.log('Winning board! ' + board);
    outputMessage(`player ${currentPlayer} is the winner!`);
    resetButton.className = 'visible';
  } else if (board[0] == currentPlayer && board[3] === currentPlayer && board[6] === currentPlayer) {
    console.log('Winning board! ' + board);
    outputMessage(`player ${currentPlayer} is the winner!`);
    resetButton.className = 'visible';
  } else if (board[1] == currentPlayer && board[4] === currentPlayer && board[7] === currentPlayer) {
    console.log('Winning board! ' + board);
    outputMessage(`player ${currentPlayer} is the winner!`);
    resetButton.className = 'visible';
  } else if (board[2] == currentPlayer && board[5] === currentPlayer && board[8] === currentPlayer) {
    console.log('Winning board! ' + board);
    outputMessage(`player ${currentPlayer} is the winner!`);
    resetButton.className = 'visible';
  } else if (board[0] == currentPlayer && board[4] === currentPlayer && board[8] === currentPlayer) {
    console.log('Winning board! ' + board);
    outputMessage(`player ${currentPlayer} is the winner!`);
    resetButton.className = 'visible';
  } else if (board[2] == currentPlayer && board[4] === currentPlayer && board[6] === currentPlayer) {
    console.log('Winning board! ' + board);
    outputMessage(`player ${currentPlayer} is the winner!`);
    resetButton.className = 'visible';
  } else if (board.includes("") === false && board.includes(" ") === false) {
    outputMessage(`tie game! play again?`);
    resetButton.className = 'visible';
  } else {
    console.log('Turns after evaluateBoard runs is ' + turns);
    console.log('Board after evaluate board is ' + board);
    console.log('Leaving evaluateBoard: no winner, no tie. Heading for incrementCurrentPlayer!');
    turns = turns + 1;
    incrementCurrentPlayer();
  }
};

let incrementCurrentPlayer = function() {
  console.log('turns before currentPlayer runs is ' + turns);
  console.log('turn before currentPlayer runs is ' + currentPlayer);
  if (turns % 2 === 0) {
    currentPlayer = "X";
    outputMessage(`player ${currentPlayer} select a square: `);
  } else {
    currentPlayer = "O";
    outputMessage(`player ${currentPlayer} select a square: `);
  }
  console.log('turns after incrementCurrentPlayer runs is ' + turns);
  console.log('currentPlayer after incrementCurrentPlayer runs is ' + currentPlayer);
  play();
};

let playAgain = function() {
  board = [" "," "," "," "," "," "," "," "," "];
  let clearBoard = document.getElementsByClassName('content');   // Remove x & o images
  for (var k = 0; k < clearBoard.length; k++) {
    clearBoard[k].innerHTML = '';
  }
  resetButton.className = 'invisible';
  play()
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

document.onload=function(){play()};


