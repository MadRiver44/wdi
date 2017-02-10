### Assorted Data Types

#### What are the outputs and/or side effects of the following code snippets?
* Make a guess before testing your answer.
* "Error out" is a valid answer choice.
* Also include a sentence on why you chose your answer.

```rb
2 ** 3
```
```text
8
```

```rb
((16 / 4) * (2 + 1)) ** 2
```
```text
144
```

```rb
("a milli " + "a milli") * 3
```
```text
"a milli a millia milli a millia milli a milli"
```

```rb
("a milli " * 4) / 2
```
```text
undefined method `/' for "a milli a milli a milli a milli ":String
(repl):1:in `<main>'
```

```rb
my_favorite_number = 13
puts "My favorite number is: " + my_favorite_number
```
```text
no implicit conversion of Fixnum into String
(repl):3:in `+'
(repl):3:in `<main>'
```

```rb
my_favorite_number = 13
puts "My favorite number is: #{my_favorite_number}"
```
```text
My favorite number is: 13
```

```rb
whatAmI = 10.class
puts "whatAmI is a #{whatAmI}"
```
```text
whatAmI is a Fixnum
```

```rb
whatAmI = 'text'.class
puts "whatAmI is a #{whatAmI}"
```
```text
whatAmI is a String
```

### Truthiness and Falsiness

#### Which of these evaluate as `false` in Ruby? Mark all that apply.

```text
[X] false
[ ] 0
[ ] ""
[ ] null
[ ] [ ] (empty array)
[ ] undefined
[ ] NaN
[X] nil
```
#### Write 3 if\else statements that determine the truthyness\falseyness of true, nil and 0
```rb
if true
  puts "true is truthy, duh!"
else
  puts "true is falsey, wtf!"
end

if nil
  puts "nil is truthy"
else
  puts "nil is falsey"
end

if 0
  puts "0 is truthy"
else
  puts "0 is falsey"
end
```

#### What are the outputs and/or side effects of the following code snippets?

* Make a guess before testing your code.
* Include comments in your code to explain what it's doing

```rb
name = gets.chomp
if name
  puts "My name is: " + name
end
```
```text
My name is: myname
```

```rb
no_name = ""
if no_name
  puts "My name is: " + no_name
end
```
```text
My name is: 
```

```rb
no_name = nil
if no_name
  puts "My name is: " + no_name
end
```
```text
nil
```
