CREATE TABLE directors (
  director_id serial PRIMARY KEY,
  name varchar(40) NOT NULL
);

INSERT INTO directors (name) VALUES
  (
  'Alejandro G. Iñárritu'
  ),
  (
  'Damien Chazelle'
  ),
  (
  'Dan Gilroy'
  ),
  (
  'James Gunn'
  ),
  (
  'George Miller'
  ),
  (
  'Alex Garland'
  ),
  (
  'Denis Villeneuve'
  ),
  (
  'Yorgos Lanthimos'
  ),
  (
  'Stanley Kubrick'
  ),
  (
  'Neill Blomkamp'
  ),
  (
  'Francis Ford Coppola'
  ),
  (
  'Woody Allen'
  ),
  (
  'Paul Thomas Anderson'
  ),
  (
  'Michael Powell'
  ),
  (
  'Martin Scorcese'
  ),
  (
  'Quentin Tarantino'
  ),
  (
  'Joel Coen'
  ),
  (
  'Roman Polanski'
  ),
  (
  'Sam Mendes'
  );

ALTER TABLE movies ADD director_id INT;

/*UPDATE movies
SET director_id=1
WHERE title='Birdman or (The Unexpected Virtue of Ignorance)';
UPDATE movies
SET director_id=2
WHERE title='Whiplash';
UPDATE movies
SET director_id=3
WHERE title='Nightcrawler';
UPDATE movies
SET director_id=4
WHERE title='Guardians of the Galaxy';
UPDATE movies
SET director_id=5
WHERE title='Mad Max: Fury Road';
UPDATE movies
SET director_id=6
WHERE title='Ex Machina';
UPDATE movies
SET director_id=7
WHERE title='Arrival';
UPDATE movies
SET director_id=8
WHERE title='The Lobster';
UPDATE movies
SET director_id=9
WHERE title='2001: A Space Odyssey ';
UPDATE movies
SET director_id=10
WHERE title='District 9';
UPDATE movies
SET director_id=11
WHERE title='The Godfather';
UPDATE movies
SET director_id=12
WHERE title='Annie Hall';
UPDATE movies
SET director_id=13
WHERE title='Boogie Nights';
UPDATE movies
SET director_id=14
WHERE title='The Red Shoes';
UPDATE movies
SET director_id=15
WHERE title='Taxi Driver';
UPDATE movies
SET director_id=9
WHERE title='The Shining';
UPDATE movies
SET director_id=16
WHERE title='Pulp Fiction';
UPDATE movies
SET director_id=17
WHERE title='Fargo';
UPDATE movies
SET director_id=18
WHERE title='Rosemary''s Baby';
UPDATE movies
SET director_id=17
WHERE title='There Will Be Blood';
UPDATE movies
SET director_id=19
WHERE title='American Beauty';
*/
