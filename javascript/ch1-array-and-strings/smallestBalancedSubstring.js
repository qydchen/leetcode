// A string is considered balanced when every letter in the string appears both in uppercase and lowercase
// For example, CATattac is balanced (a, c, t occur in both cases). Madam is not (a, d only appear in lowercase).
// Write a function that given a string returns the shortest balanced substring of that string.
// “azABaabza” returns “ABaab”
// “TacoCat” returns -1 (not balanced)
// “AcZCbaBz” returns the entire string
const assert = require("assert");

const lower = "qwertyuiopasdfghjklzxcvbnm";
const upper = lower.toUpperCase();

function solution(S) {
  let ans = Infinity;
  for (let i = 0; i < S.length; i++) {
    for (let j = i; j < S.length; j++) {
      let val = helper(S.slice(i, j + 1));
      if (val < 1) {
        continue;
      }
      ans = Math.min(ans, val);
    }
  }
  if (ans === Infinity) return -1;
  return ans;
}

function helper(s) {
  const lowers = new Set();
  const uppers = new Set();
  for (let i = 0; i < s.length; i++) {
    if (lower.indexOf(s[i]) > -1) {
      lowers.add(s[i]);
    }
    if (upper.indexOf(s[i]) > -1) {
      uppers.add(s[i]);
    }
  }
  let missingUpper = false;
  let missingLower = false;
  for (let char of lowers) {
    if (!uppers.has(char.toUpperCase())) {
      missingUpper = true;
    }
  }
  for (let char of uppers) {
    if (!lowers.has(char.toLowerCase())) {
      missingLower = true;
    }
  }
  if (missingLower || missingUpper) {
    return -1;
  }
  if (lowers.size === uppers.size) {
    return s.length;
  }
  return -1;
}

assert.deepEqual(solution("AcZCbaBz"), 8);
assert.deepEqual(solution("azABaabba"), 5);
assert.deepEqual(solution("Madam"), -1);
assert.deepEqual(solution("TACocat"), -1);
assert.deepEqual(solution("asdnjlsdnfladjnfladjnfaPOMpom"), 6);
