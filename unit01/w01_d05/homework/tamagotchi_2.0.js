//###Tamagotchi Version 1.0
//Make a ```tamagotchi``` object. Give it the following properties:
//1. a hungry property (initially false)
//2. a sick property (initially false)
//3. an age of 0
//4. a rest level (initially set to 5)
//Give it the following methods:</br>
//1. ```feed()``` - if hungry is true, return "That was yummy!" and set hungry to false.  If hungry is false, return "No thanks, I'm full." and set hungry to true.
//2. ```sleep()``` - returns "zzzzzzz" (use as many z's as you want) and increase rest level
//3. ```medicate()``` - if sick is true, return "I feel much better!" and set sick to false.  If sick is false, return "No thanks, I feel fine." and set sick to true.
//4. ```increaseAge()``` - increase the age by one and return "Happy Birthday to me! I am " + age + " years old!"


console.log("ready!");
let tamagotchi = {
    hungry: false,
    sick: false,
    age: 0,
    restLevel: 5,
    feed: function() {
        if (this.hungry === true) {
            this.hungry = false;
            return "That was yummy!";
        } else {
            this.hungry = true;
            return "No thanks, I'm full.";
        }
    },
        sleep: function() {
        this.restLevel = this.restLevel + 5;
        return "Zzzzzzzzz";
    },
        medicate: function() {
        if (this.sick = true) {
            this.sick = false;
            return "I feel much better!";
        } else {
            this.sick = true;
            return "No thanks, I feel fine.";
        }
    },
    increaseAge: function() {
        this.age += 1;
        return "Happy Birthday to me! I am " + this.age + " years old!";
    }
};

//#####We are going to build a three custom tamagotchi objects
//Use your custom tamagotchi object... to create each of these
//- dog
//- cat
//- fish
//**There will be LOTS of repeated code!!!  We know!!!**

//####dog should be the same as tamagotchi except it should also have these abilities:
//1. ```bark()``` - returns "ruff ruff
//2. ```goOutside()``` - returns "I own that tree now!"

let dog = {
  hungry: false,
  sick: false,
  age: 0,
  restLevel: 5,
  feed: function() {
    if (this.hungry===true) {
      this.hungry=false;
      return "That was yummy!";
  } else {
    this.hungry=true
      return "No thanks, I'm full.";
    }
  },
  sleep: function() {
    this.restlevel += 5;
    return "Zzzzzzzz";
  },
  medicate: function() {
    if (this.sick===true) {
      this.sick=false;
      return "I feel much better!";
  } else {
      this.sick=true;
      return "No thanks, I feel fine.";
    }
  },
  increaseAge: function() {
    this.age += 1;
    return "Happy Birthday to me! I am " + this.age + " years old!";
  },
  bark: function() {
    return "ruff ruff";
  },
  goOutside: function() {
    return "I own that tree now.";
  }
};

//####cat should be the same as tamagotchi except it should also have these abilities:
//1. ```meow()``` - returns "Meow!"
//2. ```useLitterBox()``` - returns "Burried treasure!"

let cat = {
  hungry: false,
  sick: false,
  age: 0,
  restLevel: 5,
  feed: function() {
    if (this.hungry===true) {
      this.hungry = false;
      return "That was yummy!";
    } else {
      this.hungry = true;
      return "No thanks, I'm full.";
    }
  },
  sleep: function() {
    this.restLevel += 5;
    return "Zzzzzzzzz";
  },
  medicate: function() {
    if (sick===true) {
      this.sick = false;
      return "I feel much better!";
    } else {
      this.sick = true;
      return "No thanks, I feel fine.";
    }
  },
  increaseAge: function() {
    this.age += 1;
    return "Happy Birthday to me! I am " + this.age + " years old!";
  },
  meow: function() {
    return "Meow!";
  },
  useLitterBox: function() {
    return "Buried treasure!";
  }
};

//####fish should be the same as tamagotchi except it should also have these abilities:
//1. ```swim()``` - returns "Just keep swimming..."

let fish = {
  hungry: false,
  sick: false,
  age: 0,
  restlevel: 5,
  feed: function() {
    if (this.hungry===true) {
      this.hungry = false;
      return "That was yummy!";
    } else {
      this.hungry = true;
      return "No thanks, I'm full.";
    }
  },
  sleep: function() {
    this.restLevel += 5;
    return "Zzzzzzzzz";
  },
  medicate: function() {
    if (this.sick===true) {
      this.sick = false;
      return "I feel much better!";
    } else {
      this.sick = true;
      return "No thanks, I feel fine.";
    }
  },
  increaseAge: function() {
      this.age += 1;
      return "Happy Birthday to me! I am " + this.age + " years old!";
  },
  swim: function() {
    return "Just keep swimming...";
  }
}

//Try the following:
//1. Feed the dog twice.
dog.feed();
dog.feed();
//2. Increase the dog's age twice.
dog.increaseAge();
dog.increaseAge();
//3. Make the dog bark.
dog.bark();
//4. Make the dog go outside.
dog.goOutside();
//5. Make the cat meow.
cat.meow();
//6. Make the cat sleep.
cat.sleep();
//7. Make the cat use the litter box.
cat.useLitterBox();
//8. Give the fish medicine twice.
fish.medicate();
fish.medicate();
//9. Make the fish swim.
fish.swim();
//Bonus:  What is missing from our tamagotchis?!?!  Build it!

//###AFTER Completing the above exercise...
//- Identify which parts of your tamagotchis share the SAME attributes
//- Identify which parts of your tamagotchis share the SAME abilities
//- Identify the differences

//###Now, let's use the Constructor Function.....
//- Rewrite the Tamagotchi object with a constructor function!

class Tamagotchi {
    constructor() {
        this.hungry = false;
        this.sick = false;
        this.age = 0;
        this.restLevel = 5;
    }
    feed() {
        if (this.hungry === true) {
            this.hungry = false;
            return "That was yummy!";
        } else {
            this.hungry = true;
            return "No thanks, I'm full.";
        }
    }
    sleep() {
            this.restLevel += 5;
            return "Zzzzzzzzz";
        }
        medicate() {
            if (this.sick === true) {
                this.sick = false;
                return "I feel much better!";
            } else {
                this.sick = true;
                return "No thanks, I feel fine.";
            }
        }
        increaseAge() {
            this.age += 1;
            return "Happy Birthday to me! I am " + this.age + " years old!";
        }
}

//- Create several tamagotchi objects using your constructor :D

class Dog extends Tamagotchi {
    constructor(hungry, sick, restLevel, age, feed, sleep, medicate, increaseAge) {
        super(hungry, sick, restLevel, age, feed, sleep, medicate, increaseAge);
    }
    bark() {
        return "ruff ruff";
    }
    goOutside() {
        return "I own that tree now.";
    }
}

class Cat extends Tamagotchi {
    constructor(hungry, sick, restLevel, age, feed, sleep, medicate, increaseAge) {
        super(hungry, sick, restLevel, age, feed, sleep, medicate, increaseAge);
    }
    meow() {
        return "Meow!";
    }
    useLitterBox() {
        return "Buried treasure!";
    }
}

class Fish extends Tamagotchi {
    constructor(hungry, sick, restLevel, age, feed, sleep, medicate, increaseAge) {
        super(hungry, sick, restLevel, age, feed, sleep, medicate, increaseAge);
    }
    swim() {
        return "Just keep swimming...";
    }
}


//###Super Duper Resource!
//<a href="https://www.youtube.com/watch?v=XYG0a-CpKrI&feature=youtu.be">Here's</a> a great video that breaks down building objects with constructor functions. Please watch!

