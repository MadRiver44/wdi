---
title: Design Patterns
type: lesson
duration: "2.5"
creator:
    name: Joe Keohan
    city: NYC
competencies: Computer Science
---

# Code Reusablity and Data Design Patterns 

## Objectives
* Refactor code to gradually augment it's functionality and reusability. 
* Review Creational pattern designs, specifically constructor\classes and modules 
* Lab1: refactor basic d3 code for reusablity (30)
* Lab2: refactor Lab1 code to align with module pattern

## Packaging Code For Reusablity
* What are the advantages of packaging code?  
* How many lines of code should a function contain?

**Let's take the following example of some sample D3 code used to create a circle.**
```javascript
//basic structure to create a single circle

var Circle1 =  {'cx':100, 'cy':50, 'r':20} 

var svg = d3.select(".circle").append("svg")
  .attr("height",100).attr("width",400)
var circle = svg.append("circle").data([Circle1])
    .attr("cx",function(d) { return d.cx })
    .attr("cy",function(d) { return d.cy })
    .attr("r", function(d) { return d.r})
```

**Let's package this code into a function for reusablility.**
```javascript
//encapulated as a function

var Circle1 =  { 'cx':100, 'cy':50, 'r':20} 
var Circle2 =  { 'cx':200, 'cy':50, 'r':20}  

function createCircle(sel,val){
   var svg = d3.select(sel).append("svg")
    .attr("height",100).attr("width",400)
   var circle = svg.append('circle').data([val])
    .attr("cx",function(d) { return d.cx } )
    .attr("cy",function(d) { return d.cy })
    .attr("r",function(d) { return d.r })
}

createCircle(".circle",Circle1)
createCircle(".circle",Circle2)
```

**We want even more control over when this function is rendered and have decided to take a "higher level" function approach.   Let's split the functionality into creating the SVG and "returning" another function responible for rendering the circle.**

```javascript
// refactored to return a 'higher level' function
var Circle1 =  { 'cx':100, 'cy':50, 'r':20} 
var Circle2 =  { 'cx':200, 'cy':50, 'r':20} 

function createCircle(sel){
   var svg = d3.select(sel).append("svg")
    .attr("height",100).attr("width",400)
     return function(val) {
       var circle = svg.append("circle").data([val])
        .attr("cx",function(d) { return d.cx })
        .attr("cy",function(d) { return d.cy })
        .attr("r", function(d) { return d.r})
   }  
}
var circle = createCircle(".circle")
circle(Circle1)
```

**Although the above example splits up the functionality of circle creation we can refactor it a bit more to provide "methods" which we can call directly and are named according to what they do. The example below returns both a 'render' and 'animate' method.**
```javascript
//encapulated as a function that returns methods

var Circle1 =  { 'cx':100, 'cy':50, 'r':20} 
var Circle2 =  { 'cx':200, 'cy':50, 'r':20} 

function createCircle(sel,val){
   var svg = d3.select(sel).append("svg")
    .attr("height",100).attr("width",300)
     return {
       render: function(id) {
          svg.append("circle").data([val])
            .attr("cx",function(d) { return d.cx })
            .attr("cy",function(d) { return d.cy })
            .attr("r", function(d) { return d.r  })
            .attr('id',id)
       },
       animate: function(time,id) { 
          d3.select('#' + id).transition().duration(time)
            .attr("cx",val.cx + 80)
     }
   }
}

var circle1 = createCircle(".circle",Circle1)
circle1.render('c1')
circle1.animate(1000,'c1')
var circle2 = createCircle(".circle",Circle2)
circle2.render('c2')
circle2.animate(3000,'c2')
```

## Lab 1: Refactor d3 code to reusable (30-45)

## What is a Pattern?
> A pattern is a reusable solution that can be applied to commonly occuring problems in software desing.  Another way of looking at patterns are as templates for how we solve problems.

