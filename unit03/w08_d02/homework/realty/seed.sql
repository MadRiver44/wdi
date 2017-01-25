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
('fixer-upper', 400, 1, 1),
('bachelor pad','yellow','England', 2),
('pied-a-terre','yellow','England', 3);


-- values for offices
INSERT INTO offices (sq_ft, cubicles, bathrooms, company, tenant_id)
VALUES
(1000, 4, 1, 'ZDI', 4),
(1500, 0, 2, 'MTS, Inc.', 5),
(3000, 100, 3,'CCRB', 6);

\i seed.sql


