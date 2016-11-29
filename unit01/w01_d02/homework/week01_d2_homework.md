# Objects and Arrays and Loops, oh my!
![shocked Timon and Pumba](http://www.cartoonbucket.com/wp-content/uploads/2015/06/Timon-And-Pumbaa-Looking-Shocked-At-Kiara.png)
### Instructions
You know the drill!</br>
1. Create a new javascript file in the current directory (unit01/week01_d01/homework).</br>
2. Copy all questions into new file and paste **fully functioning** answers below each corresponding question.</br>
3. Submit this assignment and "santa form" assignment links via a GitHub issue.</br>

### Subjects covered.
  - Arrays
  - Loops
  - Objects

## ARRAYS + LOOPS
Arrays and loops are BFFs 4Ever :loop:. So lets get some practice with each concept individually and how they work together!

#### DO THE D.A.N.C.E 1 2 3 4 5.
Write a loop that alerts multiple times in this order. :headphones:

- Do the
- D
- A
- N
- C
- E
- 1
- 2
- 3
- 4
- 5
- Stick to the
- B
- E
- A
- T
- Get ready to ignite

HINT: create an **something**, then use a **something** to iterate over it.

#### ARRAY ALL DAY.
Find the median number in the following array, then console.log that number. :clipboard:

```javascript
  var nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
```
  HINT: Using some kind of method to put in order first, then use some kind of Math method to find the median.

  Don't know where to start?  May be you can find what you look for [HERE](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

#### FOR LOOPS
Write a for loop that will iterate from 0 to 10. </br>
For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").</br>

#### YOU DECIDE!
Given the following variables, write the JavaScript statements that can solve for sideC using pythagorean theorem.
So when console.log for sideC you get the correct answer. :triangular_ruler:

```javascript
  var sideA = 3;
  var sideB = 4;
  var sideC;
```

HINT: checkout the Math Methods in javascript [HERE](  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)


Adventure Story:

Write several arrays of words...like nouns, verbs, etc.
Write a JavaScript application that randomly selects a word from each of the arrays. Combine those words to form a random sentence.
To complete this exercise, make sure to read the about the Math methods and Array manipulation methods.


## OBJECTS: HAMMOND'S MINES
![raptor hatching](http://ak-hdl.buzzfed.com/static/enhanced/webdr01/2013/7/8/12/anigif_enhanced-buzz-31534-1373301886-36.gif)
-----
Today we visit Jurassic Park :dragon: to explore the wild world of objects! You have been brought on to manage the dig sites for Dr. John Hammond. No expense has been spared, so let's get to work!

### Part 1
```javascript
snakewaterMontana = {
  paleontologist: "Dr. Alan Grant",
  depth: "10 meters",
  specimen: "Velociraptor"
}
```
  1. Create a variable called guestOfHonor and assign it's value to the name of the paleontologist at Snakewater, Montana.

  2. Access the value of the specimen found in Snakewater, Montana, and store it in a variable called clever_girl.

### Part 2
```javascript

  nicaragua = {
    depth: "200 meters",
    annual_budget: 1500000,
    specimens: [
      "Tyrannosaurus Rex",
      "Stegosaurous",
      "Triceratops",
      "Velociraptor"
    ]
  }

```
  1. Store the array of specimens of this site into a variable called nicaraguanSpecimens.

  2. Make a variable called favoriteSpecimen and assign it's value to your favorite dinosaur within nicaraguanSpecimens ( can you do this by referencing the nicaragua object itself? )

  3. Add 250000 to the annual budget of this site.

### Part 3
```javascript
hammondsMines = {
  buenos_aires: {
    depth: "400 meters",
    annual_budget: 1000000,
    specimens: [
      "Dilophosaurus",
      "Brachiosaurus"
    ]
  },
  mexico: {
    depth: "350 meters",
    annual_budget: 900000,
    specimens: [
      "Gallimimus",
      "Parasaurolophus"
    ]
  }
}
```
  1. Access the depth of John Hammond's mine in Mexico, store the depth of the Mexican mine into an appropriately named variable.

  2. Access and the annual budget for Hammond's mine in Buenos Airies, store the annual budget for Hammond's mine in Buenos Aires.

  3. Access and console the dinosaur DNA specimens found in Buenos Aires.

  4. Insert Nicaragua into hammonds_mines

  5. Create three variables to store the annual budgets for each mine into them.

  6. Create a new reasonably named variable to track the total annual cost of operation for the mines by adding the previously stored budgets.

  7. Access and console log the "Parasaurolophus" specimen.

#### (Strongly) Recommended Reading Materials
-----------------
[W3 Schools - Objects](http://www.w3schools.com/js/js_objects.asp/)

[W3 Schools - Arrays](http://www.w3schools.com/js/js_arrays.asp)

[W3 Schools - Array Methods](http://www.w3schools.com/js/js_array_methods.asp)
