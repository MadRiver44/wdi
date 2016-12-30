// create goblins array
// Zhenting Zhou 2015
var goblins = [];
for (var g = 0; g < 100; g++) {
	goblins.push(false);
}
// outer loop that loop though all the goblins in the array 100 times
for (var i = 0; i < goblins.length; i++) {
	// inner loop initial start will equal i and will incrument as the loop above loops
	// each inner loop will also loop 100 times and everytime it loop, loop increment by i + 1
	for (var j = i; j < goblins.length; j += (i + 1)) {
		//toggle the goblin's state
		if (!goblins[j]) {
			goblins[j] = true;
		} else {
			goblins[j] = false;
		}
	}
}
// change values in goblins array to numbers
var result = [];
for (var u = 0; u < goblins.length; u++) {
	//if that goblin is true push that *index* into result
	if (goblins[u]) {
		result.push(u + 1);
	}
}
// The set of cured goblins is the set of perfect squares up to and including 100.
console.log('Cured goblins: ', result);

// Jon Zachary's solution 2016-12-22
let gobs = [];
for (let i = 1; i < 101; i++) {
  gobs.push(false);
}

function witch(n) {
  for (let i = 1; i < 101; i++) {
    if (i % n === 0) {
      gobs[i] = !gobs[i];
    }
  }
}

function metaWitch() {
  for (let i = 0; i <= 100; i++) {
    witch(i);
  }
}

metaWitch();

let cured = [];
for (let i = 0; i <= 100; i++) {
  if (gobs[i] === true) {
    cured.push(i);
  }
}

console.log(cured);
