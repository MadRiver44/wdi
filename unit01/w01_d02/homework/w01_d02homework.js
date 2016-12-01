#### DO THE D.A.N.C.E 1 2 3 4 5.

var array = ["Do the", "D", "A", "N", "C", "E", "1", "2", "3", "4", "5", "Stick to the ", "B", "E", "A", "T", "Get ready to ignite"];

function getDownGetFunky() {
  for (i = 0; i < array.length; i++) {
    alert(array[i]);
  }
}
getDownGetFunky();

#### ARRAY ALL DAY.

var nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

var putInOrder = function() {
  newNums = nums.sort(function(a, b){return a-b});
  console.log(newNums);
  return newNums;
};
// median = arethmic mean of the middle values
var findTheMedian = function() {
  var middle = Math.floor(newNums.length/2);
  if(newNums.length % 2) {
    console.log("The median is " + newNums[middle]);
 } else {
    console.log("The median is " + (newNums[middle-1] + newNums[middle]) / 2);
 }
};
putInOrder();
findTheMedian();

#### FOR LOOPS

var loop = function() {
for (i = 0; i < 11; i++) {
  console.log(i * 9);
}
};
loop();

#### YOU DECIDE!

var sideA = 3;
var sideB = 4;
var sideC = Math.pow(sideA, 2) * Math.pow(sideB, 2);
calculateSideC = function() {
  console.log("The size of the third side is " + Math.sqrt(sideC));
};
calculateSideC();

###Adventure Story:

const nouns = ["spitoon", "pineapple under the sea", "Humvee", "equator", "pencil", "davenport", "muzzle-loader", "bear hug", "Fentanyl", "JavaScript"];

var selectNoun = function(arr) {
  var i = [Math.floor(Math.random()*arr.length)];
  console.log(arr[i]);
  return arr[i];
};

const verbs = ["rollerskates", "eats", "licks", "loves", "buys", "spraypaints", "courts"];

var selectVerb = function(arr) {
  var j = [Math.floor(Math.random()*arr.length)];
  console.log(arr[j]);
  return arr[j];
};

const adjectives = ["oily", "reversible", "ingenious", "kitchy", "dead", "ham-fisted", "pasty", "suspicious", "chartreuse", "piquant"];

var selectAdjective = function(arr) {
  var k = [Math.floor(Math.random()*arr.length)];
  console.log(arr[k]);
  return arr[k];
};

var createSentence = function() {
  var noun1 = selectNoun(nouns);
  var verb = selectVerb(verbs);
  var adjective = selectAdjective(adjectives);
  var noun2 = selectNoun(nouns);
  console.log("The " + noun1 + " " + verb + " the " + adjective + " " + noun2 + ".");
};

createSentence();

## OBJECTS: HAMMOND'S MINES
### Part 1

snakewaterMontana = {
  paleontologist: "Dr. Alan Grant",
  depth: "10 meters",
  specimen: "Velociraptor"
}
###  1. Create a variable called guestOfHonor and assign it's value to the name of the paleontologist at Snakewater, Montana.

var guestOfHonor = snakewaterMontana.paleontologist

###  2. Access the value of the specimen found in Snakewater, Montana, and store it in a variable called clever_girl.

clever_girl = snakewaterMontana.specimen;

### Part 2

  nicaragua = {
    depth: "200 meters",
    annual_budget: 1500000,
    specimens: [
      "Tyrannosaurus Rex",
      "Stegosaurous",
      "Triceratops",
      "Velociraptor"
    ]
  }

###  1. Store the array of specimens of this site into a variable called nicaraguanSpecimens.

var nicaraguanSpecimens = nicaragua.specimens;

###  2. Make a variable called favoriteSpecimen and assign it's value to your favorite dinosaur within nicaraguanSpecimens ( can you do this by referencing the nicaragua object itself? )

var favoriteSpecimen = nicaragua.specimens[0];

###  3. Add 250000 to the annual budget of this site.

nicaragua.annual_budget += 250000;

### Part 3

hammondsMines = {
  buenos_aires: {
    depth: "400 meters",
    annual_budget: 1000000,
    specimens: [
      "Dilophosaurus",
      "Brachiosaurus"
    ]
  },
  mexico: {
    depth: "350 meters",
    annual_budget: 900000,
    specimens: [
      "Gallimimus",
      "Parasaurolophus"
    ]
  }
}

###  1. Access the depth of John Hammond's mine in Mexico, store the depth of the Mexican mine into an appropriately named variable.

var depthOfJohnHammondsMineInMexico = hammondsMines.mexico.depth;

###  2. Access and the annual budget for Hammond's mine in Buenos Airies, store the annual budget for Hammond's mine in Buenos Aires.

var budgetForHammondsMineInBuenosAires = hammondsMines.buenos_aires.annual_budget;

###  3. Access and console the dinosaur DNA specimens found in Buenos Aires.

console.log(hammondsMines.buenos_aires.specimens);

###  4. Insert Nicaragua into hammonds_mines

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

###  5. Create three variables to store the annual budgets for each mine into them.

var nicaraguaBudget = hammondsMines.nicaragua.annual_budget;
var buenosAiresBudget = hammondsMines.buenos_aires.annual_budget;
var mexicoBudget = hammondsMines.mexico.annual_budget;

###  6. Create a new reasonably named variable to track the total annual cost of operation for the mines by adding the previously stored budgets.

var totalCostOfMines = nicaraguaBudget + buenosAiresBudget + mexicoBudget;
console.log(totalCostOfMines);

###  7. Access and console log the "Parasaurolophus" specimen.

console.log(hammondsMines.mexico.specimens[1]);

