# Git

So far we have just scratched the surface of what git is and how it can be
used. In this project we will be diving a little bit deeper into some of the
features that make git so useful for collaboration on code projects.


### How we will use git for this project.

This project will provide your group with the opportunity to experience a
collaborative git workflow while working together to build a full stack
Express/Postgres CRUD application. Movies App will have three resources -
`users`, `movies` and `directors`. Each member of the team will be responsible
for building the CRUD features for one of these three resources.

* Person1 - Users resource (including auth)
* Person2 - Movies resource
* Person3 - Directors resource

Once the core CRUD functionality for these resources (and user authentication)
is completed, you will work to add the ability for users to favorite movies.

### Project management for this tutorial

You can choose to use either trello or zenhub. You've seen trello before. Zenhub is a chrome extension that integrates directly into GitHub. It allows you to organize issues for the repo and drag and drop issues between different categories. Check it out in the chrome store. You can choose which to use, but we encourage you to give zenhub a try. You can use both if you want to.

# Initialize the project and create the GitHub repo

**NOTE** You must do the setup phase on one person's computer. Even so, all group members
should be involved in this process (pair programming).

### Generate the Express app and install Nodemon
```
express moviesApp -e -c sass --git
```

This command executes the express generator and creates an express project
called moviesApp with ejs as the templating language, sass as the styling
language and adds a .gitignore file to the project root. The .gitignore file is
filled with common files and directories you would want to ignore, like
node_modules and log files. Check it out!

*Note*: Many people had difficulties getting their scss/css to work on heroku last night, this was due to a conflict between the ruby version of sass and the node version of sass, if you ran the express generator command and specified `-c sass`. To use sass the easy way on this project run the express generator command exactly as it states above. Then:

1. Change line 26 in app.js from `indentedSyntax: true,` to `indentedSyntax: false,`
2. Delete the `style.sass` file in `public/stylesheets`
3. Create `stlye.scss` in `public/stylesheets`

Do all of your sass work in that newly created file. That's it! You don't have to run any commands yourself to convert the scss file to css, node will do it for you every time you restart the server.

Some things you will find useful in sass:

1. variables - they make life easy
2. nesting - I like nesting
3. mixins - especially for things like animations that multiple classes will use
4. partials and imports - this makes code organization a breeze, especially if your .scss file grows to over a few dozen lines

Then run

```
npm install --save-dev nodemon
```

In package.json add a dev script to your scripts property that starts nodemon.
```
...
"scripts": {
  "start": "node ./bin/www",
  "dev": "nodemon ./bin/www"
},
...
```
You will run your local server by running: `npm run dev`. We must leave the
`start` command alone because that is what Heroku runs to boot your app when you
deploy it. Nodemon is a dev dependency, and not installed when `npm install` is
run in the production environment. Therefore, the nodemon command must be mapped
to a different npm script.

Run `npm run dev` and visit localhost:3000 to make sure everything is working.

### Install Sequelize

```
npm install -g sequelize-cli pg
npm install --save sequelize sequelize-cli pg pg-hstore
```

Add a `.sequelizerc` file to your project root and fill it with
```
var path = require('path');

module.exports = {
  'config': path.resolve('./db', 'config.json'),
  'migrations-path': path.resolve('./db', 'migrations'),
  'models-path': path.resolve('./db', 'models'),
  'seeders-path': path.resolve('./db', 'seeders')
}
```

Then run:
```
sequelize init
```

Create the app db:
```
createdb movies_app_development
```

Change your `db/config.json` to look like this:
```
{
  "development": {
    "password": null,
    "database": "movies_app_development",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "use_env_variable": "DATABASE_URL"
  }
}
```

Notice that in this config we do not have a username for the development
database. That is because each member of the team will have a different database
username, so if we hard code the db username of one groupmember, the other group
members will have to change it when they clone the repo, and there will also be
merge conflicts if everyone doesn't change it back to what it was before merging
their branches. Not a very good workflow!

