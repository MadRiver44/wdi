// DANCE:

let words = ['Do the', 'D', 'A', 'N', 'C', 'E', '1', '2', '3', '4', '5', 'Stick to the', 'B', 'E', 'A', 'T', 'Get ready to ignite'];
  for (let w = 0; w < words.length; w++) {
    alert(words[w]);
  };

//MEDIAN
let nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
  nums.sort();
  console.log( nums[Math.floor(nums.length/2)] );

//Multiply by 9

for (let i = 0; i < 10; i++) {
  console.log(`${i} * 9 = ${i*9}`);
  }

// d) Given the following variables, write the JavaScript statements that can solve for sideC using pythagorean theorem.
// So when console.log for sideC you get the correct answer. :triangular_ruler:
var sideA = 3;
var sideB = 4;
var sideC;
sideC = Math.sqrt(Math.pow(3, 2) + Math.pow(4, 2));
console.log(sideC);

// Poem
let people = ['Ariana','Kate', 'Mike', 'Andrew']
let actions = ['loves', 'pooped', 'smells', 'amazed'];
let  where = ['here', 'there', 'nowhere', 'anywhere'];
console.log(`Poem: ${people[Math.round(Math.random()*2+1)]} ${actions[Math.round(Math.random()*2+1)]} ${where[Math.round(Math.random()*2+1)]}`);

// ## OBJECTS: HAMMOND'S MINES

//Part 1:

//1.
let guestOfHonor = snakewaterMontana.paleontologist;

//2.
let clever_girl = snakewaterMontana.specimen;

//Part 2:

//1.
let nicaraguanSpecimens = nicaragua.specimens;

//2.
let favoriteSpecimen = nicaraguanSpecimens[0];

//3.
nicaragua.annual_budget += 250000;

//Part 3:
//1.
let depthOfMexico = hammondsMines.mexico.depth;

//2.
let budgetForBuenosAires = hammondsMines.buenos_aires.annual_budget;

//3.
console.log(hammondsMines.buenos_aires.specimens);

//4.
hammondsMines.nicaragua = {
    depth: "200 meters",
    annual_budget: 1500000,
    specimens: [
      "Tyrannosaurus Rex",
      "Stegosaurous",
      "Triceratops",
      "Velociraptor"
    ]
  };

//5.
let nicaraguaBudget = hammondsMines.nicaragua.annual_budget;
let buenosAiresBudget = hammondsMines.buenos_aires.annual_budget;
let mexicoBudget = hammondsMines.mexico.annual_budget;

//6.
let totalCost = nicaraguaBudget + buenosAiresBudget + mexicoBudget;
console.log(totalCostOfMines);

//7.
console.log(hammondsMines.mexico.specimens[1]);
