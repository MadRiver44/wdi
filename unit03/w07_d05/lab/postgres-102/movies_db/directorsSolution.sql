-- first we have to create the directors TABLE
-- by the way, two dashes (--) can be used to included
-- comments in your .sql file
CREATE TABLE directors (
  director_id serial PRIMARY KEY,
  name varchar(100) NOT NULL
);

-- add the directors_id column to the movies table
ALTER TABLE movies ADD director_id int;

-- this will add all the directors we need to the directors table
INSERT INTO directors (name) VALUES
  ('Alejandro G. Iñárritu'),
  ('Damien Chazelle'),
  ('Dan Gilroy'),
  ('James Gunn'),
  ('George Miller'),
  ('Alex Garland'),
  ('Denis Villeneuve'),
  ('Yorgos Lanthimos'),
  ('Stanley Kubrick'),
  ('Neill Blomkamp'),
  ('Francis Ford Coppola'),
  ('Woody Allen'),
  ('Paul Thomas Anderson'),
  ('Michael Powell'),
  ('Martin Scorsese'),
  ('Quentin Tarantino'),
  ('Joel Coen'),
  ('Roman Polanski'),
  ('Sam Mendes');

-- update all of the movies to include a reference to the correct
-- director, we do this by setting the director_id of each movie
UPDATE movies SET director_id=1 WHERE movie_id=1;
UPDATE movies SET director_id=2 WHERE movie_id=2;
UPDATE movies SET director_id=3 WHERE movie_id=3;
UPDATE movies SET director_id=4 WHERE movie_id=4;
UPDATE movies SET director_id=5 WHERE movie_id=5;
UPDATE movies SET director_id=6 WHERE movie_id=6;
UPDATE movies SET director_id=7 WHERE movie_id=7;
UPDATE movies SET director_id=8 WHERE movie_id=8;
UPDATE movies SET director_id=9 WHERE movie_id=9;
UPDATE movies SET director_id=10 WHERE movie_id=10;
UPDATE movies SET director_id=11 WHERE movie_id=11;
UPDATE movies SET director_id=12 WHERE movie_id=12;
UPDATE movies SET director_id=13 WHERE movie_id=13;
UPDATE movies SET director_id=14 WHERE movie_id=14;
UPDATE movies SET director_id=15 WHERE movie_id=15;
UPDATE movies SET director_id=9 WHERE movie_id=16;
UPDATE movies SET director_id=16 WHERE movie_id=17;
UPDATE movies SET director_id=17 WHERE movie_id=18;
UPDATE movies SET director_id=18 WHERE movie_id=19;
UPDATE movies SET director_id=13 WHERE movie_id=20;
UPDATE movies SET director_id=19 WHERE movie_id=21;
