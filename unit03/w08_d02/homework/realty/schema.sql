CREATE TABLE customers (
  customer_id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(25),
  last_name VARCHAR(25)
);

CREATE TABLE apartments (
  apt_nickname VARCHAR(25),
  sq_ft INTEGER,
  bedrooms INTEGER,
  tenant_id INTEGER REFERENCES customers(customer_id)
);

CREATE TABLE offices (
  sq_ft INTEGER,
  cubicles INTEGER,
  bathrooms INTEGER,
  company VARCHAR(25),
  tenant_id INTEGER REFERENCES customers(customer_id)
);

\i schema.sql
\dt --display table
\l --list tables
