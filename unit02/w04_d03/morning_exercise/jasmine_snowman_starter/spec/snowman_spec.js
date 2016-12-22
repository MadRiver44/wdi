// IA's will walk through the creation of the snowman_spec file

//I want my snowman builder to create a snowman object
//My winter wonderland is a friendly place, so I want each snowman to have a name
//In order for it to really be a snowman, it needs to have some fatures:
//-a carrot nose.
//-stick arms.
//Our snowman should like warm hugs.

/*describe('Snowman', () => { // describe what you are testing
     //  tests go here
});*/

describe('Snowman', () => {
  let olaf;

  beforeEach(() => {
    olaf = new Snowman('Olaf');  // have to instantiate objext before testing it
  });

  describe('#new', () => { // check if it was created
    it('has a name', () => {
      expect(olaf.name).toBeDefined();
    })

    it('has stick arms', () => {
      expect(olaf.features).toContain('stickArms');
    })

    it('has a carrot nose', () => {
      expect(olaf.features).toContain('carrotNose');
    })

    it('is 30 degrees', () => {
      expect(olaf.temperature).toEqual(30);
    })
  });
});

// Abilities (methods) go outside constructor tests

describe('#melts', function() {
  it('raises the temperature by 10 degrees', function() {
    olaf.melt();
    expect(olaf.temperature).toEqual(olaf.temperature += 10);
  })
});

/*  describe( "#add", function(){
    it( "returns sum of arguments", function(){
      let sum = calc.add(2, 2);
      expect(sum).toBe(4);
    });
  });*/






