# Database Seeding

Seeding referes to the process of initializing a dataset within a database. This
is useful in development or test environments so that you have something to look
at while your developing/testing features.

We have provided the seed data for you but you will still have to create your
own seed files. To do this, run:

```
sequelize seed:create --name name-of-your-seed-file
```

The name of your seed file will either be `directors` or `movies`, depending on
which feature your working on. Once your file is created, you can replace the
contents with the contents from the corresponding files in this directory. Then
all you have to do is run:
```
sequelize db:seed:all
```
to execute the seed files.
