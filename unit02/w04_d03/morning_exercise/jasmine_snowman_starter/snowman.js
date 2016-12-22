class Snowman {
// Add Snowman Attributes and Abilities here using the Jasmine tests you wrote!
  constructor(name) {
    this.name = name || 'Erik';
    this.features = ['stickArms', 'carrotNose'];
    this.temperature = 30;
  }
  melts() {
    this.temperature = this.temperature + 10;
  }
}
/*const Jerry = new Snowman();
Jerry.melts();
console.log(Jerry.temperature);
*/
