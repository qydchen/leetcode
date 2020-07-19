const assert = require('assert');
// Write a method to replace all spaces in a string with '%20'. You may assume
// that the string has sufficient space at the end to hold the additional characters,
// and that you are given the 'true' length of the string.

// Time Complexity: O(n) time where n the number of iterations across each character in the input str
// Space Complexity: O(n) space where n is correlated to the size of the input str

function URLify(str, length) {
  let result = '';
  let nonSpaces = 0;
  Array.from(str).forEach(char => {
    if (char !== ' ') {
      nonSpaces += 1;
    }
  });
  let spaces = length - nonSpaces;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] !== ' ') {
      result += str[i];
    }
    if (str[i] === ' ' && spaces > 0) {
      result += '%20';
      spaces -= 1;
    }
  }
  return result;
}

assert.equal(URLify('Mr John Smith     ', 13), 'Mr%20John%20Smith');
assert.equal(URLify('Mr John Smith     ', 14), 'Mr%20John%20Smith%20');
assert.equal(URLify(' hello ', 6), '%20hello');
assert.equal(URLify('hel lo', 5), 'hello');
assert.equal(URLify('', 0), '');
