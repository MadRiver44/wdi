# Many to many relationships: using join tables

In this lab you will be writing queries to gain insight into our movies
database. The `movies_db` consists of four tables. You are already familiar with
the `movies` and the `directors` tables. The two new tables are the `users` and
the `users_movies` tables.

The `users` table simply holds user records. These records only store a `name`
string of a user. The `users_movies` table represents a many to many
relationship between the users table and the movies table. These types of tables
are sometimes referred to as "join tables". The naming of the table
("`users_movies`") might sound strange, but it is a common naming convention you
you will certainly come accross. This is just a concatenation of the two table
names that it is joining. Sometimes, the join table represents an idea that
lends itself to a better name. In our case, we could have named the table
`favorites` or something like that. But it's good to see and get used to this
naming convention also.

### Setup

In this directory you will find a `movies_db` directory. Run this command to set
up your database:

```
psql -f ~/path/to/movies_db/seed.sql
```

After that, you should be all set to write the queries requested below.

For this lab, you are expected to use the psql command line interface. For your
convenience though, I have added a `queries.sql` file to movies_db directory.
Feel free to write your queries in there and run them in psql with the `\i`
command. It should look something like this:

```
$ psql movies_db
psql (9.6.1)
Type "help" for help.

movies_db=# \i queries.sql
 id |  name
 ----+---------
 1 | Ariana
 2 | Joe
 3 | Kate
 4 | Paris
 5 | Patrick
 6 | Vince
(6 rows)

movies_db=#
```

As you can see, my `queries.sql` file probably had something like `SELECT * FROM
users;` in it.

### Queries

1. Select the movie title and user name for all of the "favorites" represented
   by the `users_movies` table.
2. List the movies with the number of favorites they have.
3. List the names of directors along with the number of favorites that exist for
   all of the movies they've made, ordered by number of favorites descending.
4. List the user name, director name and favorite count of all of the
   user/director combinations (based on the `users_movies` table).
