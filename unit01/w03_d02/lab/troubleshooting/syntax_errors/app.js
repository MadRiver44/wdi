
$('<h3>Ready...Set...Sing...</h3>').insertAfter('h1');
const arr = []; // missing closing sqbracket
const count = 10;
 let arrCounter = 0;
 let counter = 10;

$("#sing-button").click(function()  {  // missing curly brace?
  for (let i = count; i > -1; i--)  {
    if (i > 1) {
      arr.push(`<li class = 'bottle'> ${i} bottles of beer on the wall`);
    } else if (i === 1) {
      arr.push(`<li class = 'bottle'>  ${i}  bottle of beer on the wall`);
    } else {
      arr.push(`<li class = 'bottle'> no more bottles of beer on the wall`);
    } // missing closing parends
   }
 });

 const interval = setInterval(function() { // missing closing parends
    if (counter === -1) {
      clearInterval(interval);
      counter = 10;
      arrCounter = 0;
    } else {

      $('#bottles').append(arr[arrCounter++]); // missing closing sqbracket
        counter--; // missing closing ;
        console.log(`This has run ${arrCounter} times`);  // missing ;
    }
  }
  ,1000)

