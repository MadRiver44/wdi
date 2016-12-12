/* * Prototypes lecture!
 * - compare this with the implementation
 * - using ES6 classes*/
function Animal(name, isAlive) {
    this.name = name;
    this.isAlive = isAlive;
}

Animal.prototype = {
  sayName() {
    console.log(`Hi my name is ${this.name}.`);
  }
}

/*const george = new Animal("George", true);
console.log(george);
george.sayName();
*/

function Dog(name, isAlive, breed) {
  Animal.call(this, name, isAlive); // call=like super
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  if (this.isAlive === true) {
    console.log(`woof woof`);
  } else  {
    console.log(`woof woof...from heaven`);
  }

/*function Poodle(name, isAlive, breed) {
  Animal.call(this, name, isAlive); // call=like super
  this.breed = breed;} */
 }


// Poodle.prototype = Object.create(Dog.prototype);
// Poodle.prototype.constructor = Poodle;

const bobby = new Dog("Bobby", true, 'poodle');
const cindy = new Dog("Cindy", false, 'lab');
console.log(`My name is ${bobby.name} and I'm a ${bobby.breed}`);
bobby.bark();
console.log(`My name is ${cindy.name} and I'm DEAD!`);
cindy.bark();




