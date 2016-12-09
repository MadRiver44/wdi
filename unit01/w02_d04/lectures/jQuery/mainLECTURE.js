const friends = ['Ada', 'Grace', 'Margaret'];

// jQuery!!!

/**
 * Finding things in the DOM
 */

// use jQuery to find an element by it's ID
// and assign it to the variable 'myParagraph'
const myParagraph = $('#myParagraph');
console.log(myParagraph);


// use jQuery to find all divs and assign
// them to the variable 'myDivs'
const myDivs = $('div');
console.log(myDivs);


// use jQuery to find all elements of the class
// 'pink-div' and assign them to the variable 'myPinkDivs'
const myPinkDivs = $('.pink-div');
console.log(myPinkDivs);



// use $ to find the first <a> element and assign
// it to the variable 'myLink'.
const myLink = $('a')[0];
console.log(myLink);


// use $ to find all <a> elements and assign
// them to the variable 'myLinks'.
const myLinks = $('a');
console.log(myLinks);


// use $ to find the main element and assign
// it to the variable 'main'.
const main = $('main');
console.log(main);



// use $ to find all of the divs within <main> and
// assign it to the variable mainDivs
//
// Alison used .children() here, see if you can get it to work using
// that method.
const mainChildDivs = $('main>div');
console.log(mainChildDivs);

const mainDivs = $('main.div');
console.log(mainDivs);



/**
 * Mainpulating the DOM
 */

// use jQuery's .before() to move the second div before the first
// within the main div
//
// $(mainChildDivs).before(mainDivs);
// whatever we're doing on the line above this comment
// is not what we wanted... can you figure out what exactly
// is going on? Try to work it out.
//
$(mainChildDivs[0]).before(mainChildDivs[1]);

// set the text of each li in a list
//
// easy
// Darc came up with this solution, it's better than
// what we came up with but make sure to read the jQuery
// documentation so you understand how it works.
// $('li').append(' is an awesome programmer');
//
$('li').each((index, currentLI) => {
  currentLI.innerHTML = `${friends[index]} is an awesome programmer`;
});


// Add a new <li> to the <ul>
// 1. Find the <ul>
// 2. Create a new <li> element
// 3. Set the class attribute of the new <li> to 'styled-list'
// 4. Set the text of the <li>
// 5. Add the <li> to the end of the <ul>
$('ul').append(`<li class="styled-list">Alan is an awesome programmer!</li>`);

/**
 * DOM event handling
 */

// Write a function that adds a new list item to the <ul>. Set the text
// of the new <li> to the value of the <input>
// 1. Find the value of the input
// 2. Create the new list item
// 3. Set the innerHTML of the <li> to what we found in step 1
// 4. Add the new <li> to the bottom of the <ul>
function addItem() {
  $('ul').append(`<li>${$('#listText').val()}</li>`)
}

// find the button and add a click event handler
$('#listButton').click(addItem)
//
// Let's try to toggle the whole main div!!
$('#toggle-main').click(() => $('main').toggle());
