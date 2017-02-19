require 'pry'

# WARM UP
def lengths argument
  argument.map do |x|
    puts x.length
  end
end

words = ["hello", "what", "is", "up", "dude"]
lengths(words)  # => [5, 4, 2, 2, 4]

# FizzBuzz
def fizzbuzzer arg
  if arg%3 == 0 && arg%5 == 0
    "FIZZBUZZ"
  elsif
    arg%3 == 0
    "FIZZ"
  elsif
    arg%5 == 0
    "BUZZ"
  else
    "Sorrels"
  end
end

fizzbuzzer(3) # => "Fizz"
fizzbuzzer(5) # => "Buzz"
fizzbuzzer(15) # => "FizzBuzz"

# Calculator

loop do
  puts "Please select a math operation"
  puts "add\nsubtract\nmultiply\ndivide"
  puts "Or q to quit"
  print "> "
  operation = gets.chomp.to_sym

  break if operation == :q

  puts "Please input two number: "
  print "Num 1 -> "
  num_one = gets.chomp.to_i
  print "Num 2 -> "
  num_two = gets.chomp.to_i

  if operation == :add
    puts "The answer is #{num_one + num_two}"
  elsif operation == :subtract
    puts "The answer is #{num_one - num_two}"
  elsif operation == :multiply
    puts "The answer is #{num_one * num_two}"
  elsif operation == :divide
    puts "The answer is #{num_one / num_two}"
  end
end
fizzbuzzer(19) # => "Sorrels"
