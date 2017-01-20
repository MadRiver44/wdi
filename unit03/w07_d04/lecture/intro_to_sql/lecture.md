# Intro to Databases and SQL

### Definitions

- **Relational Database** - A relational database is a collection of data items
  organized as a set of formally-described tables from which data can be
  accessed or reassembled in many different ways without having to reorganize
  the database tables. The relational database was invented by E. F. Codd at IBM
  in 1970. - [Source](searchsqlserver.techtarget.com)

- **SQL** - SQL (pronounced "ess-que-el") stands for Structured Query Language.
  SQL is used to communicate with a database. According to ANSI (American
  National Standards Institute), it is the standard language for relational
  database management systems. - [Source](http://www.sqlcourse.com/intro.html)

### Reference

A good bible for this lesson can be found
[here](http://www.w3schools.com/Sql/sql_quickref.asp)

# Lecture Exercises

For these exercises we are going to be using a browser based [sql practice
tool](http://www.dofactory.com/sql/sandbox). After we are introducted to each of
the following topics, you will be given time to complete the exercises for that
topic before moving on.

**As you work, be sure to record your queries.**

### SELECT and FROM

1. Select the `FirstName`, `City`, and `Country` from the `Customer` table.
2. Select the `Id`, `ContactTitle`, `Country`, `Phone` and `Fax` from the
   `Supplier` table.
3. Select all of the columns from the `Order` table.
4. Select every column except the `SupplierId` from the `Product` table.

### WHERE

1. Select everything from customers who live in countries with `i`s in them.
2. Select the `Id`, `LastName` and `Phone` from customers who live in countries
   that *start* with `i`. (After that, you probably want to add `Country` to
   your select to confirm, don't you?)
3. Select the `ProductName`, `UnitPrice` `IsDiscontinued` and `Package` for all
   products with unit prices over $20, come in a package of either '10 - 500 g
   pkgs.' or '24 - 200 g pkgs.' and are not discontinued.

### ORDER

1. Select everything from all of the customers orderd by country ascending and
   last name descending.
