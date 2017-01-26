/*write the SQL commands you would use to retrieve the following information from your database.
Test each command in PSQL to make sure it is correct:*/

--The average square footage of all offices
SELECT AVG(sq_ft) FROM offices; => 1833.3_
--The total number of apartments
SELECT COUNT(apartments) FROM apartments; => 3
--The apartments where there is no tenant
SELECT * FROM apartments WHERE tenant_id=null; => 0
--The names of all of the companies
SELECT company FROM offices; => ZDI, MTS, Inc., CCRB
--The number of cubicles and bathrooms in the 3rd office
SELECT cubicles, bathrooms FROM offices ORDER BY cubicles LIMIT 1 OFFSET 2; => 100, 3
--The office with the lowest number of cubicles
SELECT MIN(cubicles) FROM offices;  => 0
--The office with the most cubicles and bathrooms combined // as where WITH?? must use HAVING when you use a function
CREATE TEMP TABLE temp1 AS SELECT cubicles, bathrooms, cubicles + bathrooms spaces FROM offices;
SELECT max(spaces) FROM temp1; =>
