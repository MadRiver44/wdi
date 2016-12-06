#This Keyword

## What is this?

- `this` is a Keyword used to determine a function’s calling context


- If standalone, `this` refers to the window/global object

```javascript
\\ In the global scope aka window environement 
console.log(this) // will give you the Window Object
/*-----------------------------------------------------*/
function genericFn(){
  return this;
}
genericFn() // Will return the Window Object

```
- When called as a method, `this` refers to the calling object

```javascript
const obj = {
  name: 'John',
  getName: function() {
    console.log(this.name);
  },
  isHappyToBeAlive: true
}

obj.getName() // will give you John. The calling object is "obj"
```

- `this` always refers to the **“owner”** of the function we're executing.

```javascript
let obj1 = {
  name: 'John',
  status: 'Student'
}

let obj2 = {
  name: 'Anna',
  status: 'Student'
}

let obj3 = {
  name: 'Jackie',
  status: 'Student'
}

function getName() {
  console.log(this.name);
}

getName.call(obj1); \\ Hey getName, who's your owner? obj1...
getName.call(obj2); \\ Hey getName, who's your owner? obj2...
getName.call(obj3);	\\ Hey getName, who's your owner? obj3...
```

[MDN - `This` Reference - PLEASE READ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)

