// is Unique: Implement an algorithm to determine if a string has all unique
// characters. What if you cannot use additional data structures.

// time complexity = O(n) where n is string.length
// can argue to be O(1) since loop can never iterate over 128 chars assuming ASCII
// space complexity = O(1) // can be O(c) space where c is the size of the char set

function isUnique(str) { // with data structure;
  let mem = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (mem[char]) {
      return false;
    } else {
      mem[char] = true;
    }
  }
  return true;
}

// console.log(isUnique('halleujiah')) // => false;
// console.log(isUnique('asdfghjkl')) // => true;

// time complexity = O(n^2)
// space compexity = O(1)
function isUnique2(str) { // without data structure;
  for (let i = 0; i < str.length; i++) {
    let char1 = str[i];
    for (let j = 0; j < str.length; j++) {
      let char2 = str[j];
      if (char1 === char2) {
        return false;
      }
    }
  }
  return true;
}
// console.log(isUnique('halleujiah')) // => false;
// console.log(isUnique('asdfghjkl')) // => true;
