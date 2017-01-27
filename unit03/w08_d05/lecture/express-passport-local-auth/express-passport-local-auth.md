# Express, Postgres, and Passport Local Authentication

### Objectives
1. Define authentication in the context of a web app.
2. Explain what Passport and Passport strategies are and how they fit into the Express framework.
3. Install Passport and set up a local authentication strategy.
4. Add authentication to Fazbook.

#### Before that, Express refresher!

Express is a web server. Every time a request comes into Express, e.g. if you navigate to the index of your website in the web browser, Express takes that request and passes it through a series of middleware, along with a response object and a next function, until it gets to a route that matches it. All of those `app.use()`s are middleware. They take as input that request object, do something with it, and then call `next()` when it's done. The next middleware gets that same request object, possibly modified. Middleware might log something about the request, they might parse the body of the request into a more readable json object, they might parse the cookie that came with the request, or 1,000 other things. The essence of Express is this process of taking a request object and passing it along a series of middleware until it eventually finds a matching route. The route will then usually send the response back to the user. The response might be in the form of a view, or a json object, or even just a string of text or HTML. Route handlers can call multiple functions on the request object that act like middleware. We'll see an example of that later in this lecture. If no routes match there's a 404 not found route handler at the end of the list. One important thing to note is that order matters when it comes to middleware and route handlers.

### Definitions

- Authentication - Authentication is the process of verifying that a user is who she says she is; this is your typical log in system.

- Authorization - Authorization is verifying that users can only perform as many actions as you want them to perform and no more. Making sure that users can't read private data of others, perform administrative actions, etc. fall into the purview of authorization.

## Setup

Copy the `fazbook-auth` directory to a location **outside** of your WDI_HAKUNA_MATATA repository. We will be initializing a git project there so we can later deploy this to Heroku. In order to do this, **the app directory cannot be inside of an existing git repository**.

Once it is copied, `cd` into the copy and run `npm install`. I've already installed the extra packages you need, they include `passport`, `passport-local`, `bcryptjs`, `dotenv`, and `express-session`.

Don't run `npm start`, it won't work!.

Run `git init` to create the git repository and make your first commit.

Go to GitHub and create a new repository *(leave the 'create with readme' box UNCHECKED)* and follow the two lines of instructions for pushing up an existing git repository.

### Recreate the DB and configure Sequelize

Everything we need should be installed.

Run:
```bash
sequelize init
```

We now have to set up our development database. We're going to create a new one just for this authentication lecture/lab/homework. To do that run:

```bash
createdb fazbook_auth_development
```

Go to your `db/config.json` file and change it to look like this:

```json
{
  "development": {
    "username": "YOUR_DB_USERNAME",
    "password": null,
    "database": "fazbook_auth_development",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
```

### Recreate our User model

Run the following command:

```bash
sequelize model:create --name User --attributes "username:string(32) password:text email:string(128) firstName:string lastName:string dob:date"
```

Note: for now, this app does not perform important validation for passwords, etc. We will include this in the second authentication lecture.

Then run:

```bash
sequelize db:migrate
```

## Passport - Authentication Middleware for Node.js

