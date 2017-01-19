# Intro to Databases and SQL Lab

### Create a database

You will learn how to create databases after you get a bit more familiar with
postgres. For now, we're just going to use a starter sql file to create our
database and tables, and get some seed data set up.

- In this lab directory, there is a `movie_db` directory. In there there's a
  `seed.sql` file. In your terminal, run:
  ```
  psql -f path/to/movies_db/seed.sql
  ```

- After that you should see this output:
  ```
  DROP DATABASE
  CREATE DATABASE
  You are now connected to database "movies_db" as user "GA-Student".
  CREATE TABLE
  CREATE TABLE
  INSERT 0 21
  ```

### Download Postico!

Postico is a GIU for the Postgresql (more commonly known as Postgres) database.
In the future we will be using a command line tool called *psql* for interfacing
with postgres but for today the GUI will make things a bit easier.

- Download it [here](https://eggerapps.at/postico/) and follow the installation
  instructions.

- When you open the Postico app for the first time, it will as you for
  credentials to connect to your database. Your username is probably the
  username for your computer. If you are not sure, type `psql` into your
  terminal. The psql command line program will start and the prompt will display
  your database username before the `=#`. For example, mine looks like this:
  `paris=#`. Copy that username (without the `=#`) and use that to set up
  Postico. You souldn't have to change any other options.

- After connection you should see a `movies_db` database, and possibly a few
  others. Double click on the `movies_db`.

- You should now see a `movies` table as well as a `SQL Query` icon. Click on
  the movies table to take a look. Then click on the SQL Query icon to open the
  sql editor.

### Add some movies!

Refer to the w3school sql cheatsheet section on
[insert into](http://www.w3schools.com/Sql/sql_insert.asp). Add the `title` and
`synopsis` of the last 5 movies you've seen that aren't already in the movies
table. 

### Update some movies!

As you can see, there is a column for `release_date` in the `movies` table that
hasn't been filled in yet. Refer to the w3school sql section on
[update](http://www.w3schools.com/Sql/sql_update.asp) to add the release date of
your 5 favorite movies in the movies table.

### Delete some movies!

Refer to the w3school sql section on
[delete](http://www.w3schools.com/Sql/sql_delete.asp) and delete 5 movies from
the list you don't like. Like them all? Add 5 shit movies and then delete those
suckers 😝.
