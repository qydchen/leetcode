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
    let longest = 0;
    let result = '';
    if (k === 0) {
        return result;
    }
    if (k >= s.length) {
        return s.length;
    }
    for (let i = 0; i < s.length; i++) {
        const set = new Set();
        result = '';
        for (let j = i; j < s.length; j++) {
            if (!set.has(s[j])) {
                if (set.size < k) {
                    set.add(s[j]);
                } else {
                    break;
                }
            }
            result += s[j];
            longest = Math.max(longest, result.length); 
        }
    }
    return longest;
};

console.log(lengthOfLongestSubstringKDistinct('a', 1)); // 1
console.log(lengthOfLongestSubstringKDistinct('eceba', 2)); // => 3
console.log(lengthOfLongestSubstringKDistinct('bcaa', 2)); // => 3