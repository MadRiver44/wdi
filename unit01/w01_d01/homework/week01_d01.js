#### VARIABLE PRACTICE
Create an array that contains four strings, assigning each string a value of the seasons.</br>
The array will have 4 indices, 0 through 3. :fallen_leaf:

let fallen_leaf = ["Winter", "Spring", "Summer", "Fall"];

1. Write a statement to access "Spring" and assign it to a new variable. </br>

var new_leaf = fallen_leaf[1];

Then reassign that variable to a boolean value based on the current season.</br>

boolean_value = (new_leaf == "Fall");

2. Write a statement to access "Fall" and assign it to a new variable. </br>

var new_variable = fallen_leaf[3];

Then reassign that variable to a boolean value based on the current season.</br>

new_boolean_variable = (new_variable == "Fall");

#### DATA TYPE PRACTICE
Please write the answer (in sentence form) below each question:</br>

1. What is the difference between undefined and null?

The data type undefined is a property of a variable whose value has not been assigned.
By contrast, null is a data type indicating a variable has been declared,
but has intentionally been assigned no value.

2. What is the difference between truthy and falsey?

"Truthy" refers to data that will implicitly return as true when evaluated.
There are six values that are implicitly "falsey":
NaN, null, false, 0, undefined, and an empty string "".

3. Take the variables and numbers below and replace the blanks with <br>
a mathematical or boolean operators that makes the statement console.log true.

```javascript
  var a = 4;
  var b = 53;
  var c = 57;
  var d = 16;
  var e = 'Kevin';
```

-  a != b;
-  c != d;
-  'Name' == 'Name';
-  a + b == c;
-  a * a == d;
-  e == 'Kevin';
-  48 == '48';

#### CONTROL FLOW STATEMENTS
Let's practice the following control flow statements:

#####IF ELSE
Write a prompt for a beer buyer to input their age.</br>
If they are over 21, they are in the clear, if not, bring down the hammer.</br>
Write an **if/else** statement that would *alert* a response as to whether or not they are of age :beer:

  huh...what is prompt you say?
  hint: https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt

var age = prompt("What's your age?");
if Number(age) < 21) {
  alert("No booze for you!");
};
else {
  alert("Drink up, my legal-age friend!");
}

#### SWITCH STATEMENTS
Write a **switch** JavaScript statement that prompt to ask what day is today. :date:

- If it's Monday alert "Energize!"
- If it's Tuesday alert "Just getting started!"
- If it's Wednesday alert "Hump Hump!"
- If it's Thursday alert "Almost there!"
- If it's Friday, Saturday or Sunday alert "Weeeeeee!"
- If it's not anything above alert "Huh, sorry didn't get that?"


var day = prompt("What day is today?");
switch(true) {
    case (day.toLowerCase() == "monday"):
      alert("Energize!");
      break;
    case (day.toLowerCase() == "tuesday"):
      alert("Just getting started!");
      break;
    case (day.toLowerCase() == "wednesday"):
      alert("Hump Hump!");
      break;
    case (day.toLowerCase() == "thursday"):
      alert("Almost there!");
      break;
    case (day.toLowerCase() == "friday"):
    case (day.toLowerCase() == "saturday"):
    case (day.toLowerCase() == "sunday"):
      alert("Weeeeeee!");
      break;
    default:
      alert("Huh, sorry didn't get that?");
}


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

var subway = function() {
var selection = prompt("The (L) Train, The (N) Train, The (S)ix TrainPlease make your selection: ");
if (selection == "l") {
  alert("You selected the L train.");
  console.log("8th Ave - 6th Ave - Union Square - 3rd Ave - 1st Ave - Bedford Ave");
} else if (selection.toLowerCase() == "n") {
  alert("You selected the N train.");
  console.log("Times Square - Herald Square - 28th St - 23rd St - DAPS Nexus - Union Square - 8th St");
} else if (selection.toLowerCase() == "s") {
  alert("You selected the S train.");
  console.log("Grand Central - 33rd St - 28th St - 23rd St - Union Square - Astor Place");
} else  {
  alert("Train not in service. Please select another train.");
  subway();
}
alert("Thank you for riding New York City Transit.");
};

subway();


