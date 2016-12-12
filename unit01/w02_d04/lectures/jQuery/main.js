const friends = ['Ada', 'Grace', 'Margaret'];

// jQuery!!!

/**
 * Finding things in the DOM
 */

// use jQuery to find an element by it's ID
// and assign it to the variable 'myParagraph'
const myParagraph = $('#myParagraph'); // *** returns ARRAY, not HTML object!!!!!
console.log(myParagraph); //

// use jQuery to find all divs and assign
// them to the variable 'myDivs'
const myDivs = $('div');  // *** returns ARRAY, not HTML object!!!!!
console.log(myDivs);

// use jQuery to find all elements of the class
// 'pink-div' and assign them to the variable 'myPinkDivs'
const myPinkDivs = $('.pink-div');
console.log(myPinkDivs);


// use $ to find the first <a> element and assign
// it to the variable 'myLink'.
const myLink = $('a')[0];  // anchor tag has no id; to find first one use index
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
const mainDivs = $('main').children('div'); // or $('main>div'); ">" is "direct children"
console.log(mainDivs);                      // $('main div') would give all divs in main (ex.grandchildren)


/**
 * Mainpulating the DOM
 */

// use jQuery's .before() to move the second div before the first
// within the main div
mainDivs[0].before(mainDivs[1]);


// set the text of each li in a list
$('ul').append('<li class="styled-list"</li>'); // read jq append documentation to see 2 ways to do
$('li').each ((index,item) => {  // jq each requires you to pass index???
  item.innerHTML = `${friends[index]} is and awesome programmer`;
})

/*let takeArrowAway function = $('li').each ((index,item) {
  item.innerHTML = `${friends[index]} is and awesome programmer`;
})
*/

/*let oldWayFunction = function() {
  const myDivs = $('div');
  for (let i=0; i<myDivs.length; i++) {
    item.innerHTML = `${friends[index]} is and awesome programmer`;
  }
}*/

// Add a new <li> to the <ul>
// 1. Find the <ul>
// ex: const myUl = $('ul');
// 2. Create a new <li> element
//ex: const myLi = $();
// 3. Set the class attribute of the new <li> to 'styled-list'
// ex: myLi.class = '';
// 4. Set the text of the <li>
// ex: myLi.innerText = '';
// 5. Add the <li> to the end of the <ul>
$('ul').append('<li class="styled-list"</li>'); // read jq append documentation to see 2 ways to do

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
  $('ul').append(`<li>${$('#listText').val()}</li>`);
}

// find the button and add a click event handler
$('#listButton').click(addItem);
//
//
// Let's try to toggle the whole main div!!
$('#toggle-main').click(() => { $('main').toggle() });
// old-style
$()
//




const button = document.querySelector("#button"); // This assigns the variable 'button' to an HTML element with the id of 'button'.
firstButton.addEventListener('click', function() { // This assigns an event listener to a click event on a different button, 'firstButton'.
  const divs = document.querySelectorAll('.wrapper-container div'); //  This assigns variable 'divs' to an array of divs with the class ".wrapper-container div".
  for (let div of divs) { div.style.backgroundColor = 'purple'; }}); //  This sets up a for each loop that will iterate through each element in the divs array and assign each the background color 'purple'.


Write a Snowman class with attributes being:
name, features: "carrot nose", "stick arms".
The showman should have the following methods: meltWhenWarm, likeHugs.
HINT: (maybe you need a constructor here? pass name to it? maybe ....?).
Create a new instance of Snowman object named "Olaf". *

class Snowman {
  constructor(nose, arms) {
    this.nose = 'carrot nose';
    this.arms = 'cstick arms';
    meltWhenarm() {
    }
    likeHugs() {
    }
  }
}

let Olaf = new Snowman(nose,arms,meltWhenWarm,likesHugs);













