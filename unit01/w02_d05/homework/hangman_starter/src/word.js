console.log('word.js is connected');

class Word  {
  constructor(word) {
    this.word = word;
    this.letters = [];
    this.getLetters = function(word) {
      for (let i = 0; i < this.word.length; i++) {
        let newLetter = new Letter(this.word[i]);
        this.letters.push(newLetter);
      }
    }
    this.getLetters(word);
  }

  isFound() {
    for (let i = 0; i < this.letters.length; i++){
      if (this.letters[i].hidden === true){
        return false;
      } else {
        return true;
      }
    }
  }

  try(letter) {
    for (let i=0; i < this.letters.length; i++) {
      if (this.letters[i].value === letter) {
        this.letters[i].hidden = false;
        return true;
      }
    }
    return false;
  }

  render() {
    let guessedPortion = "";
    for (let i = 0; i < this.letters.length; i++) {
      if (this.letters[i].hidden === true) {
        guessedPortion = guessedPortion + '_ ';
      } else {
        guessedPortion = guessedPortion + this.letters[i].value + " ";
      }
    }
    return guessedPortion.trim();
  }
}






