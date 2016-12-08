setTimeout(function generic() {   // expects a callback
  console.log('Hello');
}, 3000);

setTimeout(function generic() {
  console.log('I will do this in 4 secs');
}, 4000);

setTimeout(function generic() {
  console.log('I will do this in 5 secs');
}, 5000);

setInterval(function generic() {
  console.log('Greens, Potatoes, Tomatoes, Lamb');
}, let timer = 1000);

clearInterval(timer);
