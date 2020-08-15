// Given two strings, write a method to decide if one is a permutation of the other.

// Solution #1
// The time complexity is O(n log n) where the strings have to be sorted

// Space complexity O(1)
function checkPermutation(s1, s2) {
  return cleanStr(s1) === cleanStr(s2);
}

function cleanStr(str) {
  return str.toLowerCase().split('').sort().join('');
}

// console.log(cleanStr('God')) // => 'dgo'
// console.log(cleanStr('God      ')) // => 'dgo'
// console.log(cleanStr('dog')) // => 'dgo'

// console.log(checkPermutation('God', 'dog')) // => true
// console.log(checkPermutation('God     ', 'dog')) // => false
// console.log(checkPermutation('xxana', 'xanax')) // => true
// console.log(checkPermutation('a', '')) // => false

// Solution #2
// store char-count in a hashmap
// The time complexity is O(n) where the strings are iterated through
// Space complexity is O(1) where we access at most 128 chracters (assuming ASCII)
function checkPermutation2(s1, s2) {
  let s1Standard = s1.toLowerCase();
  let s2Standard = s2.toLowerCase();
  let obj = {};
  for (let i = 0; i < s1Standard.length; i++) {
    let char = s1Standard[i];
    obj[char] ? obj[char]++ : obj[char] = 1;
  }
  for (let i = 0; i < s2Standard.length; i++) {
    let char = s2Standard[i];
    if (obj[char]) {
      obj[char]--;
    } else {
      return false;
    }
  }
  for (let char in obj) {
    if (obj[char] !== 0) {
      return false;
    }
  }
  return true;
}

console.log(checkPermutation2('God', 'dog')) // => true
console.log(checkPermutation2('God     ', 'dog')) // => false
console.log(checkPermutation2('xxana', 'xanax')) // => true
console.log(checkPermutation2('a', '')) // => false
