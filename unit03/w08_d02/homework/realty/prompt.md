![nyc skyline](https://si.wsj.net/public/resources/images/BN-QC106_BUILTN_750V_20161003150150.jpg)
### Welcome to REALTY New York!!!

In the following exercise you will:

1. Practice creating a database from the command line
2. Practice creating an SQL table
3. Practice seeding an SQL database
4. Practice querying a database using SQL

##### CREATION
- Navigate to your homework/realty directory in the terminal
- Open up the psql server by typing `psql` in terminal
- Make a database called 'realty' with `CREATE DATABASE realty;`
- You can check if this has worked by typing `\l`, and you will get a list of your databases
- Connect to your newly created `realty` database by: `\c realty`.

##### SCHEMA

In your homework/realty folder, touch a SQL file called `schema.sql`. In this file, you will write code that will allow you to make multiple tables, with different data in the realty psql database.

Your create table syntax will look something like:

```
CREATE TABLE apartments (
  sq_ft INTEGER,
  bedrooms INTEGER,
  tenant_id INTEGER REFERENCES customers
);
```

And below is the list of tables/values you need to complete:

- **customers** table
  - customer_id SERIAL PRIMARY KEY(you need to set PK because you will be referencing it in other tables. Feel free to reference Paris's movies lab)
  - first_name - varchar
  *Note: VARCHAR is a text type that is character-limited, typically up to 255.*
  -last_name - varchar

- **apartments** table
  - apt_nickname - VARCHAR(25)
  - sq_ft - integer
  - bedrooms - integer
  - tenant_id - integer(id of a customer from customer table. Read more about foreign keys, referencing [HERE](https://www.postgresql.org/docs/8.3/static/tutorial-fk.html)

- **offices** table
  - sq_ft - integer
  - cubicles - integer
  - bathrooms - integer
  - company - varchar
  - tenant_id - integer(id of a customer from customer table. Same as apartments table. Or feel free to reference Paris's movies lab)

*Etc. You can create multiple tables in the same schema.sql file.*

Now let's load that schema `schema.sql` into the database:
- In your psql console (where you left off)
- Type `\i schema.sql`. This tells the database to run all the contents of schema.sql.

You can check if this has worked by
typing `\dt`. You should see a list of the tables you have created.

To see a list of your columns in a table, for example the apartment table, type `SELECT * FROM apartments`

##### SEED

- Create a new file called `seed.sql`, and in this file you should  
  - **practice writing the proper INSERT commands that will add new entries into your customers, apartments, offices tables.** You should create at least 3 entries for each table. Vary the attributes of each entry so no two are alike.

- From the command line, load this seed file into your database. Just the same as you did with your schema file. (`\i seed.sql`) You should see a list of INSERTs.

##### QUERIES
Create a new markdown file `realty.sql` and write the SQL commands you would use to retrieve the following information from your database. Test each command in PSQL to make sure it is correct:

- The average square footage of all offices
- The total number of apartments
- The apartments where there is no tenant
- The names of all of the companies
- The number of cubicles and bathrooms in the 3rd office
- The office with the lowest number of cubicles
- The office with the most cubicles and bathrooms combined

#### BONUS

Using your best friend Google, implement CRUD functionality (ex - DELETE, INSERT INTO, etc) to alter the database information.
Perform these operations from the `psql` command line:

  - Practice editing tables
    - Change the tenant of an apartment
    - Change the number of bathrooms in an office
  - Practice deleting entries
  	- delete the office with the lowest square footage
  	- delete the office with the most cubicles
  - practice more inserts
    - add an office with ten bathrooms
    - add an apartment with no tenant.
