---
title: Datatypes Lab
type: Lab
duration: '"30"'
creator:
    name: Joe Keohan
    city: NYC
competencies: Javascript
---

## Refactor 

### Lab 1: Refactor d3 code to reusable (30-45min)

**Copy\Paste a link to your CodePen here**

```javascrpt
// Basic code for a square
var Rect1 = {"x":50, "y":50, "width":40,"height":40}
var Rect2 = {"x":100, "y":50, "width":50,"height":50}

var svg = d3.select(".rect").append("svg")
  .attr("height",100).attr("width",400)
var rect = svg.append("rect").data([rect1])
    .attr("x",function(d) { return d.x })
    .attr("y",function(d) { return d.y })
    .attr("width", function(d) { return d.width})
    .attr("height", function(d) { return d.height})
    .attr("fill","green")
```

**TASK 1:** Take the above code and package it as function called "createRect". The function should take in two params: a tag name AND an object
```javascript
// your code goes here


// The code below should execute your function and return two rect's
createRect(".rect",Rect1)
createRect(".rect",Rect2)
```

**TASK 2:** Refactor the function once more to return a "higher level" function. That split's the functionality into creating the SVG and "returning" another function responible for rendering the circle.
```javascript
// your code goes here

// The code below should execute your function and return two rect's
var rect1 = createRect(".rect")
rect(Rect1)
var rect2 = createRect(".rect")
rect(Rect1)
```

**TASK 3:** Refactor the above code to two methods The example below returns both a 'render' and 'animate' method.
```javascript
// your code goes here

// The code below should execute your function and return two methods to  render and animimate the two rect's

var rect1 = createRect(".rect",Rect1)
rect1.render('rect')
rect1.animate(1000,'rect')
var rect2 = createRect(".rect",Rect2)
rect2.render('rect')
rect2.animate(3000,'rect')
```
### Lab 2 - refactor Lab1 code to align with module pattern 

**TASK 4a** Refactor the above code as a constructor.  Both methods should be included directly in the constructor.
```javascript
// your code goes here

// The code below should execute your function and return two methods to  render and animimate the two rect's

var rect1 = createRect(".rect",Rect1)
rect1.render('rect')
rect1.animate(1000,'rect')
var rect2 = createRect(".rect",Rect2)
rect2.render('rect')
rect2.animate(3000,'rect')
```

**TASK 4b** Refactor the above code as a ES6 class.  Both methods should be included directly in the constructor.
```javascript
// your code goes here

// The code below should execute your function and return two methods to  render and animimate the two rect's

var rect1 = createRect(".rect",Rect1)
rect1.render('rect')
rect1.animate(1000,'rect')
var rect2 = createRect(".rect",Rect2)
rect2.render('rect')
rect2.animate(3000,'rect')
```

**TASK 5** Refactor the above code to move the methods into the objects prototype.
```javascript
// your code goes here

// the code below should execute your function and return two rect's that animiate
var r1 = createRect(".rect",Rect1)
r1.render('r1')
r1.animate(1000,'r1')
var r2 = createRect(".rect",Rect1)
r2.render('r2')
r2.animate(1000,'r2')
```

**TASK 6** Refactor the above code into a "revealing module pattern" that returns a reference to render and animate methods in the return statement
```javascript
// your code goes here

// the code below should execute your function and return two rect's that animiate
var r1 = createRect(".rect",Rect1)
r1.render('r1')
r1.animate(1000,'r1')
var r2 = createRect(".rect",Rect1)
r2.render('r2')
r2.animate(1000,'r2')
```
**BONUS** Refactor as a reusable module that accepts "chained" inputs
