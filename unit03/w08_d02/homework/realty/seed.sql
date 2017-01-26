/*practice writing the proper INSERT commands that will add new entries into your customers,
apartments, offices tables. You should create at least 3 entries for each table.
Vary the attributes of each entry so no two are alike.
From the command line, load this seed file into your database.
Just the same as you did with your schema file. (\i seed.sql)
You should see a list of INSERTs.*/

-- values for customers
INSERT INTO customers (first_name, last_name)
VALUES
('Durrus','Stichelton'),
('Charolais','Ireland'),
('France','Epoisses'),
('Teleme','Maroilles'),
('Roquefort','Hooligan'),
('England','White');

-- values for apartments
INSERT INTO apartments (apt_nickname, sq_ft, bedrooms, tenant_id)
VALUES
('fixer-upper', 800, 2, 1),
('bachelor pad',400, 1, 2),
('pied-a-terre',600, 1, 3);


-- values for offices
INSERT INTO offices (sq_ft, cubicles, bathrooms, company, tenant_id)
VALUES
(1000, 4, 1, 'ZDI', 4),
(1500, 60, 60, 'MTS, Inc.', 5),
(3000, 50, 65,'CCRB', 6);

\i seed.sql


