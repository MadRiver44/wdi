// GO!
function isPalindrome(str) {
  let newStr = '';
  for (i=0; i<str.length; i++) {
    newStr = str[i] + newStr;
  }
  console.log(newStr);
  str = str.replace(/ /g, '');
  newStr = newStr.replace(/ /g, '');
  if (str.toLowerCase() === newStr.toLowerCase()) {
    return true;
  }
  else {
    return false;
  }
}

isPalindrome(sees);

function checkPalindrome(input) {
  let cleanReverse = input.split(' ').join('').split('').reverse();
  return (cleanReverse.join('') === input.split(' ').join('') ? true : false);
}
checkPalindrome('racecar');
