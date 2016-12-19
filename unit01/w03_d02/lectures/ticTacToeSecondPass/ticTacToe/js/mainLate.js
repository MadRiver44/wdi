// get all the divs that we're going to be using for our tic tac toe board
const cellDivs = document.querySelectorAll('.row div');
// this variable is the current player, we start with X; you don't have
// to hardcode this - you can prompt the player for the first user, etc.
let currentPlayer = 'X';
// track whether or not the game is in progress
let inProgress = true;
// this is a simple array representation of our ttt board
let gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];

// this function checks if there is a winner. we call this function after each
// turn
function checkWinner() {
  // if our board looks like this:
  // _0_|_1_|_2_
  // _3_|_4_|_5_
  // _6_|_7_|_8_
  // we can check for winners by looking into our board array;
  if (((gameBoard[0] === gameBoard [1]) && gameBoard[1] === gameBoard[2])
    || ((gameBoard[3] === gameBoard [4]) && gameBoard[4] === gameBoard[5])
    || ((gameBoard[6] === gameBoard [7]) && gameBoard[7] === gameBoard[8])
    || ((gameBoard[0] === gameBoard [3]) && gameBoard[3] === gameBoard[6])
    || ((gameBoard[1] === gameBoard [4]) && gameBoard[4] === gameBoard[7])
    || ((gameBoard[2] === gameBoard [5]) && gameBoard[5] === gameBoard[8])
    || ((gameBoard[0] === gameBoard [4]) && gameBoard[4] === gameBoard[8])
    || ((gameBoard[2] === gameBoard [4]) && gameBoard[4] === gameBoard[6])) {
      alert('winner');
      inProgress = false; // game's over
    }
}

// here we loop through our cell divs and specify the game logic
// for each square
for (let i = 0; i < cellDivs.length; i++) {
  // first we add an event listener to the square so we know when
  // it is clicked; when it is clicked we run the playCell function
  cellDivs[i].addEventListener('click', function playCell() {
    // when a square is clicked first we check if the game is in progress
    if (inProgress === true) {
      // then we check if the square is NOT blank, if it isn't, then there
      // must be an X or an O already so we do nothing
      if (cellDivs[i].innerHTML !== '') {
        console.log('cant play!');
      // if the square is empty we check if the current player is an X or an O
      } else if (currentPlayer === 'X') {
        // here is where we set the div to the currentPlayer
        cellDivs[i].innerHTML = 'X';
        // then we change our game board array to reflect this play
        gameBoard[i] = 'X';
        // then we switch the user
        currentPlayer = 'O';
      } else if (currentPlayer = 'O') {
        // (see above)
        cellDivs[i].innerHTML = 'O';
        gameBoard[i] = 'O';
        currentPlayer = 'X';
      }
      // finally we check if there is a winner
      checkWinner();
    } else {
      // if the game is not in progress do nothing except log this:
      console.log('game is over');
    }

    // In the later lecture we dove pretty deeply into a rabbit hole.
    // We were trying to remove all of the event listeners when the game was
    // over so no more squares could be played. We never figured that out
    // but we learned a few things about functions, scope, and
    // debugging. Instead of looping through and removing all of the event
    // listeners, I just added the inProgress boolean. If you wanted to pursue
    // what we tried to do you can do that now since the playCell function is
    // inlined here. One way to do it would be to:
    // 1. have checkWinner return a boolean, true if there is a winner
    // 2. check the value of checkWinner, if it' true that means the game is
    // over, at that point you can loop through all the squares and remove
    // the event listeners one by one.
  });
}
