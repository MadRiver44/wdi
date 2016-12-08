// capture click event variable as index array
// validate move
// change innerHTML of clicked/validated div
// pass modified array to evaluateBoard


let evaluateBoard = function(board) {
  let status = document.getElementById('status');
  for (win in winCombinations) {
    if (win[0] == turn && win[1] == turn && win[2] == turn) {
    status.innerHTML = `${turn} is the winner! play again?`;
  } else if (board.includes("") == false || board.includes(" ") == false) {
    status.innerHTML = `tie game! play again?`;
    resetButton.className = 'invisible';   // Hide reset button again
  } else {
    turn ++;
    play();
  }
};






