const friends = ['Ada', 'Grace', 'Margaret'];

// for-of loops: loop through the friends array and log something
// about each friend
// for (let friend of friends) {
//   console.log(`${friend} is an awesome programmer!`);
// }



/**
 * Finding things in the DOM
 */

// use document.getElementById() to find an element by it's ID
// and assign it to the variable 'myParagraph'
const myParagraph = document.getElementById('myParagraph');
console.log(myParagraph);



// use document.getElementsByTagName() to find all divs and assign
// them to the variable 'myDivs'
const myDivs = document.getElementsByTagName('div');
console.log(myDivs);



// use document.getElementsByClassName() to find all elements of the class
// 'pink-div' and assign them to the variable 'myPinkDivs'
const myPinkDivs = document.getElementsByClassName('pink-div');
console.log(myPinkDivs);



// use document.querySelector() to find the first <a> element and assign
// it to the variable 'myLink'.
// Note: if more than one element is found when using this
// method it will return the first instance only
const myLink = document.querySelector('a');
console.log(myLink);



// use document.querySelectorAll() to find all <a> elements and assign
// them to the variable 'myLinks'.
const myLinks = document.querySelectorAll('a');
console.log(myLinks);



// use document.querySelector() to find the main element and assign
// it to the variable 'main'.
const main = document.querySelector('main');
console.log(main);



// use querySelectorAll() to find all of the divs within <main> and
// assign it to the variable mainDivs
const mainDivs = main.querySelectorAll('div');
console.log(mainDivs);



/**
 * Mainpulating the DOM
 */

// use insertBefore() to move the second div before the first
// within the main div
main.insertBefore(mainDivs[1], mainDivs[0]);



// find all of the list items and change the text of those items
// using a for-of loop
const listItems = document.querySelectorAll('li');

for (let item of listItems) {
  item.innerHTML += ' is an awesome programmer!';
}


// Add a new <li> to the <ul>
// 1. Find the <ul>
// 2. Create a new <li> element
// 3. Set the class attribute of the new <li> to 'styled-list' using the setAttribute method
// 4. Set the text of the <li> by setting its innerHTML property
// 5. Add the <li> to the end of the <ul> by using the appendChild method
const uList = document.querySelector('ul');
const newListItem = document.createElement('li');

newListItem.setAttribute('class', 'styled-list');
newListItem.innerHTML = 'Alan is an awesome programmer!';
uList.appendChild(newListItem);



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
  const newInputValue = document.querySelector('#listText').value;
  const newLI = document.createElement('li');

  newLI.innerHTML = newInputValue;
  uList.appendChild(newLI);
}



// find the button!
const myButton = document.querySelector('button');




// add an event listener to the button that will call our function
// whenever the button is clicked
myButton.addEventListener('click', addItem);
