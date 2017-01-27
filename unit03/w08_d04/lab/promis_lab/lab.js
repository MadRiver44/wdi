const cleanHouse = (cb) => {
  const counter = 1
  console.log(counter, 'I need to clean! I am having company!!!');
  return counter;
}

let promise = new Promise(function(resolve, reject){
  const cleanStep = cleanHouse();
  console.log('Geting started');
         resolve(cleanStep);
});

const cleanBathroom = (val) => {
  console.log(++val, 'I am cleaning my Bathroom!');
}

const cleanKitchen = (val) => {
  console.log(++val, 'I am cleaning my Kitchen!');
}

const cleanLivingroom = (val) => {
  console.log(++val, 'I am cleaning my living room!');
}

/* FLATTEN ME PLEASE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/

Promise.then(function(step) {
  console.log('Second method completed');
  return cleanKitchen
});

.then(cleanKitchen(val) {
  console.log('Third method completed');
  return promise;
});

.then(cleanLivingroom(val) {
  console.log('Fourth and last method completed');
  if (value4 === 4) {
  console.log('Phew!, I am done...');
});










