## All labs should should be done in CodePen

## Lab 1 (45min) - Animations Using Transition & Translate Properties

1. Create a deck of 5 cards layed out in a horizontal row from left to right. Each card will have its text displayed as Card 1, Card 2, ect. Although your first reaction might be to use floats to postition the elements think about how you reposition them. That being said absolute positioning is better suited for this type of transition.

2. Add a button called "Toggle" which will execute the jquery .toggle() method to toggle a class called .collapsed to each card.  Toggle ultimately adds\removes the class and is configured to determine if that class is applied or not. 

3. The .collapsed class will transition each card back into a deck of cards. The cards should be just off centered enough for the user to see it's a deck of cards and not a single card. 

4. The transition affect we are shooting for is:
* smooth transition of cards into the deck and out of it. 
* rotate the cards so they appear to be being dealt and do so for both directions, although the next iteration it would be better to just rotate when being dealt. 

### Things to Keep in Mind
* Absolute positioned elems will look up the higherachy to find a parent container that is position relative
* Absollute positioned elems are provided the top,bottom,left,right properties
* Since the "Toggle" button is static this is a good use case for using .click() instead of .on("click")
* What are some CSS pseduo classes that will allow you to target each LI in a UL.

**Copy\Paste link for CodePen here**

### BONUS 1
1. Replace the face of the cards with actual images of a royal flush.
2. Simulate the cards being shuffled one at a time with a short delay between each one. 

**Copy\Paste link for CodePen here**

## Lab 2 (45min) - Working with Keyframes
Using @keyframes and the "animation" property apply the following animations:
* Create a div that will act as an orbitable path
* Create another div that will have a border-radius of 100% and symbolize a planet
* Create the needed animation to simulate the planet going around it's orbit

### Things to Keep in Mind
* Position absolute should be used to position the planets starting position
* A new @keyframe will be needed which defines transition type
* Transform property needs to be used along with the rotate() function
* When configuring the keyframe make sure to use a starting point..0% and ending point 100%
* The rotate() function should also be updated in both keyframe definitions/

**Copy\Paste link for CodePen here**

### Additional Resources
* [Hover Trans](http://ianlunn.github.io/Hover/)
* [Wow.js](http://mynameismatthieu.com/WOW/docs.html)
* [Animate.css](https://daneden.github.io/animate.css/)
* [Isotope](http://isotope.metafizzy.co/)

<div class="deck-container">
  <ul>
    <li class="cards" id="card1">Card 1</li>
    <li class="cards" id="card2">Card 2</li>
    <li class="cards" id="card3">Card 3</li>
    <li class="cards" id="card4">Card 4</li>
    <li class="cards" id="card5">Card 5</li>
  </ul>
  <button id="toggler">Toggle</button>
</div>


 div.deck-container {
        position: relative;
    }
    div.deck-container li {
        background-color: #fff;
        position: absolute;
        border: 1px solid black;
        padding: 3px;
        display: inline-block;
        -webkit-transition: all 1s ease-in-out;
        -moz-transition: all 1s ease-in-out;
        -o-transition: all 1s ease-in-out;
        transition: all 1s ease;
       /*  transition: transform 0.3s cubic-bezier(0, 0.75, 0, 1); */
    }
 /*    div.deck-container li {
        left: 200px;
        top: 0px;
    } */
    div.deck-container li:first-child {
        left: 0px;
        top: 0px;
    }
    div.deck-container li:nth-child(2) {
        left: 50px;
        top: 0px;
    }
    div.deck-container li:nth-child(3) {
        left: 100px;
        top: 0px;
    }
    div.deck-container li:nth-child(4) {
        left: 150px;
        top: 0px;
    }
    div.deck-container li:last-child {
        left: 200px;
        top: 0px;
        /* transform: rotate(360deg);  */
       /*  transform: rotateY(-380deg); */
    }
    
/*      div.deck-container li:hover {
        left: 200px;
        top: 0px;
        transform: rotate(360deg);
      transform: rotateY(-180deg);
         } */
 /*    div.deck-container.collapsed li {
        left: 12px;
        top: 8px;
    } */
    div.deck-container.collapsed li:first-child {
        left: 0;
        top: 0px;
        transform: rotate(-360deg);
    }
    div.deck-container.collapsed li:nth-child(2) {
        left: 3px;
        top: 2px;
        transform: rotate(-360deg);
    }
    div.deck-container.collapsed li:nth-child(3) {
        left: 6px;
        top: 4px;
        transform: rotate(-360deg);
    }
    div.deck-container.collapsed li:nth-child(4) {
        left: 9px;
        top: 6px;
        transform: rotate(-360deg);
    }
    div.deck-container.collapsed li:last-child {
        left: 12px;
        top: 8px;
        transform: rotate(-1440deg);
        
    }

button {
    position: absolute;
    top: 50px;
    left: 50px;
}


function toggler() {
  $('li').toggleClass('collapsed');
}

$('#toggler').click(() => toggler());
