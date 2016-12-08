function counter() {
  let count = 0;
  function inner() {
    console.log(++count);
  }
  return inner;
}

let catcher = counter();

setInterval(catcher, 2000);  // will run until [clear]

//console.log(catcher());
//catcher();  // calling again, count will continue to increment
//catcher();
//catcher();
//counter();

