/* regular style
function add(n1,n2) {
  return n1+n2;
}

console.log(add(2,2));*/

/*fat arrow style
const add(n1=0,n2=0) => {
  return n1+n2;
}

console.log(add(2,2));*/

/*or

const add = (n1=0,n2=0) =>  n1+n2*/


const add = n1 =>  n1

console.log(add(77));
