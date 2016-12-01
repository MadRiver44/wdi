# REPS ON REPS ON REPS!!!
![reps](https://s-media-cache-ak0.pinimg.com/236x/c6/8e/4c/c68e4c13e2b79067b9f309c16c6d74a6.jpg)

#### Subjects covered.
- Creating functions
- Iteration
- Functions on numbers, strings, arrays

## Setup
You know the drill!
1. Create a new javascript file in the current directory (unit01/week01_d04/homework).
2. No need to copy the whole question, but make sure to specify which question your answer references. Make sure to test your answers and submit only **fully functioning functions**

### Required Reading!!
[MDN Guide To Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

[Eloquent Javascript - Chapter 3](http://eloquentjavascript.net/03_functions.html)

### Additional Reading
[Speaking JavaScript - Chapter 15](http://speakingjs.com/es5/ch15.html)

**Let's Solve Some Problems!**

First, if any problem seems too complex for you, remember to Pseudo-code. Break the problem down to the smallest steps that are super easy to tackle! :tada:

Do your best to complete as many problems as possible! Bonus is completely optional :wink:

### Problem 0: Just DO it!!
Write a function `justDoIt` that accepts one parameter an argument. The function should return a string that has your argument and the phrase "JUST DO IT".

```javascript
//example usage
justDoIt("Will");
// => "Will, JUST DO IT!";
```

### Problem 1: Big or Small String?
Write a function called `bigOrSmallString` that accepts one argument, a string, and returns "This word is big" if the strings length is greater than 10, and "This string is small" otherwise.

### Problem 2: Odd or Even String Length?
Write a function called `oddOrEvenString` that accepts one argument, a string, and returns "This string's length is odd" if the length is an odd number, and "This string length is totally even" if the string length is even.

### Problem 3: Median
Write a function that takes an array as a parameter. The function should return the median number in an array. Hm, haven't you found a median of the array before?
*Hint*: Use some kind of sorting method to put the values in order first, then somehow access the median element, somehow using the length of the array...somehow.

### Problem 4: Positive or Negative?
Write a function called `posNeg`. Given 2 integers, return true if one of the numbers is negative and the other is positive.

```javascript
posNeg(1, -1)
// true
posNeg(-55, 1)
// true
posNeg(-4, -5)
// false
```

### Problem 5: Double X Counter
Write a function called `countXx`. Count the number of "xx" in the given string. We'll say that overlapping is allowed, so "xxx" contains 2 "xx".

```javascript
  countXx("abcxx")
  // 1
  countXx("xxx")
  // 2
  countXx("xxxx")
  // 3
```

### Problem 6: Initials
Write a function called `initials` that accepts one argument, a string. Given a person's name, return their initials.
  - It should work both with and without a middle name being provided.

```javascript
initials('Neil Patrick Harris');
// NPH
```
### Problem 7: twoLengths
Write a function `twoLengths` that accepts two parameters as an argument. The function should return an array of numbers where each number is the length of the corresponding string.

```javascript
// example usage
twoLengths("Hank", "Hippopopalous");
// => [4, 13]
```

## Problem 8: Reverse
Write a function `wordReverse` that accepts a single argument, a string. The
method should return a string with the order of the words reversed. Don't worry
about punctuation.

```javascript
// example usage
wordReverse("Ishmael me Call")
// => "Call me Ishmael"
```

##Function Break! Continuation of GA Press Release
In Joe's lecture today, you were working on a General Assembly Press Release. Since we are all about reps, please finish that exercise if you did not complete it in class today.

## Bonus Stage:

## Problem 9: Longest string
Write a function `longest` that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

```javascript
// example usage
longest(["BoJack", "Princess", "Diane", "a", "Peanutbutter", "big", "Todd"]);
// => "Peanutbutter"
```

## Problem 10: Daffy
Write a function called `toonify` that takes two parameters, `accent` and `sentence`.
- If `accent` is the string `"daffy"`, return a modified version of `sentence` with all "s" replaced with "th".
- If the accent is not daffy, just return the sentence as-is.

```javascript
// example usage
toonify("daffy", "so you smell like sausage")
// => "tho you thmell like thauthage"
```

## Problem 11: Test Prime
Write a function `testPrime` that accepts a number as a parameter and check the number is prime or not.

Hint : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

```javascript
testPrime(37);  
// => true;
```
#### Finished? :trophy:
Awesome! Please submit your evening assignment via a GitHub issue, just as before.
