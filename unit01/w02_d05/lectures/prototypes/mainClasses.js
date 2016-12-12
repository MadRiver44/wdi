// make animal class

class Animal {
  constructor(name, isAlive) {
    this.name = name;
    this.isAlive = isAlive;
  }
  sayName() {
    console.log(`My name is ${this.name}`);
  }
}
// create instance of Animal class names George who is alive
let George = new Animal("George", true); // if don't know name, pass in null as a placeholder value
 // George.sayName();
// or,
/*const properties = {
  x: 1,
  y: 2
};*/
let Pete = new Animal(properties);

class Dog extends Animal {
  constructor(name, isAlive, breed) {
    super(name, isAlive);
    this.breed = breed;
  }
  bark() {
    if (this.isAlive === true) {
      console.log(`Bark!`);
  } else {
      console.log(`Bark from heaven`);
    }
  }
}
const jack = new Dog("Jack", true, 'terrier');
const jill = new Dog("Jill", false, 'pitbull');
console.log(`${jill.name}, you're a great ${jill.breed}`);
jack.bark();














