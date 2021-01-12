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

// Intuition:
// Iterate through left to right on S and save into a map the last index of each character
// Iterate through left to right on S again and compare with an auxilary variable lastMax, that saves
// the max last index occurence of a character
// When the last max is equal to the current index i of S, then we know that is partition
// Remember to save the partition in the form of the left most starting index minus the right index plus 1;
// Remember this index as the variable l, in order to calculate the next n partitions
// Return the partitions

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

const input = "ababcbacadefegdehijhklij";
console.log(partitionLabels(input));
