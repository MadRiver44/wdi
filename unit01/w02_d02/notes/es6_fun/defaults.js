//es5 way:
/*function person(limbs, gender) {
  var limbs = limbs || 4;
  var gender = gender || 'None of your business...';
  console.log("test...");
}

person(2, 'female');*/

/* es6 way */

function person(limb=4,gender='male') {
  console.log('----->', limbs, gender);
}



