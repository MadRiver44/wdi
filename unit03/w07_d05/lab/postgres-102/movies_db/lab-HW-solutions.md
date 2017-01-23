The following correspond to the postgres-102 lab exercises. The homework was to complete and redo the lab.

1. `directorsSolution.sql` lines 4-7
2. `directorsSolution.sql` lines 10
3. `directorsSolution.sql` lines 13-56
4. `directorsSolution.sql` lines 13-56
5. Perform an inner join that returns a table with the movie id, movie title, and director name as columns:

  ```sql
  SELECT movies.movie_id, movies.title, directors.name
  FROM movies
  INNER JOIN directors
  ON movies.director_id=directors.director_id;
  ```
6. Add some movies that don't have a director, and add some directors that don't correspond to any of the movies:

  ```sql
  INSERT INTO movies (title, synopsis) VALUES
    (
      'Eternal Sunshine of the Spotless Mind',
      'When their relationship turns sour, a couple undergoes a procedure to have each other erased from their memories. But it is only through the process of loss that they discover what they had to begin with.'
    ),
    (
      'Synecdoche, New York',
      'A theatre director struggles with his work, and the women in his life, as he creates a life-size replica of New York City inside a warehouse as part of his new play.'
    );
    INSERT INTO directors (name) VALUES
      ('Alfred Hitchcock'),
      ('Akira Kurosawa'),
      ('Ingmar Bergman');
  ```
7. Perform some right, left, and full outer joins:

  ```sql
  SELECT movies.movie_id, movies.title, directors.name
  FROM movies
  LEFT JOIN directors
  ON movies.director_id=directors.director_id;

  SELECT movies.movie_id, movies.title, directors.name
  FROM movies
  RIGHT JOIN directors
  ON movies.director_id=directors.director_id;

  SELECT movies.movie_id, movies.title, directors.name
  FROM movies
  FULL JOIN directors
  ON movies.director_id=directors.director_id;
  ```
  Refer to [w3schools](http://www.w3schools.com/sql/sql_join.asp) for an explanation of each type of join.
8. Refer to the lecture notes for an intro to ERDs.
