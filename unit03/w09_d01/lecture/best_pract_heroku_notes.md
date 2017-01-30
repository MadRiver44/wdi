# Deployment / General Best Practices

###Objectives
- Take a dive into **Express Generator**
- A quick review - Nodejs `process` object
-  Deployment 101
- Deploy a simple web app to **Heroku**
- LAB

## Express Generator
- What is it?
	- A command line utility to quickly scaffold an express app. 
	- Attempts to make our life easier through automation.

		
- **Example Usage**: `express --view=ejs --css=sass --git heroku-express`
- **Command reads as follows:** Run `express generator` with `ejs` engine/view support. `Sass` as the css engine. Add a .gitignore file. Producing all of this goodness in a folder called `heroku-express`.

Above command produces the following directory/file structure:

```
 create : heroku-express
   create : heroku-express/package.json
   create : heroku-express/app.js
   create : heroku-express/.gitignore
   create : heroku-express/public
   create : heroku-express/public/javascripts
   create : heroku-express/routes
   create : heroku-express/routes/index.js
   create : heroku-express/routes/users.js
   create : heroku-express/views
   create : heroku-express/views/index.ejs
   create : heroku-express/views/error.ejs
   create : heroku-express/public/images
   create : heroku-express/public/stylesheets
   create : heroku-express/public/stylesheets/style.sass
   create : heroku-express/bin
   create : heroku-express/bin/www

   install dependencies:
     $ cd heroku-express && npm install

   run the app:
     $ DEBUG=heroku-express:* npm start
```

The resulting structure give you a starting point to develop an express application. It has a views. routes and public folder. Keep in mind, express is unopinionated, so it's highly recommended you make modificatons to the structure where necessary. 

- Other generators in the wild:
	- [Yeoman](http://yeoman.io/)
	- [Create React App](https://github.com/facebookincubator/create-react-app)
	- [Slush](http://slushjs.github.io/)

## Structure your files
For example, the generated **views** folder could benefit from a partials folder and perhaps a template folder. Again, there is no wrong way, as many teams have different structures project to project.

##Add a .gitignore!
The Express Generator has a flag `--git` to provide a generic .gitignore file. Best practice is to have a .gitignore for all your projects, express generated or not. We don't want to have folders like node_modules making their way to our repo. Nor do we want private keys/credentials.

- [A collection of useful .gitignore templates](https://github.com/github/gitignore)

## Heroku
- **What is Heroku?**
	-  A cloud Platform-as-a-Service (PAAS), used to deploy and manage websites and applications
	- Takes the pain out of configuring servers
	- Can have collaborators
	- Can use addons
	- ["Heroku can be a great fit for teams who want to do zero dev ops or create small apps] (https://blog.risingstack.com/node-hero-deploy-node-js-heroku-docker/)

	
- **What are Dynos?**
	- A lightweight container that runs the command specified in the Procfile
	- With your free account, you get **one** that sleeps after a half hour of inactivity


##Process Object
- The process object is the global object in Node, which can be accessed from anywhere
- The process object contains a variety of properties (objects and methods) that allow you to access information about the running process
- Each node instance is a running process
- processes can be spun up and destroyed
- commonly use properties in the process object are `env`, `pid`
- For Example, in terminal type node to enter repl.
- Once in, type the following:

```
> process.pid
78615 // the above command will output the Process ID. This is the ID that can be used to destroy/force quit a process

> process.platform
'darwin' // this command lets one see the platform the current process is being run on
```



## LAB
Create an generic express app using express generator, and deploy it to Heroku. Lab instructions can be found in the labs folder.


## Definitions
- [**ProcFile**](https://devcenter.heroku.com/articles/procfile): Tells Heroku what kind of server it will be running, and what commands need to be executed to kickstart your application.

- [**Dynos**](https://devcenter.heroku.com/articles/dynos): Are isolated, virtualized Unix containers, that provide the environment required to run an application.

- [**Buildpacks**](https://elements.heroku.com/buildpacks): Are scripts that are run when your app is deployed.

## Resources
- [Environment Variables](https://www.npmjs.com/package/dotenv)
- [A collection of useful .gitignore templates](https://github.com/github/gitignore)
- [Node.js + Express - Tutorial - Express Project Structure & First little App](https://www.youtube.com/watch?v=bf8L9tQi_MQ)
- [Git Ignore Docs](https://git-scm.com/docs/gitignore)
- [The Twelve Factor App](https://12factor.net/)
- [Best Practices for Node.js Development
](https://devcenter.heroku.com/articles/node-best-practices)
- [Create your own generator] (http://yeoman.io/authoring/)