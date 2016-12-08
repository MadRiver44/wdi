<!-- # Callbacks

## What are callbacks?
As we now know, functions are like any other data type, and can be passed as arguments.


So let's list some of the definitions for callback.


1. Is a function that is passed to another function.
2. Is a function to be executed after another function is executed.
3. can be **synchronous**, such as the example below. Or are **Asynchronous** (AJAX, setTimeout...) We will focus on synchronous, and learn asyn calls when we learn AJAX.
4. Is a coding pattern for solving common problems. Perhaps you want some piece of code to run at the end currently executing code.

You will see good amount of callback examples used in jQuery, Native JS code (ForEach, maps, filters), and Node.js specific applications.

```javascript

// a simple example -->

const add = (a, b, cb) => {
  console.log(a + b);
  cb(); // this is the callback being invoked..no checks at the moment
}


add(1, 2, () => {
  console.log('I am done with my math homework')
});
<!-- ```

	Output is: 
	3
	I am done with my math homework
	 -->

