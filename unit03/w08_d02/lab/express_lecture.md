---
title: Views in Express
type: lesson
duration: "1:20"
creator:
competencies: Server Applications
---


# Routes Review and EJS Templates

### Objectives
*After this lesson, students will be able to:*

- Create and render views in an Express application
- Work with EJS templates
- Render partials and iterate over data in views

### Routes Review
As a brief review of routing lets first discuss how to setup a default route and extend it to include additional routes along with parameter input.
```javascript
app.get('/',function(req,res) { 
  res.send(`<h1>Welcome to Home Page</h1>`
})

// additional routes can be created
app.get('/feedback',function(req,res) { 
  res.send(`<h1>Welcome to the Feedback Page</h1>`
})

// work with req.params to pull in url parameter input
app.get('/feedback/:id',function(req,res) { 
  var feedback = req.params.id
  res.send(`<h1>You choose ${feedback}</h1>`
})
```

This setup is fine for small projects with few routes however as the site expands adding more routes here would take up alot of app.js realestate.  So moving routes into their own files is a much better approach. 

```javascript
// within a /routes folder there will be an index.js file for our main route 
// the basic structure would be:
var express = require('express');
var router = express.Router();

app.get('/',function(req,res) { 
  res.send(`<h1>Welcome to Home Page</h1>`
});

module.exports = router;
```

Our app.js file would reference this route specifically as:
```javascript
app.use(require('./routes/index'));
```
Routes may require access to json objects or other variables not defined in it's route specific js file.  In order to import those we can use .set() in our app.js file to define a global variable accessible across the whole application.

```javascript
// variable to store the json data
var datafile = require('./data/data.json')
// using .set() to reassociate it with a global variable
app.set('appdata',datafile)
```

Now within the index.js .get() route we would pull that data from the req param as follows:
```javascript
app.get('/',function(req,res) {
  var datafile = req.app.get('appdata')
})
```


## Initial Application Setup - 25min
**Install Dependencies**
Use npm to install the following dependencies:
-express
-ejs
-body-parser (note: this is middleware like express.static())

Configure both the main and scripts sections in package.json as follows:
```javascript
"main": "app/app.js",
  "scripts": {
    "start": "nodemon --watch app"
  }
```

**Configure app.js**
Configure the app.js file according to the placeholders defined.

## Views in Express

### Basic Review of Current Setup
The package.json file has been configured to start nodemon using both the -e and --watch switches.  -e will monitor only the specific files with the extensions provided and --watch will monitor a specific folder for changes made to those file types defined. 
```javascript
{
  "name": "solution",
  "version": "1.0.0",
  "description": "",
  "main": "app/app.js",
  "scripts": {
    "start": "nodemon -e css,ejs,js,json --watch app"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.14.0"
  }
}
```

During this lecture Express will also include the following methods:

Method | Description 
--- | ---  
.set() | define variables (local\global) or 'view engine'
.get() | retrieve local\global variables
.use() | require specific routes or static folders such as public
.listen() | configure server to listen on specific port
.engine() | set the template file extension
.static() | add static files that get served as part of the web experience
res.send() | send a reponse as part of app.get('/',function(req,res){})
res.json({}) | send json as part of app.get('/',function(req,res){})
res.render() | renders templates within our routes

 set and get env and local variables that we define using the .set() and .get() methods as well as .use() for requiring specific routes and .listen() to confirgure the server to listen on a specific port. We will review\configure those methods specifically later on in this lecture.

## Views in Express 

A lot of times, if we're looking to get a prototype up and running, we'll want to use a templating engine. Using Express out of the box, the view engine is Jade however we will be using EJS which is another alternative that's easy to setup and configure.

EJS is configured to look in the `views` folder for templates

Since, we have an app that's build out - for the most part - let’s focus on how to add views using EJS, include partials and passing data to our views. A `partial` is similiar to a React component and they will be used to divide our page setup into different files and then place references to them in the main index.js file.

## Setting up our app to use EJS 

First, let's require `ejs` in our application's `package.json`.  This should be done by running `npm install ejs --save` and should update package.json with the latest version of ejs:

```json
"ejs": "^2.5.5"
```

Now, let's take a look at our `app.js` file and add the following lines in order to set our views and view engine.  

```javascript
app.set('view engine', 'ejs');
app.set('views','app/views')
// alternate way to set the path is:
// app.set('views', path.join(__dirname, 'views'));
```

By default `ejs` will search the top level app folder for a views folder so if thats not where we intend to put it than we must tell our app where to find it. We can simply define the folder that contains views or we could dynamically concat the dirname with view.  This would be done by requiring the  `path` core Node module.  In our example, we've added the path.join() method. For us, this normalizes all the arguments into a path string which will help when we use the `dirname` global and a file or folder.  After adding this, our app's view folder will look like:  `/Users/your_username/your_projects_folder/app/views`

It won't check for an existing path but it will transform the path string.

The second app.set() tells Express to use the ejs templating engine. This allows you to embed JavaScript to work with data with conditionals in your views.  For example, choosing not to render partials if a user is already logged in. The file path to your view files now will be `.ejs`

The middle line requires the `ejs` module in our app for files it encounters with the `.ejs` file extension.

Since we're ready to use `.ejs` now, let's set up our file structure to make sure our application can call the files properly. Create the following folder structure:

```
- views
--- index.ejs
----- partials
--------head.ejs 
--------header.ejs 
--------jsdefautls.ejs 

```

## Accessing Data in Views
There are several ways to access data in your views so let's take a look at those options:

Method | Description 
--- | ---  
res.render(`{`} ) | associated with a specific router
app.locals.varname = `{}` | defined within app.js and accessible globally
<%= data %> | within an ejs template

Using res.render:
```javascript
router.get('/',function(req,res) {
  res.render('index', {
    pageTitle: 'home',
    pageID: 'home'
  })
```

Using app.locals
```javascript
app.locals.h1Title = "Hakuna Matata...Rock On"
```

Using <%= varname %>
```javascript
 <body id="<%= pageID %>">
```

## Adding Comments in EJS
EJS files include html and js however commenting out one of the other is done as seen here:
```javascript
<% /* <h3>WDI Lesson on Express With Routers and Templates</h3> */ %>
<% // <h3>WDI Lesson on Express With Routers and Templates</h3>  %>
```

## Creating Our Templates and Views - 30min
Use npm to install express and configure app.js to use ejs to render it's views and the ejs where it's views folder is located. 

Now that we have our routes setup it's time to configure our templates so create and index.js and feedback.js template and partials for: Head, Header, JSDefaults (this will hold our js script loaded at the end of our html body) 

Once the templates and partials are created make sure to update the views to include the partials.  Also create additional routes for each one which will render the thier views. 

## Conclusion (5 mins)
- Describe how to configure your Express app to use `ejs`.
- Identify some `ejs`-specific syntax used to use different partials.



