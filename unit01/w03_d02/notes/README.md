# HANGMAN 

### Screen Shot of Game  
  ![Hangman game](http://www.bigfuntown.com/Games/456.jpg)

### Technologies Used
- HTML
- CSS
- JavaScript
- Coffee

### Code Example quote
```javascript
class Letter {
  constructor(value) {
    this.value = value;
    this.hidden = true;
  }
  show() {
    this.hidden = false;
  }
  render() {
    if (this.hidden === true) {
        return '_';
    } else if (this.hidden === false) {
        return this.value;
    }
  }
}
````
### Build Strategy
This game uses three class constructors to build properties into letter objects, and then organizes those objects with an additional word object constructor.  Finally. game logic is handled in the game object constructor.

### Contributing
This project was developed as part of the Web Development Immersive program at General Assembly in NYC, December 2016.

### Complications/Future Improvements 
  1. Complete JavaScript functionality
  1. Link JavaScript to a front-end browser with graphic functionality
  1. Add CSS to improve user experience

### Author
  [Franklin Brooks](http://www.franklinchristopherbrooks.com) 
