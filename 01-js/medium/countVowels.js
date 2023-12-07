/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let r = 0;
    let s = str.toLowerCase();
    let v = "aeiou";
    for (let i = 0; i < s.length; i++) {
      if (v.indexOf(s[i]) > -1) r++;
    }
    return r;
}

module.exports = countVowels;