const holySmokesBatman = {
    "Search": [
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "imdbID": "tt0372784",
      "Type": "movie",
      "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg"
    },
    {
      "Title": "Batman v Superman: Dawn of Justice",
      "Year": "2016",
      "imdbID": "tt2975590",
      "Type": "movie",
      "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
      "Title": "Batman",
      "Year": "1989",
      "imdbID": "tt0096895",
      "Type": "movie",
      "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg"
    },
    {
      "Title": "Batman Returns",
      "Year": "1992",
      "imdbID": "tt0103776",
      "Type": "movie",
      "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BODM2OTc0Njg2OF5BMl5BanBnXkFtZTgwMDA4NjQxMTE@._V1_SX300.jpg"
    },
    {
      "Title": "Batman Forever",
      "Year": "1995",
      "imdbID": "tt0112462",
      "Type": "movie",
      "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNWY3M2I0YzItNzA1ZS00MzE3LThlYTEtMTg2YjNiOTYzODQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
      "Title": "Batman & Robin",
      "Year": "1997",
      "imdbID": "tt0118688",
      "Type": "movie",
      "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_SX300.jpg"
    },
    {
      "Title": "Batman: The Animated Series",
      "Year": "1992–1995",
      "imdbID": "tt0103359",
      "Type": "series",
      "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU3MjcwNzY3NF5BMl5BanBnXkFtZTYwNzA2MTI5._V1_SX300.jpg"
    },
    {
      "Title": "Batman: Under the Red Hood",
      "Year": "2010",
      "imdbID": "tt1569923",
      "Type": "movie",
      "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMwNDEyMjExOF5BMl5BanBnXkFtZTcwMzU4MDU0Mw@@._V1_SX300.jpg"
    },
    {
      "Title": "Batman: The Dark Knight Returns, Part 1",
      "Year": "2012",
      "imdbID": "tt2313197",
      "Type": "movie",
      "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_SX300.jpg"
    },
    {
      "Title": "Batman: The Dark Knight Returns, Part 2",
      "Year": "2013",
      "imdbID": "tt2166834",
      "Type": "movie",
      "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ1Mjk1NTY2NV5BMl5BanBnXkFtZTgwMTA2MDEwNzE@._V1_SX300.jpg"
    }
  ],
  "totalResults": "323",
  "Response": "True"
}
/*1. Set the `totalResults` number to a variable.*/
let totalResults = holySmokesBatman.totalResults;
/*2. Set the `Response` value to a variable.*/
let response = holySmokesBatman.response;
/*### Map
As you may already know, the `map()` method will take an array and return a new, modified version of it.
Now use [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) to complete the following problems.
/*1. Practice grabbing all the Movie titles. Set that info to a new array using map.*/
let holySmokesBatmanTitles = holySmokesBatman.Search.map(function(movie){
    return {
      title: movie.Title,
    }
  })
/*2. Practice grabbing all of the Poster image urls. Set that info to a new array using map.*/
let holySmokesBatmanTitles = holySmokesBatman.Search.map(function(movie){
    return {
      poster: movie.Poster
    }
  })
/*3. Now grab the Movie and Poster data at the same time using map and render that data in the browser (AKA use the DOM).*/
  let allTitlesAndPosters = holySmokesBatman.Search.map(function(movie){
    return {
      title: movie.Title,
      poster: movie.Poster
    }
  })
for (i=0; i<allTitlesAndPosters.length; i++) {
    const newMovie = document.createElement('div');
    const myPage = document.querySelector('myPage');
    myPage.appendChild(newMovie);

    let currentMovie = allTitlesAndPosters[i].title;
    const newTitle = document.createElement('div');
    newTitle.setAttribute('class', 'title');
    newMovie.appendChild(newTitle);

    let currentPoster = allTitlesAndPosters[0].poster;
    const newPoster = document.createElement('div');
    newPoster.setAttribute('class', 'poster');
    newMovie.appendChild(newPoster);

  }
};
/*4. Make the word/image styling responsive.*/
/*### Filter
Remember `filter()` takes an array and returns a new array of the elements that pass a boolean test.
See below for an example:
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
Now use [Filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
/Global_Objects/Array/filter) to complete the following problems:
1. Using `map` create a new array named `movieTitleList` that contains all of the movie titles.*/
let movieTitleList = holySmokesBatman.Search.map(function(movie){
    return {
      title: movie.Title,
    }
  })
/*2. Then create an HTML input, that allows users to type in a title.*/
/*<form onsubmit="myFunction()">
  Title: <input type='text' name='title'>
  <input type='submit' value='Submit'>
</form>*/
/*3. On click, run the title typed in against the movieTitleList array to see if its in there
(using filter() ).*/
/*4. If the movie title is there, alert the user saying 'heck yes its in there',
otherwise write, 'no dice. sorry, try again'*/
let myFunction = function() {
  let myList = movieTitleList.filter
  if (myList === "") {
    alert('no dice. sorry, try again');
  } else {
    alert('heck yes its in there');
  }
}
/*### Reduce
`Reduce` is a kind of Swiss Army Knife for arrays. One of its best uses is adding up elements.
It takes a callback function with two arguments, the first we can call `sum`.
We can add each item of the array to the sum.
The second argument is current, which is each element in the array as we iterate through it.
Example:
```js
var numbers = [0, 1, 2, 3];
var total = numbers.reduce(function(sum, current) {
  return sum += current;
});
console.log(total);
  => 6
```
Now use [Reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
/Array/Reduce) to complete the next two problems:
1. Using `reduce()`, iterate over `holySmokesBatman` and concatenate all the imdbIDs together,
saving this string to a variable called `rambleOfImdbIDs`. Console log this.*/
let rambleOfImdbIDs = holySmokesBatman.reduce(); {
  return rambleOfImdbIDs += current;
}
console.log(rambleOfImdbIDs);
/*2. Let's combine some of these methods.
  - Take the `holySmokesBatman` object and use `map` to add a new attribute `rating`
  to each object of Search array. Make every rating somehow different.*/
 let newArray = holySmokesBatman.map(function(  [ , ] );
 /*- Use `reduce` to manipulate the newly created array (from the previous step).
 Add up all ratings that are greater than 3. Assign the result to a new variable.*/
let greaterThanThree = newArray.reduce();

/*#### REQUIRED READING
[EloquentJS chapter 12](http://eloquentjavascript.net/12_browser.html)

[EloquentJS chapter 17](http://eloquentjavascript.net/17_http.html)


*/
