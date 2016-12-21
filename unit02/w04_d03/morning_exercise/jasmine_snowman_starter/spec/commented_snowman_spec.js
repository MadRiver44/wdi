//I want my snowman builder to create a snowman object
//My winter wonderland is a friendly place, so I want each snowman to have a name
//In order for it to really be a snowman, it needs to have some fatures:
//-a carrot nose.
//-stick arms.
//Our snowman should like warm hugs.
//Should melt when the temperature raises by 10 degrees

describe('Snowman', () => { //decribe what are you are testing? Snowman object //has to match the name of the object, 'Snowman' - in this case
  let olaf;

  beforeEach(() => { //create a new instance of the object before moving forward
    olaf = new Snowman('Olaf'); //make sure to have a constructor function in the Snowman object
  });

  //ATTRIBUTES!
  describe('#new', () => { //check if new Snowman object was created
    it('has a name', () => {
      expect(olaf.name).toBeDefined();// make sure the snowman has a name
    });

    it('has stick arms', () => {
      expect(olaf.features).toContain('stickArms'); //tell myself in the future to have an attribute `features` with an array of properties.
    });

    it('has carrot nose', () => {
      expect(olaf.features).toContain('carrotNose');//just the same as with `stickArms` feature
    });

    it('is 30 degrees', () => { //define the temperature attribute
      expect(olaf.temperature).toEqual(30); //check that it's 30 degrees
    });
  });

  // ABILITIES!!!

 //what ability are we testing?
  describe('melts', () => { // has to match the method name in the class object
    it('raises the temp by 10 degrees', () => { //tell other developers what this method should do
      expect(olaf.melts()).toEqual(40); //make sure to call the method in the expect funtion, so it's executed
      //before your are checking for the result.
      //compares the modified temperature to the original(from the constructor)
    });
  });
});
