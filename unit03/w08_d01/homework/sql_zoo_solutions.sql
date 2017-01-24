-- These are the solutions for the sql zoo homework exercises on joining.

-- 1
SELECT id, title
FROM movie
WHERE yr = 1962;

-- 2
SELECT yr
FROM movie
WHERE title = 'Citizen Kane';

-- 3
SELECT id, title, yr
FROM movie
WHERE title LIKE '%Star Trek%';

-- 4
SELECT title
FROM movie
WHERE id IN (11768, 11955, 21191);

-- 5
SELECT id
FROM actor
WHERE name = 'Glenn Close';

-- 6
SELECT id
FROM movie
WHERE title = 'Casablanca';

-- 7
SELECT actor.name
FROM
  casting
  JOIN actor ON casting.actorid = actor.id
WHERE casting.movieid = 11768;

-- 8
SELECT actor.name
FROM
  movie
  JOIN casting ON casting.movieid = movie.id
  JOIN actor ON casting.actorid = actor.id
WHERE movie.title = 'Alien';

-- 9
SELECT movie.title
FROM
  actor
  JOIN casting ON casting.actorid = actor.id
  JOIN movie ON casting.movieid = movie.id
WHERE actor.name = 'Harrison Ford';

-- 10
SELECT movie.title
FROM
  actor
  JOIN casting ON casting.actorid = actor.id
  JOIN movie ON casting.movieid = movie.id
WHERE
  actor.name = 'Harrison Ford'
  AND casting.ord != 1;

-- 11
SELECT
  movie.title,
  actor.name
FROM
  movie
  JOIN casting ON casting.movieid = movie.id
  JOIN actor ON casting.actorid = actor.id
WHERE
  movie.yr = 1962
  AND casting.ord = 1;

-- 12
SELECT
	movie.yr,
	COUNT(movie.title)
FROM
  movie
	JOIN casting ON casting.movieid = movie.id
  JOIN actor ON casting.actorid = actor.id
WHERE
	actor.name ='John Travolta'
GROUP BY
	movie.yr
HAVING
	COUNT(movie.title) > 2;

-- 13
SELECT DISTINCT
  movie.title,
  a2.name
FROM
  movie
  JOIN casting AS c1 ON c1.movieid = movie.id
  JOIN actor AS a1 ON c1.actorid = a1.id
  JOIN casting AS c2 ON c2.movieid = movie.id
  JOIN actor a2 on c2.actorid = a2.id
WHERE
  a1.name = 'Julie Andrews'
  AND c2.ord = 1;

-- 14
SELECT actor.name
FROM
  actor
  JOIN casting ON casting.actorid = actor.id
WHERE casting.ord = 1
GROUP BY actor.name
HAVING COUNT(casting.actorid) >= 30
ORDER BY actor.name;

-- 15
SELECT
  movie.title,
  COUNT(*)
FROM
  movie
  JOIN casting ON casting.movieid = movie.id
WHERE movie.yr = 1978
GROUP BY movie.title
ORDER BY
  COUNT(casting.actorid) DESC, movie.title;

-- 16
SELECT DISTINCT a2.name
FROM
  actor AS a1
  JOIN casting AS c1 ON c1.actorid = a1.id
  JOIN movie ON c1.movieid = movie.id
  JOIN casting AS c2 ON c2.movieid = movie.id
  JOIN actor AS a2 on c2.actorid = a2.id
WHERE
  a1.name =  'Art Garfunkel'
  AND a2.name !=  'Art Garfunkel';
