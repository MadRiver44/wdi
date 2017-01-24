\i queries.sql
--Select the movie title and user name for all of the "favorites" represented
--by the users_movies table.
SELECT
  movies.title, users.name
FROM
  users
JOIN
  users.movies
ON
  title.movie_id =  users_movies.movies_id
JOIN
  users
ON
  users_movies.user_id = users.user_id;

--List the movies with the number of favorites they have.
SELECT
  movies.title,
COUNT(users_movies.movie_id)
FROM
  movies
JOIN
  users.movies ON movies.movie_id = users.movie_id
GROUP BY
  movies.title
ORDER BY
COUNT(users.movies.movie_id) DESC;

--List the names of directors along with the number of favorites that exist
--for all of the movies they've made, ordered by number of favorites descending.
SELECT directors.name, COUNT(users_movies.movie_id)
FROM directors
JOIN users ON
;

--List the user name, director name and favorite count of all of the user/director
--combinations (based on the users_movies table).
SELECT name, directors.name, FROM users
INNER JOIN
INNER JOIN ;


