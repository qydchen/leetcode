// Given a string, write a function to check if it is a permutation of a palindrome.
// A palindrome is a word or phrase that is the same forwards and backwards. A
// permutation is a rearrangement of letters. The palindrome does not need to be
// limited to just dictionary words.

// Use a set. The length of the set should be empty or only 1 if a string is a palindrome
// When the set size is less than or equal to 1, we know that is going to be a palindrome

// Time complexity: O(n) where n is the input size of str
// Space complexity: O(1) the set can grow up to a maximum number of all distinct elements.
// However, the number of distinct characters are bounded (128 characters assuming ASCII)

function palindromePermutation(str) {
  const standard = str.toLowerCase();
  const set = new Set();
  for (let i = 0; i < standard.length; i++) {
    let char = standard[i];
    if (char === ' ') {
      continue;
    }
    set.has(char) ? set.delete(char) : set.add(char);
  }
  return set.size <= 1;
}

// console.log(palindromePermutation('Tact Coa')) // => true because 'taco cat' 'atco cta'
// console.log(palindromePermutation('rraacce')) // => true because 'racecar'
// console.log(palindromePermutation('a')) // => true because 'a'
// console.log(palindromePermutation('ab')) // => f
// console.log(palindromePermutation('abb')) // => t
// console.log(palindromePermutation('abba')) // => t
// console.log(palindromePermutation('abbc')) // => f
