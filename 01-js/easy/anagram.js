/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let a = str1.toLowerCase();
  let b = str2.toLowerCase();
  let l1 = a.length;
  let l2 = b.length;
  if (l1 !== l2) return false;
  else {
    for (let i = 0; i < l1; i++) {
      let s = 0;
      let char = a[i];
      for (let j = 0; j < l1; j++) {
        if (a[j] === char) s++;
        if (b[j] === char) s--;
      }
      if (s > 0) return false;
    }
    return true;
  }
}

module.exports = isAnagram;
