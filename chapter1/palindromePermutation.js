// Given a string, write a function to check if it is a permutation of a palindrome.
// A palindrome is a word or phrase that is the same forwards and backwards. A
// permutation is a rearrangement of letters. The palindrome does not need to be
// limited to just dictionary words.

// Use a set. The length of the set should be empty or only 1 if a string is a palindrome
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
  return set.size <= 1 ? true : false;
}

console.log(palindromePermutation('Tact Coa')) // => true because 'taco cat' 'atco cta'
console.log(palindromePermutation('rraacce')) // => true because 'racecar'
console.log(palindromePermutation('a')) // => true because 'a'
