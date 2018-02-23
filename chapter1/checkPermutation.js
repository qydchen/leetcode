// Given two strings, write a method to decide if one is a permutation of the other.

// Solution 1;
// The time complexity is O(n log n) where the strings have to be iterated through to replace all
// spaces and have each string sorted

// Space complexity O(1)
function checkPermutation(s1, s2) {
  return cleanStr(s1) === cleanStr(s2);
}

function cleanStr(str) {
  return str.toLowerCase().split(' ').join('').split('').sort().join('');
}

// console.log(cleanStr('God')) // => 'dgo'
// console.log(cleanStr('God      ')) // => 'dgo'
// console.log(cleanStr('dog')) // => 'dgo'

// console.log(checkPermutation('God', 'dog')) // => true
// console.log(checkPermutation('God     ', 'dog')) // => true
// console.log(checkPermutation('xxana', 'xanax')) // => true
// console.log(checkPermutation('a', '')) // => false
