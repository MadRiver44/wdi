DROP DATABASE IF EXISTS movies_db;
CREATE DATABASE movies_db;
\connect movies_db;
\i movies.sql;
