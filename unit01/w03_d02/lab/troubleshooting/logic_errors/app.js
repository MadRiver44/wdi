<<<<<<< HEAD
/* eslint-env jquery */
$("<h3>Ready...Set...Sing...</h3>").insertAfter('h1');
=======

$("<h3>Ready...Set...Sing...</h3>").insertAfter('h1'); 
>>>>>>> 1e6f363c965911da4eb67f993c08bc4d5585ec47
const arr = [];
const count = 3;
let arrCounter = 0;
let counter = 3;

$('#sing-button').click(function() {
  for (let i = count; i > -1; i--)  {
<<<<<<< HEAD
    if (i > 1) {
      arr.push('<li class = "bottle">'+ i +" bottles of beer on the wall");
    } else if (i===1) {
        arr.push('<li class = "bottle">'+ i +" bottle of beer on the wall");
    } else {
        arr.push('<li class = "bottle">'+ "no more bottles of beer on the wall");
    }
   }
 });

 const interval = setInterval(function() { // missing closing parends
    if (counter === -1) {
      clearInterval(interval);
      counter = 3;
      arrCounter = 0;
    } else {

      $('#bottles').append(arr[arrCounter++]); // missing closing sqbracket
        counter--; // missing closing ;
        console.log(`This has run ${arrCounter} times`);  // missing ;
    }
  }
  ,1000)

=======
    if(i>1) { arr.push('<li class = "bottle">'+ i +" bottles of beer on the wall"); }
    else if(i===1){ arr.push('<li class = "bottle">'+ i +" bottle of beer on the wall"); }
    else{ arr.push('<li class = "bottle">'+ "no more bottles of beer on the wall"); }
  }; 
 let arrCounter = 0;
 let counter = 3;
 const interval = setInterval(function() {
    if( counter == 1 ) { clearInterval(interval) } 
    else { $('#bottle').append(arr[arrCounter++]);
           counter-
           console.log()
           //console.log("This has run " + arrCounter + " times")
    } 
  },1000)
});
>>>>>>> 1e6f363c965911da4eb67f993c08bc4d5585ec47



