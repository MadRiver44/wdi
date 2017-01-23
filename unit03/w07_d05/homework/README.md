
![Tweedr](http://media02.hongkiat.com/programming-jokes/joke-programmer-is-alternate.jpg)

Welcome to the world of backend development! To get you adjusted to this new setting, this weekend, you'll be completing three separate mini tasks to round off this weeks lectures. Check them out below!

### Part I: Reusability and Intro To Design Pattern Questions

Joe's lecture today taught you all about **Reusability and Intro To Design Patterns**, so let's practice those concepts by answering the following questions (*write responses directly below*).  Feel free to reference Addy Osmani's book [Learning JS Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#whatisapattern) or any other resources while trying to answer the questions.

**Question 1**: What constitutes a design pattern?  Addy Osmani does an excellent job describing this topic.

> *Response 1*: According to Osmani, a "pattern is a reusable solution that can be applied to commonly occurring problems in software design - in our case - in writing JavaScript web applications. Another way of looking at patterns are as templates for how we solve problems - ones which can be used in quite a few different situations."  Osmani is careful to contrast this with what patterns are *not* - they "are not an exact solution. It’s important that we remember the role of a pattern is merely to provide us with a solution scheme. Patterns don’t solve all design problems nor do they replace good software designers."

**Question 2**: Name at least 3 Creational design patterns and give a brief description for each one, including a use case(s)

> *Response 2*:  According to Osmani, creational design patterns "focus on handling object creation mechanisms where objects are created in a manner suitable for the situation we're working in. The basic approach to object creation might otherwise lead to added complexity in a project whilst these patterns aim to solve this problem by controlling the creation process."  

Some of the patterns that fall under this category are:
CONSTRUCTOR patterns are used to create specific types of objects - both preparing the object for use and accepting arguments which a constructor can use to set the values of member properties and methods when the object is first created.
USE CASE: A common type of creational design pattern, a Constructor is an easy way to assign properties and methods to objects.  This may be a less attractive option if many instances of the Constructor will be needed, as each will require its own methods be carved out of available memory.
FACTORY patterns make an instance of several derived classes based on interfaced data or events.
USE CASE: If the object creation process is relatively complex (for example, if the object being created strongly depends on conditional logic as to the properties it will have).
ABSTRACT patterns create an instance of several families of classes without detailing concrete classes.
PROTOTYPE patterns are fully initialized instances used for copying or cloning.
SINGLETON patterns have only a single instance with global access points.
USE CASE: If you wanted one and only one instance of something (say a random number generator), a Singleton pattern would either instantiate one if it did not already exist, or it would return a reference to the one already instantiated.
BUILDER patterns separate object construction from representation & always create the same type of object.

**Question 3**: What is the downside to including methods directly in a constructor vs associating them with the objects prototype?

> *Response 3*:  Because JavaScript is not a true Class-based language, Class-like objects created from constructors will be instantiated with immutable properties; any functions stemming from this cannot be changed later on. 

Also, from Ayman Farhat's blog (http://thecodeship.com/web-development/methods-within-constructor-vs-prototype-in-javascript), "any method attached via this will get re-declared for every new instance we create, which could affect the memory usage of the application negatively if we wish to create so many instances."

**Question 4**: What would be the first and most basic approach towards packaging code for reusability? Now think of what would be the next design pattern to layer on additional functionality that could also be returned to the end user. 

> *Response 4*:  I'm not sure I understand the question, but a "first and most basic approach towards packaging code for reusability" to me would be using variables to point to a value that could be reassigned, as opposed to hardcoding those values. As for "the next design pattern to layer on additional functionality that could also be returned to the end user," perhaps the question is referencing a situation discussed by Christian Heilmann in a blog post (https://www.smashingmagazine.com/2010/04/seven-javascript-things-i-wish-i-knew-much-earlier-in-my-career/).  He writes: "One of the most annoying things about JavaScript is that it has no scope for variables. Any variable, function, array or object you define that is not inside another function is global, which means that other scripts on the same page can access—and will usually override— them.
The workaround is to encapsulate your variables in an anonymous function and call that function immediately after you define it."

**Question 5**: Write a small function called **math** that returns two functions called: **add** and **subtract** which either add or subtract two numbers provided.  Both sub-functions would then be called as follows:

 ```javascript
  math.add(2,1)
  math.subtract(2,1)
 ```

**NOTE**: keep in mind that the parent function "math" needs to somehow be executed first in order to return the sub-functions.

> *Response 5*:  I *think* this would work:

var math = function(){
  return{
    add:function(num1, num2){
      return(num1 + num2);
    },
    subtract:function(num1, num2){
      return(num1 - num2);
    }
  };
}();

### Step II: Heroku

What's Heroku?! [Heroku](https://www.heroku.com/what) is a cloud platform that lets you deploy, run and manage applications written in Ruby, Node.js, Java, Python, Clojure, Scala, Go and PHP. It's a developer's best bud and you are going to learn all about it this weekend!

First things first, create a free Heroku Account [here](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction).

Second, go THOUGHTFULLY through [this](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction) Heroku tutorial to understand and walk through app deployment on this platform.

**NOTE 1** -  in the section `Provision add-ons`, they ask for a credit card information. It's only needed to help with abuse prevention. Add-ons that are used in this tutorial are free, so there is nothing to worry about.If you don't feel comfortable doing so, ignore this step. It will not drastically affect the deployment.

Third, after you are done, add the deployed app link **HERE**: 
https://shrouded-spire-52028.herokuapp.com/cool

### Step III: PSQL Practice

Remember Vince's lab today? Let's...

1. **Drop** the movies database!
2. **Redo** the lab from today's lecture. Yup, we are gonna start from scratch.
3. **Create** an `answers.md` file where you will add all queries you used in the lab.

**Requirements:**

  * **Start** by re-seeding the movies database (Refer to Thursday's lecture where you did it originally).

  * **Create** a `directors.sql` file that holds all SQL queries for the directors table (Refer to the `movies.sql` file as an example) It should:
    - Create the directors table
    - Insert all of the directors into the directors table
    - Update the director_id column for all of the movies in the movies table.

  * **Execute** the `directors.sql` file
    * Navigate to your terminal to where the directors.sql file is located.
    * Open up `psql` and run the command `\i directors.sql`.

  * **Fill** in the `answers.md` file with the lab tasks and their associated queries you wrote to solve it.

Remember, **Repetition** is key! 💪 Work through the additional inserts and joins from the lab. Add additional columns if you want to add more data (e.g. maybe a writer column and a new writers table).

### Submission:
Submit an issue ticket with your:
  - Github repo link to your **Friday HW** that includes:
    - The answers to Joe's lecture questions in this README.
    - The deployed Heroku link in this README.
  - Github repo link to your **Friday LAB** that includes:
    - The `directors.sql` file.
    - An `answers.md` file with the SQL queries you performed for the rest of the lab (i.e. the joins, etc.).
  - Your **FULL** name in the title
