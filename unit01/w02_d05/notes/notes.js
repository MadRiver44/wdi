const array = [1,2,3,4,5];


function isOdd(num) {
  if (num % 2 !== 0)
  return false;
}

function countOdd(array) {
  let counter = 0;
  arr.forEach(function(d,i){    //  forEach loop
    if(isOdd(d)) {
      counter ++
    }
  })
  return counter;
};

function countEven(array) {
  let counter = 0;
  arr.forEach(function(d,i){    //  forEach loop
    if(isOdd(d)) {
      counter ++
    }
  })
  return counter;
};

function count(predicate) {
  return function(array) {
    let counter = 0;
    array.forEach(function(d,i) {
      if(predicate(d)) {
        counter++;
      }
    })
    return counter;
  }
}

let countTheOdds = count(isOdd)(array);
countTheOdds(array);
