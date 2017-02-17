## Welcome to your week 10 assessment!

There are a combination of answers that need to be in code or written in plain old English. You'll see a "Code goes here" or a "Write Response"

### QUESTION 1
You're in an interview and are asked to describe how the different
objects of an MVC pattern interact with one another. What would you say?

*Write Response:*
HERE
The "Model-View_Controller" paradigm for web applications has a data Model (either from a database API call or frm a hardcoded HTML document) passed to a requesting client by a server Controller. At the client, the browser will render a View of the data based on local settings and configurations.

### QUESTION 2
You have experience building out servers with Node/Express
and Rails. What are some of the pros and cons of each?

*Write Response:*

#### NodeJS: Node is built on the same Google V8 JavaScript engine as Chrome, so it is great for developers to implement asynchronous, modular back-end deployments.  One drawback, however, is that Express does little for you "out-of-the-box", relying on a vast number of middleware programs to extend its functionality.
HERE

#### Rails: Rails is available as a gem that installs simply on top of the ruby that is already native to most developers' macbooks.  It has great turnkey functionality, as it uses ActiveRecord to help routing to a database.  Of the few drawbacks, Ruby not native to frontside browsers, apps must still bundle a JavaScript package to help them integrate with the client view.
AND HERE


### QUESTION 3
Your Rails app contains a Dog model. What is the Active Record
code to retrieve all Dog objects from the database?

```ruby
#Code goes here 
db.dogs.find()


```
### QUESTION 4
What is the purpose of an action within a controller?

*Write Response:* In Ruby on Rails, a contoller is the "C" in MVC: it is the middleman routing data to the client view.  Actions within a controller in Rails follow conentions that make it easy for developers to name and implement routes.
HERE


### QUESTION 5
So far in this class you've been rendering most of the markup
on the client side using JavaScript. This week you learned about ERB.
What is that doing?

*Write Response:* ERB is the Ruby version of ejs in JavaScript, or 'server-side includes' in PHP. It is a way to inject HTML and JavaScript into your Ruby app.
HERE

#### QUESTION 6

Generate a Newspaper model with a Title attribute. Generate a Reader model with a Name attribute. Generate a subscription join model. Create the tables in the database.

```bash
Write bash commands here:
use newspaper_db
db.newspapers.insert(
   {
      "title": ""
   })
db.readers.insert(
   {
      "name": ""
   })
db.subscriptions.insert(
   {
      
   })

```

### Question 7
Associate the models from Question 8 with a has_many :through association.

```ruby
#Write code here:
class Newspaper < ApplicationRecord
  has_many :subscriptions
  has_many :readers, through: :subscriptions
end
 
class Subscription < ApplicationRecord
  belongs_to :newspaper
  belongs_to :reader
end
 
class Reader < ApplicationRecord
  has_many :subscriptions
  has_many :newspapers, through: :subscriptions
end

```
### Question 8

Write an Active record query to select all Readers who have subscribed to "New York Times" Newspaper.

```ruby
#Write code here:
db.reders.find("subscription": "New York Times")

```

### Question 9

What is D3? Provide some examples of when and how would you use it?

*Write Response:* D3 is a JavaScript library that grabs a DOM element, relates it to some data, then enters with an SVG that is modified and appended to the DOM element to help visually extend meaning or understanding of the data.  Uses are varied, from charts and graphs, to more imaginitive 2D/3D GUI environments.
HERE

### Question 10
What is Mongo how is it different from postgreSQL?
What are the benefits?

*Write Response:* Mongo DB (from "huMONGOus DataBase") is a no-SQL database format.  Instead of tables, Mongo uses BJSON, a JSON-like binary data type, to store documents. Benefits are the scalability, allowing for very fast updates from many nearly-synchronous requests across very large data sets.
HERE

### What is webpack? Why do we use it?

*Write Response:* Webpack is a package manager for JavaScript that bundles JS dependencies for Ruby on Rails apps into one folder, updating them as needed.  It facilitates and simplifies integration of Ruby on Rails apps with JavaScript-based front-end client browsers.
HERE
