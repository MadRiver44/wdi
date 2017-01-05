// GO!
function isPalindrome(str) {
<<<<<<< HEAD
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
=======
  
>>>>>>> e3863f5d9ceccf25a51d31945974b3dc1b066dbb
}
checkPalindrome('racecar');
