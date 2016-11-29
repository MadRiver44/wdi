  # Objects and Arrays

## Lab
1. Start with a string of 8 or more lowercase characters (include multiple consonants and vowels)
  - `let myString = "abcdefghijklymon"`

2. Use a String method to split (hint hint) that string into an array of characters that the string contains
  - `let myArray = myString.???`

3. Using only String and Array methods, perform the following:
    - log the uppercase of each element
    - create a new array that contains the uppercase of each element in the original array
    - create a new array by filtering vowels out of the original array
    - concatenate the characters of either new array into a new string using reduce

4. One of the best ways to test our knowledge of what methods like these array methods are doing is by implementing them ourselves. See if you can write your own versions of the forEach and map array methods.

This is a start to 4:
```
let myArray = [1, 2, 3, 4];

function myForEach(array, callback) {
  // what goes here?
}

function logIt(item) {
  console.log(item);
}

myForEach(myArray, logIt);
```
