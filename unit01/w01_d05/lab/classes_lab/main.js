class User {
  constructor(string1, string2, string3, string4) {
    this.firstName = string1;
    this.lastName = string2;
    this.email = string3;
    this.password = string4;
  }
      changePassword(newPassword) {
        this.password = newPassword;
    }
};
//let fb = new User("Franklin", "Brooks", "fcb@fcb.com", "mypassword");
//fb.changePassword("myNewPassword");
//console.log(fb);
class Student extends User {
    constructor(firstName,lastName,email,password,classRoomName) {
      super(firstName,lastName,email,password);
      this.classRoomName = classRoomName;
      this.attendance = 100;
    };
      missClass() {
        this.attendance = (this.attendance - 5);
  };
};
//let student = new Student("John", "Smith", "js@js.com", "123", "Pumbaa");
//console.log all of the properties to confirm they are set properly.
//console.log(student);
//Change the students password with changePassword and console.log the new password.
//student.changePassword("hisNewPassword");
//console.log(student);
//Call missClass on the student and console.log the students attendance
//student.missClass();
//console.log(student.attendance);

class FavoriteStudent extends Student {
    constructor(firstName,lastName,email,password,classRoomName) {
      super(firstName,lastName,email,password);
      this.classRoomName = classRoomName;
      this.attendance = 100;
    };
//      missClass() {
//        console.log("It's ok");
//  };
  missClass() {
    super.missClass();
    console.log("Sorry, not allowed to have favorites :(");
  }
};
//Instantiate an instantce of FavoriteStudent and store it in the variable fs.
let fs = new Student("John", "Smith", "js@js.com", "123", "Pumbaa");
//Call missClass on the favorite student instance.
//fs.missClass();
//console.log(fs.attendance);

//What happens the the favoite students attendence after you do this?
//What does this tell you about defining functions in subclasses
//that have already been defined in the parent class?
//Change your missClass function to look like this

//missClass() {
//    super.missClass();
//    console.log("Sorry, not allowed to have favorites :(");
//}

//Call missClass on fs. What does this tell you about super?
//fs.missClass();
//console.log(fs.attendance);

//Create a class FancyArray which extends Array
class FancyArray extends Array {
    constructor() {
      super(array);
    };
    let middle = function() {
      var preindex = (array.length) / 2;
      console.log(preindex);
      var middleIndex = Math.floor(preindex);
      console.log(middleIndex);
      return array[middleIndex];
    };
    middle(array);

    let turn = function() {
      newFirst = array[array.length - 1];
      array.splice(0, 0, newFirst);
      array.pop();
      return array;
    };
//Add a function to FancyArray called middle which returns the middle element of the array.

//Add a function to FancyArray called turn which takes the last element of the array and places it in front while shifting every other element back one index. Example:

//var array = [1,2,3,4,5];

let fancy = new FancyArray(1,2,3);
fancy.turn;
console.log(fancy); // => [3,1,2]

//Modify your turn function to take an argument in. The turn function should now take n elements from the end of the array and place them in the front. Example:
//let fancy = new FancyArray(1,2,3,4,5,6,7,8,9);
//fancy.turn(3);
//console.log(fancy); // => [7,8,9,1,2,3,4,5,6]
//Add a function to FancyArray called splitFlip which takes an arguement n. splitFlip will split the array after the n'th index, then take each half and reverse them before adding them back together. Example:
//let fancy = new FancyArray(1,2,3,4,5,6,7,8,9);
//fancy.splitFlip(4);
//console.log(fancy); // => [5,4,3,2,1,9,8,7,6]
//fancy.splitFlip(2);
//console.log(fancy); // => [3,4,5,6,7,8,9,1,2]












