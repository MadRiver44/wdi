### Problem 0:

var justDoIt = function(input) {
  output = input + ", JUST DO IT!";
  return output;
}

justDoIt("Will");


### Problem 1: Big or Small String?

var bigOrSmallString = function(string) {
  if (string.length > 10) {
    return "This word is big";
}  else {
    return "This string is small";
  }
};

bigOrSmallString("Poopy pants on fire");

### Problem 2: Odd or Even String Length?

var oddOrEvenString = function(string) {
  if (string.length % 2 === 0) {
    return "This string length is totally even";
}  else {
    return "This string's length is odd";
  }
};

oddOrEvenString("Poopy pants on fire!");

### Problem 3: Median

var returnMedianInArray = function(array) {
  sortedArray = array.sort(function(a, b){return a-b});
  // median = arethmic mean of the middle values
  var middle = Math.floor(sortedArray.length/2);
  if(sortedArray.length % 2) {
    median = (sortedArray[middle]);
 } else {
    median = ((sortedArray[middle-1] + sortedArray[middle]) / 2);
 }
 return median;
};

var nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
returnMedianInArray(nums);

### Problem 4: Positive or Negative?

var posNeg = function(int1,int2) {
  if (int1 > 0 && int2 < 0) {
    return true;
} else if (int1 < 0 && int2 > 0) {
  return true;
 } else {
    return false;
 }
};

posNeg(1, -1)

### Problem 5: Double X Counter

var countXx = function(string) {
  var count = 0;
  for (i=0; i<string.length; i++) {
    if (string[i] === "x" && string[i+1] === "x") {
      count++;
    }
  }
    return count;
};
  //countXx("abcxx");
  // 1
//  countXx("xxx");
  // 2
//  countXx("xxxx");
  // 3

### Problem 6: Initials

var initials = function(string) {
  initials = "";
  names = string.split(" ");
  for (i=0; i<names.length; i++) {
    currentName = names[i];
    initials = initials + currentName[0];
  }
  return initials;
};

initials('Neil Patrick Harris');
// NPH

### Problem 7: twoLengths

var twoLengths = function(string1,string2) {
  lengthArray = [];
  lengthArray[0] = (string1.length);
  lengthArray[1] = (string2.length);
  return lengthArray;
};
twoLengths("Hank", "Hippopopalous");
// => [4, 13]

## Problem 8: Reverse

var wordReverse = function(string) {
  splitString = string.split(" ");
  reversedString = "";
  for (i=0; i<splitString.length; i++) {
    console.log(splitString[i]);
    reversedString = splitString[i] + " " + reversedString;
    console.log(reversedString);
  }
  return reversedString.trim();
};

wordReverse("Ishmael me Call")
// => "Call me Ishmael"

##Function Break! Continuation of GA Press Release
##In Joe's lecture today, you were working on a General Assembly Press Release. Since we are all about reps, please finish that exercise if you did not complete it in class today.

## Bonus Stage:

## Problem 9: Longest string

var longest = function(array) {
  longest = "";
  for (i=0; i < array.length; i++) {
    if (array[i].length > longest.length) {
      longest = array[i];
    }
  }
  return longest;
};

// example usage
longest(["BoJack", "Princess", "Diane", "a", "Peanutbutter", "big", "Todd"]);
// => "Peanutbutter"

## Problem 10: Daffy

var toonify = function(accent, sentence) {
  if (accent != "daffy") {
  return sentence;
} else {
  newSentence = "";
    for (i=0; i < sentence.length; i++) {
      if (sentence[i] === "s") {
        newSentence = newSentence + "th";
      } else {
        newSentence = newSentence + sentence[i];
      }
    }
  }
  return newSentence;
};
toonify("daffy", "so you smell like sausage")
// => "tho you thmell like thauthage"

## Problem 11: Test Prime

var testPrime = function(number) {
  result = false;
  start = Math.ceil(number / 2);
    console.log(start);
  for (i=start; i > 1; i--) {
    console.log(i);
    console.log(number % i);
    if (number % i === 0) {
      return false;
  } else {
        return true;
    }
  }
};

testPrime(37);
// => true;

#### Finished? :trophy:

