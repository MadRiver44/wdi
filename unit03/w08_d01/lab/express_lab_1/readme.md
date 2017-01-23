## Routes Lab
###Exercise in creating and modularizing routes

- cd into `express_lab_1`. There should be a `package.json` waiting for you to kick off npm install.
- Via Terminal, RUN `npm install`.
- You should have **expressjs**, **EJS Template Engine** and a local **nodemon** in you **node_modules** folder.
- FYI, **nodemon** can also be installed globally `npm install -g nodemon`
- Once all is installed, RUN `npm start` in terminal. You should see the following

 ```javascript
 	[nodemon] 1.11.0
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node app.js`
App listening on port 3000
 	```
- In your browser, go to the following address [`localhost:3000`](http://localhost:3000/)
- Create a `routes` folder. This is the convention for all future routes. It's a best practice. 😉
- In the routes folder, create a `birds.js` file.
- In that file, add the following directives to start the development of your bird route component.

```javascript
const express = require('express');
const router = express.Router();
```
#####Create the following routes, using [`router.get`](https://expressjs.com/en/guide/routing.html) method:
#### 	Routes
 1. '/'
 2. '/nyc'
 3. '/list'
 4. '/nyc/:id'  -- **NOTE**: This one has parameter. Make sure to use req.params.id to broadcast the value, when the client(browser, curl, or postman) request the routes.

**NOTE:** For the routes rendered views, feel feel to have `.ejs` template pages act as a placeholder. Use the example that can be seen in the app.js (line 7), and the index.ejs page, for inspiration.

#####To use the bird route components
- Open the `app.js` page
- Use the `app.use` and the `require` method to mount the component to the main app

```javascript
app.use('/birds', require('./routes/birds'))
```
^^^This line should be put **BEFORE** app.listen. ^^^

Via a browser (Chrome), `postman` or `curl`, go to the different endpoints to test the results.

**EXAMPLES:** 
 
- http://localhost:3000/birds
- http://localhost:3000/birds/nyc
- http://localhost:3000/birds/nyc/pigeon


###Once You're Satisfied:

Share your link, **of your locally running web server**, using NGROK:

- Go to: [https://ngrok.com/](https://ngrok.com/) and dowload for mac
- Follow the rest of the instructions [here](https://gist.github.com/wosephjeber/aa174fb851dfe87e644e)



