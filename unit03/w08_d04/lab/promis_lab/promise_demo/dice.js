function dieToss() {
  const results = Math.floor(Math.random() * 4) + 1;
  console.log('Big money, Big money 🎲🎲!!', 'Toss Number=> ' + results);
  return results;
}

var promise = new Promise(function(fulfill, reject) {
  const n = dieToss();
  const magicNumber = 2
  console.log('You need to get ', magicNumber)
  if (n === magicNumber) {
    fulfill(n);
  } else {
    reject(n);
  }
});

promise.then(function(toss) {
  console.log('Yay, you threw a ' + toss + ' 😀');  
}, function(toss) {
  console.log('AWW!, you threw a ' + toss + ' 😞');  
});
