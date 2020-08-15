// Implement a method to perform basic string compression using the counts of
// repeated characters. For example, the string 'aabcccccaaa' would become a2bc5a3.
// If the 'compressed' string would not become smaller than the original string,
// your method should return the original string. You can assume the string has only
// uppercase and lowercase letters (a-z).

// Make two pointers. One will point to the origins of the first sequential character.
// One will point ahead to the last sequential character

// If the next sequential character of the last pointer is not the first character,
// then generate the compression.

function stringCompression(str) {
  let back = 0;
  let front = 0;
  let compressed = ''
  while (back < str.length) {
    let backChar = str[back];
    if (compressed.length > str.length) {
      return str;
    }

    if (backChar !== str[front]) {
      compressed += generateCompression(back, front, backChar)
      back = front;
    }
    front++
  }
  return compressed;
}

function generateCompression(back, front, char) {
  let compressed = '';
  if (front - back <= 1) {
    return char;
  } else {
    while (compressed.length < front - back) {
      compressed += char + (front - back);
    }
  }
  return compressed;
}

console.log(stringCompression('abcde')) // => 'abcde' because 'a1b1c1d1e1' is longer
console.log(stringCompression('aabbccddee')) // => 'a2b2c3d2e2'
console.log(stringCompression('abdefghiijjkkllmmnnooppqqrrssttuuvvwwxxaazxcvbnm')) // =. 'abdefghi2j2k2l2m2n2o2p2q2r2s2t2u2v2w2x2a2zxcvbnm'
