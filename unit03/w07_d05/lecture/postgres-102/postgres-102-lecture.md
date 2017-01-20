# PostgreSQL 102

### Objectives
*After this lesson, students will be able to:*

- Create, drop, and alter database tables
- Explain the significance of a primary key
- Perform SQL joins to combine rows from two or more tables
- Draw a simple ERD (entity relationship diagram)

## SQL Preperation & Review
*Students should be familiar with the following:*

Tables, columns, rows, `SELECT`, `FROM`, `WHERE`, `LIKE`, `BETWEEN`, `AND`, `OR`, `ORDER BY`, `ASC|DESC`, `IN`, `%`, `*`, `INSERT`, `UPDATE`, `DELETE`

## CREATE, ALTER, DROP

Let's make a database! First, make sure you have PostgreSQL running. Once you do, open your terminal and type:

```bash
$ psql
```

You should see something like:

```psql
your_user_name=#
```

Let's create a database for animals:

```psql
your_user_name=# CREATE DATABASE animals_db;
CREATE DATABASE
```

The semicolon is important! Be sure to always end your SQL queries and commands with semicolons.

Now let's _use_ that database we just created:

```psql
your_user_name=# \c animals_db
You are now connected to the database "animals_db" as user "your_user_name".
animals_db=#
```

Now that we have an animals database, let's create a dogs table:

#### SQL style guide
1. Fields should be ALL lowercase
2. Correlate id fields to the table name, e.g. dog_id for dogs table.
3.

```sql
CREATE TABLE dogs (
  dog_id SERIAL PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  age INT NOT NULL
);
```

When we paste this into psql:

```psql
wdi=# CREATE TABLE dogs (
wdi(#  dog_id  SERIAL PRIMARY KEY   NOT NULL,
wdi(#  name           TEXT          NOT NULL,
wdi(#  age     INT           NOT NULL
wdi(#  );
CREATE TABLE
```

Each line within the parentheses denotes a new column we're going to create for this table, what the column will be called, the data type, whether it's a primary key, and whether the database - when data is added - can allow data with missing values.  In this case, we're not allowing `name`, `dog_id`, or `age` to be blank.

Primary key: uniquely identifies each record in a database table; primary keys are unique and cannot be null.

To delete a table we can run the following SQL query: `DROP TABLE table_name`

To alter a table, e.g. to add or remove a column, we can use the `ALTER` command. For example, to add a color column to the dogs table we can run `ALTER TABLE dogs ADD color varchar(50)`

### Lab!
- create a breeds table with a breed_id primary key and a name field
- insert some rows into the breeds table (pitbull, poodle, etc.)
- add a breed_id column to the dogs table, it should be an integer and it can be blank

## Joins

SQL joins are used to combine rows from two or more tables.

```sql
SELECT dogs.dog_id, dogs.name, dogs.age, breeds.name AS breed_name
FROM dogs
INNER JOIN breeds
ON dogs.breed_id=breeds.breed_id;
```

- INNER JOIN: Returns all rows when there is at least one match in BOTH tables
- LEFT JOIN: Return all rows from the left table, and the matched rows from the right table
- RIGHT JOIN: Return all rows from the right table, and the matched rows from the left table
- FULL JOIN: Return all rows when there is a match in ONE of the tables

Source: [SQL Joins](http://www.w3schools.com/sql/sql_join.asp)

## Entity relationship diagrams

#### Table diagram:
![relational db](https://cloud.githubusercontent.com/assets/25366/8589355/2646c588-25ca-11e5-9f2d-3d3afe8b7817.png)

#### ERD:
> ![crows foot notation cheat sheet](http://www.vivekmchawla.com/content/images/2013/Dec/ERD_Relationship_Symbols_Quick_Reference-1.png)

Relationships happen when we start seeing duplicative information or when one object needs to "connect" to another object.

There are 3 different kinds:

### One to One
- not frequently used, but important to know it's an option
- imagine a Library table ```has_one``` location, and a location ```belongs_to``` a specific library - that lets us look up solely by location, and see the connected library
- often, in situations like that, you can make the location an attribute of the library, but when a location has, for example, multiple fields (address 1, address 2, state, zip, etc.), it might make sense to create another table for addresses and set up a ```has_one``` relationship

### One to Many
- the most common type of database relationship
- an author ```has_many``` books, but a book ```belongs_to``` only one author

### Many to Many
- also very frequent
- a book probably "has many" categories, and a category also probably "has many" books

Keep in mind, the ```belongs_to``` part always goes on the opposite side of the ```has_many``` or ```has_one```. And the way it's stored is that the ID of the model that "has" something is stored in a field on the child, like "customer_id" or "author_id".  In our example with authors and books, the Book model ```belongs_to``` the Author model, while the Author, as mentioned, ```has_many``` books.
