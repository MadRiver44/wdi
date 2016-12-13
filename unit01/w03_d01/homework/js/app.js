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
  const middleEarth = $('section');
  // console.log(middleEarth);
  middleEarth.setAttribute('id', 'middle-earth');
  // add each land to the section as article tags-- try using a loop
  document.body.appendChild(middleEarth);

  for(let land of lands){
    // console.log(land);
    const place = $('article');
    // console.log(place);
    // assign the id of the corresponding article tag as the name of the land
    place.setAttribute('id', land);
    // console.log(place);
    // inside each article tag include an h1 with the name of the land
    middleEarth.appendChild(place);
    const nameOfLand = $('h1');
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
  const theShire = $('#theShire');
  // create the hobbit unordered list
  const ulHobbits = $('ul');

  // add the hobbits list to theShire article
  theShire.appendChild(ulHobbits);
  ulHobbits.setAttribute('id', 'ulhobbits');
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
  const theRing = $('div');
  const liHobbit = document.querySelectorAll('.hobbit');
    theRing.setAttribute('id', 'the-ring');
    theRing.innerHTML = "The ring";
  // add the ring as a child of Frodo

    liHobbit[0].appendChild(theRing);
};



function makeBaddies() {
  // display an unordered list of baddies in Mordor
  // give each of the baddies a class of "baddy"
  //
  // find the Mordor article
  const mordor = $('#Mordor');
  // create the baddies ul
  const ulBaddies = $('ul');

  // append baddies ul to mordor article
  mordor.appendChild(ulBaddies);

  // loop through the baddies, create a new list item for each
  // and add the new list item to the baddies list
  for (let baddie of baddies) {
    const liBaddie = $('li');

    liBaddie.innerHTML = baddie;
    liBaddie.setAttribute('class', 'baddie');
    ulBaddies.appendChild(liBaddie);
  }
};


function makeBuddies() {
  // create an aside tag and append it below mordor
  // display an unordered list of buddies in the aside
  // give each of the buddies a class of "buddy"
  const buddyAside = $('aside');

  const middleEarth = $('#middle-earth');


  middleEarth.appendChild(buddyAside);


  const ulBuddies = document.createElement('ul');


  buddyAside.appendChild(ulBuddies);



  for (let buddy of buddies) {
    const liBuddy = document.createElement('li');

    liBuddy.innerHTML = buddy;
    liBuddy.setAttribute('class', 'buddy');
    ulBuddies.appendChild(liBuddy);
  }
};

function leaveTheShire() {
  // grab the hobbits and move them to Rivendell
const ulHobbits = $('#ulhobbits');

const rivendell = $('#Rivendell');


rivendell.appendChild(ulHobbits);
};


function beautifulStranger() {
  // change the buddy 'Strider' node to "Aragorn"
  const buddies = document.querySelectorAll('aside li');
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
  const rivendellDiv = $('div');
  //
  const rivendellH1 = $('h1');
  //
  const fellowshipUl = $('ul');
  //
  const hobbits = $('.hobbit');
  //
  const buddies = $('.buddy');
  //
  const rivendell = $('#rivendell');
  //
  rivendellDiv.setAttribute('id', 'the-fellowship');
  //
  rivendellH1.innerHTML = 'The Fellowship'
  //
  rivendell.appendChild(rivendellDiv);
  //
  rivendellDiv.appendChild(rivendellH1);
  //
  rivendellDiv.appendChild(fellowshipUl);



  for (hobbit of hobbits) {
    fellowshipUl.appendChild(hobbit);
      alert(`${hobbit.innerHTML} has arrived!`);
  };


   for (buddy of buddies) {
    fellowshipUl.appendChild(buddy);

    alert(`${buddy.innerHTML} has arrived!`)
  };
};

function theBalrog() {
  // change the inner HTML of the 'Gandalf' node to 'Gandalf the White'
  // add a class "the-white" to this element
  // in the style.css file, add a css rule for the class "the-white"
  // have a white background and a grey border
  //
  //find the buddies
  const buddies = $('.buddy');
  //loop
  for (buddy of buddies) {
    if (buddy.innerHTML === 'Gandalf the Grey') {
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
  const buddies = $('.buddy');
  for (buddy of buddies) {
    if (buddy.innerHTML === 'Boromir') {
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
  const mountDoom = $('div');
  mountDoom.setAttribute('id', 'mount-doom');
  const mountDoomUL = $('ul');
  const mordor = $('#Mordor');
  const hobbits = $('.hobbit');

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
  const mordor = $('#Mordor');
  const gollum = $('div');
  mordor.appendChild(gollum);
  gollum.setAttribute('id', 'gollum');
  gollum.innerHTML = "Gollum";
  // Remove the ring from Frodo and give it to Gollum
  const theRing = $('#the-ring');
  gollum.appendChild(theRing);
  // Create a condition (Maybe an IF statement) that changes the
  // font-color of the ring div to Red if
  // it is a child of the div with the id 'gollum'
  /*const theRingParentDiv = document.getElementById('#the-ring').ParentNode;
  const theRingParentDivId = document.getElementById(theRingParentDiv);
  if (theRingParentDivId === '#gollum') {
    theRing.setAttribute('color', 'red');
  };*/
  // Move Gollum into Mount Doom
  mountDoom.appendChild(gollum);
};




function thereAndBackAgain() {
  // remove Gollum and the Ring from the DOM
  const gollum = $('#gollum');
  gollum.innerHTML = "";
  // remove all the baddies from the DOM
  const baddies = $('.baddy');
  for (baddy of baddies) {
    baddy.innerHTML = "";
  };
  // Move all the hobbits back to the shire
  const ulHobbits = $('#ulhobbits');
  ulHobbits.innerHTML = "";
  const theShire = $('#theShire');

  theShire.appendChild(ulHobbits);
    for (let hobbit of hobbits) {
    const liHobbit = $('li');

    liHobbit.innerHTML = hobbit;
    liHobbit.setAttribute('class', 'hobbit');
    ulHobbits.appendChild(liHobbit);
  };
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
