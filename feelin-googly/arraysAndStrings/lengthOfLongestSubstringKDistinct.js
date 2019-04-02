// Given a string, find the length of the longest substring T that contains at most k distinct characters.

//     Example 1:

// Input: s = "eceba", k = 2
// Output: 3
// Explanation: T is "ece" which its length is 3.
// Example 2:

// Input: s = "aa", k = 1
// Output: 2
// Explanation: T is "aa" which its length is 2.
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// Strategy:
// - iterate through each character, add each distinct character into a set
// - once the set contains more than k elements, return the string

const lengthOfLongestSubstringKDistinct = (s, k) => {
    let set = new Set();
    let result = '';
    for (let i = 0; i < s.length; i++) {
        if (!set.has(s[i])) {
            if (set.size < k) {
                set.add(s[i]);
            } else {
                return result.length;
            }
        }
        result += s[i];
    }
    return result.length;
};

console.log(lengthOfLongestSubstringKDistinct('eceba', 2));