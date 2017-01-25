/*write the SQL commands you would use to retrieve the following information from your database.
Test each command in PSQL to make sure it is correct:*/

--The average square footage of all offices
SELECT SUM(sq_ft)/COUNT(sq_ft) FROM offices;
--The total number of apartments
SELECT COUNT(apartments) FROM apartments;
--The apartments where there is no tenant
SELECT * FROM apartments WHERE tenant_id="";
--The names of all of the companies
SELECT company FROM offices;
--The number of cubicles and bathrooms in the 3rd office
SELECT cubicles, bathrooms FROM offices[3];
--The office with the lowest number of cubicles
SELECT * FROM offices;
--The office with the most cubicles and bathrooms combined
SELECT * FROM offices;