- Passport - Passport is authentication middleware for Node. It is designed to serve a singular purpose: authenticate requests. When writing modules, encapsulation is a virtue, so Passport delegates all other functionality to the application. This separation of concerns keeps code clean and maintainable, and makes Passport extremely easy to integrate into an application. -
  [Passport documentation](http://passportjs.org/docs/overview)

- Passport Strategy - Passport recognizes that each application has unique authentication requirements. Authentication mechanisms, known as strategies, are packaged as individual modules. Applications can choose which strategies to employ, without creating unnecessary dependencies. For example, there are separate strategies for GitHub logins, Facebook logins, etc. -
  [Passport documentation](http://passportjs.org/docs/overview)

- bcrypt - A password hashing function that allows us to store encrypted passwords in our database rather than storing the actual passwords.

## Setting up Passport

### auth directory

Create an auth directory in the root of your app

Add the following files to the auth directory: `auth-helpers.js`, `local.js`, and `passport.js`.

### auth-helpers.js

This file will contain various helper functions that we use throughout our app. For now we are just going to add a function that will use bcrypt to compare passwords. Add the following code:

```javascript
const bcrypt = require('bcryptjs');

const models = require('../db/models/index');

function comparePass(userPassword, databasePassword) {
  return bcrypt.compareSync(userPassword, databasePassword);
}
```

### passport.js

The passport.js file includes two functions, one to serialize the user and one to deserialize the user. Serializing is a process whereby we take the user info. in the form of something like a json object and turn it into a format the computer can store in a session in memory. Deserialization is when the user data is plucked out of the session memory and converted to something like a json object so the app can do stuff with the data, e.g. get the user's email or first name. Add the following code:

```javascript
const passport = require('passport');
const models = require('../db/models/index');

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    models.User.findById(id)
    .then((user) => { done(null, user); })
    .catch((err) => { done(err, null); });
  });
};
```

### local.js

The local.js file contains the details of our local strategy. By local we mean the user will log in with a username and password. This is contrasted with other strategies such as oauth strategies, which allow users to log in with various other accounts such as their facebook account. Add the following code:

```javascript
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const init = require('./passport');
const models = require('../db/models/index');
const authHelpers = require('../auth/auth-helpers');

const options = {};

init();

passport.use(new LocalStrategy(options, (username, password, done) => {
  // check to see if the username exists
  models.User.findAll({
    where: {
      username
    }
  })
  .then((user) => {
    if (user[0] === undefined) {
      return done(null, false);
    }
    if (!authHelpers.comparePass(password, user[0].dataValues.password)) {
      return done(null, false);
    } else {
      return done(null, user[0].dataValues);
    }
  })
  .catch((err) => { return done(err); });
}));

module.exports = passport;
```

```
git add -A
git commit -m "add passport config, local strategy, auth helpers"
```

### app.js

First we're going to update `app.js` to include the passport middleware. We also need to include session middleware for express. Together these middleware will allow us to authenticate users using cookies. As long as the user is logged in, there will be an active user session in our express app for that user. When a logged in user makes requests, they send along some data from the cookie. The cookie is kinda like a key for the session.

Add the following code under the required modules (paste it in line 7) in `app.js`:

```javascript
const session = require('express-session');
const passport = require('passport');

const index = require('./routes/index');
const authRoutes = require('./routes/auth.js');
const userRoutes = require('./routes/user.js');
const app = express();

// load environment variables
require('dotenv').config();
```

We're adding the necessary modules and adding in some new routes we'll be creating. We also initialize dotenv. dotenv is a node module that makes it really easy to include environment variables in your app. We're doing this because our cookies require a secret key. Follow the directions in .env-sample to create your secret key. Make sure to .gitignore your new .env file! To add a .gitignore add a `.gitignore` file in the root of your project (next to app.js). In that file you can list files and directories for git to ignore. Add both `node_modules` and `.env`. `node_modules` takes up a ton of space so we dont wan't to put that in git and the .env file normally contains sensitive information, so we don't want that in git either.

We now need to tell express to use our express-session and passport middlewares. Directly underneath the second bodyParser middleware copy the following code:

```javascript
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
```

The final change we need to make to app.js is to update our routes. Add the following code after the list of application middleware:

```javascript
app.use('/', index);
app.use('/auth', authRoutes);
app.use('/user', userRoutes);
```

```
git add -A
git commit -m "add express-session, passport, new routes"
```

## Setting up our register, login, logout, & user routes

### GET /auth/register

Now lets add the ability to register users. To do that we first need a registration form and a register route. In the routes directory, add `auth.js`. Add the following code:

```javascript
const express = require('express');
const router = express.Router();

const authHelpers = require('../auth/auth-helpers');
const passport = require('../auth/local');

router.get('/register', authHelpers.loginRedirect, (req, res)=> {
  res.render('auth/register');
});
```

The view template for this is already set up. It contains a form of all the necessary fields. Read through it. The route will first go through the custom middleware we wrote called `loginRedirect`. This will redirect a logged in user to their user profile page if they're already logged in. We don't want logged in users accessing the register page. If the user isn't logged in, express goes to the **next** middleware. Why? Because the `loginRedirect` middleware calls `next()` if the user isn't logged in. Add the following code to the auth-helpers.js file:

```javascript
function loginRedirect(req, res, next) {
  if (req.user) return res.status(401).json(
    { status: 'You are already logged in' }
  );

  return next();
}
```

For now it will always `return next()`. Let's add our route to actually register the user!

### POST /auth/register

When the user posts to the `/auth/register` route, the browser will send all the data contained in the form field to our express server. Our route middleware will then create a new user with that data. Add the following code to the `routes/auth.js` file:

```javascript
router.post('/register', (req, res, next)  => {
  return authHelpers.createUser(req, res)
  .then((response) => {
    console.log('registration successful');
  })
  .catch((err) => { res.status(500).json({ status: 'error' }); });
});
```

The actual work of creating the user is offloaded to a function in our `auth-helpers` file. Let's add that code to that file:

```javascript
function createUser(req, res) {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);

  return models.User.create({
    username: req.body.username,
    password: hash,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    dob: req.body.dob
  }).then(() => {
    res.redirect('/');
  });
}
```

Notice first that we encrypt the password. Then we insert a user into the Users table. Then we redirect to the homepage. For now, it's a little awkward to get redirected to the homepage where you still have to log in to get to the user profile. We'll fix that next time.

Now that we can register users, let's give them the ability to log in.

### POST /auth/login

First we have to provide a page to log in. Add the following route to `routes/auth`:

```javascript
router.get('/login', authHelpers.loginRedirect, (req, res)=> {
  res.render('auth/login');
});
```

We again first check to see if the user is already logged in. If they are they go to their profile page. If they aren't, they get to the log in page. Again, this is a form. Once they hit the log in button, we POST to the same route... Make sure to read through the views for this app.

Passport makes this POST route handler pretty easy to write. Add the following code to `routes/auth`:

```javascript
router.post('/login', passport.authenticate('local', {
    successRedirect: '/user',
    failureRedirect: '/auth/login',
    failureFlash: true
  })
);
```

Passport authenticates the user for us based on the strategy we tell it to, in this case the local strategy. It authenticates according to the function in `auth/local.js`. Refer back to that to see what's going on there.

### GET /logout

Logging out is pretty straightforward. Add the following, again, to `routes/auth`:

```javascript
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
```

**NOTE** in the morning lecture we didn't export the auth router. That caused a nasty bug and error messgae. Good listen though, you have to export to make the modules works!

This logs the user out (kills the session), then redirects the user to the homepage.

That's about it for our authentication routes

```bash
git add -A
git commit -m "add auth routes"
```

### GET /user

Now that users can log in, we'll give them a user profile page. For now it's simply under `/user`. We'll make it more interesting in the next auth lecture. Let's add the following code to `routes/user`:

```javascript
router.get('/', authHelpers.loginRequired, (req, res, next) => {
  res.render('user/index', {
    user: req.user.dataValues
  });
});
```

We have a new auth helper method here. This, rather than redirecting logged in users, will redirect users that aren't logged in. We're protecting this route. Again, the auth helper is middleware. If the user isn't logged in, they get an error, if they are logged in, the helper function calls `next()` where, according to the route, they get redirected to a user profile page that includes their own user data, to be displayed. Add the following code to the `auth/auth-helpers` files:

```javascript
function loginRequired(req, res, next) {
  if (!req.user) return res.status(401).json({ status: 'Please log in' });

  return next();
}

module.exports = {
  comparePass,
  loginRedirect,
  loginRequired,
  createUser
}
```

```bash
git add -A
git commit -m "add user profile page route, loginRequired helper method"
```

## Resources

[Passport documentation](http://passportjs.org/docs/overview)

[One of the best Node.js/Express bloggers, the basic architecture of this log in app is from this particular post](http://mherman.org/blog/2016/09/25/node-passport-and-postgres/)

[Express documentation, now that you've had the lego version of Express, re-read the docs. Seriously, read through all of 'Getting started', and the first five sections of the 'Guide', it's not too much](http://expressjs.com/)

## Deploy
Using Heroku CLI: `heroku create`. If it doesn't push it up for some reason run
`git push heroku master`

**OR**

Create a new app in Heroku. Click on the Deploy tab and follow the instructions to deploy an existing app (do not use the heroku create command). Push it up.

**THEN**

Go the the Heroku dashboard for you app and click on the Resources tab.

In the add-ons section type postgres and click Heroku Postgres. Leave the default Hobby Dev - Free option selected and click the Provision button.

Modify your db/config.json to look like this:
```
{
  "development": {
    "username": "YOUR_DB_USERNAME",
    "password": null,
    "database": "fazbook_development",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "use_env_variable": "DATABASE_URL"
  }
}
```

Replace replace 28-30 in your `bin/www` file with this:
```
var models = require('../db/models/index');
models.sequelize.sync().then(function () {
  server.listen(port);
  server.on('error', onError);
  server.on('listening', onListening);
});
```

Then:
```
git add -A
git commit -m "Add production db configuration"
git push heroku master
```
