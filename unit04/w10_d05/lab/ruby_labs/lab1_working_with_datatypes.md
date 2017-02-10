### Assorted Data Types

#### What are the outputs and/or side effects of the following code snippets?
* Make a guess before testing your answer.
* "Error out" is a valid answer choice.
* Also include a sentence on why you chose your answer.

```rb
2 ** 3
```
```text
Your answer. 8
```

```rb
((16 / 4) * (2 + 1)) ** 2
```
```text
Your answer. 144
```

```rb
("a milli " + "a milli") * 3
```
```text
Your answer. a milli a millia milli a millia milli a milli
```

```rb
("a milli " * 4) / 2
```
```text
Your answer. error
```

```rb
my_favorite_number = 13
puts "My favorite number is: " + my_favorite_number
```
```text
Your answer. My favorite number is: 13
```

```rb
my_favorite_number = 13
puts "My favorite number is: #{my_favorite_number}"
```
```text
Your answer. My favorite number is: 13
```

```rb
whatAmI = 10.class
puts "whatAmI is a #{whatAmI}"
```
```text
Your answer. whatAmI is a Fixnum
```

```rb
whatAmI = 'text'.class
puts "whatAmI is a #{whatAmI}"
```
```text
Your answer. whatAmI is a String
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
Your code goes here if 
```

#### What are the outputs and/or side effects of the following code snippets?
* Make a guess before testing your answer.
* "Error out" is a valid answer choice.
* Also include a sentence on why you chose your answer.

```rb
name = gets.chomp
if name
  puts "My name is: " + name
end
```
```text
Your answer. My name is: name
```

```rb
no_name = ""
if no_name
  puts "My name is: " + no_name
end
```
```text
Your answer. My name is: 
```

```rb
no_name = nil
if no_name
  puts "My name is: " + no_name
end
```
```text
Your answer. 
```
