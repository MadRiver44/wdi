/**Hello and welcome to your week 8 assessment.
There is a combination of answers that need to be in code or
written plain old English.
You'll see a "Code goes here" or a "Write Response".
**/

QUESTION 1

You've been presented with the following route definitions.
Please explain what each route should return.

Write respones under each route

//GET '/users'
returns a list of all users

//GET '/users/:id'
returns a page detailing one user with id '(some identifier string goes here)'

//POST '/users/:id/pets/new'
POSTs a new pet to the database associated with user with id '(some identifier string goes here)'

//GET '/users/:id/pets'
returns the pets associated with user with id '(some identifier string goes here)

//PATCH '/users/:id/pets/:id'
updates a pet record with id '(some identifier string goes here) for user id '(some identifier string goes here)

QUESTION 2
You need to write a GET request for '/users' that should return
JSON containing data for all Users.  Please write that route below
using the Express syntax(hint: referencing routes )

//Code goes here
```js
router.get('/users', function(req, res, next) {
  res.send('users.JSON', {
    title: 'User JSON data object'
  });
});

```

QUESTION 3
Why would we need to install the npm package
body-parser in our Express app?  Give us an example of
how it is used.

//Body Parser is Express.js middleware that simplifies the process of breaking down data returned from a GET request into something more easily usable, such as plain text, string, etc. It does not do anything more than what you could do with regular JS data methods, it just makes it faster and easier.



QUESTION 4
What is Sequilize? What problem does it help solving?

Sequelize is Object Relational Mapping middleware that enables a web server to respond to incoming  URI requests from clients to return data from a relational database like SQL.  It helps the server and the database 'talk' to one another.


QUESTION 5
A PostgreSQL database has been made and includes the table
buildings.  Here is a schema that created the table...

`CREATE TABLE buildings(
   ID INT PRIMARY KEY,
   ADDRESS VARCHAR(255),
   APARTMENT_COUNT INT
);`

Write a SQL query that will return the row with an ID equal to 1000

//Code goes here
```SQL
SELECT * FROM buildings ORDER BY id LIMIT 1 OFFSET 999;
```

Write a SQL query that will return all rows with an
APARTMENT_COUNT greater than 25.

//Code goes here
```SQL
SELECT * FROM buildings WHERE apartment_count > 25;
```

Create a SEQUILIZE method call that will create a new building
in the buildings table given a building address and apartment count and .then() redirect to `/buildings`.
hint: how did you create a new user yesterday?

router.post('/', function(req, res, next) {  // creates new building in db
  models.Building.create({
    address: req.body.address,  // adds address
    apartment_count: req.body.apartment_count // adds aptcount
  }).then(function() {
    res.redirect('/buildings') // redirects
  });
});

Create a SEQUILIZE method call that will return all rows
from the buildings table. then redirect to `/buildings`
hint: how did you get all the users to render yesterday?

router.get('/', function(req, res, next) {  // gets all buildings
  models.Buildings.findAll({}).then(function(buildings){
      res.render('buildings/index', {
      title: 'Buildings',
      buildings: buildings
    });
    res.redirect('/buildings') // redirects
  });
});

QUESTION 6
What is an Object Relational Mapper (ORM)?

From Wikipedia, "Object-relational mapping (ORM, O/RM, and O/R mapping tool) in computer science is a programming technique for converting data between incompatible type systems in object-oriented programming languages. This creates, in effect, a "virtual object database" that can be used from within the programming language."

QUESTION 7
What is a database migration?

Not sure about this question, so two answers from Wikipedia: *DATA* migration is the process of transferring data between computer storage types or file formats. *DATABASE SCHEMA* migration refers to the management of incremental, reversible changes to relational database schemas.

QUESTION 8
What is a javascript Promise? What problem does it help solving?
What promise libraries have learned about?

A JS Promise is an ES6 object that when instantiated has a number of available built-in methods for dealing with asynchronous events in a JS program. It builds on ES5 callback functions to provide a syntactically simpler alternative to "callback hell".  Some  libraries to help implement Promises in JS are q and bluebird.

QUESTION 9
We've been using Express on our server-side. Why do we use it?

Express.js is a JavaScript framework that enables back-end routing with many available modules and packages that can extend fuctionality.  We use it because it allows us to use our front-end JS language throughout our application, with a robust environment of optional components we can easily import.

QUESTION 10
What is a seed file? How do you run in in psql?

In SQL-like database programming, a seed file can be any type of blank file (.txt,csv,.xls) that can be used as input parameter to start the execution of any process.  Instead of typing each entry one-at-a-time, a user can aggregate them into a seed file that will input entries all at once.

QUESTION 11
Yesterday, Paris created a Users Model?
What is it and why is it used?

From Wikipedia, "User modeling is the subdivision of human–computer interaction which describes the process of building up and modifying a conceptual understanding of the user. The main goal of user modeling is customization and adaptation of systems to the user's specific needs. The system needs to "say the 'right' thing at the 'right' time in the 'right' way".[1] To do so it needs an internal representation of the user." It is used to guide a web developer to code useful, logical, well-structured applications from the very beginning of the coding process.
