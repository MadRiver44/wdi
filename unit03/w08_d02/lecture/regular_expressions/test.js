const myRegEx = /he(l*)o/g;
const testString = 'heo helo hello helllo';
console.log(myRegEx.test(testString));
console.log(testString.match(myRegEx));
console.log(testString.replace(myRegEx, 'hello'));
