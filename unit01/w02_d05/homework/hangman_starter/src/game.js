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
    console.log(`Now in first loop; currently comparing ${letter} to guessedLetters`);
    if (this.guessedLetters.includes(letter) === false) {
      console.log(`guess sees ${letter} has not yet been guessed. Sending ${letter} to try function.`);
      if (this.try(letter) === false) {
        this.guessedLetters.push(letter);
        console.log(`guess has pushed ${letter} into guessed.Letters array.`);
        console.log(`guessedLetters array now = ${this.guessedLetters}`);
        this.guesses = this.guesses - 1;
        console.log(`Guesses now equals ${this.guesses}`);
      } else {
      // if (tryValue === true)
        console.log(`guess sees ${letter} has not yet been guessed. Sending ${letter} to try function.`);
        this.guessedLetters.push(letter);
        console.log(`guess has pushed ${letter} into guessed.Letters array.`);
        console.log(`guessedLetters array now = ${this.guessedLetters}`);
        console.log(`Guesses now equals ${this.guesses}`);
      }
    } else {
      console.log(`Sorry, ${letter} has been guessed already. Try again...`);
    }
  }

  isOver() {
    console.log(`The current function is isOver`);  // think i need a loop to check visible on each
/*      let lettersFound = 0;
      for (let i=0; i < this.letters.length; i++) {
        if (this.letters[i].hidden === false) {
        lettersFound++;
        }
      }*/
    if (this.guesses === 0) {
      return true;
/*    } else if (lettersFound === this.letters.length) {
      return true;*/
    } else {
      return false;
    }
  }

  overMessage() {
    console.log(`The current function is overMessage`);
    if (this.guesses === 0) {
        return "Sorry, you lost!";
/*   } else if {
      let lettersFound = 0;
      for (let i=0; i < this.letters.length; i++) {
        if (this.letters[i].hidden === false) {
        lettersFound++;
        }
      }
      if (lettersFound === this.letters.length) {
        return "YAY!! You won!!";*/
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


