const cleanHouse = () => {
  const counter = 1
  console.log(counter, 'I need to clean! I am having company!!!');
  return counter;
}

let promise = new Promise(function(fulfill, reject) {
  const cleanStep = cleanHouse();
  console.log('Getting started...');
  fulfill(cleanStep);
});

const cleanBathroom = (val) => {
  console.log(++val, 'I am cleaning my Bathroom!');
  return val;
}

const cleanKitchen = (val) => {
  console.log(++val, 'I am cleaning my Kitchen!');
  return val;
}

const cleanLivingroom = (val) => {
  console.log(++val, 'I am cleaning my living room!');
  return val;
}

promise.then(function(step) {
  return cleanBathroom(step);
})
.then(function(step) {
  return cleanKitchen(step);
})
.then(function(step) {
  return cleanLivingroom(step);
})
.then(function(step) {
  if (step===4) {
    console.log('Phew! I am done...');
  }
});


// /* FLATTEN ME PLEASE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
// cleanHouse(function(value1) {
//   cleanBathroom(value1, function(value2) {
//     cleanKitchen(value2, function(value3) {
//       cleanLivingroom(value3, function(value4) {
//         if (value4 === 4) console.log('Phew!, I am done...')
//       });
//     });
//   });
// });
