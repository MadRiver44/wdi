#Whiteboarding

Here is a list of algorithmic problems (and solutions) that will help prepare you for your next whiteboarding interview session.  They start easy and increase with difficulty so choose one that is challenging and will push your comfort level.  

The most important goal of whiteboarding is the need to verbally walk the facilitator throught their thought process.  This first begins with writting out the steps needed to code the solution and then writing the code needed to accomplish the taks, all the while vocalizing the process. 

Things to keep in mind:

* **Ask Questions** -  Make sure to **reinstate the question** and confirm the requirements.  If something is not clear or you feel like you need additional information before you can continue, be sure to ask your interviewer for clarification with a few follow-up questions to eliminate any ambiguity

* **Explain your thought process** - After the details of the task are clear, be sure to **talk out loud** as you solve the question. The interviewer wants to know what is going on in your head and to understand your approach to the task at hand, so being able to **explain your thoughts** is crucial. For this portion of your interview, often times, you will be judged on your thought process, regardless of whether you’re able to provide a solid answer.

* **Be Confident** - Sometimes, during your whiteboard interview, it may be difficult to think of an answer when you’re on the spot, but keeping your cool and staying confident in your abilities will always leave a good impression. You’ve put in the time and effort to prepare yourself for your whiteboard interview, so trust your instincts and go with your gut.

### Standard Algorithms
1.  Print An Array
2.  Reverse A String 
3.  IsPalindrome 
4.  Find The Largest Number 
5.  Print A Pyramid 
6.  Print A Chess Board
6.  Phone Book 
7.  Binary
8.  Two Sum 
9.  Longest Substring With No Duplicates 
10.  Repeatify Using Prototypes 
11.  Stock Market Profit 
12.  DNA Strings 
13.  Randomize An Array
14.  Find The Products

### Recursion Specific 
1.  Reverse A String
2.  isPalindrome
3.  Factorial
4.  Sum Of Integers
5.  Flatten An Array 

### Print An Array
Write a function that will print the items of an array.

Input: ['sam','ed','harry']
Output: 
```javascript
    sam
    ed 
    harry
```
**Solution**
```javascript
function printArr(input){
    var string = "";
    for(var i = 0; i < input.length; i++){
        string += input[i] + "\n"
    }
    return string;
}
```

