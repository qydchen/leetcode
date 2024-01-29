/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
  let lastSeen = new Array(26).fill(-1);
  let count = 1;
  let substringStart = 0;
  for (let i = 0; i < s.length; i++) {
      let idx = s[i].charCodeAt(0) - 'a'.charCodeAt(0);
      if (lastSeen[idx] >= substringStart) {
          count++;
          substringStart = i;
      }
      lastSeen[idx] = i;
  }
  return count;
};

// abacaba

// 'a'
// -1 >= 0
// lastSeen of a = 0;

// 'b'
// -1 >= 0
// lastSeen of b = 1;

// 'a'
// 0 >= 0
// count++ // 2
// substringStart = 2
// lastSeen of a = 2

// 'c'
// -1 >= 0
// lastSeen of c = 3;

// 'a'
// 2 >= 2
// count++ // 3
// subStringStart = 4
// last seen of a = 4

// 'b'
// 1 >= 4
// lastSeen of b = 5

// 'a'
// 4 >= 4
// count++ // 4
// subStringStart = 6

// 'ssssss'

// 's'
// -1 >= 0
// lastSeen of s = 0

// s
// 0 >= 0
// count++ // 2
// subStringStart = 1;
// lastSeen of s = 1;

// s
// 1 >= 1
// count++ // 3
// subStringStart = 2;
// lastSeen of s = 2;

// s
// 2 >= 2
// count++ // 3
// subStringStart = 3;
// lastSeen of s = 3;
