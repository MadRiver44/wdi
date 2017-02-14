# Ruby Reps!
![Ruby Meme](https://zurich.impacthub.ch/wp-content/uploads/2016/01/55955100.jpg)

Good Morning Hakuna Matata!

You know what a new coding language means -- More reps!  Below are three different code challenges. Please answer them twice - Once using **Ruby** and once using **Javascript**.

Create a file `warm_up_answers.md` to copy and paste your answers for each challenge.

Oh, and check out the [Ruby documentation](http://ruby-doc.org/core-2.2.0/) if you get stuck!

## Warmup

Write a method `lengths` that accepts an an array of strings as an argument and returns an array of numbers where each number is the length of the corresponding string.

```ruby
words = ["hello", "what", "is", "up", "dude"]
lengths(words)  # => [5, 4, 2, 2, 4]
```

## FizzBuzz

Write a method `fizzbuzz` that accepts a number as an argument, and will return the following:

	- The string "Fizz" if the number is evenly divisible by 3
	- The string "Buzz" if the number is evenly divisible by 5
	- The string "FizzBuzz" if the number is evenly divisible by 3 AND 5
	- The string "Sorrels" if the number is not divisible by 3 OR 5

```ruby
fizzbuzzer(3) # => "Fizz"
fizzbuzzer(5) # => "Buzz"
fizzbuzzer(15) # => "FizzBuzz"
fizzbuzzer(19) # => "Sorrels"
```

## Calculator

Write an operation `calculator` that:
* Prompts the user to Input a Math Operation (Subtraction, Multiplication, Division, or Addition)
* Prompts the user to Input two numbers
* Performs the Math Operation, using the two inputted numbers, returning the final answer.

```ruby
"What operation would you like to use?"
Addition
"What's the first number?"
3
"What's the second number?"
2
# Returns 5
```
