console.log('letter.js is connected');

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




