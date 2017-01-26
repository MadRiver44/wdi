# Promises Lab

### 🔥  🔥 Flatten the Pyramid 🔥  🔥 
 The goal is to refactor the code below to use promises. You have a couple of options that should be research and explored. For example Googling how to ***promisify*** a callback hell. Also Google, "***chaining promises***". The libraries that can be utilized are [Q](https://github.com/kriskowal/q), [Bluebird](https://github.com/petkaantonov/bluebird), or the [native Promise library](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that comes with node and the browser. Don't feel limited to use these recommended libraries, if you find something that resonates with you.
 
 **Note**: Make sure to use a catch statement, so exceptions can be caught.
 
###Resources  
 
- [Q](https://github.com/kriskowal/q)
- [Bluebird](https://github.com/petkaantonov/bluebird)
- [native promise library](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) 
- [https://www.promisejs.org/](https://www.promisejs.org/)
- [http://bevacqua.github.io/promisees/#](http://bevacqua.github.io/promisees/#)

 
 File name is called `doom.js`. Feel free to use terminal or you IDE to run the file. 
 
```javascript

const cleanHouse = (cb) => {
  const counter = 1
  console.log(counter, 'I need to clean! I am having company!!!');
  if (typeof cb === 'function') cb(counter);
}

const cleanBathroom = (val, cb) => {
  console.log(++val, 'I am cleaning my Bathroom!');
  if (typeof cb === 'function') cb(val);
}

const cleanKitchen = (val, cb) => {
  console.log(++val, 'I am cleaning my Kitchen!');
  if (typeof cb === 'function') cb(val);
}

const cleanLivingroom = (val, cb) => {
  console.log(++val, 'I am cleaning my living room!');
  if (typeof cb === 'function') cb(val);
}

/* FLATTEN ME PLEASE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
cleanHouse(function(value1) {
  cleanBathroom(value1, function(value2) {
    cleanKitchen(value2, function(value3) {
      cleanLivingroom(value3, function(value4) {
        if (value4 === 4) console.log('Phew!, I am done...')
      });
    });
  });
});
```