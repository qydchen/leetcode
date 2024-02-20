// Method "has_letters" should return true if the array of chars has enough letters to form the word in the string.
// Note that it needs to have enough count of the letters in the word, i.e., "disassemble" needs three s's.

const hasLetters = (s, c) => {
  const map = new Map();
  for (const char of c) {
    map.set(char, map.has(char) ? map.get(char) + 1 : 1);
  }
  for (const char of s) {
    if (map.has(char)) {
      map.set(char, map.get(char) - 1);
      if (map.get(char) < 0) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
};

console.log(hasLetters("disassemble", "disasemblesssss".split(""))); // true
console.log(hasLetters("disassemble", "disasemble".split(""))); // false
console.log(hasLetters("disassemble", "sdisasemble".split(""))); // true
console.log(hasLetters("", [])); // true
console.log(hasLetters("a", [])); // false
console.log(hasLetters("a", ["a"])); // true
console.log(hasLetters("a", ["b"])); // false
