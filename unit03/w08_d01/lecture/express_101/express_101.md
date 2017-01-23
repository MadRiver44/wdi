#ExpressJS - A "Server-Side" JS Framework

## Objective
- **First Time Introduction to Express.js (Lay of the Land)**
- **Intro to Basic Routes Middleware**
- **Express Built-in Middleware - express.static**
- **LAB**
- **A Touch of EJS Templates**

# ExpressJS
- Express is a high performance, MVC, web development framework built with Nodejs
- A thin layer under the Node.js platform
- Primarily for the backend, serever-side development
- Used for RESTFUL API and general Web development

#MVC
**Definitions:**
MVC is a programming model/software design pattern, which can also be used to create frameworks, for building DRY, decoupled, applications and systems:

- The **Model** represents the application data 
- The **View** displays the data via a User Interface
- The **Controller** handles input and converts it to actionable items for the model or view. (E.g., - saving data, re-rendering view)

#ROUTING
**Definition:** Routing refers to the definition of application end points (URIs) and how they respond to client requests. They can receive any of the http verbs (GET, POST, PUT, DELETE), and need to be prepared to handle them accordingly. Consider them resource identifiers, where a typical resource can be an image, webpage, music file, or a request to take kick off a function call. A function call could be something like executing a call to update/delete/put an entry in a database.

- Helpful in separating out concerns
- Always has a dedicated handler to address any routes being requested.
- Modularity, mountable, and helps keep things DRY (Don't Repeat Yourself)

**There are 2 ways:**

 1. `const route = express.Router()`, then `route.get('/')`
 2. `app.get('/') - or put, post, or delete`

Which one do you use? Stick with the Router() for real, production-ready apps. for one-offs, either or is fine

**Typical route definition:**

```javascript

app.get('/', function(req, res){
	res.send("Hello World!");
});

```

### Let's break down selective parts of a router

- **"/"**: Sets the pattern for our route. In this case, it's the root page
- **req**: Represents incoming http request for end point resource
- **res**: Represents the resource that you give to the user/client/requestor. Resource can be a webpage, video file, even a music stream(Spotify 😊).
- **res.send:** sends the response back to the requestor 

#Accessing params arguments
```javascript
req.params.whatever is the params that was passed in the route 
```

#Accessing query arguments
```javascript
req.query.whatever is the query that was passed in the route
```

#Middleware
**Definition:** is a function that sits on top of the actual request handlers. They have access to the request and response object.

- Default - Static
- A way to bring in modules, aka components, aka plugins
	- Types of middleware: static file folders (come as default), loggers, security, authentication, error handlers.

**Built-in**

If you want to add static files that get served as part of the web experience, use the `express.static` middleware.

```javascript
app.use(express.static('public')) // this will enable you to load all files/assets/sub-folder under the "public" folder
```

So, if you have a images folder in public, you can load files in the following manner:

`http://localhost/images/birds.jpg` or  
`http://localhost/images/landscape/grandcanyon.jpg`

Notice that there is no reference to the `public` folder in the above URLs.


#TEMPLATES
EJS are templating engines - they allow you to do things like conditional statements and loops, and give you the ability to break the pages into more modular components

#Recommended Reading Material
[Express in Action](https://www.amazon.com/Express-Action-Writing-building-applications/dp/1617292427/ref=sr_1_1?ie=UTF8&qid=1485145487&sr=8-1&keywords=expressjs)

#Resources
- [Express](http://expressjs.com/)
- [Express Route Tester](http://forbeslindesay.github.io/express-route-tester/)  
- [Express on Wikipedia](https://en.wikipedia.org/wiki/Express.js)
- [NGROK](https://ngrok.com/)
- [Installing NGROK](https://gist.github.com/wosephjeber/aa174fb851dfe87e644e)