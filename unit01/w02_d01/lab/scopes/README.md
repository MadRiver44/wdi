# Lab Time!

## Prevent `fn1` function from logging 'Window' without removing or commenting out the console.log. Explain your solution. Hint: What do you see when you look at the ground on a sunny day?

```javascript
const name = 'Window';

function fn1() {
  console.log(name)
}

fn1();
```
##At the momment `fn2` is throwing an error.

- Please identy and explain what the error is. A clear definition is needed.
- Make `fn2` log chocolate, and explain your solution.

```javascript
function fn2() {
  const bool = true;
  if(bool){
    let cake = 'chocolate'
  }
  console.log(cake)
}

fn2();
```

##Without running the code, what's the output of the code below, and why does it work? Please explain in detail.

```javascript
let c = 100;
  function outer(a) {
    function inner(b) {
      function deep(c) {
        console.log(a + b + c);
      }
      deep(2);
    }
    inner(4);
  }

  outer(10);
```

## Make this code log all `fname` variables. Use your judgement to clean up. Explain why they are throwing errors, and what your solution is. 

```javascript
{
  let fname0 = 'Mufasa';
}

{
  let fname1 = 'Pumba';
}

{
  let fname2 = 'Timone';
}

{
  var fname3 = 'Simba';
}

console.log(fname0, fname1, fname2, fname3);
```








