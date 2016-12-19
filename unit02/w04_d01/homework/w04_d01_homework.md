![](http://cdn.quotesgram.com/small/84/65/1377346106-Robin-batman-33268529-420-435.jpg)

Now that we are starting to work with lots of data, it's time to get comfortable with:

1. Using Third Party APIs
2. Making GET requests in Postman
3. Parsing through big data blocks (using array methods and object manipulation).

## Tonight's Assignment
Let's fuse all of those skills above into tonight's hw using a free movie API called OMDB!</br>
Follow the steps below to set up your environment:

##### In `hw` Folder

1. Touch an `index.html` file and add a boiler plate.

2. Touch an `script.js` file, link to the html file, and create an empty object named `holySmokesBatman` (see below).

```
const holySmokesBatman = {
  // stuff will be added here later

}
```
##### With `Postman`

3. Check out <a href="http://www.omdbapi.com/">OMDB</a> to get used to reading API documentation.

4. Take this link `http://www.omdbapi.com/?s=batman&y=&plot=full&r=json` (from the OMDB docs) and make a `GET` request in Postman, to get Batman movies in OMDB's database!

5. See that beautiful data (AKA JSON Object)? Copy and paste that info into your JS file in the `holySmokesBatman` object.

6. Now jump into the questions below using the `holySmokesBatman` object data.

### Object Basics
1. Set the `totalResults` number to a variable.

2. Set the `Response` value to a variable.

### Map
As you may already know, the `map()` method will take an array and return a new, modified version of it.

Now use [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) to complete the following problems.

1. Practice grabbing all the Movie titles. Set that info to a new array using map.
2. Practice grabbing all of the Poster image urls. Set that info to a new array using map.
3. Now grab the Movie and Poster data at the same time using map and render that data in the browser (AKA use the DOM).
4. Make the word/image styling responsive.

### Filter
Remember `filter()` takes an array and returns a new array of the elements that pass a boolean test. See below for an example:

``` js
var animals = [
  {
    "name": "Fluffykins",
    "species": "cat"
  },
  {
    "name": "Hamilton",
    "species": "dog"
  },
  {
    "name": "Shadow",
    "species": "dog"
  },
  {
    "name": "Sassy",
    "species": "cat"
  }
];

var dogs = animals.filter(function(animal){
  if (animal.species === "dog") {
    return animal;
  }
});

console.log(dogs);
  => [
       {
          "name": "Hamilton",
          "species": "dog"
        },
        {
          "name": "Shadow",
          "species": "dog"
        }
      ]
```
Now use [Filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) to complete the following problems:

1. Using `map` create a new array named `movieTitleList` that contains all of the movie titles.
2. Then create an HTML input, that allows users to type in a title.
3. On click, run the title typed in against the `movieTitleList` array to see if it's in there (using `filter()`).
4. If the movie title is there, alert the user saying 'heck yes it's in there', otherwise write, 'no dice. sorry, try again'

### Reduce
`Reduce` is a kind of Swiss Army Knife for arrays. One of it's best uses is adding up elements. It takes a callback function with two arguments, the first we can call `sum`. We can add each item of the array to the sum. The second argument is current, which is each element in the array as we iterate through it.

Example:
```js
var numbers = [0, 1, 2, 3];
var total = numbers.reduce(function(sum, current) {
  return sum += current;
});

console.log(total);
  => 6
```
Now use [Reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) to complete the next two problems:

1. Using `reduce()`, iterate over `holySmokesBatman` and concatenate all the imdbIDs together, saving this string to a variable called `rambleOfImdbIDs`. Console log this.

2. Let's combine some of these methods.

  - Take the `holySmokesBatman` object and use `map` to add a new attribute `rating` to each object of Search array. Make every rating somehow different.

 - Use `reduce` to manipulate the newly created array (from the previous step). Add up all ratings that are greater than 3. Assign the result to a new variable.

#### REQUIRED READING
[EloquentJS chapter 12](http://eloquentjavascript.net/12_browser.html)

[EloquentJS chapter 17](http://eloquentjavascript.net/17_http.html)

Did and done?
As always, submit an Issue on GitHub.

YOU ARE AWESOME! :tada:
