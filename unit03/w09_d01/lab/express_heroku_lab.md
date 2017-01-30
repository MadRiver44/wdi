# EXPRESS HEROKU LAB
## Let's scaffold an Express site and deploy to Heroku!


**CHECKLIST**   
Before you do anything, it's best practice to check if you have all the prerequisites. I think you do, but it never hurts to go through the motions.

**Do you have a Heroku Account?**  
 - Create one - [https://www.heroku.com/](https://www.heroku.com/)

**Do you have the following installed?** Node, npm, heroku (and logged in), git

**Verify Via Terminal**  ▪️

1. **NODEJS:** Run `node --version`
2. **NPM:**  Run `npm --version`
3. **HEROKU CLI (Use to be called Toolbelt 😶):** Run `heroku --version`
4. **GIT:** Run `git --version`
 

### Express Generator Land
-  Install [Express Generator](http://expressjs.com/en/starter/generator.html) - **In Terminal** `npm install express-generator -g`
-  Express Generator 
	-  Run `express --view=ejs --css=sass --git heroku-express`
	-  **Command reads as follows:** Run `express generator` with `ejs` engine/view support. `Sass` as the css engine. Add a .gitignore file. Producing all of this in a folder called `heroku-express`.

- After Express Generator is done, you should see the following directory/file structure:

	```
	
	create : heroku-express
   create : heroku-express/package.json
   create : heroku-express/app.js
   create : heroku-express/.gitignore
   create : heroku-express/public
   create : heroku-express/public/javascripts
   create : heroku-express/public/stylesheets
   create : heroku-express/public/stylesheets/style.sass
   create : heroku-express/routes
   create : heroku-express/routes/index.js
   create : heroku-express/routes/users.js
   create : heroku-express/public/images
   create : heroku-express/views
   create : heroku-express/views/index.ejs
   create : heroku-express/views/error.ejs
   create : heroku-express/bin
   create : heroku-express/bin/www

   install dependencies:
     $ cd heroku-express && npm install

   run the app:
     $ DEBUG=heroku-express:* npm start
	```
	
	
	-  Follow the installation instructions:

	
```
   install dependencies:
     $ cd heroku-express && npm install

   run the app:
     $ DEBUG=heroku-express:* npm start
```
-  Run local server to verify -> `DEBUG=heroku-express:* npm start`

### But this doesn't work for us when we're in "**development mode**", so let's make some changes!

- `Ctrl C` to kill the current node process

- Open the package.json file and add `"dev": "NODE_ENV=dev nodemon ./bin/www"` right below the `start` direction. The end result of your file should look like this:

```
{
  "name": "heroku-express",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node ./bin/www",
    "dev": "NODE_ENV=dev nodemon ./bin/www"
  },
  "dependencies": {
    "body-parser": "~1.15.2",
    "cookie-parser": "~1.4.3",
    "debug": "~2.2.0",
    "dotenv": "^4.0.0",
    "ejs": "~2.5.2",
    "express": "~4.14.0",
    "morgan": "~1.7.0",
    "node-sass-middleware": "0.9.8",
    "serve-favicon": "~2.3.0"
  }
}

```

- Via Terminal: Run `npm run dev`. Now you should be running nodemon with the environmet variable `NODE_ENV` equal to `dev`
- In the routes folder, open index.js, and add the following modification to the res.send method:

```
  res.render('index', { title: 'Express', env: JSON.stringify(process.env.NODE_ENV) });

```

- Add the following code from this [gist](https://gist.github.com/patrickandre/fa912e0dc5238be5918f94a2d51d2332) to the `index.ejs` page. Hint: It's in the views folder 

- View your localhost page, and make sure it looks pretty. Should look something like [https://patsapplication.herokuapp.com/](https://patsapplication.herokuapp.com/).

### GIT/Heroku Land 
-  Run `git init` to initialize the folder as a git-based project.
-  Run `git add .` to add all the files to git staging.
-  Run `git commit -m 'first commit'`.
-  **Now you're ready to make this project into a Heroku application!**
-  Run `heroku create` [add your optional custom name] to create an app.
-  Check the git remote is correctly pointing to the heroku remote. Run `git remote -v`. 
-  Run `heroku open`, which will open your web app in your browser. You should see a welcome webpage with the text => **Heroku | Welcome to your new app!** 
-  **ALL GOOD SO FAR? GREAT! 😊**
-  If not, raise your hand, and I'll be right over. Or come to me. 
-  Let's push it to Heroku...
-  Run `git push heroku master` and let Heroku do its magic. 
	-  It will detect this is a node.js-based app.
	-  Some other fun stuff (Creating runtime environment).
	-  Read package.json for all dependencies and install them (express, etc).
	-  Run npm start.
- Run `Heroku open`, and you should see the default "express" welcome screen we saw earlier in our local.

- Slack me your link. 

###Poking Around

- Via the browser, go to your dashboard: [https://dashboard.heroku.com/](https://dashboard.heroku.com/).
- Click/Navigate to you new application's overview section.
- In the upper-right corner, there is a "more" button.
- Click and navigate to the "Production Check" where you will see a couple of failed items. The items we should be concerned with are **App monitoring**, **Log monitoring**, and **Custom Maintenance Pages**.
- Pick any of them and get them to have a passing grade by following the instructions. Some expect an [add-on](https://elements.heroku.com/addons). Others expect some [configuration vars](https://devcenter.heroku.com/articles/config-vars).
 