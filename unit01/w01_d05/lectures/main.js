class Car {
  constructor(color, engineSize) {
    this.color = color;
    this.engineSize = engineSize;
    this.seatBelt = true;
  }
      description() {
        return "This is a "+ this.color + " car with " + this.engineSize + " cylinders.";
    }
};

class PickupTruck extends Car {
  constructor(color, engineSize, bedSize) {
// calling constructor in a subclass will throw reference error because
// (this) is not yet defined. To allow for this, you must call super().
      super(color, engineSize);
// super keyword just points to function of same name in parent class.
//  So, when super is called, you must pass in any parameters
    this.bedSize = bedSize;
// bedsize will be set to first parameter (ie color"green"), so must inherit from Car class
  };

  tow() {
    return "I can only tow " + this.bedSize + " ft."
  }

};

let myPickup = new PickupTruck("green", 8, 30);

console.log(myPickup);
console.log(myPickup.description());
console.log(myPickup.tow());

//let myCar = new Car("blue", 6);
//let mySecondCar = new Car("red", 12);

//console.log(myCar.description());
//console.log(mySecondCar.description());

//object = JS data type that stores key/value pairs
//class = a blueprnt of an instance
//instance = Object returned by invocation of a class
//inheritance =





