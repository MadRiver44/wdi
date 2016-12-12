## All labs should should be done in CodePen

## Lab 1 (45min) - Animations Using Transition & Translate Properties

1. Create a deck of 5 cards layed out in a horizontal row from left to right. Each card will have it's text displayed as Card 1, Card 2, ect. Although your first reaction might be to use floats to postition the elements think about how you reposition them. That being said absolute positioning is better suited for this type of transition.
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