To remedy this we are going to alter the code in `db/models/index.js` where the
database username is referenced. Instead of pulling the username from this
config, we are going to reference an environment variable. Then everyone on the
team can have their own db username in a .env file that is ignored by git and we
won't have to introduce and environment specific code into the codebase!

Change line 14 in the `db/models/index.js` file with this:
```javascript
var sequelize = new Sequelize(
  config.database,
  process.env['DATABASE_USERNAME'],
  config.password,
  config
);
```

### Set up environment variable

Now we have to set the environment variable. To do that, add a `.env` file to
the project root. Then fill it with:
```
DATABASE_USERNAME="your_database_username"
```
**NOTE** the other two group members will have to add their own `.env` files and
include their own database usernames in it once they clone the repo to their
machines. This is becuase the `.env` file is ignored by git (which is a good
thing).

Finally, we have to:
```
npm install --save dotenv
```

And to our `app.js`:
```
require('dotenv').config();
```

### Initialize the git repo and push it to GitHub

Run
```
git init
git add -A
git commit -m "First commit"
```

Set up a new repo in GitHub. Push it up. Add Person2 and Person3 as
collaborators.

### Person2 and Person3 only

Clone the repo.

Create the app db

```bash
createdb movies_app_development
```

[Add your `.env` file with your database usernames.](#Set-up-environment-variable)

Run `npm run dev` to make sure it's all working.

# Feature Development

Now that everyone is on the same page, you can all branch off and start working
on your features! When we work on features, we do our work on *feature
branches*. By working on seperate branches, we don't polute the master branch
with incomplete code. Master should always be production ready, so we don't
merge out feature branches into master until they've been reviewed, tested and
signed off on by the other members of our team.

When we create a new branch, we use the `git checkout -b` command and give it
the name of the branch we want to create. For example, if I am going to work on
a feature that introduces commenting to the post show page of the app, I would
use a command like this:
```
git checkout -b py-add-commenting-to-post-show-page
```

Notice that mine includes a description of the code it contains. Also, I have
prefixed the branch title with my initials (`py`). This is so that when people
are viewing the list of branches, they can easily know what branches were authored
by who.

### Person1 - Users and auth feature

Check out a new branch
```
git checkout -b p1-add-users-and-auth
```

Follow these instructions for the users feature. [Link](users.md)

### Person2 - Movies CRUD

Checkout a new branch
```
git checkout -b p2-movies-crud
```

Follow these instructions for the movies feature. [Link](movies.md)

### Person3 - Directors CRUD

Checkout a new branch
```
git checkout -b p3-directors-crud
```

Follow these instructions for the directors feature. [Link](directors.md)

# Code review and merging

### Making sure your branch is up to date

Once you have finished developing your feature and committed your work, you
have to push your feature branch up to GitHub and open a pull request. But
before you push your feature branch up, you want to make sure that you have also
pulled in any changes that have occured on the master branch while you've been
working. To do this, run:
```
git pull --rebase origin master
```

This command will fetch the branch version of the branch master from origin
(GitHub). Then it does a `git rebase origin master` which effectively takes the
new commits from your branch and applies them on top of the commits from the
master branch. For example, if `my-feature-branch` has commits:

1. `add users`
2. `add movies`

And the `master` branch on origin has commits:

1. `add users`
2. `add directors`

Then when I run `git pull --rebase origin master`, the local copy of
`my-feature-branch` will now have commits:

1. `add users`
2. `add directors`
3. `add movies`

Read
[this stack overflow](http://stackoverflow.com/questions/16666089/whats-the-difference-between-git-merge-and-git-rebase/16666418#16666418)
to get more insight into the difference between `pull` and `pull --rebase`. You
could also just use `git pull` here, but it's nicer to use the rebase flag when
you're learning git to keep the commit history of the master branch linear. Refer
to the stack overflow if that doesn't make sense.

> *WTFFFF! I ran `git pull --rebase origin master` and now I have the word
`CONFLICT` all over my terminal 😖*

### Navigating conflicts

Chill. It's just a merge conflict. All that means is that one of your commits
changed a part of a file that was changed by another commit that was applied to
master after you branched off.

Every conflict line will show you a path to the file where the conflict occurred.
Visit those files and take a look at what was added to master since you branched
off. A typical merge conflict might look something like this:

```javascript
<<<<<<< HEAD
router.get('/users', function(req, res, next) {
  res.send('here are all the users');
});
=======
router.post('/users', function(req, res, next) {
  res.send('you added a user');
});
>>>>>>> my commit message
```

The code in the `HEAD` section indicates the code on master in this location.
The code in the `my commit message` section represents the code that I added in
the commit that is labeled with 'my commit message'. In this case, it's pretty
safe to assume that we want to have both routes in this file. The conflict is
occurring because they were added on the same lines. To fix this, we can just
rearrange the file to include both routes. It will look like this:
```javascript
router.get('/users', function(req, res, next) {
  res.send('here are all the users');
});

router.post('/users', function(req, res, next) {
  res.send('you added a user');
});
```

Sometimes you can't just leave both pieces of code, and it's not obvious which
version of the code should remain. Consider this example:
```javascript
router.get('/users', function(req, res, next) {
<<<<<<< HEAD
  res.send('here are the users');
=======
  res.send('these users are for you');
>>>>>>> wip
});
```
In this case, we know that we can only call `res.send` once inside of this route
function. However, it is hard to tell which version is preferred. At this point
you must go to the other members of your team and figure out what the final
version should be. Whatever you decided, your code should look something like
this:
```javascript
router.get('/users', function(req, res, next) {
  res.send('whatever message you picked');
});
```

Once all of the conflicts have been resolved, go back to you terminal and run:
```
git add .
git rebase --continue
```

After that, you should see a message indicating your commits were applied. If
more conflicts arise, don't worry. It just means that subsequent commits
introduced new conflicts. Just follow the same steps until the rebase is
complete.

### Pushing your branch and creating a pull request

Now that your feature branch is up to date, you can push it by using:
```
git push -u origin your-feature-branch-name
```

Once your feature branch has been pushed to origin:
- Go to the repo page on GitHub.
- When you get there you should see a yellow box above the file browser
with a green button that says "compare & pull request".
- Click the button.
- When you get to the new pull request form, leave the base branch as master and the
compare branch as your feature branch.
- Give your PR a meaningful title and description and click the "Create pull
request" button.

**Note** you should have a green "Able to merge" checkmark above your new pull
request form. If there is a red "Unable to merge" X then follow the instructions
for rebasing and navigating merge conflicts.

Finally, ping your teammates with the link to your PR and ask them to review
your code. You need to have both members sign off on your branch before it can
be merged into master.

### Code review

What are we looking for in a pull request? Mostly code quality. Keep an eye out
for things like:

- Syntax and formatting
- Meaningful design patters
- DRYness

Don't feel bad requesting changes on a pull request! It's far easier to fix
issues now before they make their way into the master branch!

If changes are requested, the branch author can make them and create a new
commit. Then they just just push the branch up to origin and the new commit will
be reflected in the pull request!

### Merging your branch

Once your teammates have approved your PR, it's time to merge it!
- Go to the PR in GitHub. There will be a big green "Merge pull request" button.
- Click the arrow on the right of the button to reveal the dropdown.
- Select the 'Rebase and merge' option and then click the confim button.

Now go to your terminal and run:
```
git checkout master
git pull
git branch -d my-feature-branch
git push origin :my-feature-branch
```

This updates your local master based on the changes made on origin. The last two
lines delete your feature branch from your local repo as well as from GitHub. It
is good practice to clean up stale branches once you are done using them.

# More Features!

**NOTE** do not begin working on additional features until every group member
has completed their first feature. If you are waiting on someone you can see if
they need help or you can try to refactor the newly added code on master.

Once each member from your group has merged her/his first feature, check out the
[feature requests file](feature-requests.md). Now that you know how to break up
a big projects into managable features that can be worked on in parallel, decide
with your team how you will approach the additional features.
