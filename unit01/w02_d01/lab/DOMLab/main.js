/* **DOM manipulation and event handling lab** */

const firstButton = document.querySelector('#button1');
const secondButton = document.querySelector('#button2');

function changeSingleColor() {
  const divs = document.querySelectorAll('.wrapper div');

  for (let div of divs) {
    div.style.backgroundColor = 'magenta';
  }
}

function changeMultiColors() {
  const divs = document.querySelectorAll('.wrapper div');
  const colors = ['red', 'blue', 'green'];

  // The regular for loop is fairly straightforward:
  // for (let i = 0; i < divs.length; i++) {
  //   divs[i].style.backgroundColor = colors[i];
  // }

  // the forEach callback function takes an option index
  // argument, you can use this to keep track of the current value's
  // index in the array:
  divs.forEach(function(div, index) {
    div.style.backgroundColor = colors[index];
  });
}

firstButton.addEventListener('click', changeSingleColor);
secondButton.addEventListener('click', changeMultiColors);

// if you want to pass an anonymous function to the addEventListener
// method you would do it likeso:
//
// firstButton.addEventListener('click', function() {
//  const divs = document.querySelectorAll('.wrapper div');

//  for (let div of divs) {
//    div.style.backgroundColor = 'magenta';
//  }
// });
//
// FUN FACT: During yesterday's lecture I mentioned Ada Lovelace. Ada is
// often considered the first computer programmer. Her father was the
// infamous Romantic poet Lord Byron. In an effort to prevent Ada from
// falling victim to her father's artistic yet destructive lifestyle,
// Ada's mother pushed her towards science. Ada would eventually work
// with Charles Babbage and it was for his Analytical Engine that she
// wrote the first programmed algorithm. But she went further than
// that... She saw that the potential for this analytic engine reached
// much further than mathematical calculation. She envisioned an
// all-purpose computation machine capable of doing anything from
// fabric design to music. Ada Lovelace dreamed up techno music
// at least a century before it was a thing! The beauty of this story
// is that no matter how rational and scientific computer programming
// may seem, it was in virtue of a truly artistic mind that we
// have what we have today. Cheers to Ada - practice looking at the world
// a little differently once in awhile.
