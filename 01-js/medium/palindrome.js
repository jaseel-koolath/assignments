/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let s = str
    .toLowerCase()
    .replace(/ /g, "")
    .replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "");
  console.log(s, "string");
  let l = s.length;
  for (let i = 0; i < l / 2; i++) {
    if (s[i] !== s[l - 1 - i]) return false;
  }
  return true;
}

isPalindrome("Able, was I ere I saw Elba!");

module.exports = isPalindrome;
