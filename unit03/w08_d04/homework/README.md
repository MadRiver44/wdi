![join](https://digitalsynopsis.com/wp-content/uploads/2015/03/web-designer-developer-jokes-humour-funny-41.jpg)

## Express Build: Round II

From Paris's lecture today, you'll **keep building the app** you started in class.

Remember, it's okay to feel lost! You are fusing a lot of concepts into one application, so keep taking it step by step and **COMMENT** the heck out of your code!

**BONUS!**: Deploy your work to Heroku (**REMEMBER** - Move your application folder outside of the `Hakuna Matata` to deploy Repo).

## Promises REQUIRED Readings

[MDN on Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)</br>


[Exploring JS: Promises](http://exploringjs.com/es6/ch_promises.html)</br>


[Promise Patterns](https://www.promisejs.org/patterns/)

## Promise Questions

Based on Patricks's lecture today, please answer the following questions **IN YOUR OWN WORDS** and place the answers below directly in **this** readme:

**Question 1**: What is a Promise? What problem does it help with?

> *Response 1*: Promises in ES6 build on the asynchronous functionality of callbacks. This allows for a neater way of nesting "what should happen next" with the result of a non-instant function call.  This avoids 'callback hell'.

**Question 2**: What are the four states of a Promise? Describe each.

> *Response 2*: A Promise has 4 states.  The first, 'pending' is its initial default state.  This will change to either resolved or rejected. A 'fulfilled' or resolved Promise sses its Operation completed with success. A 'rejected' Promise had a failure completing its task.
Finally, once the app has determined whether the Promise is either fulfilled or rejected, the Promise is set to 'settled.' This closes the 'pending' state of the Promise immutably.

**Question 3**: What does the `.then()` method do in a Promise? What is the anatomy of a `.then()`?

> *Response 3*: The .then() method is a property of the Promise object which allows chainable function calls that can operate on the return value of the caller, or perform additional tasks.  It is called after the Promise fulfills/resolves, and is not called if it fails.  Promises may be set to call automatically, instead of awaiting the resolution of the Promise, if the following code should be executed regardless.

**Question 4**: How does the ``.then()`` method differ from the ``.all()`` method in Promises?

> *Response 4*:  The .then() method is called to specifically initiate a chain of specific follow-on actions from an asynchronous event. The .all() method of a Promise object will only be called if all the .then() calls complete successfully.  This functionality may be used, for example, to only alllow user authentication after the user has posted the proper credentials to the server, and after the proper tokens such as cookies and session variables have been successfully set.

**Question 5**: Write an example of a Promise. Then comment each line to break down what each piece of code is doing/contributing to the promise.

> *Response 5*: Dunno if I could write a new Promise of my own yet, but I borrowed the bones of this promise from a google search, but I have annotated it as part of my learning process:

var promise = new Promise(function(resolve, reject) { // declare new Promise object
    var request = new XMLHttpRequest();  // vanilla JS; no Axios/jQuery/etc
    request.open('GET', 'http://api.icndb.com/jokes/random'); // get random Chuck Norris joke
    request.onload = function() {
      if (request.status == 200) { // if successful HTTP status code returns from server
        resolve(request.response); // we got data here, so resolve the Promise & go to .then()
      } else {
        reject(Error(request.statusText)); // status is not 200 OK, so reject
      }
    };
    request.onerror = function() { //  
      reject(Error('Error fetching data.')); // error occurred, reject the  Promise
    };
    request.send(); //send the request.  This happens before request.onload and request.onerror.
  });
  promise.then(function(data) {  // after Promise resolves, this runs
    document.getElementsByTagName('body')[0].textContent = JSON.parse(data).value.joke; // render joke
  }, function(error) {
    console.log(error.message); // or, if joke cannot render, log error
  });

**BONUS!**: Continue working on the Promise Lab from Patrick's lecture today. Remember to **stay calm** and **keep coding**!

## Submission:
Submit an issue ticket with your:
  - A Link to your Github Hakuna Matata HW Repo
  - Your **FULL** name in the title
  - *Optional* - The link to your deployed Heroku app
