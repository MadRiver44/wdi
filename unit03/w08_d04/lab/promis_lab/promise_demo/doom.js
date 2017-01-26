const cleanHouse = (cb) => {
  const counter = 1
  console.log(counter, 'I need to clean! I am having company!!!');
  if (typeof cb === 'function') cb(counter);
}

const cleanBathroom = (val, cb) => {
  console.log(++val, 'I am cleaning my Bathroom!');
  if (typeof cb === 'function') cb(val);
}

const cleanKitchen = (val, cb) => {
  console.log(++val, 'I am cleaning my Kitchen!');
  if (typeof cb === 'function') cb(val);
}

const cleanLivingroom = (val, cb) => {
  console.log(++val, 'I am cleaning my living room!');
  if (typeof cb === 'function') cb(val);
}

/* FLATTEN ME PLEASE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
cleanHouse(function(value1) {
  cleanBathroom(value1, function(value2) {
    cleanKitchen(value2, function(value3) {
      cleanLivingroom(value3, function(value4) {
        if (value4 === 4) console.log('Phew!, I am done...')
      });
    });
  });
});