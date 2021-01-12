// A string S of lowercase English letters is given. We want to
// partition this string into as many parts as possible so that each letter
// appears in at most one part, and return a list of integers representing the size of these parts.

// Example 1:

// Input: S = "ababcbacadefegdehijhklij"
// Output: [9,7,8]
// Explanation:
// The partition is "ababcbaca", "defegde", "hijhklij".
// This is a partition so that each letter appears in at most one part.
// A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.

// Note:

// S will have length in range [1, 500].
// S will consist of lowercase English letters ('a' to 'z') only.

const partitionLabels = function (S) {
  const last = new Map();
  for (let i = 0; i < S.length; i++) last.set(S[i], i);

  let l = 0,
    lastMax = -1;
  const res = [];
  for (let r = 0; r < S.length; r++) {
    lastMax = Math.max(lastMax, last.get(S[r]));
    if (lastMax === r) {
      console.log("left", l, "right", r);
      console.log(r - l + 1);
      res.push(r - l + 1);
      l = r + 1;
    }
  }
  console.log(last);
  return res;
};
