function add(n1,n2, cb) {
  console.log(n1 + n2);
  if (cb && typeof cb === 'function') {
    cb();
  }
  console.log()'ping';
  console.log()'ping';
  console.log()'ping';
}
/*
add(1,2, () => {
  console.log('I am done with homework!');
});
*/
add(3,3);
