console.log('game.js is connected');

class Game {
  constructor(guesses,guessedLetters,currentWord) {
    this.guesses = null;
    this.guessedLetters = null;
    this.currentWord = null;
  }
  startGame(string) {
    this.guesses = 8;
    this.guessedLetters = [];
    this.currentWord = new Word(string);
  }

  guess(letter) {
    console.log(`Now in first loop; currently comparing ${letter} to ${this.guessedLetters}`);
    if (this.guessedLetters.includes(letter) === true) {
      console.log(`Sorry, ${this.letter} has been guessed already. Try again...`);
      this.render();
    } else {
      // 4 lines below came from above here
      console.log(`Now sending ${letter} to try function.`);
      if (this.try(letter) === false) {
        this.guesses = this.guesses - 1;
        console.log(`Guesses now equals ${this.guesses}`);
    }
    console.log(`guess determines that ${letter} has not yet been guessed.`);
    this.guessedLetters.push(letter);
    console.log(`guess has pushed ${letter} into guessed.Letters array.`);
    console.log(`guessedLetters array now = ${this.guessedLetters}`);
    }
  }

  isOver() {
    console.log(`The current function is isOver`);  // think i need a loop to check visible on each
    if (this.currentWord === this.string) {
      return true;
    } else if (this.guesses === 0) {
      return true;
    } else {
      return false;
    }
  }


  overMessage() {
    console.log(`The current function is overMessage`);
    let lettersFound = 0;
    if (this.guesses === 0) {
        return 'Sorry, you lost!';
        // loop to check hidden status goes here
/*    } else if
      for (letter in this.letters.length) {
        if (this.letters[i].hidden === false) {
          lettersFound++;
          if (lettersFound === this.letters.length) {
            return 'YAY!! You won!!';
          }
        }*/


    } else {
      return undefined;
    }
  }


  render() {
    console.log(`The current function is render`);
    return this.currentWord, this.guesses, this.guessedLetters;
  }
}

/*
guess -> will try a letter, if the letter has not already been tried
isOver -> returns true if the current word has been guessed or there are no more guesses
overMessage ->
  returns "YAY!! You won!!" if the current word is found
  returns "Sorry, you lost!" if there are no more guesses
  returns undefined if neither condition is met
*/


