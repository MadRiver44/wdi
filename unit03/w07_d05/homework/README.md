
![Tweedr](http://media02.hongkiat.com/programming-jokes/joke-programmer-is-alternate.jpg)

Welcome to the world of backend development! To get you adjusted to this new setting, this weekend, you'll be completing three separate mini tasks to round off this weeks lectures. Check them out below!

### Part I: Reusability and Intro To Design Pattern Questions

Joe's lecture today taught you all about **Reusability and Intro To Design Patterns**, so let's practice those concepts by answering the following questions (*write responses directly below*).  Feel free to reference Addy Osmani's book [Learning JS Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#whatisapattern) or any other resources while trying to answer the questions.

**Question 1**: What constitutes a design pattern?  Addy Osmani does an excellent job describing this topic.

> *Response 1*:

**Question 2**: Name at least 3 Creational design patterns and give a brief description for each one, including a use case(s)

> *Response 2*:

**Question 3**: What is the downside to including methods directly in a constructor vs associating them with the objects prototype?

> *Response 3*:

**Question 4**: What would be the first and most basic approach towards packaging code for reusability? Now think of what would be the next design pattern to layer on additional functionality that could also be returned to the end user.

> *Response 4*:

**Question 5**: Write a small function called **math** that returns two functions called: **add** and **subtract** which either add or subtract two numbers provided.  Both sub-functions would then be called as follows:

 ```javascript
  math.add(2,1)
  math.subtract(2,1)
 ```

**NOTE**: keep in mind that the parent function "math" needs to somehow be executed first in order to return the sub-functions.

> *Response 5*:

### Step II: Heroku

What's Heroku?! [Heroku](https://www.heroku.com/what) is a cloud platform that lets you deploy, run and manage applications written in Ruby, Node.js, Java, Python, Clojure, Scala, Go and PHP. It's a developer's best bud and you are going to learn all about it this weekend!

First things first, create a free Heroku Account [here](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction).

Second, go THOUGHTFULLY through [this](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction) Heroku tutorial to understand and walk through app deployment on this platform.

**NOTE 1** -  in the section `Provision add-ons`, they ask for a credit card information. It's only needed to help with abuse prevention. Add-ons that are used in this tutorial are free, so there is nothing to worry about.If you don't feel comfortable doing so, ignore this step. It will not drastically affect the deployment.

Third, after you are done, add the deployed app link **HERE**:

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
