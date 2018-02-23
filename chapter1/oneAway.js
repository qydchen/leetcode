// There are three types of edits that can be performed on strings: insert a character,
// remove a characgter, or replace a character. Given two strings, write a function to
// check if they are one edit (or zero edits) away.

// Replacement: if the string lengths are equal to each other, we can track each char
// and check if there is only one difference; in other worse, we can check
// if if the string is only one replacement away

// Insertion: if the string lengths are one away from each other, we can then check
// each character and shift the longer string's index up 1 when we see a character mismatch.
// If there is more than 1 mismatch, then it is not one away (returns false).

// Deletion: exactly identical to insertion

// O(n) time
// O(1) space
function oneAway(str1, str2) {
  if (str1.length === str2.length) {
    return replacement(str1, str2);
  } else if (str1.length === str2.length - 1) {
    return insertion(str1, str2);
  } else if (str2.length === str1.length - 1) {
    return insertion(str2, str1);
  } else {
    return false;
  }
}

function replacement(str1, str2) {
  let oneDiff = false;
  for (let i = 0; i < str1.length; i++) {
    let char1 = str1[i];
    let char2 = str2[i];
    if (char1 !== char2) {
      if (oneDiff) {
        return false;
      } else {
        oneDiff = true;
      }
    }
  }
  return oneDiff;
}

function insertion(str1, str2) {
  let idx1 = 0;
  let idx2 = 0;
  while (idx1 < str1.length && idx2 < str2.length) {
    let char1 = str1[idx1];
    let char2 = str2[idx2];
    if (char1 !== char2) {
      idx2++;
      if (str1[idx1] !== str2[idx2]) {
        return false;
      }
    }
    idx1++;
    idx2++;
  }
  return true;
}


console.log(oneAway('pale', 'ple')) // true
console.log(oneAway('pales', 'pale')) // true
console.log(oneAway('pale', 'bale')) // true
console.log(oneAway('pale', 'bae')) // false
