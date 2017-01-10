(function(){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA8zE7tg97Jvg1xFvsmTstf_Elt6YrwRSI",
    authDomain: "rest-exercise-97315.firebaseapp.com",
    databaseURL: "https://rest-exercise-97315.firebaseio.com",
    storageBucket: "rest-exercise-97315.appspot.com",
    messagingSenderId: "126962058458"
  }; firebase.initializeApp(config);
})()


const bigOne = document.getElementById('bigOne');
const ulList = document.getElementById('list');

const dbRef = firebase.database().ref().child('object');

const dbRefList = dbRef.child('hobbies');

dbRef.on('value', (snap) => {
  console.log(snap.val());
  bigOne.innerText = JSON.stringify(snap.val(), null, 3);
})


const addUser = (val) => {
  firebase.database().ref('object').set({
    'gender': val
  })
}

/*
dbRefList.on('child_added', (snap) =>  {
  console.log("Children=>>>", snap.val());
  const li = document.createElement('li')
  li.innerText = snap.val();
  li.id = snap.key;
  ulList.appendChild(li); 
} );

dbRefList.on('child_changed', (snap) =>  {
  const liChanged = document.getElementById(snap.key);
  liChanged.innerText = snap.val();
} );

dbRefList.on('child_removed', (snap) =>  {
  const liRemove = document.getElementById(snap.key);
  liRemove.remove();
} );

*/

