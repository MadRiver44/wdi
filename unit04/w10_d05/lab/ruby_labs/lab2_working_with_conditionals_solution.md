### Conditionals

Create a new repl to work on the FizzBuzz example below. 

#### Write FizzBuzz in Ruby!

Fizz-Buzz is a classic coding exercise that you can create using your knowledge of conditionals and loops. Implement code that does the following...

* Counts from 1 to 100 and prints out something for each number.
* If the number is divisible by 3, print `"Fizz"`.
* If the number is divisible by 5, print `"Buzz"`.
* If the number is divisible by both 3 and 5, print `"FizzBuzz"`.
* If the number does not meet any of the above conditions, just print the number.

Your output should look something like this...
```
1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, Fizz, 28, 29, Fizz Buzz, 31, 32, Fizz, 34, Buzz, Fizz, ...
```

You technically haven't learned Ruby loops yet, so we started you off with one below. You should be able to make sense of it based on your experiences with Javascript. All you have to do is change the content of the loop.

```rb
i = 1
while i <= 15
  if i % 3 == 0 && i % 5 == 0
    puts "fizz buzz #{i}"
  elsif i % 3 == 0
    puts "fizz " + i.to_s
  elsif i % 5 == 0
    puts "buzz"
  end
  i += 1
end
```

How would you do the same thing using **until do**
```rb
num = 15
i = 0
until i > num  do
  if i % 3 == 0 && i % 5 == 0
    puts "fizz buzz #{i}"
  elsif i % 3 == 0
    puts "fizz " + i.to_s
  elsif i % 5 == 0
    puts "buzz"
  end
  i += 1
end
```

How would you do the same thing using **for**
```rb
for i in 0..5
 if i % 3 == 0 && i % 5 == 0
    puts "fizz buzz #{i}"
  elsif i % 3 == 0
    puts "fizz " + i.to_s
  elsif i % 5 == 0
    puts "buzz"
  end
  i += 1
end
```
#### BONUS!
Put your algorithm skills to the test and use Ruby to reverse a string.  Of course your initial thought is to use reverse so give that a try but that won't get you any props on  a whiteboarding interview, SO...try solving it without using reverse.  

```ruby
def reverse(string)
 reversed_string = ''
 
 i = 0 
 while i < string.length 
  reversed_string = string[i] + reversed_string
  i += 1 
 end
 
 return reversed_string
end
```
