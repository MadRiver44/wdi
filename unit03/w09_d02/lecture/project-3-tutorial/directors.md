# Project 3 tutorial - Directors

### Objectives
1. Add a director model
2. Implement basic CRUD routes for directors
3. Add corresponding views

## Setup

First, make sure you start a new feature branch. Refer to the [main tutorial markdown](README.md#Feature-Development).

The database, movies_app_development should have been created and we should have run `sequelize init` already. If you haven't done this refer to the [main markdown](README.md#Install-Sequelize) of the tutorial.

### Create the Director model

Run the following command:

```bash
sequelize model:create --name Director --attributes "name:string(128)"
```

Refer to Paris's tutorial on Express/Postgres for help with the implementation of this CRUD functionality: [Express/Postgres CRUD tutorial](https://github.com/ga-students/WDI_HAKUNA_MATATA/blob/master/unit03/w08_d04/lecture/express-and-postgres/express-and-postgres.md)

Seeding a database is a process whereby you insert into the database a bunch of data right from the start so you can begin working on and testing the routes as you go. Take a look at the seeder files in this directory to see what's going on there. Try to explain it to the person working on Users/Auth. :D

Check out the section on [seeding your database](seeds/README.md) to learn how
to add some dummy data to your development environment.

### Create the Directors routes

The following is a list of routes you should create. Note: you might want to create the necessary .ejs files as you go so you can test the routes out:

1. `GET /directors`: this should list all of the directors in the database
2. `GET /directors/:id`: this should display the details of whichever director id was requested, the details just include the name but in case we include more info. in the future, create the route
3.  `GET /directors/:id/edit`: this should bring the user to a form to edit the info. of the director corresponding to the id. (they will be able to edit the name)
4. `PUT /directors/:id`: this should update the director information with the information supplied by the form of the previous route
5.  `GET /directors/new`: this should display a form to enter a new director into the database
6. `POST /directors`: this will add the new director to our database according to the form entries that users enter into the previous route's form

### Create the Directors views

You need to create the corresponding views! The Express/Postgres lecture linked to above includes some hints on creating views, for example, using for loops to loop through the array of directors and to display a div for each one.

### Test and submit a pull requested

Does everything work? If you need help, work with your peers. Whiteboard some logic, pair program/debug.

Once everything is good to go, refer to the [main tutorial](README.md#code-review-and-merging) page to submit the pull request, consult with your peers for a code reviews, merge the code, etc.

After your work has been successfully merged, help out your team until everyone completes the work necessary on their branch.
