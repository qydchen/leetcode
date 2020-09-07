// Given two strings, write a method to count how many times a string is a permutation of the other

// Use a sliding window strategy
// As the window slides over, check if the str is a permutation
// We can check a string is a permutation using array.sort and then joining elements together, or map the
// strings with key-values with the character as the key and value as the count

// Time complexity: O(n * s) where n is the length of the str and s is the length of the perm
// Space complexity: O(1)
function countPermutation(str, perm) {
  let count = 0;
  for (let i = 0; i <= str.length - perm.length; i++) {
    let possiblePerm = str.slice(i, i + perm.length);
    let sortedPerm = possiblePerm.split('').sort().join('');
    if (sortedPerm === perm.split('').sort().join('')) {
      count++;
    }
  }
  return count;
}

// console.log(countPermutation('accatdoghotdoggododgo', 'dog')); // => 5
// console.log(countPermutation('aa', 'a')); // => 2
// console.log(countPermutation('b', 'a')) // => 0
