Problem 0: Just DO it!!

Write a function justDoIt that accepts one parameter an argument. The function should return a string that has your argument and the phrase "JUST DO IT".

def justDoIt(argument)
  newString = argument + ", JUST DO IT"
  puts newString
  return newString
end
justDoIt("Will");

Problem 1: Big or Small String?

def bigOrSmallString(string)
  if string.length > 10
    return "This word is big"
  else
    return "This string is small"
  end
end
bigOrSmallString("Will");

Problem 2: Odd or Even String Length?

def oddOrEvenString(string)
  if string.length % 2 === 0
    return "This string length is totally even"
  else
    return "This string's length is odd"
  end
end
oddOrEvenString("Will");

Problem 3: Median

def findMedianInArray(nums)
  sortedArray = nums.sort
  middle = (sortedArray.length/2).floor
  if(sortedArray.length % 2)
    median = (sortedArray[middle])
  else
    median = ((sortedArray[middle-1] + sortedArray[middle]) / 2)
  end
  return median
end
nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12]
findMedianInArray(nums)

Problem 4: Positive or Negative?

def posNeg(num1,num2)
  if num1 > 0 && num2 < 0
    return true
  elsif num1 < 0 && num2 > 0
    return true
  else
    return false
  end
end

#posNeg(1, -1)
# true
#posNeg(-55, 1)
# true
#posNeg(-4, -5)
# false

Problem 5: Double X Counter

def countXx(string)
  count = 0
  i = 0
  while i < string.length do
    if string[i] === "x" && string[i+1] === "x"
      count = count + 1
    end
    i +=1
  end
  return count
end

#countXx("abcxx")
#1
#countXx("xxx")
#2
#countXx("xxxx")
#3

Problem 6: Initials

Write a function called initials that accepts one argument, a string. Given a person's name, return their initials.

It should work both with and without a middle name being provided.
initials('Neil Patrick Harris');
// NPH
Problem 7: twoLengths

Write a function twoLengths that accepts two parameters as an argument. The function should return an array of numbers where each number is the length of the corresponding string.

// example usage
twoLengths("Hank", "Hippopopalous");
// => [4, 13]
Problem 8: Reverse

Write a function wordReverse that accepts a single argument, a string. The method should return a string with the order of the words reversed. Don't worry about punctuation.

// example usage
wordReverse("Ishmael me Call")
// => "Call me Ishmael"
Function Break! Continuation of GA Press Release

In Joe's lecture today, you were working on a General Assembly Press Release. Since we are all about reps, please finish that exercise if you did not complete it in class today.

Bonus Stage:

Problem 9: Longest string

Write a function longest that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

// example usage
longest(["BoJack", "Princess", "Diane", "a", "Peanutbutter", "big", "Todd"]);
// => "Peanutbutter"
Problem 10: Daffy

Write a function called toonify that takes two parameters, accent and sentence.

If accent is the string "daffy", return a modified version of sentence with all "s" replaced with "th".
If the accent is not daffy, just return the sentence as-is.
// example usage
toonify("daffy", "so you smell like sausage")
// => "tho you thmell like thauthage"
Problem 11: Test Prime

Write a function testPrime that accepts a number as a parameter and check the number is prime or not.

Hint : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

testPrime(37);
// => true;
