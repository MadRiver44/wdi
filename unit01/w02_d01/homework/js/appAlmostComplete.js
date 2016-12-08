// ==============================
//       Characters and places
// ==============================

const hobbits = [
  'Frodo Baggins',
  'Samwise "Sam" Gamgee',
  'Meriadoc "Merry" Brandybuck',
  'Peregrin "Pippin" Took'
];

const buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

const baddies = [
  'Sauron',
  'Saruman',
  'The Uruk-hai',
  'Orcs'
];

const lands = [
  'TheShire',
  'Rivendell',
  'Mordor'
];

// ====================================
//           Chapters
// ====================================

function makeMiddleEarth() {
  console.log('Trying to make middle earth.');
  // create a section tag with an id of middle-earth
  const middleEarth = document.createElement('section');
  // console.log(middleEarth);
  middleEarth.setAttribute('id', 'middle-earth');
  // add each land to the section as article tags-- try using a loop
  document.body.appendChild(middleEarth);

  for(let land of lands){
    // console.log(land);
    const place = document.createElement('article');
    // console.log(place);
    // assign the id of the corresponding article tag as the name of the land
    place.setAttribute('id', land);
    // console.log(place);
    // inside each article tag include an h1 with the name of the land
    middleEarth.appendChild(place);
    const nameOfLand = document.createElement('h1');
    // console.log(nameOfLand);
    nameOfLand.innerHTML = land;
    // console.log(nameOfLand);
    place.appendChild(nameOfLand);
  }
  // append the section to the body of the DOM with: document.body.appendChild( // variable name )
};

function makeHobbits() {
  console.log('Make hobbits');
  // display an unordered list of hobbits in the shire
  // give each hobbit a class of "hobbit"
  // list the hobbits alphabetically.  Maybe use the .sort() method.
  //
  // find theShire article
  const theShire = document.querySelector('#theShire');
  // create the hobbit unordered list
  const ulHobbits = document.createElement('ul');

  // add the hobbits list to theShire article
  theShire.appendChild(ulHobbits);

  // sort the hobbits array
  hobbits.sort();

  // loop through the hobbits, create a new list item for each
  // and add the new list item to the hobbits list
  for (let hobbit of hobbits) {
    const liHobbit = document.createElement('li');

    liHobbit.innerHTML = hobbit;
    liHobbit.setAttribute('class', 'hobbit');
    ulHobbits.appendChild(liHobbit);
  }
};

function keepItSecretKeepItSafe() {
  // create an empty div with an id of 'the-ring' and innerHTML of "The ring"
  // add the ring as a child of Frodo
  //
  // create the ring div
  const ringDiv = document.createElement('div');
  // find the hobbits ul
  const liHobbits = document.querySelectorAll('.hobbit');

  // set the text of the ring div
  ringDiv.innerHTML = 'The ring';
  // add the ring div underneath the frodo li
  liHobbits[0].appendChild(ringDiv);
};

function makeBaddies() {
  // display an unordered list of baddies in Mordor
  // give each of the baddies a class of "baddy"
  //
  // find the Mordor article
  const mordor = document.querySelector('#Mordor');
  // create the baddies ul
  const ulBaddies = document.createElement('ul');

  // append baddies ul to mordor article
  mordor.appendChild(ulBaddies);

  // loop through the baddies, create a new list item for each
  // and add the new list item to the baddies list
  for (let baddie of baddies) {
    const liBaddie = document.createElement('li');

    liBaddie.innerHTML = baddie;
    liBaddie.setAttribute('class', 'baddie');
    ulBaddies.appendChild(liBaddie);
  }
};

function makeBuddies() {
  // create an aside tag and append it below mordor
  // display an unordered list of buddies in the aside
  // give each of the buddies a class of "buddy"
  //
  // create buddy aside
  const buddyAside = document.createElement('aside');
  // find middle earth
  const middleEarth = document.querySelector('#middle-earth');

  // add the buddy aside below mordor
  middleEarth.appendChild(buddyAside);

  // create the buddies ul
  const ulBuddies = document.createElement('ul');

  // append buddies ul to buddies aside
  buddyAside.appendChild(ulBuddies);

  // loop through the buddies, create a new list item for each
  // and add the new list item to the buddies list
  for (let buddy of buddies) {
    const liBuddie = document.createElement('li');

    liBuddie.innerHTML = buddy;
    liBuddie.setAttribute('class', 'buddy');
    ulBuddies.appendChild(liBuddie);
  }
};

function leaveTheShire() {
  // grab the hobbits and move them to Rivendell
  //
  // find the hobbit list
  const ulHobbits = document.querySelector('#TheShire ul');
  // find Rivendell
  const rivendell = document.querySelector('#Rivendell');

  // add the hobbits to Rivendell
  rivendell.appendChild(ulHobbits);
};

