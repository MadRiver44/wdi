var mongo = require("mongodb").MongoClient
var prompt = require("prompt-sync")()
var url = "mongodb://localhost:27017/restaurant_db"

mongo.connect(url, function(err, db){
  var collection = db.collection('restaurants');
  var number = prompt("Type 1 and press enter to display all restaurants' names. Type 2 and press enter to read more about the restaurants: ")
  if(number == "1"){
    collection.find({},{name: 1, _id:0}).toArray(function(err, doc){
      console.log(doc)
    })
  } else if (number == "2"){
    collection.find().toArray(function(err, doc){
    console.log(doc)
    })
  } else if (number == "3") {
    var zip = prompt("Enter a rating: ")
    db.collection('restaurants').update({"zipcode": "zip"})
    console.log("Else 3");
  } else {
    console.log("I didn't understand that.");
  }
  return "Done!"
})

