/**
 * Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.
 * This is case sensitive, for example "Aa" is not considered a palindrome here.
 * Note:
 * Assume the length of given string will not exceed 1,010.
 */

function longestPalindrome(s) {
    const set = new Set();
    let counter = 0;
    for (const str of s) {
        if (set.has(str)) {
            set.delete(str);
            counter += 2;
        } else {
            set.add(str);
        }
    }
    if (set.size > 0) counter += 1;
    return counter;
}
