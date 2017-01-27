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


//GET '/users/:id'


//POST '/users/:id/pets/new'


//GET '/users/:id/pets'


//PATCH '/users/:id/pets/:id'


QUESTION 2
You need to write a GET request for '/users' that should return
JSON containing data for all Users.  Please write that route below
using the Express syntax(hint: referencing routes )

//Code goes here
```js


```

QUESTION 3
Why would we need to install the npm package
body-parser in our Express app?  Give us an example of
how it is used.

//Response goes here



QUESTION 4
What is Sequilize? What problem does it help solving?

//Response goes here


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

```

Write a SQL query that will return all rows with an
APARTMENT_COUNT greater than 25.

//Code goes here
```SQL

```

Create a SEQUILIZE method call that will create a new building
in the buildings table given a building address and apartment count and .then() redirect to `/buildings`.
hint: how did you create a new user yesterday?

//Code goes here

Create a SEQUILIZE method call that will return all rows
from the buildings table. then redirect to `/buildings`
hint: how did you get all the users to render yesterday?

//Code goes here

QUESTION 6
What is an Object Relational Mapper (ORM)?

//Response goes here

QUESTION 7
What is a database migration?

//Response goes here

QUESTION 8
What is a javascript Promise? What problem does it help solving?
What promise libraries have learned about?

//Response goes here

QUESTION 9
We've been using Express on our server-side. Why do we use it?

//Response goes here

QUESTION 10
What is a seed file? How do you run in in psql?

//Response goes here

QUESTION 11
Yesterday, Paris created a Users Model?
What is it and why is it used?

//Response goes here
