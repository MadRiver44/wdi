## Lab
- Create a function that has 4 parameters that can take default values.

function assignment(a,b,c,d) {
    if (a === undefined) {
          a = 0;
    }
    if (b === undefined) {
          b = 0;
    }
    if (c === undefined) {
          c = 0;
    }
    if (d === undefined) {
          d = 0;
    }
    a++;
    b++;
    c++;
    d++;
}
assignment(1,2,3,4);

-  With the code block in the grey section, use a template string to produce the following string. You can create a new variable that will hold the newly create string result. 

The ID for our class 12332112321 but we go by Hakuna Matata.
We are composed of 2 cohorts, which seems like a large undertaking, but we have "no Worries" :) 

 -Ciao!

```javascript
const salutaion = 'Ciao';
const HakunaMatata = {
  id: 12332112321,
  cohorts: 2,
  displayName: 'Hakuna Matata',
  meaning: 'No worries',
  classSize: 'large',
  emoji: ':)'
}
```
console.log(`The ID for our class is ${HakunaMatata.id} but we go by ${HakunaMatata.displayName}. We are composed of ${HakunaMatata.cohorts} cohorts, which seems like a ${HakunaMatata.classSize} undertaking, but we have ${HakunaMatata.meaning}. ${salutation}!`);

- Go to [Caniuse.com](http://caniuse.com/) and identify what browser **do not** support `let`
No support in Safari 9 / Safari iOS 9 / OPera mini / Android 4
- Go to [Kangax.github.io](http://kangax.github.io/compat-table/es6/) and identify the browsers that **do not** support the **fat arrow function**
No support in ES6Shim/KQ14/IE11/Safari9/Android 4&5/iOS 9
- The code below is not working as expected. Meaning it's not returning its value *"Why am I not showing up??"*. Fix the code to make it work.

```javascript

const fn1 = () => {'Why am I not showing up??'};
console.log( fn1() );

```

**BONUS - FIX it...FIX it**

Navigate to [ES6 kata](http://es6katas.org/). Click on "Default Parameter" exercise. Attempt to fix the bugs.

Try the same thing with "Block Scope and Arrow Functions"


