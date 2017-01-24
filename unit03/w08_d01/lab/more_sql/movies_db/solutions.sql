-- 1
SELECT
  movies.title,
  users.name
FROM
  users
  JOIN users_movies ON users_movies.user_id = users.user_id
  JOIN movies on users_movies.movie_id = movies.movie_id;


-- 2
SELECT 
  movies.title,
  COUNT(users_movies.movie_id)
FROM
  movies
  JOIN users_movies ON movies.movie_id = users_movies.movie_id
GROUP BY 
  movies.title
ORDER BY
  COUNT(users_movies.movie_id) DESC;

-- 3
SELECT
  directors.name,
  COUNT(users_movies.movie_id)
FROM
  movies JOIN directors ON movies.director_id = directors.director_id
  JOIN users_movies ON users_movies.movie_id = movies.movie_id
GROUP BY directors.name
ORDER BY COUNT(users_movies.movie_id) DESC;

-- 4
SELECT
  users.name,
  directors.name,
  COUNT(*)
FROM
  users_movies
  JOIN users ON users_movies.user_id = users.user_id
  JOIN movies ON users_movies.movie_id = movies.movie_id
  JOIN directors ON movies.director_id = directors.director_id
GROUP BY
  users.name,
  directors.name;
