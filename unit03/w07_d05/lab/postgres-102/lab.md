# PostgreSQL 102 Lab

### Hello new IMDB database adminsistrator!

- If you need to re-seed your movies database there is a `movies_db` directory in this lab directory. In there there's a
  `seed.sql` file. First, navigate to the movies_db directory. Then, in your terminal, run:
  ```
  psql -f ./seed.sql
  ```

Hi, I'm your new project manager. I need you to do a few things today:

1. Add a directors table to the movies database. It should have a director_id primary key and a name field.
2. Add a director_id column to the movies table.
3. Here's a list of the current movies we have listed and their directors:
  - Birdman - Alejandro G. Iñárritu
  - Whiplash - Damien Chazelle
  - Nightcrawler - Dan Gilroy
  - Guardians of the Galaxy - James Gunn
  - Mad MAx: Fury Road - George Miller
  - Ex Machina - Alex Garland
  - Arrival - Denis Villeneuve
  - The Lobster - Yorgos Lanthimos
  - 2001: A Space Odyssey - Stanley Kubrick
  - District 9 - Neill Blomkamp
  - The Godfather - Francis Ford Coppol
  - Annie Hall - Woody Allen
  - Boogie Nights - Paul Thomas Anderson
  - The Red Shoes - Michael Powell
  - Taxi Driver - Martin Scorsese
  - The Shining - Stanley Kubrick
  - Pulp Fiction - Quentin Tarantino
  - Fargo - Joel Coen
  - Rosemary''s Baby - Roman Polanski
  - There Will Be Blood - Paul Thomas Anderson
  - American Beauty - Sam Mendes
4. Go through this list and add all of the directors to the directors table. Then go through the movies database and update the director_id column to reflect the correct director. For today we're going to pretend all movies have a single director. Hint: take a look at the movies.sql file and the seed.sql file if you want to automate some of this, i.e. you should (but you don't have to) create a directors.sql file in which you create the table and insert all of the data, you can then import that in psql with the `\i` command as it's done in the seed.sql file. You can similarly update the movies table.
5. Perform an inner join that returns a table with the movie id, movie name, and director name as columns. Hint: this should look very similar to the dogs inner join from the lecture notes.
6. Add some movies that don't have a director, and add some directors that don't correspond to any of the movies.
7. Perform some right, left, and full outer joins. After doing so, write a sentence or two about each of the 4 types of joins explaining what they do.
8. Draw up a simple ERD for the movies database.
