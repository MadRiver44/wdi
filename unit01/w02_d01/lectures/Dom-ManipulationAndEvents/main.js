const friends = ['Ada', 'Grace', 'Margaret'];

// for-of loops: loop through the friends array and log something
// about each friend

for (let friend of friends) {
  console.log(`${friend} is an awesome programmer!`);
};

/**
 * Finding things in the DOM
 */

// use document.getElementById() to find an element by it's ID
// and assign it to the variable 'myParagraph'
const myParagraph = document.getElementById("myParagraph");

// use document.getElementsByTagName() to find all divs and assign
// them to the variable 'myDivs'
const myDivs = document.getElementsByTagName('div');

// use document.getElementsByClassName() to find all elements of the class
// 'pink-div' and assign them to the variable 'myPinkDivs'
const myPinkDivs = document.getElementsByClassName('pink-div');
// returns array of elements

// use document.querySelector() to find the first <a> element and assign
// it to the variable 'myLink'.
// Note: if more than one element is found when using this
// method it will return the first instance only
const myLink = document.querySelector('a');

// use document.querySelectorAll() to find all <a> elements and assign
// them to the variable 'myLinks'.
const myLinks = document.querySelectorAll('a');
// returns an array of links

// use document.querySelector() to find the main element and assign
// it to the variable 'main'.
const main = document.querySelector('main');
// if you want a class use ('.main')
// if you want an Id use ('#main')

// use getElementsByTagName() to find all of the divs within <main> and
// assign it to the variable mainDivs
const mainDivs = main.getElementsByTagName('div');

/**
 * Mainpulating the DOM
 */

// use insertBefore() to move the second div before the first
main.insertBefore(mainDivs[1], mainDivs[0]);
// first argument = element you are moving
// second argument = element you want to move it before

// find all of the list items and change the text of those items using a for-of loop
const listItems = document.querySelectorAll('li');
for (let item of listItems) {
  item.innerHTML += (` is an awesome programmer!`);
};

// Add a new <li> to the <ul>
// 1. Find the <ul>
const uList = document.querySelector('ul');
// 2. Create a new <li> element
const newListItem = document.createElement('li');
// 3. Set the class attribute of the new <li> to 'styled-list' using the setAttribute method
newListItem.setAttribute('class', 'styled-list');
// setAttribute takes to arguments ie attribute you are setting and its value
// 4. Set the text of the <li> by setting its innerHTML property
newListItem.innerHTML = `Alan Turing is an awesome programmer`;
// 5. Add the <li> to the end of the <ul> by using the appendChild method
uList.appendChild(newListItem);
//

/**
 * DOM event handling
 */

// Write a function that adds a new list item to the <ul>. Set the text
// of the new <li> to the value of the <input>
// 1. Find the value of the input
// 2. Create the new list item
// 3. Set the innerHTML of the <li> to what we found in step 1
// 4. Add the new <li> to the bottom of the <ul>
let addItem = function() {
  const newInputValue = document.querySelector('#listText').value;
  // 1. Find the value of the input
  const newLi = document.createElement('li');
  // 2. Create the new list item
  newLi.innerHTML = newInputValue;
  // 3. Set the innerHTML of the <li> to what we found in step 1
  uList.appendChild(newLi);
  // 4. Add the new <li> to the bottom of the <ul>
};


// find the button!

const myButton = document.querySelector(`button`);

// add an event listener to the button that will call our function
// whenever the button is clicked
// element.addEventListener(event, function, useCapture)

myButton.addEventListener('click', addItem);

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

