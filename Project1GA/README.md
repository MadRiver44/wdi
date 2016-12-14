# StarMaster 2600

### Screen Shot of Game  
  ![StarMaster by Activision 1982](http://www.8-bitcentral.com/images/reviews/atari2600/starmaster2600Screen.jpg)

### Technologies Used
- HTML
- CSS
- JavaScript
- Coffee

### Code Example quote
```javascript
let move = function(event) {
  let box = event.target;
  let index = (box.getAttribute('data-position'));
  let validation = validMove(index);
  if (validation === true) {
    event.target.innerHTML  = `${currentPlayer}`;
    board[index] = currentPlayer;
    evaluateBoard(board);
  } else if (validation === false) {
    board[index] = board[index];
    outputMessage(`square is taken. ${currentPlayer} select another square:`);
  }
};
````
### Build Strategy
This game uses JavaScript to handle scoring and logic, and to bind player keyboard clicks to screen events. JS also interacts with HTML and CSS to manage visual elements.

### Contributing
This project was developed as part of the Web Development Immersive program at General Assembly in NYC, December 2016.

### MVP
- One moving element which crosses center crosshairs of screen
- Ability to shoot it
- Increment score

### Complications/Future Improvements 
  1. CSS styling to improve UX
  1. Ablity to move UDLR to move target into crosshairs
  1. Ability to take damage from collision with element
  1. Ability to take weapon damage from element
  1. Adiition of additional types of moving elements
  1. Addition of additional quantity of moving elements
  1. Addition of limited energy variable
  1. Addition of power-up mechanism
  1. Ability to accelerate 
  1. Additional rounds of increased difficulty
  1. Ability to track player stats over successive rounds
  1. Addition of minimap to show location
  1. Transitions / title screens to improve UX

### Author
  [Franklin Brooks](http://www.franklinchristopherbrooks.com) 
