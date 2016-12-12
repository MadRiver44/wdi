/**
 * This file is a line by line conversion of the ES6 code to
 * ES5 prototypes to demonstrate prototypal inheritance.
 * ES6 classes implement prototypes under the hood.
 * They're just syntactic sugar!
 */

function Animal(name, isAlive) {
  this.name = name;
  this.isAlive = isAlive;
}

Animal.prototype = {
  sayName() {
    console.log(`Hi, my name is ${this.name}`);
  }
}

const george = new Animal('george', true);

console.log(george);
george.sayName();

function Dog(name, isAlive, breed) {
  Animal.call(this, name, isAlive);

  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
  if (this.isAlive === true) {
    console.log('woof woof woof');
  } else {
    console.log('woof woof woof... from heaven');
  }
}

const jack = new Dog('jack', true, 'pitbull');
const jill = new Dog('jill', false, 'puggle')

console.log(jack);
console.log(jill);

jack.sayName();
jack.bark();
console.log(jack.breed);

jill.sayName();
jill.bark();
console.log(jill.breed);
