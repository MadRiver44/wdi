// jQuery DOM manipulation and event handling lab
// When the first button is clicked, set the background colors of the divs to a different color.

function changeColor() {
  $('#div1').add('#div2').add('#div3').css('background-color', 'red');
}
$('#button1').click(changeColor);

// When the second button is clicked, set the background color of the divs to a different color each.
// Use an array of three colors and set the backgroundColor of each div to a color in the array.
// -define colors array
// -get divs and access bgc for each
// -link button click to function

/* OLD WAY
function changeMultiColors() {
  const divs = document.querySelectorAll('.wrapper div');
  const colors = ['red', 'blue', 'green'];
  divs.forEach(function(div, index) {
    div.style.backgroundColor = colors[index];
  });
}
const button2 = document.querySelector('#button2');
button2.addEventListener('click', changeMultiColors);
*/
const myDivs = $('div');

$.each(myDivs, function() {
  cosole.log('myDivs');
});

$('#button2').click(changeColor);

/*$ funtions are utility functions
$.each([1,2,3], function() {
  console.log(this + 1);
});*/

// If you finish these two take a look at the jQuery documentation and start experimenting!

// $(handler);






