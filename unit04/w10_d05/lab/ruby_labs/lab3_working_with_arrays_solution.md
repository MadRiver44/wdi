### Arrays

Starting with the following array...

```rb
planeteers = ["Earth", "Wind", "Captain Planet", "Fire", "Water"]
```

Access the second value in `planeteers`.

```rb
planeteers[1]
```

Add "Heart" to the end of `planeteers`.

```rb
planeteers.push('heart')
```

Remove "Captain Planet" from the array.

```rb
planeteers.delete("Captain Planet")
```

Combine `planeteers` with `rangers = ["Red", "Blue", "Pink", "Yellow", "Black"]` and save the result in a variable called `heroes`.

```rb
heros = planeteers.concat(rangers)
heros = planeteers + rangers
```

Alphabetize the contents of `heroes` using a method. [The Ruby documentation might help](http://ruby-doc.org/core-2.2.0/Array.html).

```rb
heros.sort
```

Randomize the contents of `heroes` using a method. [The Ruby documentation might help](http://ruby-doc.org/core-2.2.0/Array.html).

```rb
heros.shuffle
```

#### Bonus

Select a random element from `heroes` using a method. [The Ruby documentation might help](http://ruby-doc.org/core-2.2.0/Array.html).

```rb
heros.sample
```

Select all elements in `heroes` that begin with "B" using a method. [The Ruby documentation might help](http://ruby-doc.org/core-2.2.0/Array.html).

```rb
heros.select { |person| person[0] == "B" }
```

### Hashes

Initialize a hash called `ninja_turtle` with the properties `name`, `weapon` and `radical`. They should have values of "Michelangelo", "Nunchuks" and `true` respectively.

```rb
ninja_turtle = {
   name: "Michelangelo",  
   weapon: 'Nunchucks' ,
   radical: true
} 
```

Add a key `age` to `ninja_turtle`. Set it to whatever numerical value you'd like.

```rb
ninja_turtle[:age] = 20
```

Remove the `radical` key-value pair from `ninja_turtle`.

```rb
ninja_turtle.delete(:radical)
```

Add a key `pizza_toppings` to `ninja_turtle`. Set it to an array of strings (e.g., `["cheese", "pepperoni", "peppers"]`).

```rb
ninja_turtle[:pizza_toppings] = ["cheese", "pepperoni", "peppers"]
```

Access the first element of `pizza_toppings`.

```rb
ninja_turtle[:pizza_toppings][0]
```

Produce an array containing all of `ninja_turtle`'s keys using a method. [The Ruby documentation might help](http://ruby-doc.org/core-1.9.3/Hash.html).

```rb
ninja_turtle.keys
```

#### BONUS #1 
Put your algorithm skills to the test and use Ruby to `Reverse a String`.  Of course your initial thought is to use reverse so give that a try but that won't get you any props on  a whiteboarding interview, SO...try solving it without using reverse.  

Using an array and it's each method, reverse a string, eg 'apple' => 'elppa'

```rb
input = 'apple'
# put your code here
```

```rb
def reverse(string)
 string = string.split('')
 reversed_string = []
 
 string.each do |char|
  reversed_string.unshift(char)
 end
 
 return reversed_string.join('')
end
```

#### BONUS #2
Using map, mutate the arrays below:

```ruby
# Add 1 to each number in the array..[1,2,3] => [2,3,4]

arr1 = [1,2,3]
arr1.map { |n| n + 1; } 
```

```ruby
# Mutate the array 2x. 
# The first time convert all names to uppercase. 
# The second just the first character of each name. 

names = [paris,vincent,patrick,joe]

names.map! {|name| name.capitalize }
puts names

names.map { |name| name.upcase  }
puts names
```