>*(https://addyosmani.com/resources/essentialjsdesignpatterns/book/#whatisapattern)*

## Design Patterns Used in Everday Life
* On\Off Traffic Highways - Cloverleaf interchanges
* Pedstrians - Sidewalks
* Entry\Exit Bldgs - Revlovling Doors

## Design Patterns Used in Coding
* Designing Service Layers - Module Patterns
* Overly Complicateded Object Interfaces - Facade Pattern (jquery)
* Visibility into State Changes - Observer Pattern

## What Constitues a Pattern? 
* It solves a problem
* A proven concept and it's been tested and verified

## Types of Patterns
* Creational (constructor, module, singleton, factory )
* Structural - makeup of the item itself.  if one part of the system changes the entire structure of the system doesn't need to do the same
  - (decorator, facade, flyweight)
* Behavioral - improving  communication between disparate objects
  - command, mediator, observer

## Your Already Using Patterns
**CHALLENGE**
Imagine that we have a script where for each DOM element found on a page with class "foo" we wish to increment a counter. Which of the below methods is  most efficient to query for this collection of elements? 

1. Select all of the elements in the page and then store references to them. Next, filter this collection and use regular expressions (or another means) to only store those with the class "foo".
2. Use a modern native browser feature such as **querySelectorAll()** to select all of the elements with the class "foo".
3. Use a native feature such as **getElementsByClassName()** to similarly get back the desired collection.

What's your answer?

## Creating a New Object, Properties, Inheritance
* obj = {} \ new Object \ Object.create(Object.prototype)
* Object.defineProperty(objName, 'value', {
 value: writeable: enumerable: true configurable: true
})

## Creational Design Patterns
**Constructor Pattern**
-Benefits: inherited properties\functions, new object scopes
-Cons: functions replicated multiple times however it prototype can be used to assign the methods

```javascript
var Task = function(name) {
    this.name = name;
    this.completed = false

   ths.complete = function() {
    this.completed = true;
   }
}
```

**ES6 Class Pattern**
```javascript
class Task  {
  constructor(name) {
    this.name = name;
    this.completed = false
  }
  complete() {
    this.completed = true;
   }
}
```
**Assigning Methods to its Prototype**
Prototype should be used to keep methods detached yet associated with the object. This will allow updates to be made to the method without the need to update all previously created objects

```javascript
var Task = function(name) {
    this.name = name;
    this.completed = false
}

Task.prototype.complete = function() {
   this.completed = true;
}
```

**Module Pattern**
 -Modules are in part based on object literals
 -Simple way to encapsulate methods which are invoked usually as an IIFE
 -Creates a 'toolbox' of functions to use and very similiar to how functions can return methods 
 -Used primarily for unique objects like a service which makes database calls and is responsible for getting and setting data.
 -Methods that are not exposed outside of the function are called: Privledged methods.  These still have access to local vars. 
 -Diff between Constructor & Module pattern is that modules are one of something, like a service
 
 **A module at it's core is just an object literal**
```javascript
  var Module = { 
    var public = "this is a public variable"
    get: function() {}
    set: function() {}
  }
```

**Once we wrap it in a function we can create private vars**
 ```javascript
  var Module = f() { 
    var private = "this is private variable"
        return {
          get: f() { return name: 'new task from db' },
          set: f() { return obj from db }
        }
  }
 ```
**Above can be rewritten as a "revealing module pattern"**
In this pattern functions are recreated as func expressions and only a reference to them is returned, thus hidding the functions code.  

```javascript
  var Module = f() { 
    var priv = "this is private"
    get: f() { return name: 'new task from db' },
    set: f() { return obj from db }
    return {
        get: get,
        set, set
    }
  }

```

**Singleton Pattern**
Used to restrict an object to one instance of that object across the application.  The way it works is that it remembers the last time you used it and then hands you back the same instance that you used before.  

```javascript
var TaskRepo = (function() {
  var taskRepo;
  function createRepo() {
    var taskRepo = new Object("Task");
    return taskRepo;
  }
  return {
    getInstance: function() {
      if (!taskRepo) {
        taskRepo = createRepo();
      }
      return taskRepo
    }
  }
})()

var repo1 = TaskRepo.getInstance();
var repo2 = TaskRepo.getInstance();

if(repo1 === repo2){
  console.log("Same TaskRepo")
}
```

## Lab 2 - refactor Lab1 code to align with module pattern 


### Reference Material 
[dofactory design patterns](http://www.dofactory.com/javascript/singleton-design-pattern)
