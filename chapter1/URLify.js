// Write a method to replace all sapces in a string with '%20'. You may assume
// that the string has sufficient space at the end to hold the additional characters,
// and that you are given the 'true' length of the string.


// Solution 1: creating a new variable
// O(n) time where n is the length parameter
// O(1) space
function URLify(str, length) {
  let url = '';
  for (let i = 0; i < length; i++) {
    let char = str[i];
    if (char === ' ') {
      url += '%20';
    } else {
      url += char;
    }
  }
  return url;
}

// console.log(URLify('Mr John Smith     ', 13)) // => 'Mr%20John%20Smith'

// Solution 2: modifying the parameter str
// O(n) time to split and then remove the empty strings in reverse
// O(1) space
function URLify2(str, length) {
  str = str.split(' ')
  while (str[str.length - 1].length === 0) {
    str.pop();
  }
  return str = str.join('%20');
}

console.log(URLify2('Mr John Smith     ', 13)) // => 'Mr%20John%20Smith'
