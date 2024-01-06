// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

// O(w * n * log(n)) time
// O(wn) space where w is the number of words and n is the length of the longest word

function groupAnagrams(strs) {
  let map = new Map();
  for (let s of strs) {
    let sorted = s.split("").sort().join("");
    map.has(sorted) ? map.get(sorted).push(s) : map.set(sorted, [s]);
  }
  return Array.from(map.values());
}

const words = ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"];
console.log(groupAnagrams(words));
