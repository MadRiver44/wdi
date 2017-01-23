DROP DATABASE IF EXISTS movies_db;
CREATE DATABASE movies_db;
\connect movies_db;
\i directors.sql;
\i movies.sql;
\i users.sql;
\i users_movies.sql;
