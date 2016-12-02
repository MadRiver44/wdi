/*![Foo](http://loveforsuccessfulwomen.com/wp-content/uploads/2011/08/Practice.jpg)
## JavaScript!
It's time to start thinking like a developer! Tonight you are going to practice writing JavaScript letiables, data types, and statements through the following problems.

### Instructions
1. Create a new **week01_d01.js** file in the current directory (unit01/week01_d01/homework).</br>
2. Copy all questions from below into newly created file and **insert** answers below each corresponding question.</br>
3. Submit your evening assignment just as you did before via a GitHub issue.</br>

Reminder!</br>
All answers must be fully functioning, so make sure to use the console or IDE (ie repl.it, codepen, etc) to verify that.

#### Subjects covered.
  - letiables
  - Data Types
  - Control Flow

#### letIABLE PRACTICE
Create an array that contains four strings, assigning each string a value of the seasons.</br>
The array will have 4 indices, 0 through 3. :fallen_leaf:
*/
let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];

//1. Write a statement to access 'Spring' and assign it to a new letiable. </br>
//Then reassign that letiable to a boolean value based on the current season.</br>

let spring = seasons[1];
spring = spring === seasons[3];

/*
2. Write a statement to access 'Fall' and assign it to a new letiable. </br>
Then reassign that letiable to a boolean value based on the current season.</br>
*/

let fall = seasons[3];
fall = fall === seasons[3];

/*
#### DATA TYPE PRACTICE
Please write the answer (in sentence form) below each question:</br>

1. What is the difference between undefined and null?

>undefined means a letiable has been declared but hasn't been assigned a value.
For example:
*/
let puppies;
console.log(puppies); // will print undefinned

//>null is an assignment value (alsmost like 'assigned to nothing');
// For example:
let kittens = null;
console.log(kittens); //will print null

/*
2. What is the difference between truthy and falsey?

> a truthy value is a value that evaluates to true in a Boolean context.
> a falsey value is a value that evaluates to false in a Boolean context.

3. Take the letiables and numbers below and replace the blanks with a mathematical or boolean operators that makes the statement console.log true.
*/

  let a = 4;
  let b = 53;
  let c = 57;
  let d = 16;
  let e = 'Kevin';


-  a _<_ b;
-  c _>_ d;
-  'Name' _===_ 'Name';
-  a _<_ b _<_ c;
-  a _+_ a _<_ d;
-  e _===_ 'Kevin';
-  48 _==_ '48';

/*
#### CONTROL FLOW STATEMENTS
Let's practice the following control flow statements:

#####IF ELSE
Write a prompt for a beer buyer to input their age.</br>
If they are over 21, they are in the clear, if not, bring down the hammer.</br>
Write an **if/else** statement that would *alert* a response as to whether or not they are of age :beer:
  huh...what is prompt you say?
  hint: https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt
*/

let age  = prompt('Whatsup! What`s your age?');

if (age >= 21) {
  alert('Tough day, huh! Come on in! We`ve got some boooooze');
} else {
  alert('Grow up, boy/girl!');
}

/*
#### SWITCH STATEMENTS
Write a **switch** JavaScript statement that prompt to ask what day is today. :date:

- If it's Monday alert 'Energize!'
- If it's Tuesday alert 'Just getting started!'
- If it's Wednesday alert 'Hump Hump!'
- If it's Thursday alert 'Almost there!'
- If it's Friday, Saturday or Sunday alert 'Weeeeeee!'
- If it's not anything above alert 'Huh, sorry didn't get that?'
*/
let today = prompt('What day of the week is it');
switch(today.toLowerCase()) {
  case 'monday':
    console.log('Energize!');
    break;
  case 'tuesday':
    console.log('Just getting started!');
    break;
  case 'wednesday':
    console.log('Hump Hump!');
    break;
  case 'thursday':
    console.log('Almost there!');
    break;
  case 'friday':
  case 'saturday':
  case 'sunday':
    console.log('Weeeeeee!')
    break;
  default:
  console.log('Huh, sorry didn`t get that?');
}

/*
#### YOU CHOOSE!
Let's take the Subway. Write out the JavaScript that would do the following. :station:

- When the script is run a menu should be prompted displaying:
  - A list of three trains - `The (L) Train, The (N) Train, The (S)ix Train`
  - The prompt ask the user to make their selection

    - If the user enters: `L`
      - An alert should output a message containing the user's selection labeled as L train
      - A console log output should contain the following:
        - `8th Ave`
        - `6th Ave`
        - `Union Square`
        - `3rd Ave`
        - `1st Ave`
        - `Bedford Ave`
    - If the user enters: `N`
      - An alert should output a message containing the user's selection labeled as N train
      - A console log output should contain the following:
        - `Times Square`
        - `Herald Square`
        - `28th St`
        - `23rd St - DAPS Nexus`
        - `Union Square`
        - `8th St `
    - If the user enters `S`
      - An alert should output a message containing the user's selection labeled as S train
      - A console log output should contain the following:
        - `Grand Central`
        - `33rd St`
        - `28th St`
        - `23rd St`
        - `Union Square`
        - `Astor Place`

- Then a thank You message should alert.
- The program then exits.
*/
//SOLUTION:
let lTrain = ['8th Ave','6th Ave','Union Square','3rd Ave','1st Ave'];
let nTrain = ['Times Square','Herald Square','28th St','23rd St - DAPS Nexus','Union Square', '8th St'];
let sTrain = ['Grand Central','33rd St','28th St','23rd St','Union Square','Astor Place'];
let train = prompt('Choose a train, please: \n[L] Train \n[N] Train \n[S]ix Train');
alert(`You selected ${train}!`);
alert('Thank you for riding with us!!!')

switch(train){
  case 'L':
    console.log(lTrain);
    break;
  case 'N':
    console.log(nTrain);
    break;
  case 'S':
    console.log(sTrain);
    break;
  default:
  alert('Bzzzzzz... We don`t have the thain you entered on the line. Choose from(L,N,S)!');
}


//some people in the class used functions, I know we didn't teach it yet, but it's a nice alternate solution
var l_stops = ["8th Ave","6th Ave","Union Square","3rd Ave","1st Ave"];
var n_stops = ["Times Square","Herald Square","28th St","23rd St - DAPS Nexus","Union Square", "8th St"];
var six_stops = ["Grand Central","33rd St","28th St","23rd St","Union Square","Astor Place"];
var train = prompt('please choose a train: \n[L] Train \n[N] Train \n[S]ix Train');

var show_stops = function(line){
  alert(train);
  for(var i=0;i<line.length;i++)
  {
    console.log(line[i]);
  }
}

switch(train){
  case "L":
    show_stops(l_stops);
    break;
  case "N":
    show_stops(n_stops);
    break;
  case "S":
    show_stops(six_stops);
    break;
  default:
  alert("That wasn't one of the options, make sure you are using capital letters.");
}

/*
#### Recommended Reading Materials
-----------------
[Javascript for Cats...meeeeeooooooooow](http://jsforcats.com/)

[W3 Schools reference lessons on String, Number, Operators, Math, Array](http://www.w3schools.com/jsref/default.asp)
*/
