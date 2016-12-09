class Animal {
  constructor(name, isAlive) {
    this.name = name;
    this.isAlive = isAlive;
  }

  sayName() {
    console.log(`Hi, my name is ${this.name}`);
  }
}

// const george = new Animal('george', true);
//
// console.log(george);
// george.sayName();

// class Dog extends Animal {
//   constructor(name, isAlive, breed) {
//     super(name, isAlive);
//
//     this.breed = breed;
//   }
//
//   bark() {
//     if (this.isAlive === true) {
//       console.log('woof woof woof');
//     } else {
//       console.log('woof woof woof... from heaven');
//     }
//   }
// }
//
// const jack = new Dog('jack', true, 'pitbull');
// const jill = new Dog('jill', false, 'puggle')

// console.log(jack);
// console.log(jill);
//
// jack.sayName();
// jack.bark();
// console.log(jack.breed);
//
// jill.sayName();
// jill.bark();
// console.log(jill.breed);
