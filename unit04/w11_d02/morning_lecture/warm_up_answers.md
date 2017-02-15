let words = ["hello", "what", "is", "up", "dude"];
let lengths = function(array) {
  let lengthArray = [];
  for (let i = 0; i<array.length; i++) {
    lengthArray.push(array[i].length);
  }
  return lengthArray;
};
lengths(words);

words = ["hello", "what", "is", "up", "dude"]
def lengths(array)
  length_array = []
  array.each do |word|
    length_array << word.length
  end
  return length_array
end
lengths(words)

FizzBuzz

let fizzbuzz = function(number) {
  while (number > 0) {
    if( (number%5===0) && (number%3===0) ) { 
      console.log("Fizzbuzz");
    } else if(number%5===0) {
      console.log("Buzz");
    } else if(number%3===0) {
      console.log("Fizz");
    } else {
      console.log("Sorrel");
    }
  number = number -1;
  }
};
fizzbuzz(21);

def fizzbuzz(number)
  while number > 0
    if number % 5 == 0 && number % 3 == 0
      puts "Fizzbuzz"
    elsif number % 5 == 0 
      puts "Fizz"
    elsif number % 3 == 0 
      puts "Buzz"
    else
      puts "Sorrels"
    end
      number = number - 1
  end
end
fizzbuzz(20);
Calculator

def calculator
  puts "What operation would you like to use?"
  puts "Addition / Subtraction / Multiplication / Division"
  operation = gets.chomp
  puts "What is the first number?"
  first = gets.chomp.to_i
  puts "What is the second number?"
  second = gets.chomp.to_i
  if operation == "Addition"
    puts first + second
  elsif operation == "Subtraction"
    puts first - second
  elsif operation == "Multiplication"
    puts first * second
  elsif operation == "Division"
    puts first / second
  else
    puts "Sorry, I didn't understand that"
    calculator()
  end
end

calculator()
