#PROMISES

##Objectives

- Go through Promises and their benefits
- Explore native and third-party promises
- LAB

## What are JS Promises
- Promises can be seen as placeholders for some single value that might not have arrived yet.
- An alternative way to managing, executing and composing asynchronous code in JavaScript.
- Promises give us a way to handle asynchronous processing in a more synchronous fashion.
- Readability...
- A promise is just an enhancement/alterntive to callback functions in Node.js.
- They are a great replacement for code that has multiple, nested callbacks.
- No **[CALLBACK HELL AKA Pyramid of Doom](http://callbackhell.com/)** - callbacks calling, callbacks calling callbacks calling.
- They are beautiful aka syntactic sugar, and help with the control flow of your code.
- Base on the [Promises/A+](https://promisesaplus.com/) specification.

##DOOM!!!
### Let's look at deeply nested callbacks

**Example 1**  
![](https://collinmakersquare.files.wordpress.com/2016/02/b4uajfmcqae67qb.png?w=1000)

**Example 2**  
![](https://dn3pm25xmtlyu.cloudfront.net/photos/large/409160561.png?1317165729&Expires=1485472962&Signature=BEXos0EvxVnD1Pg1bIetWq1ffGuL2PiMs2Ag7skQ8Ya8ibjamo-Qmfnfz0K7DoB9-CU4UGQqnESGlnxppnIcB4k95UsOzJoSVk0OYlPrgRkvixCyl~d9GVUpx4K8PEXx1hFt0-gDb1tHeA9DNfaQlOsWkInzCwfdmUJktPzz5B4_&Key-Pair-Id=APKAIYVGSUJFNRFZBBTA)



**RYU - Example 3**   
![](https://pbs.twimg.com/media/COYihdoWgAE9q3Y.jpg)

### Where have we used promises?
- Axios
- jQuery's AJAX

## Name some processes that can take some time to return results.
 - An Network call to an API, perhaps through an AJAX request
 - A Database Query/Transaction
 - A large file read/write


## Anatomy of a Promise


### A Promise has 4 states
 
  - **pending**: Initial State. This state will "eventually" change to either resolved or rejected.
  - **fulfilled**: Operation completed with a success state. This state is also known as **resolved**.
  - **rejected**: Operation had a failure state.
  - **settled**: Operation is either fulfilled or rejected, but not pending
 
#Then() Method

- The then method enables us the obtain the return value or the error thrown from asynchronous operations.
- Fulfilment / Rejection methods return thenable object
- `.then(successHandler, errorHandler, progressHandler)` is the method called when a promise is fulfilled or rejected

 
**A Promise Constructor**

```javascript
new Promise(function(resolve, reject) {
	if(/something is true /) {
		resolve();
	} else if(/something went wrong/) {
		reject();
	};
})
```

## Don't let code fail silently
- Add a catch statement

## Lab
- Let's create our own promise object

## Recommended Reading/Viewing
[Exploring ES6 - Promises] (http://exploringjs.com/es6/ch_promises.html)

## Resources

- [Q](https://github.com/kriskowal/q)
- [Bluebird](https://github.com/petkaantonov/bluebird)
- [Callback Hell] (http://callbackhell.com/)