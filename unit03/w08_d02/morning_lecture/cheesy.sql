CREATE TABLE cheeses (
  cheese_id SERIAL PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  color TEXT NOT NULL,
  origin TEXT NOT NULL,
  stink_level INT NOT NULL
);

--Add these cheeses to your database:

--Roquefort, a yellow french cheese with a stink level of 5
INSERT INTO cheeses (name, color, origin, stink_level) -- can put all VALUES lines after one INSERT INTO with comma after each
VALUES ('Roquefort','yellow','France', 5);
--Epoisses, an orange french cheese with a stink level of 9
INSERT INTO cheeses (name, color, origin, stink_level)
VALUES ('Epoisses','orange','France', 9);
--Charolais, a white french cheese with a stink level of 5
INSERT INTO cheeses (name, color, origin, stink_level)
VALUES ('Charolais','white','France', 5);
--Maroilles, a white french cheese with a stink level of 10
INSERT INTO cheeses (name, color, origin, stink_level)
VALUES ('Maroilles','white','France', 10);
--Durrus, a yellow Irish cheese with a stink level of 2
INSERT INTO cheeses (name, color, origin, stink_level)
VALUES ('Durrus','yellow','Ireland', 2);
--Hooligan, a yellow American cheese with a stink level of 3
INSERT INTO cheeses (name, color, origin, stink_level)
VALUES ('Hooligan','yellow','USA', 3);
--Teleme, a white american cheese with a stink level of 2
INSERT INTO cheeses (name, color, origin, stink_level)
VALUES ('Teleme','yellow','USA', 2);
--Stichelton, a white English cheese with a stink level of 4
INSERT INTO cheeses (name, color, origin, stink_level)
VALUES ('Stichelton','yellow','England', 4);

-- **CHOOSING CHEESE**
-- Find all the cheeses
SELECT * FROM cheeses;
-- Find all the French cheeses
SELECT * FROM cheeses WHERE origin='France';
-- Find all the English cheeses
SELECT * FROM cheeses WHERE origin='England';
-- Find all cheeses with a stink level of 2
SELECT * FROM cheeses WHERE stink_level=2;
-- Find all cheeses with a stink level of 10
SELECT * FROM cheeses WHERE stink_level=10;
-- Find all French cheeses with a stink level of 5
SELECT * FROM cheeses WHERE origin='France' AND stink_level=5;
-- Find all Irish cheeses with a stink level of 6
SELECT * FROM cheeses WHERE origin='Ireland' AND stink_level=6;
-- Find all cheeses with a stink level of at least 4, but no greater than 8.
SELECT * FROM cheeses WHERE stink_level BETWEEN 4 AND 8;
-- Find all American and English cheeses.
SELECT * FROM cheeses WHERE origin='USA' OR origin='England';
--SELECT name FROM cheeses WHERE origin IN ('USA','England'); also works
-- Find all cheeses that are not from France.
SELECT * FROM cheeses WHERE origin!='France';

-- **RESTOCKING CHEESE**
-- Change the stink level of Roquefort to 3
UPDATE cheeses SET stink_level=3 WHERE name='Roquefort';
-- Change the color of Teleme to "mauve"
UPDATE cheeses SET color='mauve' WHERE name='Teleme';
-- Delete the Hooligan cheese
DELETE FROM cheeses WHERE name='Hooligan';
-- Change the stink level of Stichelton to be 7
UPDATE cheeses SET stink_level=7 WHERE name='Stichelton';
-- Add the cheese "Monterey Jack", an American cheese with a stink level of 0
INSERT INTO cheeses (name, color, origin, stink_level)
VALUES ('Monterey Jack','white','USA', 0);
-- Delete Durrus
DELETE FROM cheeses WHERE name='Durrus';