### Reverse A String
Source: [leetcode](https://leetcode.com/problems/reverse-string/)
Write a function that will take a string and return the reversed string.

Input: 'abcd'
Output: 'dcba’

Hint
Start by creating an array. Then add the right elements to it (ie. the characters in reverse order). Then join it and return

**Solution 1**
```javascript
var reverseString = function(sjjgj {
    var s2 = '';
    for(var i = (s.length-1); i >= 0; i--) {
        s2 += s[i];
    }
    return s2;
}
```
**Solution 2**
```javascript
function reverseString(s) {
  const arr = [];
  for (let i = (s.length - 1); i >= 0; i -= 1) {
    arr.push(s[i]);
  }
  return arr.join('');
}
```

### IsPalindrome
Write a function that will returns true if a given input (string or number) is a palindrome and false if it's not. 

Input: 'race car'
Output: true

**Solution**
```javascript
function isPalindrome(str) {
  const s = str.toLowerCase().split(' ').join('');
  for (let i = 0; i < s.length / 2; i += 1) {
    if (s[i] !== s[s.length - (i + 1)]) {
      return false;
    }
  }
  return true;
}
```

### Find The Largest Number
Write a function that will return the largest value from an array. 

Input: [1,2,5,10]
Output: 10

```javascript
function largestNumber(num){
    var largest = num[0]
    num.forEach((d) => {
        largest = Math.max(largest,d)
    })
    return largest
}
```

### Print A Pyramid
Given a number, create a pyramid that is that number of rows. 

Input: pyramid(4)
Output:
```javascript
            ^ 
           ^^^ 
          ^^^^^ 
         ^^^^^^^ 
```
**Solution**
```javascript
function pyramid (rows) {
  const carrot = '^';
  let carrotcount = 1;
  let spacecount = rows - 1;
  for (let i = 0; i < rows; i += 1) {
    let str = '';
    for (let j = 0; j < spacecount; j += 1) {
      str += ' ';
    }
    spacecount -= 1;
    for (let k = 0; k < carrotcount; k += 1) {
      str += carrot;
    }
    carrotcount += 2;
    console.log(str + ' ');
  }
}
```

Print A Chessboard
Write a function that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

Input: console.log(chessBoard())
Output: 
```javascript
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
```

```javascript
function chessBoard(){
  const size = 8;
  let board = '';
  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      if ((x + y) % 2 === 0) {
        board += ' ';
      } else {
        board += '#';
      }
    }
    board += '\n';
  }
  return board
}
```

### Odds And Evens
Source: [HackerRank](https://www.hackerrank.com/challenges/30-review-loop)
Write a function that Given a string, prints its even-indexed and odd-indexed characters as space-separated strings on a single line. 

Input: Hacker
Output: Hce akr

**Solution**
```javascript
function oddsEvens(input) {
  let left = '';
  let right = '';
  for (let i = 0; i < input.length; i += 1) {
    if (i % 2 === 0) {
      left += input[i];
    } else {
      right += input[i];
    }
  }
  return `${left} ${right}`;
} 
```

### Phone Book
Source: [HackerRank](https://www.hackerrank.com/challenges/30-dictionaries-and-maps)
Write a function that given an array of hashes of n number of names and phone numbers, assemble a phone book that maps friends' names to their respective phone numbers. You will then be given an unknown number of names to query your phone book and for each  queried, print the associated entry from your phone book on a new line in the form name=phoneNumber; if an entry for  is not found, print Not found instead.

Input1: [{sam:99912222},{tom:11122222},{harry:12299933}]
Input2: ['sam','ed','harry']
Output: 
```javascript
sam=99912222
NOT FOUND
harry:12299933
```
**Solution**
```javascript
function phoneBook(input,mapped) {
  const contacts = [];
  const hash = {};
  const inputLen = input.length - 1;
  
  for (let i = 0; i <= inputLen; i += 1) {
    const contact = Object.keys(input[i]);
    hash[contact[0]] = input[i][contact];
  }
  for (let i = 0; i <= inputLen; i += 1) {
    let string = '';
    if (hash[mapped[i]]) {
      string += `${mapped[i]} = ${hash[mapped[i]]}`;
    } else {
      string += 'Not found';
    }
    contacts.push(string);
  }
  return contacts.join('\n')
} 
```
### Binary Count
Source: [HackerRank](https://www.hackerrank.com/challenges/30-binary-numbers)
Write a function that given a base integer, converts it to binary and then find and print the base integer denoting the maximum number of consecutive '1's in binary. 

Example:
Input: 60 which is 111100 in binary
Output: 4

**Solution**
```javascript
function binaryCount(num){
  const b = Number(num).toString(2);
  let longest = 0;
  let count = 0;
  for (let i = 0; i < b.length; i += 1) {
    if (Number(b.charAt(i))) {
      count += 1;
      longest = Math.max(longest, count);
    } else {
      count = 0;
    }
  }
  longest = Math.max(longest, count);
  return longest;
}
```

### Two Sum
Source: [Leetcode](https://leetcode.com/problems/two-sum/)
Write a function that given an array of integers and a target number, returns two array integers that add up to the target.

Input: "array" is [3, 2, 5, 7, 11, 15], "target" is 9
Output: Return [2, 7] 
//Note that 2 + 7 equals the target 9

**Hints**
1. First start with the brute force. How long does that take? [The answer is O(n^2)]
2. Think about a complement: if your target is 9 and you're looking at 2, what is its complement?
3. Is there a fast way to check for complements? Is there a data structure you could use?
4. (The complete answer) Loop thru all elements and store them in a hash. Then loop through again (in the code, I do both loops in one step), for each element, check if it's complement is in the hash.

**Solution**
```javascript
function twoSum(arr, target) {
  const hash = {};
  for (let i = 0; i < arr.length; i += 1) {
    const val = arr[i];
    const complement = target - val;
    if (hash[complement] !== undefined) {
      return [val, complement];
    }
    hash[val] = i;
  }
  return null;
}
```

### Longest Substring With No Duplicates
Source: [Leetcode](https://leetcode.com/problems/longest-substring-without-repeating-characters/)
Write a function that given a string, finds the length of the longest substring without repeating characters.

Input: 'abca'. 
Output: 3 ('abc' or 'bca')

Input: 'abcbadb'.
Output: 4 ('cbad')

**Hints**
1. Try using a "sliding window" (use two pointers for the head/tail of your substring. then increment each)
2. How can you decide when to increment the head and the tail? (Answer: always increment tail by one. Move head whenever you encounter a dup)

**Solution**
```javascript
function lengthOfLongestSubstring(s) {
  let head = 0;
  let longest = 0;
  const hash = {};
  for (let tail = 0; tail < s.length; tail += 1) {
    const ch = s[tail];
    if (hash[ch] !== undefined && hash[ch] >= head) {
      longest = Math.max(longest, tail - head);
      head = hash[ch] + 1;
    }
    hash[ch] = tail;
  }
  longest = Math.max(longest, tail - head);
  return longest;
}
```

### Repeatify (using prototypes)
**Part 1:** Write a function called repeatify that takes a string and a number.  The number specifies how many times the string should be repeated.

repeatify("hello", 3);
returns: "hellohellohello"

**Solution**
```javascript
function repeatify(str, n) {
  let result = '';
  for (let i = 0; i < n; i += 1) {
    result += str;
  }
  return result;
}
```

**Part 2:** Let’s update the function so it’s a string method.  Change your code from part 1 so we can call repeatify on a string and just pass it a number.

"hello".repeatify(3);
Returns: "hellohellohello"

**Solution**
```javascript
String.prototype.repeatify = function(n) {
  let result = '';
  for (let i = 0; i < n; i += 1) {
    result += this;
  }
  return result;
};
```

### Stock Market Profit
Source: [InterviewCake](https://www.interviewcake.com/question/javascript/stock-price)
Stock market profit: given an array of values representing a stock's price over time, come up the days you should have bought/sold for the highest yield - bonus points if you can solve it in O(n)

Write an efficient function that takes stock_prices_yesterday and returns the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.

```javascript
  stock_prices_yesterday = [10, 7, 5, 8, 11, 9]

function getMaxProfit(stockPricesYesterday) {
    if (stockPricesYesterday.length < 2) {
      throw new Error('Getting a profit requires at least 2 prices');
    }

    let minPrice = stockPricesYesterday[0];
    let maxProfit = stockPricesYesterday[1] - stockPricesYesterday[0];
    for (let i = 1; i < stockPricesYesterday.length; i += 1) {
      const currentPrice = stockPricesYesterday[i];
      const potentialProfit = currentPrice - minPrice;
      maxProfit = Math.max(maxProfit, potentialProfit);
      minPrice = Math.min(minPrice, currentPrice);
    }
    return maxProfit;
}
```

### DNA Strings
Source: [CodeWars](https://www.codewars.com/kata/554e4a2f232cdd87d9000038)

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have a function with one side of the DNA and you need to return the other complementary side. DNA strand is never empty or there is no DNA at all.


**Solution 1**
```javascript
var dna = "ATTGC";
function dnaTransform(dna){
  const dnaObj = { A: 'T', T: 'A', G: 'C', C: 'G' };
  return dna.split('').map((d) =>  dnaObj[d] );
}
```

**Solution 2**
```javascript
const dna = "ATTGC";
function dnaTransform(dna){
  const outArr = [];
  const newDna = dna.split('');
  newDna.forEach((d, i) => {
    switch (d) {
      case 'G': outArr[i] = 'C'; break;
      case 'T': outArr[i] = 'A'; break;
      case 'A': outArr[i] = 'T'; break;
      case 'C': outArr[i] = 'G'; break;
    }
  });
  const str = outArr.join('');
  return str;
}
```

### Randomize An Array
Source: [Fisher-Yates Shuffle](https://bost.ocks.org/mike/shuffle/)
Write a function that given an array, randomizes the position of the elements. 

Input: ['a','b','c','d']
Possible Output: ['b','d','a','c']

**Solution**
```javascript
function shuffle(array) {
  const random = array.splice(0);
  let m = array.length;
  let t;
  let i;
  while (m) {
    i = Math.floor(Math.random() * (m -= 1));
    t = random[m];
    random[m] = random[i];
    random[i] = t;
  }
  return random;
}
```
### Find The Products
Source: [InterviewCake](https://www.interviewcake.com/question/javascript/product-of-other-numbers)
Write a function that takes in an array of n numbersYou have an array of integers, and for each index you want to find the product of every integer except the integer at that index.

**Solution**
```javascript
function getProductsinput) {
  const products = [];
  // for each integer, we find the product of all the integers
  // before it, storing the total product so far each time
  let productSoFar = 1;
  for (var i = 0; i < input.length; i += 1) {
    products[i] = productSoFar;
    productSoFar *= input[i];
  }
  // for each integer, we find the product of all the integers
  // after it. since each index in products already has the
  // product of all the integers before it, now we're storing
  // the total product of all other integers
  productSoFar = 1;
  for (var j = input.length - 1; j >= 0; j -= 1) {
    products[j] *= productSoFar;
    productSoFar *= input[j];
  }
  return products;
}

```

##Recursion Specific

### Reverse A String 
Source: [Ten Ways To Reverse A String](http://eddmann.com/posts/ten-ways-to-reverse-a-string-in-javascript/)
**Solution 1**
```javascript
function reverse(s) {
  return (s === '') ? '' : reverse(s.substr(1)) + s.charAt(0);
}
```

**Solution 2**
```javascript
function reverse(s) {
  function rev(s, len, o) {
    return (len === 0) ? o : rev(s, len -= 1, (o += s[len]));
  }
  return rev(s, s.length, '');
}
```

### isPalindrome
Source: [CodeChewing](http://www.codechewing.com/library/recursive-javascript-function/)
function isPalindrome(string) {
  if (string.length <= 1) { return true; }
  if (string.charAt(0) !== string.charAt(string.length - 1)) { return false; }
  return isPalindrome(string.substr(1, string.length - 2));
}


### Factorial
Source: [HackerRank](https://www.hackerrank.com/challenges/30-recursion/submissions/code/37642498)

Given a number, print it's factoral.

Example:
Input: 5 
Output: 120 (5*4*3*2*1)

**Solution**
```javascript
function factoralize(input) {
  function factorial(num) {
    return num === 1 ? 1 : num * factorial(num - 1);
  }
  return factorial(parseInt(input, 10));
}
```
### Sum Array Of Integers
Source: [W3Resource](http://www.w3resource.com/javascript-exercises/javascript-recursion-functions-exercises.php?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+w3resource+%28w3resource%29)

Write a function to compute the sum of an array of integers.

Input: [1,2,3]
Output: 6

```javascript
function arrSum(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  else {
    return arr.pop() + arrSum(arr);
  }
};
``` 

### Flatten An Array
Write a function that takes an array and flattens it.  You can assume the array only contains arrays and primitives (Numbers, Strings, Booleans, etc.).

Example:
Input: [1,[2,3],[[4], 5]]
Output: [1, 2, 3, 4, 5]

**Solution 1**
```javascript
function fh(arr, result) {
    arr.forEach(function(elm) {
        if (Array.isArray(elm)) {
            fh(elm, result);
        } else {
            result.push(elm);
        }
    });
    return result;
}

function flatten(arr) {
    return fh(arr, []);
}
```

**Solution 2**
Source: [CodeTuts](https://codetuts.tech/flatten-deep-nested-array-object/)
```javascript
function flatten(arr) {  
  return arr.reduce((a, b) => {
    return a.concat( Array.isArray(b) ? flatten(b) : b );
  }, []);
}
```


