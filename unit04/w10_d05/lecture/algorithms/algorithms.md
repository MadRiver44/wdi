## Algorithms and Big O Notation

What is an algorithm - "a self-contained sequence of actions to be performed. Algorithms perform calculation, data processing, and/or automated reasoning tasks." - [wiki](https://en.wikipedia.org/wiki/Algorithm)

### Resources

[Khan Academy introduction to algorithms short video](https://www.youtube.com/watch?v=CvSOaYi89B4)

[Khan Academy introduction to algorithms course](https://www.khanacademy.org/computing/computer-science/algorithms)

[Grokking Algorithms - excellent introductory book on algorithms and data structures](https://www.amazon.com/Grokking-Algorithms-illustrated-programmers-curious/dp/1617292230)

### A case study: map

#### pseudocode!

It's crucially important to pseudocode/whiteboard/explain in english the steps involved in the algorithm.

```javascript
/* pseudocode for map function
 *
 * input array and callback function
 *   initialize empty array
 *   loop through each element of input array
 *     call callback function on element
 *     push output of callback into initialized array
 *   return new array
**/
```

#### code

```javascript
function map(arr, cb) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const newItem = cb(arr[i]);

    newArr.push(newItem);
  }

  return newArr;
}
```

### Searching and Sorting

Searching and sorting algorithms are commonly taught and studied as a means to practice algorithm construction and analysis.

### Another case study: Simple Searching

Write the pseudocode, and then the code, for an algorithm that finds an item in an array. Assume that the array is sorted. For this simple search, simply loop through the array until you find the item.

Questions: is this algorithm efficient? How can we analyze the efficiency of the simple search algorithm?

... _drum roll_ ...

## Big O Notation

Definition: "big O notation is used to classify algorithms according to how their running time or space requirements grow as the input size grows." - [wiki](https://en.wikipedia.org/wiki/Big_O_notation)

Big O is a way to gauge the running time of the "worst case scenario". For example, in the simple search up above, in the worst case the item that we're looking for will be at the end of the array. Hence, the running time will be _n_ where _n_ is the number of items in the array. The big O analysis of simple search is _O_(_n_), or linear time.

- _O_(1) - constant time: e.g. returning 1st element of array
- _O_(log _n_) - log time: e.g. binary search
- _O_(_n_) - linear time: e.g. simple search
- _O_(_n_ log _n_) - linearithmic time: e.g. heap sort
- _O_(_n_<sup>2</sup>) - quadratic time: e.g. bubble sort, whoLovesWho function
- _O_(_n_!) - factorial time: e.g. travelling salesman (look it up)

### One more case study: Binary Search

Write the pseudocode, and then the code, for an algorithm that finds an item in an array. Assume that the array is sorted. For this binary search, loop through the array until you find the item. Unlike the simple search, you can "ask" if the item being searched for is higher or lower than the current guess (this is why it is important that the list is sorted).

### Lab: pseudocode and code the bracket matcher algorithm

Try to figure out an algorithm that will return true if the brackets are balanced and false if they aren't. For example:

```javascript
'{[()]}{()}' => true
'{}{}{()}' => true
'{}[}({})' => false
'}{{}' => false
```

hint: keep track of the current opening bracket
(when I say bracket I mean any of `{`, `[`, or `(`.

For example, if the string you're testing is `{{[()]}}{]{}`

1. split the array you're testing
2. loop through it
3. for every opening bracket, push the bracket type to a new array e.g. `newArray.push('{');`
4. if the current opening bracket is matched correctly, pop it (the current opening bracket) off the array you're using to keep track of the current opening bracket
5. if you encounter a closing bracket that doesn't match the current opening bracket, the string isn't balanced
