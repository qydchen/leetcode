// The key to solving this is recognizing this property of the XOR (^)
// XOR is associative and commutative
// associative: a ^ (b ^ c) = (a ^ b) ^ c
// and commutative: a ^ b = b ^ a

/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function (pref) {
  let ans = [];
  ans[0] = pref[0];
  for (let i = 1; i < pref.length; i++) {
    ans[i] = pref[i] ^ pref[i - 1];
  }
  return ans;
};
