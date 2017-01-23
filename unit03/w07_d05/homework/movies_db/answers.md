cd movies_db
psql -f ./seed.sql
\i movies_db;
\i directors.sql;

SELECT movies.id, movies.title, directors.name AS director_name
FROM movies
INNER JOIN directors
ON movies.id=directors.director_id;


