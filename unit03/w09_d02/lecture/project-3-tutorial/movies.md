# Project 3 tutorial - Movies

### Objectives
1. Add a movie model
2. Implement basic CRUD functionality and routes for movies
3. Add corresponding views

## Setup

First, make sure you start a new feature branch. Refer to the [main tutorial markdown](README.md#Feature-Development).

The database, movies_app_development should have been created and we should have run `sequelize init` already. If you haven't done this refer to the [main markdown](README.md#Install-Sequelize) of the tutorial.

Commit changes!

### Create the Movie model

Run the following command:

```bash
sequelize model:create --name Movie --attributes "title:string(255) synopsis:text director_id:number"
```

Refer to Paris's tutorial on Express/Postgres for help with the implementation of this CRUD functionality: [Express/Postgres CRUD tutorial](https://github.com/ga-students/WDI_HAKUNA_MATATA/blob/master/unit03/w08_d04/lecture/express-and-postgres/express-and-postgres.md)

Seeding a database is a process whereby you insert into the database a bunch of data right from the start so you can begin working on and testing the routes as you go. Take a look at the seeder files in this directory to see what's going on there. Try to explain it to the person working on Users/Auth. :D

Check out the section on [seeding your database](seeds/README.md) to learn how
to add some dummy data to your development environment.

### Create the Movies routes

The following is a list of routes you should create. Commit as you go. Note: you might want to create the necessary .ejs files as you go so you can test the routes out:

1. `GET /movies`: this should list all of the movies in the database
2. `GET /movies/:id`: this should display the details of whichever movie id was requested
3.  `GET /movies/:id/edit`: this should bring the user to a form to edit the info. of the movie corresponding to the id. Don't worry about allowing the user to edit the director for now, we can't be sure that whomever is in charge of that part of the app has completed their work
4. `PUT /movies/:id`: this should update the movie information with the information supplied in the form of the previous route
5.  `GET /movies/new`: this should display a form to enter a new movie into the database
6. `POST /movies`: this will add the new movie to our database according to the form entries that users enter into the previous route's form
7. `DELETE /movies/:id`: this  will delete the movie that has that id as its primary key

*NOTE*: The `DELETE` method is tricky in an HTML form and requires a few extra steps. Refer to Paris's Express/Postgres lecture for help with this (linked to up above).

### Create the Movies views

You need to create the corresponding views! The Express/Postgres lecture linked to above includes some hints on creating views, for example, using for loops to loop through the array of movies and to display a div for each one.

### Test and submit a pull requested

Does everything work? If you need help, work with your peers. Whiteboard some logic, pair program/debug.

Once everything is good to go, refer to the [main tutorial](README.md#code-review-and-merging) page to submit the pull request, consult with your peers for a code reviews, merge the code, etc.

After your work has been successfully merged, help out your team until everyone completes the work necessary on their branch.
