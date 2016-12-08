let str1 = 'Hello';
let str2 = 'World';
let verbose = 'and it\'s a wonderful \n \t world it is!';

let final = str1 + " " + str2 + verbose;

let final2 = `${str1} ${str2} popo${2 ++ 4 + 6}popo ${verbose} Hi ${1===1}!!
console.log(final2);


let obj = {
  name: 'Patrick',
  getName: function() {
    console.log(this.name)
  },
  shout: function() {
    console.log('HELLO ${this.name}')
  },
}
