## Express, RegEX, PSQL

![join](https://stephenhaunts.files.wordpress.com/2015/09/3.jpg?w=625)

## Forms Using Express

Based on Joe's lecture today, we are going to recreate the form app using all the tools he reinforced today! Here's a breakdown to get you on your way:

1. In your `homework` folder, create a new folder `express_form` to work in.

2. Using Joe's lab as a template, **RETYPE** the lecture, but make it your own. Create multiple Express routes, set a theme to the form (ex - job application, santa form, etc), and experiment with EJS. While rebuilding remember to set up your environment:
  - `npm init` to get your `package.json`
  - `install/save npm packages` (aka dependencies) you will be using
  - set up your `npm start` (with node or nodemon)
  - set up the appropriate file structure

3. Then **add THOROUGH comments** to explain what **EACH line** of code is doing. **DO NOT** copy and paste.

4. **BONUS!**: Deploy your work to Heroku using the tutorial from this weekend (**TIP** - Move your `express_form` folder to the root of your `general assembly` folder, so you are outside the Hakuna Matata Repo).

## Express Middleware REQUIRED Readings/Video

[Express Documentation](http://expressjs.com/en/guide/routing.html)</br>
Under the **Guide** tab, please read **Writing Middleware** and **Using Middleware**.

[Express Middleware Resources](https://expressjs.com/en/resources/middleware.html)</br>
Take a look at all the different middleware options (especially, errorhandler and body-parser)

[Express Middleware Video Tutorial](https://www.youtube.com/watch?v=9HOem0amlyg&t=18s)

## RegEx

Based on Vince's lecture today, please answer the following questions and place the answers below directly in **this** readme:

**Question 1**: Explain in your own words what a regular expression is.

> *Response 1*: A Regular Expression represents a sequence of characters that is typically used to determine valid input patterns for computer applications.  

**Question 2**: In today's lab, you found a few interesting examples of common regular expressions. Pick two and explain how they work. E.g. if the ^ is there explain that it's matching the beginning of the line, etc.  

> *Response 2*: One RegEx from today's lab was /hi|bye/, where the pipe symbol represents an OR operator between the 'hi' and 'bye' strings, allowing a match for either case.  A second RegEx from today's lab was (favo)[u]?(rites).  This expected two sequential strings, 'favo' and 'rites', with the '?' character indicating an allowed zero-or-one additional represented within the square brackets. 

**Question 3**: Explain a use case for regular expressions that we didn't cover in today's lecture, if you can't think of anything consult Google.

> *Response 3*: Besides sanitizing user inputs, RegEx can perform data scraping/web scraping, where automation pulls information from computers and structures it for human use.  

**Question 4**: Write up a regular expression that matches a string that begins with an uppercase character between A and L, that is between 7 and 15 characters long, and that ends with 2 or more lowercase zs.  

> *Response 4*:  /^[A-L]{7,15}z+z$/       /^[A-L][a-zA-Z]{7-15}zzz*$/ 

**Question 5**: Write a javascript function that will find and replace all occurrences of the string 'color_id' where the word color either does or does not contain a 'u' before the 'r' and replace them with the string 'color_uid'.

> *Response 5*:  
      let regExFunction = function(text) {
        return text.replace(/colou?r_id/gi, 'color_uid');
      };

**Question 6**: BONUS: Find a regex online that will match any opening, closing, or self-closing HTML tag and try to explain how it works.

> *Response 6*: Trick question, regular expressions have their limits. BUT, search for an answer to this anyway. You'll likely find my favorite stack overflow answer of all time. It's a true work of art! The second answer is also good, in that it explains that you can use regex on small, known sets of HTML, if you really need to. [Here's the link in case you don't find it](http://stackoverflow.com/questions/1732348/regex-match-open-tags-except-xhtml-self-contained-tags)

## PSQL Practice

Finding apartments in NYC is quite the drag, right? But with psql, it's a breeze! Follow [this](https://github.com/ga-students/WDI_HAKUNA_MATATA/blob/master/unit03/w08_d02/homework/realty/prompt.md) additional README to practice more psql queries with a realtor theme. 👍

## Submission:
Submit an issue ticket with your:
  - A Link to your Github Hakuna Matata HW Repo
  - Your **FULL** name in the title
  - *Optional* - The link to your deployed Heroku app