function beautifulStranger() {
  // change the buddy 'Strider' node to "Aragorn"
  //
  // find the buddies list
  const buddies = document.querySelectorAll('aside li');

  // set the innerHTML of strider li to Aragorn
  buddies[3].innerHTML = 'Aragorn';
};

function forgeTheFellowShip() {
  // move the hobbits and the buddies to Rivendell
  // create a new div called 'the-fellowship'
  // add an h1 with the text 'The Fellowship' to this new div
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
  //
  // create the new div
  const rivendellDiv = document.createElement('div');
  // create the new div h1
  const rivendellH1 = document.createElement('h1');
  // create the new fellowship ul
  const fellowshipUL = document.createElement('ul');
  // find the hobbits
  const hobbits = document.querySelectorAll('.hobbit');
  // find the buddies
  const buddies = document.querySelectorAll('.buddy');
  // find the rivendell article
  const rivendell = document.querySelector('#rivendell');
  // give the new div an id
  rivendellDiv.setAttribute('id', 'the-fellowship');
  // set the text of the h1
  rivendellH1.innerHTML = 'The Fellowship';
  // append the new div to the Rivendell article
  rivendell.appendChild(rivendellDiv);
  // append the h1 to the new div
  rivendellDiv.appendChild(rivendellH1);
  // append the new ul to the div
  rivendellDiv.appendChild(fellowshipUL);

  // loop through and add the hobbits to the new ul
  // alert that they've arrived
  for (hobbit of hobbits) {
    fellowshipUL.appendChild(hobbit);

    alert(`${hobbit.innerHTML} has arrived!`)
  };
  // loop through and add the buddies to the new ul
  // alert that they've arrived
  for (buddy of buddies) {
    fellowshipUL.appendChild(buddy);

    alert(`${buddy.innerHTML} has arrived!`)
  };
};

function theBalrog() {
  // change the inner HTML of the 'Gandalf' node to 'Gandalf the White'
  // add a class "the-white" to this element
  // in the style.css file, add a css rule for the class "the-white"
  // have a white background and a grey border
  //
  // find the buddies
  const buddies = document.querySelectorAll('.buddy');
  // loop through the buddies and change the text of gandolf and add class
  for (buddy of buddies) {
    if(buddy.innerHTML === 'Gandalf the Grey') {
      buddy.innerHTML = 'Gandalf the White';
      buddy.setAttribute('class', 'the-white');
    };
  };
};

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove the Uruk-Hai from the Baddies on the page
  //
  // find the buddies list
  const buddies = document.querySelectorAll('.buddy');
  // loop through the buddies and add strikethrough to boromir
  for (buddy of buddies) {
    if(buddy.innerHTML === 'Boromir') {
      buddy.innerHTML = '<strike>Boromir</strike>';
    };
  };
  alert('the horn of gondor has been blown');
};

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
  //
  // create mount-doom div
  const mountDoom = document.createElement('div');
  mountDoom.setAttribute('id', 'mount-doom');
  const mountDoomUL = document.createElement('ul');
  const mordor = document.querySelector('#Mordor');
  const hobbits = document.querySelectorAll('.hobbit');

  mordor.appendChild(mountDoom);
  mountDoom.appendChild(mountDoomUL);

  for (hobbit of hobbits) {
    if ((hobbit.innerHTML === 'Samwise "Sam" Gamgee') || (hobbit.innerHTML.indexOf('Frodo') !== -1)) {
      mountDoomUL.appendChild(hobbit);
    };
  };
};

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Create a condition (Maybe an IF statement) that changes the font-color of the ring div to Red if
  // it is a child of the div with the id 'gollum'
  // Move Gollum into Mount Doom
};

function thereAndBackAgain() {
  // remove Gollum and the Ring from the DOM
  // remove all the baddies from the DOM
  // Move all the hobbits back to the shire
};

// =================================
// What to do when the page is ready
// =================================

window.onload = function() {
  document.querySelector('#b1').addEventListener('click', makeMiddleEarth);
  document.querySelector('#b2').addEventListener('click', makeHobbits);
  document.querySelector('#b3').addEventListener('click', keepItSecretKeepItSafe);
  document.querySelector('#b4').addEventListener('click', makeBaddies);
  document.querySelector('#b5').addEventListener('click', makeBuddies);
  document.querySelector('#b6').addEventListener('click', leaveTheShire);
  document.querySelector('#b7').addEventListener('click', beautifulStranger);
  document.querySelector('#b8').addEventListener('click', forgeTheFellowShip);
  document.querySelector('#b9').addEventListener('click', theBalrog);
  document.querySelector('#b10').addEventListener('click', hornOfGondor);
  document.querySelector('#b11').addEventListener('click', itsDangerousToGoAlone);
  document.querySelector('#b12').addEventListener('click', weWantsIt);
  document.querySelector('#b13').addEventListener('click', thereAndBackAgain);

};
