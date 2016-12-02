# ES6 Classes and Inheritance

### The `User` class
- Create a `User` class. In the constructor function, accept the following arguements
and set them as as properties:
  - `firstName`: string
  - `lastName`: string
  - `email`: string
  - `password`: string
- Add a `changePassword` function to the `User` class which takes an arguement
`newPassword` and reset `password` to equal `newPassword`.
- Create a `user` variable and assign it to an instance of the `User` class that you instantiate with your name, email and a (fake) password.
- Call `changePassword` on `user` to change its password, then print it out with a `console.log`

### The `Student` class
- Create a `Student` class which inherits from the `User` class
- The `Student` class should set all of the same properties as the `User` class, as well two more properties:
    - `classRoomName`: string
    - `attendance`: default value of `100`
- Add a `missClass` function to the `Student` class which subtracts `5` from `attendence`
- Instantiate an instance of `Student` with a name, email, password, and classRoomName. Store it in a variable `student` and `console.log` __all__ of the properties to confirm they are set properly.
- Change the students password with `changePassword` and `console.log` the new password.
- Call `missClass` on the student and `console.log` the students `attendance`

### The `FavoriteStudent` class
- Create a `FavoriteStudent` class that extends `Student`
- Add a `missClass` function and have it `console.log` the string `"It's ok"`.
- Instantiate an instantce of `FavoriteStudent` and store it in the variable `fs`.
- Call `missClass` on the favorite student instance. What happens the the favoite students attendence after you do this? What does this tell you about defining functions in subclasses that have already been defined in the parent class?
- Change your `missClass` function to look like this
```javascript
missClass() {
    super.missClass();
    console.log("Sorry, not allowed to have favorites :(");
}
```
- Call `missClass` on `fs`. What does this tell you about `super`?

### Bonus
*FancyArray*
- Create a class `FancyArray` which extends `Array`
- Add a function to `FancyArray` called `middle` which returns the middle
element of the array.
- Add a function to `FancyArray` called `turn` which takes the last element of
the array and places it in front while shifting every other element back one index.
Example:
```javascript
let fancy = new FancyArray(1,2,3);
fancy.turn;
console.log(fancy); // => [3,1,2]
```
- Modify your `turn` function to take an arguement `n`. The `turn` function
should now take `n` elements from the end of the array and place them in the front.
Example:
```javascript
let fancy = new FancyArray(1,2,3,4,5,6,7,8,9);
fancy.turn(3);
console.log(fancy); // => [7,8,9,1,2,3,4,5,6]
```
- Add a function to `FancyArray` called `splitFlip` which takes an arguement `n`.
`splitFlip` will split the array after the `n`'th index, then take
each half and reverse them before adding them back together.
Example:
```javascript
let fancy = new FancyArray(1,2,3,4,5,6,7,8,9);
fancy.splitFlip(4);
console.log(fancy); // => [5,4,3,2,1,9,8,7,6]
fancy.splitFlip(2);
console.log(fancy); // => [3,4,5,6,7,8,9,1,2]
```
