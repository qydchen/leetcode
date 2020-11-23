// Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

// Example 1:
// Input: "aba"
// Output: True
// Example 2:
// Input: "abca"
// Output: True
// Explanation: You could delete the character 'c'.

const validPalindromeII = (s) => {
    let l = 0,
        r = s.length - 1;
    while (l <= r) {
        if (s[l] !== s[r]) {
            return isPalindrome(s, l + 1, r) || isPalindrome(s, l, r - 1);
        }
        l++;
        r--;
    }
    return true;
};

const isPalindrome = (s, l, r) => {
    while (l <= r) {
        if (s[l] !== s[r]) return false;
        l++;
        r--;
    }
    return true;
};

console.log(validPalindromeII("abca")); // true
console.log(validPalindromeII("abc")); // false
console.log(validPalindromeII("aba")); // true
console.log(validPalindromeII("deeeee")); // true
