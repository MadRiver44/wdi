global.name = 'God';

let obj1 = {
  name: 'Jay'
}
let obj2 = {
  name: 'Kyla'
}
let obj3 = {
  name: 'Darc'
}

function g() {
  console.log(this.name);
}
g();  // returns window object as 'owner' of 'this'

g.call(obj1); // The call method

