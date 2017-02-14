#Ruby 201

## Objectives

- Introduce **Methods**
- Ride right into **Classes** and **Objects**
- Grok **Blocks**
- Laugh at bad jokes and puns (Optional)
- Lab
- Rejoice



##Methods  
##### What is a method? We should know this by now 😜
 
 -  They bundle code statement(s) in a single unit for repeatable usage.
 -  allows the same piece of code to be executed many times in an application
 -  They can take optional arguments, and return values.
 -  Let's take a look(high level) at how Ruby does method definitions:

**Basic Anatomy**

```
# All methods start with a "def" and end with an "end"
# There's a method name
# Optional arguments in parens. Note: parens are optional too!
# And a function body taking one or more statements
# last statement, in the function body, is the return value

def fancy_add_method(num1, num2)
  num1 + num2
end

#Invoking the method is similar to how we've done it in JS

puts fancy_add_method(1,2) #outputs 3

```
**Default Parameters**

```javascript
# You can set default parameters
# Similar to es6, which will be used if they are omitted during invocation.

def fancy_add_method(num1=0, num2=0)
  num1 + num2
end
puts fancy_add_method #outputs 0
```

**Variadic Arguments** hmm, maybe too deep. This was suppose to be "High Level" right?

```javascript

def sing(*items)
    items.each do |item|
        puts item
    end
end

# Sing, Little Drummer Boy.
sing("pa", "rum", "pa", "pum", "pum")
```




## Classes
### A class is the blueprint from which individual objects are created.   

 - Classes are used to make objects.
 - Everything is an object(based on a class) in Ruby
 -  For Example:
 
 ```
 irb(main):005:0> true.class
=> TrueClass 		// is an instance of class TrueClass
irb(main):006:0> "Hello".class
=> String 			//instance of class String Class
irb(main):007:0> 1.class
=> Integer 		is an instance of Integer Class
irb(main):008:0> 1.class.class // low and behold! class is an instance of Class 🤔
=> Class
 ```
 - Classes typically are defined **`class Name ... end`**. For example:

 ```
 class Human
 	//constructor and methods live in here.
 end
 ```
 
## Initialize Method
Initialize is similar to a constructor in javascript. 
When you create a new object, using the `new` keyword, Ruby creates an uninitialized object and then calls that object's initialize method, passing in any parameters that were passed to new. This gives you an opportunity to write code that sets up your object's state and properties.

Let's look at an example:

```
class Human
  def initialize(height, weight=200, gender="unknown")
    #TODO - define some instance variable
    @height = height
  end
  
end

grok = Human.new(6) #When "new" is summoned, the initialize method is called...

puts grok # outputs something like => #<Human:0x007fcfe3938ef0>
```

## Instance Variables
-  Instance variables have a **@** in front of their names
-  We see one being used in the example above (@height)
-  Each newly created object has its own instance variable


## Getters and Setters
All classess should have the ability to get and set instance variables. Ruby uses the following for access control.

- **attr_reader**, for getting/reading an instance variable.
- **attr_writer**, for setting/changing an instance variable.
- **attr_accessor**, which enables the ability to read/write...get or set. It's a consolidation of both **attr_reader** and **attr\_writer**, which is the recommended approach for when you're setting up access control to instance variables.


## to_s method
- Returns a string representing of an object. The default `to_s` prints the object’s class and an encoding of the object id. E.g.,`#<Human:0x007fd1528e0c80>`.  
- `to_s` is defined on every object and will always return something.
- It is recommend that you override it in your class definitions, so something more meaningful can put outputed




## Blocks
- Blocks are like closures in Javascript
- Code is usually between braces `{ }` or a `do`..`end`
-  Don't confuse them with parameters
-  Think of them as being similar to a method, but without a name.
-  A block is always passed to a method call.

For Example:

```javascript
[1, 2, 3, 4, 5, 6].each do |n|
  puts "The Number #{n}"
end
```
The method call is the `each`, and the block is passed to it starting with the `do` 

#Mandatory Reading
- [Learn to Program (Ruby)](https://pine.fm/LearnToProgram) Chapters, 7, 8, 9 and 10 (Assigments Optional)

#Fun Reading
[http://poignant.guide/](http://poignant.guide/) Click on "[open the book](http://poignant.guide/book/chapter-1.html)"

###Resources
- [Try Ruby](http://tryruby.org/)