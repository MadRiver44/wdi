# Project 3 tutorial - Users/Auth

### Objectives
1. Add a user model
2. Edit the user model and the migration
3. Implement authentication

## Setup

First, make sure you start a new feature branch. Refer to the [tutorial markdown](README.md#Feature-Development).

Add the necessary dependencies, they include `passport`, `passport-local`, `bcryptjs`, `dotenv`, and `express-session`.

The database, movies_app_development should have been created and we should have run `sequelize init` already. If you haven't done these refer to the [main markdown](README.md#Install-Sequelize) of the tutorial.

### Create our User model

Run the following command:

```bash
sequelize model:create --name User --attributes "username:string(32) password:text email:string(128) firstName:string lastName:string dob:date"
```

The sequelize CLI creates the model for us and the migration. But, we have to manually add some properties to the model file and the migration file before we run the migration. In this case, we want to make sure the username is *unique*. We don't want two or more people to register with the same username!

First, edit the user.js file in the `db/models` directory. Change the username entry to the following:

```javascript
  username: {
    type: DataTypes.STRING(32),
    unique: true
  },
```

instead of just `username: DataTypes.STRING(32),`

Second, edit the  create-user.js file in the migrations directory. Change the username entry to the following:

```javascript
  username: {
    type: Sequelize.STRING(32),
    unique: true
  },
```

instead of just:

```javascript
  username: {
    type: Sequelize.STRING(32)
  },
```

Now we can run the migration:

```bash
sequelize db:migrate
```

## Setting up Passport

The authentication code has been refactored since the fazbook_auth lecture. Carefully follow these directions and take note of the changes.

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

Add the following code:

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

Compare this version of the `local.js` file with the one from the fazbook_auth lecture. Add comments to explain the adjustments made. Add the following code:

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
  models.User.findOne({
    where: {
      username: username
    }
  })
  .then((user) => {
    console.log(user);
    if (!user) {
      return done(null, false);
    }
    if (!authHelpers.comparePass(password, user.dataValues.password)) {
      return done(null, false);
    } else {
      return done(null, user.dataValues);
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

We have to edit the `app.js` in exactly the same manner as we did during the fazbook_auth tutorial. Refer to the `app.js` section of that tutorial to edit the `app.js` for this project. [Link to fazbook_auth tutorial markdown](https://github.com/ga-students/WDI_HAKUNA_MATATA/blob/master/unit03/w08_d05/lecture/express-passport-local-auth/express-passport-local-auth.md)

*NOTE*: There is a minor change you have to make when you import the routes. See if you can work it out.

```
git add -A
git commit -m "add express-session, passport middleware, auth route imports"
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

Make sure you set up the views for this route! Refer to the fazbook_auth lecture for guidance:

```javascript
function loginRedirect(req, res, next) {
  if (req.user) res.redirect('/user');

  return next();
}
```

For now it will always `return next()`. Let's add our route to actually register the user!

### POST /auth/register

When the user posts to the `/auth/register` route, the browser will send all the data contained in the form field to our express server. Our route middleware will then create a new user with that data. This route and the helper function have been refactored. Take note of the changes from the fazbook_auth tutorial! Add the following code to the `routes/auth.js` file:

```javascript
router.post('/register', (req, res, next)  => {
  authHelpers.createUser(req, res)
  .then((user) => {
    req.login(user, (err) => {
      if (err) return next(err);

      res.redirect('/user');
    });
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
  });
}
```

Now that we can register users, let's give them the ability to log in.

### POST /auth/login

First we have to provide a page to log in. Add the following route to `routes/auth`:

```javascript
router.get('/login', authHelpers.loginRedirect, (req, res)=> {
  res.render('auth/login');
});
```

The login ejs view has not been provided for you! Make sure you build that out.

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

```bash
git add -A
git commit -m "add auth routes"
```

### GET /user

Now that users can log in, we'll give them a user profile page. Let's add the following code to `routes/user`:

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
  if (!req.user) res.redirect('/auth/login');

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

### Create your Pull Request

Head back to the main tutorial doc and follow the steps on [Code review and
merging](README.md#code-review-and-merging).
